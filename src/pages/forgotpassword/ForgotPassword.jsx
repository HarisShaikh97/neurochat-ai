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
                    <img alt="logo" src={logo} style={{height: '92px', width: '92px'}} />
                    <div className="text-bgblue font-bold" style={{fontSize: '20px'}}>NeuroChat.AI</div>
                    <div className="font-bold pt-5" style={{fontSize: '27px'}}>Forgot Password</div>
                    <div className="pt-5 text-gray-500" style={{fontSize: '18px'}}>Don{"'"}t worry! It happens. Please enter your email,</div>
                    <div className="text-gray-500" style={{fontSize: '18px'}}>we will send an OTP to this email.</div>
                    <div className="flex flex-col pt-32 w-full items-center justify-center">
                        <div className="border rounded-full px-5 mt-10 flex items-center" style={{height: '48px', width: '580px'}}>
                            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" style={{outline: 'none', width: '100%'}} />
                        </div>
                        <button onClick={handleSubmit} className="text-white font-semibold rounded-full bg-bgblue mt-10" style={{height: '48px', width: '311px', fontSize: '14px'}}>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword