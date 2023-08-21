import React, { useState ,useRef, useContext } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { MyContext } from "../../context/context"
import BlueCircularLoader from "../bluecircularloader/BlueCircularLoader"
import synaptiquery from "../../assets/icons/synaptiquery.svg"
import chatgpt from "../../assets/icons/chatgpt.svg"
import claudeai from "../../assets/icons/claudeai.svg"
import palm2 from "../../assets/icons/palm2.svg"
import falcon from "../../assets/icons/falcon.svg"
import languages from "../../assets/icons/languages.png"
import disliked from "../../assets/icons/dislike-white.png"
import dislike from "../../assets/icons/dislike.png"
import liked from "../../assets/icons/like-white.png"
import like from "../../assets/icons/like.png"
import deleteMessage from "../../assets/icons/delete.png"
import copy from "../../assets/icons/copy.png"
import copyWhite from "../../assets/icons/copy-white.png"

function ChatMessage({ thread, modelType, refreshChat, selectedChat, setShowTranslationPopup, setTranslatedText, setShowDeleteMessagePopup, setCurrentThread }) {

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    const pattern = /(_\[\d+\])/

    const { state } = useContext(MyContext)

    const [showLanguagePopup, setShowLanguagePopup] = useState(false)
    const [copied, setCopied] = useState(false)
    const [likeLoading, setLikeLoading] = useState(false)
    const [dislikeLoading, setDislikeLoading] = useState(false)

    const divRef = useRef(null)
    const buttonRef = useRef()

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(thread?.system?.text)
            // console.log('Text copied to clipboard:', thread?.system?.text)
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, [100])
        } catch (error) {
            console.error('Error copying text:', error)
        }
    }

    // console.log(thread)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-5 justify-end">
                <div className="flex flex-col pt-2 gap-3">
                    <div className="flex flex-row gap-3 items-center justify-end">
                        <div style={{fontSize: '14px', fontWeight: 'bold'}}>{state?.user_info?.firstName?.length > 0 && state?.user_info?.lastName?.length > 0 ? `${state?.user_info?.firstName} ${state?.user_info?.lastName}` : state?.user_info?.email}</div>
                        <div className="text-gray-500" style={{fontSize: '10px'}}>{thread?.date_time?.slice(14, 19)}</div>
                    </div>
                    <div style={{fontSize: '16px'}}>{thread?.user_query}</div>
                </div>
                <div>
                    {state?.user_info?.profilePicUrl?.length > 0 ? (
                        <img alt="profile-picture" src={state?.user_info?.profilePicUrl} className="rounded-full" style={{height: '40px', width: '40px'}} />
                    ) : (
                        <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '40px', width: '40px'}} />
                    )}
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    {modelType === 'synaptiquery' && <img alt={modelType} src={synaptiquery} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'chatgpt' && <img alt={modelType} src={chatgpt} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'claudeai' && <img alt={modelType} src={claudeai} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'palm2' && <img alt={modelType} src={palm2} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'falcon' && <img alt={modelType} src={falcon} style={{height: '40px', width: '40px'}} />}
                </div>
                <div className="flex-1 flex flex-col pt-2 gap-3">
                    <div className="flex flex-row items-center gap-5">
                        {modelType === 'synaptiquery' && <div className="font-semibold" style={{fontSize: '14px'}}>SynaptiQuery</div>}
                        {modelType === 'chatgpt' && <div className="font-semibold" style={{fontSize: '14px'}}>ChatGPT</div>}
                        {modelType === 'claudeai' && <div className="font-semibold" style={{fontSize: '14px'}}>Claude.AI</div>}
                        {modelType === 'palm2' && <div className="font-semibold" style={{fontSize: '14px'}}>PaLM2</div>}
                        {modelType === 'falcon' && <div className="font-semibold" style={{fontSize: '14px'}}>Falcon40B</div>}
                        <div className="text-gray-500" style={{fontSize: '10px'}}>{thread?.date_time?.slice(14, 19)}</div>
                    </div>
                    <div ref={divRef} style={{fontSize: '16px'}}>
                        {thread?.system?.text?.split(pattern)?.map((str, key) => {
                            return (
                                <React.Fragment key={key}><span className={key % 2 === 1 ? 'text-bgblue align-top' : ''} style={{fontSize: key % 2 === 1 ? '8px' : '16px'}}>{key % 2 === 1 ? str?.substring(1) : str}</span></React.Fragment>
                            )
                        })}
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-end pt-5">
                        <div className="relative">
                            <button ref={buttonRef} onClick={() => {setShowLanguagePopup(!showLanguagePopup)}} className="rounded-full flex items-center justify-center border border-bgblue" style={{height: '24px', width: '39px'}}>
                                <img alt="translate" src={languages} style={{height: '18px', width: '18px'}} />
                            </button>
                            {showLanguagePopup && (
                                <div
                                    className="origin-top-right absolute right-0 mt-2 w-60 p-5 flex flex-col gap-8 bg-white rounded-md shadow-2xl"
                                    style={{
                                        top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight + 8,
                                        left: buttonRef.current.offsetLeft,
                                    }}
                                >
                                    <div className="font-bold" style={{fontSize: '16px'}}>Select Language for Translation</div>
                                    <div className="flex flex-col gap-5">
                                        <button 
                                            onClick={async () => {

                                                setShowTranslationPopup(true)
                                                setShowLanguagePopup(false)
                                                const formData = {
                                                    chat_id: selectedChat?.chat_id, 
                                                    language: 1, 
                                                    thread_id: thread?.thread_id
                                                }
                                        
                                                await axios.post(`${apiBaseUrl}/chat/translate`, formData).then((res) => {
                                                    // console.log(res)
                                                    if(res?.status === 200){
                                                        setTranslatedText(res?.data?.translated_text)
                                                    }
                                                }).catch((error) => {
                                                    console.error('Error:', error)
                                                })
                                            }} 
                                            className="flex flex-row items-center gap-3 text-sm"
                                        >
                                            <div className="bg-bgblue text-white text-center rounded-md px-2" style={{fontSize: '16'}}>UR</div>
                                            <div style={{fontSize: '16'}}>Urdu</div>
                                        </button>
                                        <button 
                                            onClick={async () => {

                                                setShowTranslationPopup(true)
                                                setShowLanguagePopup(false)

                                                const formData = {
                                                    chat_id: selectedChat?.chat_id, 
                                                    language: 2, 
                                                    thread_id: thread?.thread_id
                                                }
                                        
                                                await axios.post(`${apiBaseUrl}/chat/translate`, formData).then((res) => {
                                                    // console.log(res)
                                                    if(res?.status === 200){
                                                        setTranslatedText(res?.data?.translated_text)
                                                    }
                                                }).catch((error) => {
                                                    console.error('Error:', error)
                                                })
                                            }} 
                                            className="flex flex-row items-center gap-3 text-sm"
                                        >
                                            <div className="bg-bgblue text-white text-center rounded-md px-2" style={{fontSize: '16'}}>ES</div>
                                            <div style={{fontSize: '16'}}>Spanish</div>
                                        </button>
                                        <button 
                                            onClick={async () => {

                                                setShowTranslationPopup(true)
                                                setShowLanguagePopup(false)

                                                const formData = {
                                                    chat_id: selectedChat?.chat_id, 
                                                    language: 3, 
                                                    thread_id: thread?.thread_id
                                                }
                                        
                                                await axios.post(`${apiBaseUrl}/chat/translate`, formData).then((res) => {
                                                    // console.log(res)
                                                    if(res?.status === 200){
                                                        setTranslatedText(res?.data?.translated_text)
                                                    }
                                                }).catch((error) => {
                                                    console.error('Error:', error)
                                                })
                                            }}
                                            className="flex flex-row items-center gap-3 text-sm"
                                        >
                                            <div className="bg-bgblue text-white text-center rounded-md px-2" style={{fontSize: '16'}}>AR</div>
                                            <div style={{fontSize: '16'}}>Arabic</div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {dislikeLoading ? (
                            <div className="rounded-full flex items-center justify-center border border-bgblue" style={{height: '24px', width: '39px'}}>
                                <BlueCircularLoader height="15px" width="15px" />
                            </div>
                        ) : (thread?.feedback_status === 0 ? (
                                <button 
                                    className="rounded-full flex items-center justify-center bg-bgblue"
                                    style={{height: '24px', width: '39px'}}
                                    onClick={async () => {
                                        setDislikeLoading(true)
                                        await axios.put(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=3`).then((res) => {
                                            // console.log(res)
                                            if(res?.status === 200) {
                                                refreshChat()
                                            }
                                            setDislikeLoading(false)
                                        }).catch((error) => {
                                            console.error('Error:', error)
                                            setDislikeLoading(false)
                                        })
                                    }}
                                >
                                    <img alt="disliked" src={disliked} style={{height: '18px', width: '18px'}} />
                                </button>
                            ) : (
                                <button 
                                    className="rounded-full flex items-center justify-center border border-bgblue"
                                    style={{height: '24px', width: '39px'}}
                                    onClick={async () => {
                                        setDislikeLoading(true)
                                        await axios.put(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=0`).then((res) => {
                                            // console.log(res)
                                            if(res?.status === 200) {
                                                refreshChat()
                                            }
                                            setDislikeLoading(false)
                                        }).catch((error) => {
                                            console.error('Error:', error)
                                            setDislikeLoading(false)
                                        })
                                    }}
                                >
                                    <img alt="dislike" src={dislike} style={{height: '18px', width: '18px'}} />
                                </button>
                        ))}
                        {likeLoading ? (
                            <div className="rounded-full flex items-center justify-center border border-bgblue" style={{height: '24px', width: '39px'}}>
                                <BlueCircularLoader height="15px" width="15px" />
                            </div>
                        ) : (thread?.feedback_status === 1 ? (
                                <button 
                                    className="rounded-full flex items-center justify-center bg-bgblue"
                                    style={{height: '24px', width: '39px'}}
                                    onClick={async () => {
                                        setLikeLoading(true)
                                        await axios.put(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=3`).then((res) => {
                                            // console.log(res)
                                            if(res?.status === 200) {
                                                refreshChat()
                                            }
                                            setLikeLoading(false)
                                        }).catch((error) => {
                                            console.error('Error:', error)
                                            setLikeLoading(false)
                                        })
                                    }}
                                >
                                    <img alt="liked" src={liked} style={{height: '18px', width: '18px'}} />
                                </button>
                            ) : (
                                <button 
                                    className="rounded-full flex items-center justify-center border border-bgblue"
                                    style={{height: '24px', width: '39px'}}
                                    onClick={async () => {
                                        setLikeLoading(true)
                                        await axios.put(`${apiBaseUrl}/message/feedback/${selectedChat?.chat_id}/${thread?.thread_id}?feedback_status=1`).then((res) => {
                                            // console.log(res)
                                            if(res?.status === 200) {
                                                refreshChat()
                                            }
                                            setLikeLoading(false)
                                        }).catch((error) => {
                                            console.error('Error:', error)
                                            setLikeLoading(false)
                                        })
                                    }}
                                >
                                    <img alt="like" src={like} style={{height: '18px', width: '18px'}} />
                                </button>
                        ))}
                        <button 
                            className="rounded-full flex items-center justify-center border border-bgblue"
                            style={{height: '24px', width: '39px'}}
                            onClick={async () => {
                                setShowDeleteMessagePopup(true)
                                setCurrentThread(thread)
                            }}
                        >
                            <img alt="delete" src={deleteMessage} style={{height: '18px', width: '18px'}} />
                        </button>
                        {copied ? (
                            <div className="rounded-full flex items-center justify-center bg-bgblue" style={{height: '24px', width: '39px'}}>
                                <img alt="copy" src={copyWhite} style={{height: '18px', width: '18px'}} />
                            </div>
                        ) : (
                            <button onClick={handleCopyClick} className="rounded-full flex items-center justify-center border border-bgblue" style={{height: '24px', width: '39px'}}>
                                <img alt="copy" src={copy} style={{height: '18px', width: '18px'}} />
                            </button>
                        )}
                    </div>
                    {thread?.system?.sources?.length > 0 && (<div style={{fontSize: '14px'}}>Learn more:</div>)}
                    <div className="flex flex-wrap gap-3">
                        {thread?.system?.sources?.map((source, key) => {
                            return (
                                <a href={source} target="_blank" rel="noopener noreferrer" key={key} className="rounded-full border border-gray-300 text-gray-500 font-medium h-7 w-52 flex flex-row gap-2 items-center px-3">
                                    <div className="bg-gray-500" style={{height: '16px', width: '17px'}} />
                                    <div>{key + 1}.</div>
                                    <div className="truncate w-40 font-semibold" style={{fontSize: '14px'}}>{thread?.system?.years[key]}, {thread?.system?.authors[key]}</div>
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
    refreshChat: PropTypes.func.isRequired,
    selectedChat: PropTypes.object,
    setShowTranslationPopup: PropTypes.func.isRequired,
    setTranslatedText: PropTypes.func.isRequired,
    setShowDeleteMessagePopup: PropTypes.func.isRequired,
    setCurrentThread: PropTypes.func.isRequired
}