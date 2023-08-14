import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
import { EyeIcon } from "@heroicons/react/24/solid"
import { EyeSlashIcon } from "@heroicons/react/24/solid"
import { MyContext } from "../../context/context"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"
import logo from "../../assets/logo/NeuroChat_Logo_Shadow.png"
import google from "../../assets/icons/google.svg"
import apple from "../../assets/icons/apple.svg"

function Signup() {

    const { dispatch } = useContext(MyContext)

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault()
        if(password === confirmPassword) {
            try {
                await Auth.signUp({
                    username: email,
                    password,
                    attributes: {
                        email,
                    },
                    autoSignIn: {
                        enabled: false,
                    }
                })
                dispatch({
                    type: "SET_USERNAME",
                    payload: email
                })
                navigate('/verifyotp')
            } 
            catch (error) {
                setError(error?.message)
                setShowError(true)
            }
        }
        else {
            setError('Passwords do not match.')
            setShowError(true)
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await Auth.federatedSignIn({ provider: 'Google' })
            // console.log('Sign up successful!')
            navigate('/')
        } catch (error) {
            console.error('Error signing up with Google:', error)
        }
    }

    const handleAppleLogin = async () => {
        try {
            await Auth.federatedSignIn({ provider: "SignInWithApple" })
            // console.log('Sign in successful!')
            navigate('/')
        } catch (error) {
            console.error('Error signing up with Apple:', error)
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
                    <div className="text-2xl font-semibold pt-5">SignUp</div>
                    <div className="pt-5 font-light text-gray-500">Please enter your correct details for</div>
                    <div className="font-light text-gray-500">signing-up on {`"`}NeuroChat.Ai{`"`}.</div>
                    <div className="border rounded-full px-5 py-3 mt-10 w-1/3">
                        <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" style={{outline: 'none', width: '100%'}} />
                    </div>
                    <div className="border rounded-full px-5 py-3 mt-5 w-1/3 flex flex-row">
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
                    <div className="border rounded-full px-5 py-3 mt-5 w-1/3 flex flex-row">
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
                    <button onClick={handleSignUp} className="text-white rounded-full bg-bgblue h-12 w-80 mt-10">Sign Up</button>
                    {showError && (<div className="text-red-500 pt-5">{error}</div>)}
                    <div className="w-80 flex flex-row gap-3 items-center py-5">
                        <div className="bg-gray-300" style={{height: '1px', width: '100%'}} />
                        <div className="text-gray-500">OR</div>
                        <div className="bg-gray-300" style={{height: '1px', width: '100%'}} />
                    </div>
                    <button onClick={handleGoogleLogin} className="h-12 w-80 flex flex-row gap-5 pl-14 items-center border rounded-full">
                        <img alt="google" src={google} style={{height: '25px', width: '25px'}} />
                        <p>Continue with Google</p>
                    </button>
                    <button onClick={handleAppleLogin} className="h-12 w-80 flex flex-row gap-5 pl-14 mt-5 items-center border rounded-full">
                        <img alt="apple" src={apple} style={{height: '25px', width: '25px'}} />
                        <p>Continue with Apple</p>
                    </button>
                    <div className="pt-10 text-sm">Already have an account?{" "}<Link to="/login" className="text-bgblue">Sign In</Link></div>
                </div>
            </div>
        </>
    )
}

export default Signup