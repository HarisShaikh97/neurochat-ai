import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { EyeIcon } from "@heroicons/react/24/solid"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"

function ResetPassword() {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <>
            <div className="h-screen w-screen">
                <div className="flex items-end">
                    <div className="h-96 w-96 rounded-full fixed left-[-50px] bottom-[-50px]" style={{background: 'radial-gradient(circle, #8ea7f0 , #FFFFFF)'}}/>
                </div>
                <div className="flex items-start">
                    <div className="h-96 w-96 rounded-full fixed right-[-50px] top-[-50px]" style={{background: 'radial-gradient(circle, #8ea7f0 , #FFFFFF)'}}/>
                </div>
            </div>
            <div className="flex flex-col px-20 py-10 fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-center bg-cover backdrop-blur-[100px]">
                <div className="flex justify-end">
                    <ModeSwitch />
                </div>
                <div className="h-full flex flex-col items-center">
                    <img alt="logo" src="/src/assets/logo/NeuroChat_Logo_Shadow.png" style={{height: '100px', width: '100px'}} />
                    <div className="text-bgblue text-lg font-semibold">NeuroChat.Ai</div>
                    <div className="text-2xl font-semibold pt-5">Reset Password</div>
                    <div className="pt-5 font-light text-gray-500">Please enter new password and continue login</div>
                    <div className="font-light text-gray-500">to {`"`}NeuroChat.Ai{`"`}.</div>
                    <div className="h-full w-full flex flex-col items-center justify-center">
                        <div className="border rounded-full px-5 py-3 mt-5 w-1/3 flex flex-row">
                            <input type={showPassword ? "text" : "password"} placeholder="Password" style={{outline: 'none', width: '100%'}} />
                            {showPassword ? (
                                <button onClick={() => {setShowPassword(false)}}>
                                    <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            ) : (
                                <button onClick={() => {setShowPassword(true)}}>
                                    <EyeIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            )}
                        </div>
                        <div className="border rounded-full px-5 py-3 mt-5 w-1/3 flex flex-row">
                            <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" style={{outline: 'none', width: '100%'}} />
                            {showConfirmPassword ? (
                                <button onClick={() => {setShowConfirmPassword(false)}}>
                                    <EyeSlashIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            ) : (
                                <button onClick={() => {setShowConfirmPassword(true)}}>
                                    <EyeIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            )}
                        </div>
                        <button onClick={() => {navigate('/resetpasswordsuccessful')}} className="text-white rounded-full bg-bgblue h-12 w-80 mt-10">Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword