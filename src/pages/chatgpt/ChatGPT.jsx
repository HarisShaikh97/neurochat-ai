import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { API, graphqlOperation } from "aws-amplify"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { updateUserSubscription } from "../../graphql/mutations"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import StarredChatItem from "../../components/starredchatitem/StarredChatItem"
import UnStarredChatItem from "../../components/unstarredchatitem/UnStarredChatItem"
import ChatMessage from "../../components/chatmessage/ChatMessage"
import WaitingMessage from "../../components/waitingmessage/WaitingMessage"
import ErrorMessage from "../../components/errormessage/ErrorMessage"
import TranslationPopup from "../../components/translationpopup/TranslationPopup"
import DeleteMessagePopup from "../../components/deletemessagepopup/DeleteMessagePopup"
import DeleteChatPopup from "../../components/deletechatpopup/DeleteChatPopup"
import BlackCircularLoader from "../../components/blackcircularloader/BlackCircularLoader"
import BlueCircularLoader from "../../components/bluecircularloader/BlueCircularLoader"
import starred from "../../assets/icons/star-fill.png"
import unstarred from "../../assets/icons/star.png"
import check from "../../assets/icons/check.png"
import edit from "../../assets/icons/edit-black.png"
import sendMessage from "../../assets/icons/send.png"
import plus from "../../assets/icons/plus.png"

function ChatGPT() {

    const { state, dispatch } = useContext(MyContext)

    const [showStarredChats, setShowStarredChats] = useState(true)
    const [showAllChats, setShowAllChats] = useState(true)
    const [selectedChat, setSelectedChat] = useState(null)
    const [query, setQuery] = useState('')
    const [lastQuery, setLastQuery] = useState('')
    const [chats, setChats] = useState([])
    const [editSelectedChatTitle, setEditSelectedChatTitle] = useState(false)
    const [selectedChatUpdatedTitle, setSelectedChatUpdatedTitle] = useState('')
    const [showTranslationPopup, setShowTranslationPopup] = useState(false)
    const [showDeleteMessagePopup, setShowDeleteMessagePopup] = useState(false)
    const [showDeleteChatPopup, setShowDeleteChatPopup] = useState(false)
    const [showWaitingMessage, setShowWaitingMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [translatedText, setTranslatedText] = useState('')
    const [search, setSearch] = useState('')
    const [currentThread, setCurrentThread] = useState()
    const [chatToDelete, setChatToDelete] = useState()
    const [titleLoading, setTitleLoading] = useState(false)
    const [feedbackLoading, setFeedbackLoading] = useState(false)
    
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    const updateSubscription = async () => {

        const currentDate = new Date()

        const subscriptionData = {
            id: state?.current_package?.id,
            email: state?.current_package?.email,
            package: state?.current_package?.package,
            synaptiQueryRemaining: state?.current_package?.synaptiQueryRemaining,
            synaptiNoteRemaining: state?.current_package?.synaptiNoteRemaining,
            chatGptRemaining: state?.current_package?.chatGptRemaining - 1,
            claudeRemaining: state?.current_package?.claudeRemaining,
            palmRemaining: state?.current_package?.palmRemaining,
            falconRemaining: state?.current_package?.falconRemaining,
            lastRenewalDate: currentDate
        }

        try {
            const updatedUserSubscription = await API.graphql(graphqlOperation(updateUserSubscription, { input: subscriptionData}))
            // console.log(updatedUserSubscription)
            if(updatedUserSubscription?.data?.updateUserSubscription) {
                dispatch({
                    type: 'SET_CURRENT_PACKAGE',
                    payload: updatedUserSubscription?.data?.updateUserSubscription
                })
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    useEffect(() => {
        if(state?.user_id) {
            axios.get(`${apiBaseUrl}/chat/history/${state?.user_id}?model_type=0`).then((res) => {
                // console.log(res)
                if(res?.data?.message || res?.data?.status_code === 404) {
                    // console.log(res?.data)
                    setChats([])
                }
                else {
                    setChats(res?.data)
                }
            }).catch((error) => {
                console.error('Error:', error)
            })
        }
    }, [apiBaseUrl, state])

    // console.log(selectedChat, chats, editSelectedChatTitle)


    const refreshChat = async () => {
        if(selectedChat){
            await axios.get(`${apiBaseUrl}/chat/${selectedChat?.chat_id}`).then((res) => {
                // console.log(res)
                setSelectedChat(res?.data)
                setShowWaitingMessage(false)
                setShowErrorMessage(false)
                setFeedbackLoading(false)
            }).catch((error) => {
                console.error('Error:', error)
            })
        }
    }

    const refreshAllChats = async () => {
        if(state?.user_id) {
            await axios.get(`${apiBaseUrl}/chat/history/${state?.user_id}?model_type=0`).then((res) => {
                console.log(res)
                if(res?.data?.message || res?.data?.status_code === 404) {
                    // console.log(res?.data)
                    setChats([])
                }
                else {
                    setChats(res?.data)
                }
            }).catch((error) => {
                console.error('Error:', error)
                setChats([])
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLastQuery(query)
        setQuery('')
        setShowWaitingMessage(true)
        setShowErrorMessage(false)

        const formData = {
            user_id: state?.user_id,
            chat_id: selectedChat ? selectedChat?.chat_id : '', 
            model_type: 0, 
            user_query: query
        }

        // console.log(`${apiBaseUrl}/chat/`)

        await axios.post(`${apiBaseUrl}/chat/`, formData).then((res) => {
            // console.log(res)
            if(res?.status === 200){
                if(selectedChat) {
                    refreshChat()
                }
                else {
                    axios.get(`${apiBaseUrl}/chat/${res?.data?.chat_id}`).then((response) => {
                        // console.log(response)
                        setShowWaitingMessage(false)
                        setSelectedChat(response?.data)
                    }).catch((error) => {
                        console.error('Error:', error)
                    })
                }
                refreshAllChats()
                updateSubscription()
            }
            else {
                setShowErrorMessage(true)
                setShowWaitingMessage(false)
            }
        }).catch((error) => {
            console.error('Error:', error)
            setShowErrorMessage(true)
            setShowWaitingMessage(false)
        })
    }

    const regenerateResponse = async (e) => {
        e.preventDefault()

        setShowWaitingMessage(true)
        setShowErrorMessage(false)

        const formData = {
            user_id: state?.user_id,
            chat_id: selectedChat ? selectedChat?.chat_id : '', 
            model_type: 0, 
            user_query: lastQuery
        }

        // console.log(`${apiBaseUrl}/chat/`)

        await axios.post(`${apiBaseUrl}/chat/`, formData).then((res) => {
            // console.log(res)
            if(res?.status === 200){
                if(selectedChat) {
                    refreshChat()
                }
                else {
                    axios.get(`${apiBaseUrl}/chat/${res?.data?.chat_id}`).then((response) => {
                        // console.log(response)
                        setShowWaitingMessage(false)
                        setSelectedChat(response?.data)
                    }).catch((error) => {
                        console.error('Error:', error)
                    })
                }
                refreshAllChats()
                updateSubscription()
            }
            else {
                setShowErrorMessage(true)
                setShowWaitingMessage(false)
            }
        }).catch((error) => {
            console.error('Error:', error)
            setShowErrorMessage(true)
            setShowWaitingMessage(false)
        })
    }

    const updateSelectedChatTitle = async (e) => {
        e.preventDefault()

        setTitleLoading(true)

        setEditSelectedChatTitle(false)

        const formData = {
            title: selectedChatUpdatedTitle
        }

        await axios.put(`${apiBaseUrl}/chat/title/${selectedChat?.chat_id}`, formData).then((res) => {
            // console.log(res)
            if(res?.status === 200) {
                refreshChat()
                refreshAllChats()
                setSelectedChatUpdatedTitle('')
            }
            setTitleLoading(false)
        }).catch((error) => {
            console.error('Error:', error)
            setTitleLoading(false)
        })
    }

    function checkStarred(chat) {
        return chat?.is_starred === true
    }

    function checkUnStarred(chat) {
        return chat?.is_starred === false
    }

    function checkSearch(chat) {
        return chat?.chat_title?.toUpperCase()?.includes(search?.toUpperCase())
    }

    // console.log(chats)

    return (
        <Layout>
            {showDeleteMessagePopup && <DeleteMessagePopup setShowDeleteMessagePopup={setShowDeleteMessagePopup} selectedChat={selectedChat} setSelectedChat={setSelectedChat} refreshAllChats={refreshAllChats} refreshChat={refreshChat} currentThread={currentThread} />}
            {showDeleteChatPopup && <DeleteChatPopup setShowDeleteChatPopup={setShowDeleteChatPopup} chatToDelete={chatToDelete} refreshAllChats={refreshAllChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} setShowTranslationPopup={setShowTranslationPopup} />}
            <div className="h-10 pl-10">
                {state?.chatgpt_agreed && (
                    <div className="flex flex-row justify-between items-center h-full pl-96 pr-10">
                        {selectedChat ? (
                            <>
                                {editSelectedChatTitle ? (
                                    <div className="flex flex-row items-center justify-between w-80">
                                        <div className="flex flex-row items-center gap-5">
                                            {feedbackLoading ? (
                                                <BlackCircularLoader height="20" width="20" />
                                            ) : (selectedChat?.is_starred ? (
                                                    <button onClick={async () => {
                                                        setFeedbackLoading(true)
                                                        await axios.put(`${apiBaseUrl}/chat/starred/${selectedChat?.chat_id}`).then((res) => {
                                                            // console.log(res)
                                                            if(res?.status === 200) {
                                                                refreshChat()
                                                                refreshAllChats()
                                                            }
                                                        }).catch((error) => {
                                                            console.error('Error:', error)
                                                        })
                                                    }}>
                                                        <img alt="starred" src={starred} style={{height: '20px'}} />
                                                    </button>
                                                ) : (
                                                    <button onClick={async () => {
                                                        setFeedbackLoading(true)
                                                        await axios.put(`${apiBaseUrl}/chat/starred/${selectedChat?.chat_id}`).then((res) => {
                                                            // console.log(res)
                                                            if(res?.status === 200) {
                                                                refreshChat()
                                                                refreshAllChats()
                                                            }
                                                        }).catch((error) => {
                                                            console.error('Error:', error)
                                                        })
                                                    }}>
                                                        <img alt="unstarred" src={unstarred} style={{height: '20px'}} />
                                                    </button>
                                            ))}
                                            <input type="text" value={selectedChatUpdatedTitle} onChange={(e) => {setSelectedChatUpdatedTitle(e.target.value)}} placeholder="Write Title..." className="w-52" style={{outline: 'none', background: 'transparent'}} />
                                        </div>
                                        <button onClick={updateSelectedChatTitle}>
                                            <img alt="check" src={check} className="px-3" style={{height: '20px'}} />
                                        </button>
                                        <button onClick={() => {setEditSelectedChatTitle(false)}}>
                                            <XMarkIcon className="h-5 w-5 text-bgblue" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-row items-center justify-between w-80">
                                        <div className="flex flex-row items-center gap-5">
                                        {feedbackLoading ? (
                                                <BlackCircularLoader height="20" width="20" />
                                            ) : (selectedChat?.is_starred ? (
                                                    <button onClick={async () => {
                                                        setFeedbackLoading(true)
                                                        await axios.put(`${apiBaseUrl}/chat/starred/${selectedChat?.chat_id}`).then((res) => {
                                                            // console.log(res)
                                                            if(res?.status === 200) {
                                                                refreshChat()
                                                                refreshAllChats()
                                                            }
                                                        }).catch((error) => {
                                                            console.error('Error:', error)
                                                        })
                                                    }}>
                                                        <img alt="starred" src={starred} style={{height: '20px'}} />
                                                    </button>
                                                ) : (
                                                    <button onClick={async () => {
                                                        setFeedbackLoading(true)
                                                        await axios.put(`${apiBaseUrl}/chat/starred/${selectedChat?.chat_id}`).then((res) => {
                                                            // console.log(res)
                                                            if(res?.status === 200) {
                                                                refreshChat()
                                                                refreshAllChats()
                                                            }
                                                        }).catch((error) => {
                                                            console.error('Error:', error)
                                                        })
                                                    }}>
                                                        <img alt="unstarred" src={unstarred} style={{height: '20px'}} />
                                                    </button>
                                            ))}
                                            <div className="w-60 truncate font-semibold" style={{fontSize: '15px'}}>{selectedChat?.chat_title}</div>
                                        </div>
                                        {titleLoading ? (
                                            <BlueCircularLoader height="20" width="20" />
                                        ) : (
                                            <button onClick={() => {setEditSelectedChatTitle(true)}}>
                                                <img alt="edit" src={edit} className="px-3" style={{height: '18px'}} />
                                            </button>
                                        )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div />
                        )}
                    </div>
                )}
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '2px', width: '100%'}} />
            <div className="h-full flex flex-row">
                {state?.chatgpt_agreed ? (
                    <div className="w-96 flex flex-col gap-10 p-5">
                        <div className="px-5 flex flex-row gap-5 items-center rounded-full border border-gray-300" style={{height: '42px', width: '343px'}}>
                            <MagnifyingGlassIcon className="text-gray-500" style={{height: '12px', width: '12px'}} />
                            <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Find previous chats." style={{outline: 'none', width: '100%', fontSize: '12px'}} />
                        </div>
                        <div className="flex flex-col h-[70vh] justify-between" style={{paddingBottom: '7px'}}>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row items-center gap-5">
                                    {showStarredChats ? (
                                        <button onClick={() => {setShowStarredChats(false)}}>
                                            <ChevronUpIcon className="text-black" style={{height: '24px', width: '24px'}} />
                                        </button>
                                    ) : (
                                        <button onClick={() => {setShowStarredChats(true)}}>
                                            <ChevronDownIcon className="text-black" style={{height: '24px', width: '24px'}} />
                                        </button>
                                    )}
                                    <div className="font-semibold" style={{fontSize: '15px'}}>Starred Chats</div>
                                </div>
                                {showStarredChats && (
                                    (chats?.filter(checkStarred)?.filter(checkSearch)?.length > 0 ? (
                                        <div className="flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl scrollbar-thumb-gray-500 scrollbar-track-gray-200" style={{maxHeight: '12vh'}}>
                                            {chats?.filter(checkStarred)?.filter(checkSearch)?.map((chat, key) => {
                                                return (
                                                    <StarredChatItem chat={chat} refreshAllChats={refreshAllChats} refreshChat={refreshChat} setSelectedChat={setSelectedChat} setShowDeleteChatPopup={setShowDeleteChatPopup} setChatToDelete={setChatToDelete} setShowTranslationPopup={setShowTranslationPopup} key={key} />
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        <div className="w-full text-center text-gray-500" style={{fontWeight: 'bold'}}>No Chats to show!</div>
                                    ))
                                )}
                                <div className="flex flex-row items-center gap-5">
                                    {showAllChats ? (
                                        <button onClick={() => {setShowAllChats(false)}}>
                                            <ChevronUpIcon className="text-black" style={{height: '24px', width: '24px'}} />
                                        </button>
                                    ) : (
                                        <button onClick={() => {setShowAllChats(true)}}>
                                            <ChevronDownIcon className="text-black" style={{height: '24px', width: '24px'}} />
                                        </button>
                                    )}
                                    <div className="font-semibold" style={{fontSize: '15px'}}>All Chats</div>
                                </div>
                                {showAllChats && (
                                    (chats?.filter(checkUnStarred)?.filter(checkSearch)?.length > 0 ? (
                                        <div className="flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl scrollbar-thumb-gray-500 scrollbar-track-gray-200" style={{maxHeight: '38vh'}}>
                                            {chats?.filter(checkUnStarred)?.filter(checkSearch)?.map((chat, key) => {
                                                return (
                                                    <UnStarredChatItem chat={chat} refreshAllChats={refreshAllChats} refreshChat={refreshChat} setSelectedChat={setSelectedChat} setShowDeleteChatPopup={setShowDeleteChatPopup} setChatToDelete={setChatToDelete} setShowTranslationPopup={setShowTranslationPopup} key={key} />
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        <div className="w-full text-center text-gray-500" style={{fontWeight: 'bold'}}>No Chats to show!</div>
                                    ))
                                )}
                            </div>
                            <button onClick={() => {setSelectedChat(null)}} className="rounded-full bg-bgblue text-white flex flex-row gap-5 justify-center items-center" style={{height: '56px', width: '340px', fontSize: '16px', fontWeight: 'bold'}}>
                                <img alt="add" src={plus} style={{height: '19px', width: '19px'}} />
                                <div>New Chat</div>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="w-96 flex flex-col gap-10 p-5">
                        <div className="flex flex-col gap-5">
                            <div style={{fontSize: '22px', fontWeight: 'bold'}}>Top Use cases for ChatGPT</div>
                            <div className="rounded-3xl text-gray-500 bg-bgblue bg-opacity-5 px-5 flex flex-col gap-5 py-10" style={{width: '343px', fontSize: '15px'}}>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Create professional articles, social media posts, and emails</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Improve existing written content</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Seamlessly translate text between different languages</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Get assistance with homework and programming</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Explore and learn about various topics</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Unleash your creativity and compose poems or songs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="bg-gray-100" style={{height: '100%', width: '2px'}} />
                <div className="flex-1 relative">
                    {showTranslationPopup && (<TranslationPopup setShowTranslationPopup={setShowTranslationPopup} translatedText={translatedText} setTranslatedText={setTranslatedText} modelType="chatgpt" />)}
                    <div className="h-[80vh] pt-10 w-full">
                        {state?.chatgpt_agreed ? (
                            <div className="flex flex-col gap-5 h-full">
                                <div className="flex flex-col gap-10 h-full overflow-y-auto px-10 pb-10 scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                                    {selectedChat?.chat?.map((thread, key) => {
                                        return (
                                            <ChatMessage thread={thread} modelType='chatgpt' refreshChat={refreshChat} selectedChat={selectedChat} setShowTranslationPopup={setShowTranslationPopup} setTranslatedText={setTranslatedText} setShowDeleteMessagePopup={setShowDeleteMessagePopup} setCurrentThread={setCurrentThread} key={key} />
                                        )
                                    })}
                                    {showWaitingMessage && <WaitingMessage query={lastQuery} modelType="chatgpt" />}
                                    {showErrorMessage && <ErrorMessage query={lastQuery} modelType="chatgpt" regenerateResponse={regenerateResponse} />}
                                </div>
                                {state?.current_package?.chatGptRemaining > 0 ? (
                                    <form onSubmit={handleSubmit} className="flex flex-row gap-5 items-end px-10">
                                        <div className="flex-1 rounded-full bg-gray-100 flex items-center px-5" style={{height: '59px'}}>
                                            <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Send message" style={{outline: 'none', width: '100%', background: 'transparent', fontSize: '14px'}} />
                                        </div>
                                        <div className="flex flex-col items-center gap-2 pb-1">
                                            {state?.current_package?.package === 'BASIC' && <div className="font-black border border-bgblue rounded-full flex items-center justify-center" style={{fontSize: '10px', height: '18px', width: '37px'}}>{state?.current_package?.chatGptRemaining}/5</div>}
                                            <button type="submit" className="bg-bgblue rounded-full flex items-center justify-center pr-1 pt-1" style={{height: '51px', width: '51px'}}>
                                                <img alt="send" src={sendMessage} style={{height: '25px'}} />
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="border border-bgblue text-bgblue text-sm rounded-xl mx-10 p-3 bg-bgblue bg-opacity-10">Apologies for the inconvenience. Credit renewal occurs weekly, but you can access limitless possibilities instantly by upgrading to our premium plan. <Link to='/settings/pricingplan' className="font-semibold">Upgrade now.</Link></div>
                                )}
                            </div>
                        ) : (
                            <div className="h-full flex flex-col justify-between px-10">
                                <div className="flex flex-col gap-10">
                                    <div style={{fontSize: '22px', fontWeight: 'bold'}}>About ChatGPT</div>
                                    <div className="text-gray-500" style={{fontSize: '20px'}}>ChatGPT is an interactive chat-based interface for querying neuroscientific literature from PubMed. Users can query using keywords, phrases or questions in natural language. ChatGPT provides relevant article abstracts and other information. It simplifies and expedites the literature search process, allowing researchers to focus on their work.</div>
                                </div>
                                <div className="flex justify-end w-full">
                                    <button onClick={() => {dispatch({ type: 'SET_CHATGPT_AGREED', payload: true })}} className="bg-bgblue text-white rounded-3xl" style={{height: '56px', width: '343px', fontSize: '16px', fontWeight: 'bold'}}>I Understand</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ChatGPT