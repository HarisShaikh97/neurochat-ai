import { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { XMarkIcon } from "@heroicons/react/24/solid"


function StarredChatItem({chat, refreshAllChats, refreshChat, setSelectedChat, selectedChat}) {

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    const [editChatTitle, setEditChatTitle] = useState(false)
    const [updatedChatTitle, setUpdatedChatTitle] = useState('')

    const updateChatTitle = async (e) => {
        e.preventDefault()

        setEditChatTitle(false)

        const formData = {
            title: updatedChatTitle
        }

        await axios.put(`${apiBaseUrl}/chat/title/${chat?.chat_id}`, formData).then((res) => {
            // console.log(res)
            if(res?.status === 200) {
                refreshChat()
                refreshAllChats()
                setUpdatedChatTitle('')
            }
        }).catch((error) => {
            console.error('Error:', error)
        })
    }

    const handleDelete = async () => {

        if(chat?.chat_id === selectedChat?.chat_id) {
            setSelectedChat(null)
        }

        await axios.delete(`${apiBaseUrl}/chat/${chat?.chat_id}`).then((res) => {
            // console.log(res)
            if(res?.status === 200) {
                refreshAllChats()
            }
        }).catch((error) => {
            console.error('Error:', error)
        })
    }

    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-5">
                <button onClick={async () => {
                    await axios.put(`${apiBaseUrl}/chat/starred/${chat?.chat_id}`).then((res) => {
                        // console.log(res)
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
                {editChatTitle ? (
                    <input type="text" value={updatedChatTitle} onChange={(e) => {setUpdatedChatTitle(e.target.value)}} placeholder="Write Title..." className="w-52" style={{outline: 'none', background: 'transparent'}} />
                ) : (
                    <button 
                        onClick={() => {
                            axios.get(`${apiBaseUrl}/chat/${chat?.chat_id}`).then((res) => {
                                // console.log(res)
                                setSelectedChat(res?.data)
                            }).catch((error) => {
                                console.error('Error:', error)
                            })
                        }} 
                        className="w-52 truncate text-left h-5"
                    >
                        {chat?.chat_title}
                    </button>
                )}
            </div>
            {editChatTitle ? (
                <div className="flex flex-row items-center">
                    <button onClick={updateChatTitle}>
                        <img alt="check" src="/src/assets/icons/check.png" className="px-3" style={{height: '25px'}} />
                    </button>
                    <button className="px-2" onClick={() => {setEditChatTitle(false)}}>
                        <XMarkIcon className="h-6 w-6 text-bgblue" />
                    </button>
                </div>
            ) : (
                <div className="flex flex-row items-center">
                    <button onClick={() => {setEditChatTitle(true)}}>
                        <img alt="edit" src="/src/assets/icons/edit.png" className="px-3" style={{height: '20px'}} />
                    </button>
                    <button onClick={handleDelete}>
                        <img alt="delete" src="/src/assets/icons/delete.png" className="px-3" style={{height: '20px'}} />
                    </button>
                </div>
            )}
        </div>
    )
}

export default StarredChatItem

StarredChatItem.propTypes = {
    chat: PropTypes.object.isRequired,
    refreshAllChats: PropTypes.func.isRequired,
    refreshChat: PropTypes.func.isRequired,
    setSelectedChat: PropTypes.func.isRequired,
    selectedChat: PropTypes.object
}