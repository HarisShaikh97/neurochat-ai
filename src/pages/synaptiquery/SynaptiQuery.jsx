import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Auth } from "aws-amplify"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { PlusIcon } from "@heroicons/react/24/solid"
import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import StarredChatItem from "../../components/starredchatitem/StarredChatItem"
import UnStarredChatItem from "../../components/unstarredchatitem/UnStarredChatItem"
import ChatMessage from "../../components/chatmessage/ChatMessage"

function SynaptiQuery() {

    const { state, dispatch } = useContext(MyContext)

    const navigate = useNavigate()

    const [agreed, setAgreed] = useState(false)
    const [showStarredChats, setShowStarredChats] = useState(true)
    const [showAllChats, setShowAllChats] = useState(true)
    const [selectedChat, setSelectedChat] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [query, setQuery] = useState('')
    const [chats, setChats] = useState([])
    const [editSelectedChatTitle, setEditSelectedChatTitle] = useState(false)
    const [selectedChatUpdatedTitle, setSelectedChatUpdatedTitle] = useState('')
    
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    useEffect(() => {
        if(state?.user_id?.length > 0) {
            axios.get(`${apiBaseUrl}/chat/history/${state?.user_id}?model_type=1`).then((res) => {
                console.log(res)
                if(res?.data?.message || res?.data?.status_code === 404) {
                    console.log(res?.data)
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
                // console.log(user.pool.clientId)
                dispatch({
                    type: 'SET_USER_ID',
                    payload: user?.pool?.clientId
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
                console.log(res)
                setSelectedChat(res?.data)
            }).catch((error) => {
                console.error('Error:', error)
            })
        }
    }

    const refreshAllChats = async () => {
        if(state?.user_id?.length > 0) {
            await axios.get(`${apiBaseUrl}/chat/history/${state?.user_id}?model_type=1`).then((res) => {
                console.log(res)
                if(res?.data?.message || res?.data?.status_code === 404) {
                    console.log(res?.data)
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

        setQuery('')

        const formData = {
            user_id: state?.user_id,
            chat_id: selectedChat ? selectedChat?.chat_id : '', 
            model_type: 1, 
            user_query: query
        }

        await axios.post(`${apiBaseUrl}/chat`, formData).then((res) => {
            console.log(res)
            if(res?.status === 200){
                if(selectedChat) {
                    refreshChat()
                }
                else {
                    axios.get(`${apiBaseUrl}/chat/${res?.data?.chat_id}`).then((response) => {
                        console.log(response)
                        setSelectedChat(response?.data)
                    }).catch((error) => {
                        console.error('Error:', error)
                    })
                }
                refreshAllChats()
            }
        }).catch((error) => {
            console.error('Error:', error)
        })
    }

    const updateSelectedChatTitle = async (e) => {
        e.preventDefault()

        setEditSelectedChatTitle(false)

        const formData = {
            title: selectedChatUpdatedTitle
        }

        await axios.put(`${apiBaseUrl}/chat/title/${selectedChat?.chat_id}`, formData).then((res) => {
            console.log(res)
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

    console.log(chats);

    return (
        <Layout>
            <div className="h-10 pl-10">
                {agreed ? (
                    <div className="flex flex-row justify-between items-center h-full pl-96 pr-10">
                        {selectedChat ? (
                            <>
                                {editSelectedChatTitle ? (
                                    <div className="flex flex-row items-center justify-between w-80">
                                        <div className="flex flex-row items-center gap-5">
                                            {selectedChat?.is_starred ? (
                                                <button onClick={async () => {
                                                    await axios.put(`${apiBaseUrl}/chat/starred/${selectedChat?.chat_id}`).then((res) => {
                                                        console.log(res)
                                                        if(res?.status === 200) {
                                                            refreshChat()
                                                            refreshAllChats()
                                                        }
                                                    }).catch((error) => {
                                                        console.error('Error:', error)
                                                    })
                                                }}>
                                                    <img alt="starred" src="/src/assets/icons/star-fill.png" style={{height: '20px'}} />
                                                </button>
                                            ) : (
                                                <button onClick={async () => {
                                                    await axios.put(`${apiBaseUrl}/chat/starred/${selectedChat?.chat_id}`).then((res) => {
                                                        console.log(res)
                                                        if(res?.status === 200) {
                                                            refreshChat()
                                                            refreshAllChats()
                                                        }
                                                    }).catch((error) => {
                                                        console.error('Error:', error)
                                                    })
                                                }}>
                                                    <img alt="unstarred" src="/src/assets/icons/star.png" style={{height: '20px'}} />
                                                </button>
                                            )}
                                            <input type="text" value={selectedChatUpdatedTitle} onChange={(e) => {setSelectedChatUpdatedTitle(e.target.value)}} placeholder="Write Title..." className="w-52" style={{outline: 'none', background: 'transparent'}} />
                                        </div>
                                        <button onClick={updateSelectedChatTitle}>
                                            <img alt="check" src="/src/assets/icons/check.png" className="px-3" style={{height: '20px'}} />
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
                                                        console.log(res)
                                                        if(res?.status === 200) {
                                                            refreshChat()
                                                            refreshAllChats()
                                                        }
                                                    }).catch((error) => {
                                                        console.error('Error:', error)
                                                    })
                                                }}>
                                                    <img alt="starred" src="/src/assets/icons/star-fill.png" style={{height: '20px'}} />
                                                </button>
                                            ) : (
                                                <button onClick={async () => {
                                                    await axios.put(`${apiBaseUrl}/chat/starred/${selectedChat?.chat_id}`).then((res) => {
                                                        console.log(res)
                                                        if(res?.status === 200) {
                                                            refreshChat()
                                                            refreshAllChats()
                                                        }
                                                    }).catch((error) => {
                                                        console.error('Error:', error)
                                                    })
                                                }}>
                                                    <img alt="unstarred" src="/src/assets/icons/star.png" style={{height: '20px'}} />
                                                </button>
                                            )}
                                            <div className="w-52 truncate">{selectedChat?.chat_title}</div>
                                        </div>
                                        <button onClick={() => {setEditSelectedChatTitle(true)}}>
                                            <img alt="edit" src="/src/assets/icons/edit-black.png" className="px-3" style={{height: '20px'}} />
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div />
                        )}
                        <div className="flex flex-row items-center gap-5 h-full">
                            <div className="rounded-lg bg-bgblue text-white py-1 px-3">EN</div>
                            <div className="rounded-full h-7 w-7 flex items-center justify-center border-2 border-black font-semibold">i</div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row items-center gap-5 h-full">
                        <div className="rounded-lg bg-bgblue text-white py-1 px-3">EN</div>
                        <div className="rounded-full h-7 w-7 flex items-center justify-center border-2 border-black font-semibold">i</div>
                    </div>
                )}
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <div className="w-96 flex flex-col gap-10 p-5">
                    <div className="w-full h-12 px-5 flex flex-row gap-5 items-center rounded-full border border-gray-300">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                        <input type="text" placeholder="Find previous chats." style={{outline: 'none', width: '100%'}} />
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
                                        {typeof chats === 'object' && chats?.filter(checkStarred)?.map((chat, key) => {
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
                                        {typeof chats === 'object' && chats?.filter(checkUnStarred)?.map((chat, key) => {
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
                                    <div className="flex-1 flex flex-col">
                                        <div>Translate research to multiple languages:</div>
                                        <div className="font-semibold">Urdu, Spanish, and Arabic</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="h-[80vh] pt-10 px-10 flex-1">
                    {agreed ? (
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col gap-10 h-full overflow-y-auto">
                                {selectedChat?.chat?.map((thread, key) => {
                                    return (
                                        <ChatMessage thread={thread} modelType={'synaptiquery'} refreshAllChats={refreshAllChats} refreshChat={refreshChat} selectedChat={selectedChat} setSelectedChat={setSelectedChat} key={key} />
                                    )
                                })}
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-row gap-5 items-end">
                                <div className="flex-1 rounded-full h-14 bg-gray-100 flex items-center px-5">
                                    <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Send message" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                                <div className="flex flex-col items-center gap-2 pb-1">
                                    <div className="text-bgblue text-xs border border-bgblue rounded-full h-5 w-10 flex items-center justify-center">5/20</div>
                                    <button type="submit" className="bg-bgblue rounded-full h-12 w-12 flex items-center justify-center pr-1 pt-1">
                                        <img alt="send" src="/src/assets/icons/send.png" style={{height: '25px'}} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-between">
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
        </Layout>
    )
}

export default SynaptiQuery