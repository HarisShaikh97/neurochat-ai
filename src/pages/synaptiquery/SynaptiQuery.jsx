import { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { PlusIcon } from "@heroicons/react/24/solid"
import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { getUserSubscription } from "../../graphql/queries"
import { updateUserSubscription } from "../../graphql/mutations"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import StarredChatItem from "../../components/starredchatitem/StarredChatItem"
import UnStarredChatItem from "../../components/unstarredchatitem/UnStarredChatItem"
import ChatMessage from "../../components/chatmessage/ChatMessage"
import WaitingMessage from "../../components/waitingmessage/WaitingMessage"
import ErrorMessage from "../../components/errormessage/ErrorMessage"
import TranslationPopup from "../../components/translationpopup/TranslationPopup"
import starred from "../../assets/icons/star-fill.png"
import unstarred from "../../assets/icons/star.png"
import check from "../../assets/icons/check.png"
import edit from "../../assets/icons/edit-black.png"
import sendMessage from "../../assets/icons/send.png"

function SynaptiQuery() {

    const { state, dispatch } = useContext(MyContext)

    const navigate = useNavigate()

    const [agreed, setAgreed] = useState(false)
    const [showStarredChats, setShowStarredChats] = useState(true)
    const [showAllChats, setShowAllChats] = useState(true)
    const [selectedChat, setSelectedChat] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [query, setQuery] = useState('')
    const [lastQuery, setLastQuery] = useState('')
    const [chats, setChats] = useState([])
    const [editSelectedChatTitle, setEditSelectedChatTitle] = useState(false)
    const [selectedChatUpdatedTitle, setSelectedChatUpdatedTitle] = useState('')
    const [showTranslationPopup, setShowTranslationPopup] = useState(false)
    const [showWaitingMessage, setShowWaitingMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [translatedText, setTranslatedText] = useState('')
    const [currentSubscription, setCurrentSubscription] = useState()
    const [currentAuthenticatedUser, setCurrentAuthenticatedUser] = useState()
    const [search, setSearch] = useState('')
    
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    useEffect(() => {
        const fetchUserSubscription = async () => {
            try {
                const subscription = await API.graphql(graphqlOperation(getUserSubscription, { id: state?.user_id }))
                setCurrentSubscription(subscription?.data?.getUserSubscription)
                // console.log(state?.user_id, subscription)
            } 
            catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        if(state?.user_id?.length > 0){
            fetchUserSubscription()
        }
    }, [state])

    const updateSubscription = async () => {

        const currentDate = new Date()

        const subscriptionData = {
            id: state?.user_id,
            email: currentAuthenticatedUser?.attributes?.email,
            package: 'BASIC',
            synaptiQueryRemaining: currentSubscription?.synaptiQueryRemaining - 1,
            synaptiNoteRemaining: currentSubscription?.synaptiNoteRemaining,
            chatGptRemaining: currentSubscription?.chatGptRemaining,
            claudeRemaining: currentSubscription?.claudeRemaining,
            palmRemaining: currentSubscription?.palmRemaining,
            falconRemaining: currentSubscription?.falconRemaining,
            lastRenewalDate: currentDate
        }

        try {
            const updatedUserSubscription = await API.graphql(graphqlOperation(updateUserSubscription, { input: subscriptionData}))
            // console.log(updatedUserSubscription)
            setCurrentSubscription(updatedUserSubscription?.data?.updateUserSubscription)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    useEffect(() => {
        if(state?.user_id?.length > 0) {
            axios.get(`${apiBaseUrl}/chat/history/${state?.user_id}?model_type=1`).then((res) => {
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

    useEffect(() => {

        const checkUserSession = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                setIsAuthenticated(true)
                setCurrentAuthenticatedUser(user)
                // console.log(user.pool.clientId)
                dispatch({
                    type: 'SET_USER_ID',
                    payload: user?.attributes?.sub
                })
            } 
            catch (error) {
                setIsAuthenticated(false)
            }
        }

        checkUserSession()

    }, [dispatch])

    useEffect(() => {
        if(isAuthenticated === false) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    const refreshChat = async () => {
        if(selectedChat){
            await axios.get(`${apiBaseUrl}/chat/${selectedChat?.chat_id}`).then((res) => {
                // console.log(res)
                setSelectedChat(res?.data)
                setShowWaitingMessage(false)
            }).catch((error) => {
                console.error('Error:', error)
            })
        }
    }

    const refreshAllChats = async () => {
        if(state?.user_id?.length > 0) {
            await axios.get(`${apiBaseUrl}/chat/history/${state?.user_id}?model_type=1`).then((res) => {
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
            model_type: 1, 
            user_query: query
        }

        await axios.post(`${apiBaseUrl}/chat`, formData).then((res) => {
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
            }
        }).catch((error) => {
            console.error('Error:', error)
            setShowErrorMessage(true)
        })
    }

    const regenerateResponse = async (e) => {
        e.preventDefault()

        setShowWaitingMessage(true)
        setShowErrorMessage(false)

        const formData = {
            user_id: state?.user_id,
            chat_id: selectedChat ? selectedChat?.chat_id : '', 
            model_type: 1, 
            user_query: lastQuery
        }

        await axios.post(`${apiBaseUrl}/chat`, formData).then((res) => {
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
            }
        }).catch((error) => {
            console.error('Error:', error)
            setShowErrorMessage(true)
        })
    }

    const updateSelectedChatTitle = async (e) => {
        e.preventDefault()

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
        }).catch((error) => {
            console.error('Error:', error)
        })
    }

    function checkStarred(chat) {
        return chat?.is_starred === true
    }

    function checkUnStarred(chat) {
        return chat?.is_starred === false
    }

    function checkSearch(chat) {
        return chat?.chat_title?.includes(search)
    }

    // console.log(chats)

    return (
        <Layout>
            <div className="h-10 pl-10">
                {agreed && (
                    <div className="flex flex-row justify-between items-center h-full pl-96 pr-10">
                        {selectedChat ? (
                            <>
                                {editSelectedChatTitle ? (
                                    <div className="flex flex-row items-center justify-between w-80">
                                        <div className="flex flex-row items-center gap-5">
                                            {selectedChat?.is_starred ? (
                                                <button onClick={async () => {
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
                                            )}
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
                                            {selectedChat?.is_starred ? (
                                                <button onClick={async () => {
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
                                            )}
                                            <div className="w-52 truncate">{selectedChat?.chat_title}</div>
                                        </div>
                                        <button onClick={() => {setEditSelectedChatTitle(true)}}>
                                            <img alt="edit" src={edit} className="px-3" style={{height: '20px'}} />
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div />
                        )}
                    </div>
                )}
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <div className="w-96 flex flex-col gap-10 p-5">
                    <div className="w-full h-12 px-5 flex flex-row gap-5 items-center rounded-full border border-gray-300">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                        <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Find previous chats." style={{outline: 'none', width: '100%'}} />
                    </div>
                    {agreed ? (
                        <div className="flex flex-col h-[70vh] justify-between">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row items-center gap-5">
                                    {showStarredChats ? (
                                        <button onClick={() => {setShowStarredChats(false)}}>
                                            <ChevronUpIcon className="h-6 w-6 text-black" />
                                        </button>
                                    ) : (
                                        <button onClick={() => {setShowStarredChats(true)}}>
                                            <ChevronDownIcon className="h-6 w-6 text-black" />
                                        </button>
                                    )}
                                    <div className="text-lg font-semibold">Starred Chats</div>
                                </div>
                                {showStarredChats && (
                                    <div className="flex flex-col gap-3 max-h-24 overflow-y-auto">
                                        {chats?.filter(checkStarred)?.filter(checkSearch)?.map((chat, key) => {
                                            return (
                                                <StarredChatItem chat={chat} refreshAllChats={refreshAllChats} refreshChat={refreshChat} setSelectedChat={setSelectedChat} selectedChat={selectedChat} key={key} />
                                            )
                                        })}
                                    </div>
                                )}
                                <div className="flex flex-row items-center gap-5">
                                    {showAllChats ? (
                                        <button onClick={() => {setShowAllChats(false)}}>
                                            <ChevronUpIcon className="h-6 w-6 text-black" />
                                        </button>
                                    ) : (
                                        <button onClick={() => {setShowAllChats(true)}}>
                                            <ChevronDownIcon className="h-6 w-6 text-black" />
                                        </button>
                                    )}
                                    <div className="text-lg font-semibold">All Chats</div>
                                </div>
                                {showAllChats && (
                                    <div className="flex flex-col gap-3 max-h-44 overflow-y-auto">
                                        {chats?.filter(checkUnStarred)?.filter(checkSearch)?.map((chat, key) => {
                                            return (
                                                <UnStarredChatItem chat={chat} refreshAllChats={refreshAllChats} refreshChat={refreshChat} setSelectedChat={setSelectedChat} selectedChat={selectedChat} key={key} />
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                            <button onClick={() => {setSelectedChat(null)}} className="rounded-full bg-bgblue text-white text-xl font-semibold py-2 w-full flex flex-row gap-3 justify-center items-center">
                                <PlusIcon className="h-8 w-8 text-white" />
                                <div>New Chat</div>
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5">
                            <div className="text-lg font-semibold">Top Use cases for SynaptiQuery</div>
                            <div className="rounded-3xl text-gray-500 text-sm bg-bgblue bg-opacity-5 px-5 w-full flex flex-col gap-5 py-10">
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Stay updated with the latest research from Pubmed</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Access references to reliable sources.</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Ask follow-up questions based on your research</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Translate research to multiple languages: <span className="font-semibold">Urdu, Spanish, and Arabic</span></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="flex-1 relative">
                    {showTranslationPopup && (<TranslationPopup setShowTranslationPopup={setShowTranslationPopup} translatedText={translatedText} setTranslatedText={setTranslatedText} modelType="synaptiquery" />)}
                    <div className="h-[80vh] pt-10 w-full">
                        {agreed ? (
                            <div className="flex flex-col gap-5 h-full">
                                <div className="flex flex-col gap-10 h-full overflow-y-auto px-10 pb-10">
                                    {selectedChat?.chat?.map((thread, key) => {
                                        return (
                                            <ChatMessage thread={thread} modelType='synaptiquery' refreshAllChats={refreshAllChats} refreshChat={refreshChat} selectedChat={selectedChat} setSelectedChat={setSelectedChat} setShowTranslationPopup={setShowTranslationPopup} setTranslatedText={setTranslatedText} key={key} />
                                        )
                                    })}
                                    {showWaitingMessage && <WaitingMessage query={lastQuery} modelType="synaptiquery" />}
                                    {showErrorMessage && <ErrorMessage query={lastQuery} modelType="synaptiquery" regenerateResponse={regenerateResponse} />}
                                </div>
                                {currentSubscription?.synaptiQueryRemaining > 0 ? (
                                    <form onSubmit={handleSubmit} className="flex flex-row gap-5 items-end px-10">
                                        <div className="flex-1 rounded-full h-14 bg-gray-100 flex items-center px-5">
                                            <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Send message" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                        </div>
                                        <div className="flex flex-col items-center gap-2 pb-1">
                                            <div className="text-bgblue text-xs border border-bgblue rounded-full h-5 px-2 flex items-center justify-center">{currentSubscription?.synaptiQueryRemaining}/5</div>
                                            <button type="submit" className="bg-bgblue rounded-full h-12 w-12 flex items-center justify-center pr-1 pt-1">
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
                                    <div className="text-2xl font-semibold">About SynaptiQuery</div>
                                    <div className="text-lg text-gray-500">SynaptiQuery is an interactive chat-based interface for querying neuroscientific literature from PubMed. Users can query using keywords, phrases or questions in natural language. SynaptiQuery provides relevant article abstracts and other information. It simplifies and expedites the literature search process, allowing researchers to focus on their work.</div>
                                </div>
                                <div className="flex justify-end w-full">
                                    <button onClick={() => {setAgreed(true)}} className="bg-bgblue text-white font-semibold px-36 py-3 rounded-2xl">I Understand</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SynaptiQuery