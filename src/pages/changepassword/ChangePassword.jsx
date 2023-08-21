import { useState, useEffect } from "react"
import { Auth } from "aws-amplify"
import { EyeIcon } from "@heroicons/react/24/solid"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"
import ChangePasswordSuccess from "../../components/changepasswordsuccess/ChangePasswordSuccess"

function ChangePassword() {

    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect(() => {

        const checkUserSession = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                setCurrentUser(user)
            } 
            catch (error) {
                console.error('Error:', error)
            }
        }

        checkUserSession()

    }, [])

    const handleChangePassword = async (e) => {
        e.preventDefault()
        
        if(newPassword === confirmNewPassword){
            try {
                await Auth.changePassword(currentUser, oldPassword, newPassword)
                // console.log('Password changed successfully.')
                setShowError(false)
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                },3000)
            } catch (error) {
                setError(error?.message)
                setShowError(true)
                console.error('Error:', error)
            }
        }
        else {
            setError('Passwords do not match.')
            setShowError(true)
        }
    }

    // console.log(currentUser)

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96 font-bold" style={{fontSize: '22px'}}>Settings</div>
                <div className="font-bold" style={{fontSize: '22px'}}>Change Password</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="my-10 px-10 flex-1 flex flex-col gap-5 relative">
                    {showSuccess && <ChangePasswordSuccess />}
                    <div className="flex flex-col gap-3">
                        <div className="ml-1 font-semibold" style={{fontSize: '14px'}}>Old Password</div>
                        <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100 flex flex-row justify-between items-center">
                            <input type={showOldPassword ? "text" : "password"} value={oldPassword} onChange={(e) => {setOldPassword(e.target.value)}} placeholder="**********" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                            {showOldPassword ? (
                                <button onClick={() => {setShowOldPassword(false)}}>
                                    <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            ) : (
                                <button onClick={() => {setShowOldPassword(true)}}>
                                    <EyeIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="ml-1 font-semibold" style={{fontSize: '14px'}}>New Password</div>
                        <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100 flex flex-row justify-between items-center">
                            <input type={showNewPassword ? "text" : "password"} value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}} placeholder="**********" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                            {showNewPassword ? (
                                <button onClick={() => {setShowNewPassword(false)}}>
                                    <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            ) : (
                                <button onClick={() => {setShowNewPassword(true)}}>
                                    <EyeIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="ml-1 font-semibold" style={{fontSize: '14px'}}>Confirm New Password</div>
                        <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100 flex flex-row justify-between items-center">
                            <input type={showConfirmNewPassword ? "text" : "password"} value={confirmNewPassword} onChange={(e) => {setConfirmNewPassword(e.target.value)}} placeholder="**********" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                            {showConfirmNewPassword ? (
                                <button onClick={() => {setShowConfirmNewPassword(false)}}>
                                    <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            ) : (
                                <button onClick={() => {setShowConfirmNewPassword(true)}}>
                                    <EyeIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            )}
                        </div>
                    </div>
                    {showError && (<div className="text-red-500 pt-5">{error}</div>)}
                    <button onClick={handleChangePassword} className="rounded-full bg-bgblue text-white mt-16" style={{height: '42px', width: '155px', fontSize: '16px'}}>Save</button>
                </div>
            </div>
        </Layout>
    )
}

export default ChangePassword