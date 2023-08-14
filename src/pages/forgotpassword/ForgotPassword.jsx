import { useState, useContext } from "react"
import { MyContext } from "../../context/context"
import { Auth } from "aws-amplify"
import { useNavigate } from "react-router-dom"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"
import logo from "../../assets/logo/NeuroChat_Logo_Shadow.png"

function ForgotPassword() {

    const { dispatch } = useContext(MyContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Auth.forgotPassword(email)
            // console.log('OTP sent!')
            dispatch({
                type: "SET_USERNAME",
                payload: email
            })
            navigate('/resetpasswordotp')
        } 
        catch (error) {
            console.error('Error:', error)
        }
    }

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
                    <div className="text-2xl font-semibold pt-5">Forgot Password</div>
                    <div className="pt-5 font-light text-gray-500">Don{"'"}t worry! It happens. Please enter your email,</div>
                    <div className="font-light text-gray-500">we will send an OTP to this email.</div>
                    <div className="flex flex-col h-full w-full items-center justify-center">
                        <div className="border rounded-full px-5 py-3 mt-10 w-[500px]">
                            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" style={{outline: 'none', width: '100%'}} />
                        </div>
                        <button onClick={handleSubmit} className="text-white rounded-full bg-bgblue h-12 w-80 mt-10">Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword