import { useRef } from "react"
import PropTypes from "prop-types"
import axios from "axios"

function ChatMessage({ thread, modelType, refreshAllChats, refreshChat, selectedChat, setSelectedChat }) {

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    const divRef = useRef(null)

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(thread?.system?.text)
            console.log('Text copied to clipboard:', thread?.system?.text)
        } catch (error) {
            console.error('Error copying text:', error)
        }
    }

    console.log(thread, selectedChat)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-5 justify-end">
                <div className="flex flex-col pt-2 gap-3">
                    <div className="flex flex-row gap-3 items-center font-semibold">
                        <div>Haris Shaikh</div>
                        <div className="text-xs text-gray-500">{thread?.date_time?.slice(14, 19)}</div>
                    </div>
                    <div className="text-sm font-light">{thread?.user_query}</div>
                </div>
                <div>
                    <img alt="profile-picture" src="/src/assets/images/profile_picture.jpg" className="rounded-full" style={{height: '40px', width: '40px'}} />
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    <img alt={modelType} src={`/src/assets/icons/${modelType}.svg`} style={{height: '40px'}} />
                </div>
                <div className="flex-1 flex flex-col pt-2 gap-3">
                    <div className="flex flex-row items-center gap-5 font-semibold">
                        {modelType === 'synaptiquery' && (<div>SynaptiQuery</div>)}
                        {modelType === 'chatgpt' && <div>ChatGPT</div>}
                        {modelType === 'claudeai' && <div>Claude.AI</div>}
                        {modelType === 'palm2' && <div>PaLM2</div>}
                        {modelType === 'falcon' && <div>Falcon40B</div>}
                        <div className="text-xs text-gray-500">{thread?.date_time?.slice(14, 19)}</div>
                    </div>
                    <div ref={divRef} className="text-sm font-light">{thread?.system?.text}</div>
                    <div className="flex flex-row gap-3 items-center justify-end pt-5">
                        <button 
                            className="rounded-full h-7 w-12 flex items-center justify-center border border-bgblue"
                            onClick={async () => {

                                if(selectedChat?.chat?.length === 1) {
                                    setSelectedChat(null)
                                }

                                await axios.delete(`${apiBaseUrl}/message/${selectedChat?.chat_id}/${thread?.thread_id}`).then((res) => {
                                    console.log(res)
                                    if(res?.status === 200) {
                                        refreshAllChats()
                                        console.log('refresh')
                                        if(selectedChat?.chat?.length > 1){
                                            console.log('hit')
                                            refreshChat()
                                        }
                                    }
                                }).catch((error) => {
                                    console.error('Error:', error)
                                })
                            }}
                        >
                            <img alt="delete" src="/src/assets/icons/delete.png" style={{height: '20px'}} />
                        </button>
                        <div className="rounded-full h-7 w-12 flex items-center justify-center border border-bgblue">
                            <img alt="translate" src="/src/assets/icons/languages.png" style={{height: '20px'}} />
                        </div>
                        {thread?.feedback_status === 0 ? (
                            <button 
                                className="rounded-full h-7 w-12 flex items-center justify-center bg-bgblue"
                                onClick={async () => {
                                    await axios.delete(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=3`).then((res) => {
                                        console.log(res)
                                        if(res?.status === 200) {
                                            refreshAllChats()
                                            refreshChat()
                                        }
                                    }).catch((error) => {
                                        console.error('Error:', error)
                                    })
                                }}
                            >
                                <img alt="disliked" src="/src/assets/icons/dislike-white.png" style={{height: '20px'}} />
                            </button>
                        ) : (
                            <button 
                                className="rounded-full h-7 w-12 flex items-center justify-center border border-bgblue"
                                onClick={async () => {
                                    await axios.delete(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=0`).then((res) => {
                                        console.log(res)
                                        if(res?.status === 200) {
                                            refreshAllChats()
                                            refreshChat()
                                        }
                                    }).catch((error) => {
                                        console.error('Error:', error)
                                    })
                                }}
                            >
                                <img alt="dislike" src="/src/assets/icons/dislike.png" style={{height: '20px'}} />
                            </button>
                        )}
                        {thread?.feedback_status === 1 ? (
                            <button 
                                className="rounded-full h-7 w-12 flex items-center justify-center bg-bgblue"
                                onClick={async () => {
                                    await axios.delete(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=3`).then((res) => {
                                        console.log(res)
                                        if(res?.status === 200) {
                                            refreshAllChats()
                                            refreshChat()
                                        }
                                    }).catch((error) => {
                                        console.error('Error:', error)
                                    })
                                }}
                            >
                                <img alt="liked" src="/src/assets/icons/like-white.png" style={{height: '20px'}} />
                            </button>
                        ) : (
                            <button 
                                className="rounded-full h-7 w-12 flex items-center justify-center border border-bgblue"
                                onClick={async () => {
                                    await axios.delete(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=1`).then((res) => {
                                        console.log(res)
                                        if(res?.status === 200) {
                                            refreshAllChats()
                                            refreshChat()
                                        }
                                    }).catch((error) => {
                                        console.error('Error:', error)
                                    })
                                }}
                            >
                                <img alt="like" src="/src/assets/icons/like.png" style={{height: '20px'}} />
                            </button>
                        )}
                        <div className="rounded-full h-7 w-12 flex items-center justify-center border border-bgblue">
                            <img alt="share" src="/src/assets/icons/share.png" style={{height: '20px'}} />
                        </div>
                        <button onClick={handleCopyClick} className="rounded-full h-7 w-12 flex items-center justify-center border border-bgblue">
                            <img alt="copy" src="/src/assets/icons/copy.png" style={{height: '20px'}} />
                        </button>
                    </div>
                    {thread?.system?.sources?.length > 0 && (<div className="text-sm font-light">Learn more:</div>)}
                    <div className="flex flex-wrap gap-3">
                        {thread?.system?.sources?.map((source, key) => {
                            return (
                                <a href={source} target="_blank" rel="noopener noreferrer" key={key} className="rounded-full border border-gray-300 text-gray-500 font-medium h-7 w-52 flex flex-row gap-2 items-center px-3">
                                    <div className="bg-gray-500 h-4 w-4" />
                                    <div>{key + 1}.</div>
                                    <div className="truncate w-40">{thread?.system?.years[key]}, {thread?.system?.authors[key]}</div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessage

ChatMessage.propTypes = {
    thread: PropTypes.object.isRequired,
    modelType: PropTypes.string.isRequired,
    refreshAllChats: PropTypes.func.isRequired,
    refreshChat: PropTypes.func.isRequired,
    selectedChat: PropTypes.object,
    setSelectedChat: PropTypes.func.isRequired
}