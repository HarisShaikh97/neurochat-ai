import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
import { EyeIcon } from "@heroicons/react/24/solid"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import { MyContext } from "../../context/context"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"
import logo from "../../assets/logo/NeuroChat_Logo_Shadow.png"

function ResetPassword() {

    const { state } = useContext(MyContext)

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password === confirmPassword) {
            try {
                await Auth.forgotPasswordSubmit(state?.username, state?.otp, password)
                // console.log('Password reset successful!')
                navigate('/resetpasswordsuccessful')
            } 
            catch (error) {
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

    // console.log(state)

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
                    <img alt="logo" src={logo} style={{height: '100px', width: '100px'}} />
                    <div className="text-bgblue text-lg font-semibold">NeuroChat.Ai</div>
                    <div className="text-2xl font-semibold pt-5">Reset Password</div>
                    <div className="pt-5 font-light text-gray-500">Please enter new password and continue login</div>
                    <div className="font-light text-gray-500">to {`"`}NeuroChat.Ai{`"`}.</div>
                    <div className="h-full w-full flex flex-col items-center justify-center">
                        <div className="border rounded-full px-5 py-3 mt-5 w-[500px] flex flex-row">
                            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" style={{outline: 'none', width: '100%'}} />
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
                        <div className="border rounded-full px-5 py-3 mt-5 w-[500px] flex flex-row">
                            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder="Confirm Password" style={{outline: 'none', width: '100%'}} />
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
                        {showError && (<div className="text-red-500 pt-5">{error}</div>)}
                        <button onClick={handleSubmit} className="text-white rounded-full bg-bgblue h-12 w-80 mt-10">Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword