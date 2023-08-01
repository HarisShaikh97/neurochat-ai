import { useState } from "react"
import { Link } from "react-router-dom"
import { EyeIcon } from "@heroicons/react/24/solid"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"

function Login() {

    const [showPassword, setShowPassword] = useState(false)

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
                    <div className="text-2xl font-semibold pt-5">Welcome Back</div>
                    <div className="pt-5 font-light text-gray-500">Please enter your correct details for</div>
                    <div className="font-light text-gray-500">Sign In on {`"`}NeuroChat.Ai{`"`}.</div>
                    <div className="border rounded-full px-5 py-3 mt-10 w-1/3">
                        <input type="text" placeholder="Email" style={{outline: 'none', width: '100%'}} />
                    </div>
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
                    <Link to="/forgotpassword" className="text-gray-500 text-sm pt-5">Forgot Password?</Link>
                    <button className="text-white rounded-full bg-bgblue h-12 w-80 mt-10">Sign In</button>
                    <div className="w-80 flex flex-row gap-3 items-center py-5">
                        <div className="bg-gray-300" style={{height: '1px', width: '100%'}} />
                        <div className="text-gray-500">OR</div>
                        <div className="bg-gray-300" style={{height: '1px', width: '100%'}} />
                    </div>
                    <div className="h-12 w-80 flex flex-row gap-5 pl-14 items-center border rounded-full">
                        <img alt="google" src="/src/assets/icons/google.svg" style={{height: '25px', width: '25px'}} />
                        <p>Continue with Google</p>
                    </div>
                    <div className="h-12 w-80 flex flex-row gap-5 pl-14 mt-5 items-center border rounded-full">
                        <img alt="apple" src="/src/assets/icons/apple.svg" style={{height: '25px', width: '25px'}} />
                        <p>Continue with Apple</p>
                    </div>
                    <div className="pt-10 text-sm">Don{"'"}t have an account yet?{" "}<Link to="/signup" className="text-bgblue">Sign Up</Link></div>
                </div>
            </div>
        </>
    )
}

export default Login