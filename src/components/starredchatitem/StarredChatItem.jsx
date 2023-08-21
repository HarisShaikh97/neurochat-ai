import { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import BlackCircularLoader from "../blackcircularloader/BlackCircularLoader"
import starred from "../../assets/icons/star-fill.png"
import deleteChat from "../../assets/icons/delete.png"

function StarredChatItem({chat, refreshAllChats, refreshChat, setSelectedChat, setShowDeleteChatPopup, setChatToDelete, setShowTranslationPopup}) {

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async () => {
        setShowTranslationPopup(false)
        setShowDeleteChatPopup(true)
        setChatToDelete(chat)
    }

    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-5">
                {isLoading ? (
                    <BlackCircularLoader height="15px" width="15px" />
                ) : (
                    <button onClick={async () => {
                        setIsLoading(true)
                        await axios.put(`${apiBaseUrl}/chat/starred/${chat?.chat_id}`).then((res) => {
                            // console.log(res)
                            if(res?.status === 200) {
                                refreshChat()
                                refreshAllChats()
                            }
                            setIsLoading(false)
                        }).catch((error) => {
                            console.error('Error:', error)
                            setIsLoading(false)
                        })
                    }}>
                        <img alt="starred" src={starred} style={{height: '18px', width: '18px'}} />
                    </button>
                )}
                <button 
                    onClick={() => {
                        axios.get(`${apiBaseUrl}/chat/${chat?.chat_id}`).then((res) => {
                            // console.log(res)
                            setSelectedChat(res?.data)
                        }).catch((error) => {
                            console.error('Error:', error)
                        })
                    }} 
                    className="w-52 truncate text-left font-medium h-8"
                    style={{fontSize: '15px'}}
                >
                    {chat?.chat_title}
                </button>
            </div>
            <button onClick={handleDelete}>
                <img alt="delete" src={deleteChat} className="px-3" style={{height: '18px'}} />
            </button>
        </div>
    )
}

export default StarredChatItem

StarredChatItem.propTypes = {
    chat: PropTypes.object.isRequired,
    refreshAllChats: PropTypes.func.isRequired,
    refreshChat: PropTypes.func.isRequired,
    setSelectedChat: PropTypes.func.isRequired,
    setShowDeleteChatPopup: PropTypes.func.isRequired,
    setChatToDelete: PropTypes.func.isRequired,
    setShowTranslationPopup: PropTypes.func.isRequired
}