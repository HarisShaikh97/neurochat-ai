import { useNavigate } from "react-router-dom"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"

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
                    <img alt="logo" src="/src/assets/logo/NeuroChat_Logo_Shadow.png" style={{height: '100px', width: '100px'}} />
                    <div className="text-bgblue text-lg font-semibold">NeuroChat.Ai</div>
                    <div className="text-2xl font-semibold pt-5">Reset Password</div>
                    <div className="pt-5 font-light text-gray-500">You have successfully confirmed new password.</div>
                    <div className="font-light text-gray-500">Please use your new password when logging</div>
                    <div className="font-light text-gray-500">in to {`"`}NeuroChat.Ai{`"`}.</div>
                    <button onClick={() => {navigate('/login')}} className="text-white rounded-full bg-bgblue h-12 w-80 mt-32">Login</button>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordSuccessful