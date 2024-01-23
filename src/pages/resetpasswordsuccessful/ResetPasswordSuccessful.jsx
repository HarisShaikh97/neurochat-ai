import { useNavigate } from "react-router-dom"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"
import logo from "../../assets/logo/NeuroChat_Logo_Shadow.png"

function ResetPasswordSuccessful() {

    const navigate = useNavigate()

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
                <div className="h-full flex flex-col items-center justify-center">
                    <img alt="logo" src={logo} style={{height: '92px', width: '92px'}} />
                    <div className="text-bgblue" style={{fontSize: '20px', fontWeight: 'bold'}}>NeuroChat.AI</div>
                    <div className="pt-5" style={{fontSize: '27px', fontWeight: 'bold'}}>Reset Password</div>
                    <div className="pt-5 text-gray-500" style={{fontSize: '18px'}}>You have successfully confirmed new password.</div>
                    <div className="text-gray-500"  style={{fontSize: '18px'}}>Please use your new password when logging</div>
                    <div className="text-gray-500" style={{fontSize: '18px'}}>in to {`"`}NeuroChat.AI{`"`}.</div>
                    <button onClick={() => {navigate('/login')}} className="text-white font-semibold rounded-full bg-bgblue mt-32" style={{height: '48px', width: '311px', fontSize: '14px'}}>Login</button>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordSuccessful