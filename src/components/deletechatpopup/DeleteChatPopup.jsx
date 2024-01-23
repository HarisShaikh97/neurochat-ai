import { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import BlueCircularLoader from "../bluecircularloader/BlueCircularLoader"

function DeleteChatPopup({setShowDeleteChatPopup, chatToDelete, refreshAllChats, selectedChat, setSelectedChat, setShowTranslationPopup}) {

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async () => {

        setIsLoading(true)

        await axios.delete(`${apiBaseUrl}/chat/${chatToDelete?.chat_id}`).then((res) => {
            // console.log(res)
            if(res?.status === 200) {
                refreshAllChats()
                if(chatToDelete?.chat_id === selectedChat?.chat_id) {
                    setSelectedChat(null)
                    setShowTranslationPopup(false)
                }
            }
            setShowDeleteChatPopup(false)
        }).catch((error) => {
            console.error('Error:', error)
            setShowDeleteChatPopup(false)
        })
    }

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[35vh] z-50">
            <div className="bg-bglightblue rounded-xl shadow-xl flex items-center justify-center" style={{height: '184px', width: '341px'}}>
                {isLoading ? (
                    <BlueCircularLoader height="50" width="50" />
                ) : (
                    <div className="flex flex-col gap-10 items-center">
                        <div className="text-bgblue text-center px-12" style={{fontSize: '14px', fontWeight: 'bold'}}>Are you sure you want to delete chat?</div>
                        <div className="flex flex-row gap-5 justify-between">
                            <button onClick={() => {setShowDeleteChatPopup(false)}} className="rounded-full bg-white border border-gray-300 text-sm" style={{height: '40px', width: '87px'}}>Cancel</button>
                            <button onClick={handleDelete} className="rounded-full bg-bgblue text-white text-sm" style={{height: '40px', width: '87px'}}>Confirm</button>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default DeleteChatPopup

DeleteChatPopup.propTypes = {
    setShowDeleteChatPopup: PropTypes.func.isRequired,
    chatToDelete: PropTypes.object.isRequired,
    refreshAllChats: PropTypes.func.isRequired,
    selectedChat: PropTypes.object.isRequired,
    setSelectedChat: PropTypes.func.isRequired,
    setShowTranslationPopup: PropTypes.func.isRequired
}