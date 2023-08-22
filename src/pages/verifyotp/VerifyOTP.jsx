import { useState, useEffect, useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
import OTPInput from "react-otp-input"
import { MyContext } from "../../context/context"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"
import logo from "../../assets/logo/NeuroChat_Logo_Shadow.png"

function VerifyOTP() {

    const navigate = useNavigate()

    const { state } = useContext(MyContext)

    const initialTimerValue = 59

    const [otp, setOtp] = useState('')
    const [timer, setTimer] = useState(initialTimerValue)
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)

    const intervalRef = useRef()

    useEffect(() => {
        const decrementTimer = () => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(intervalRef.current)
                    return 0
                }
                return prevTimer - 1
            })
        }

        intervalRef.current = setInterval(decrementTimer, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    const ResendOTP = async (e) => {
        e.preventDefault()
        try {
            await Auth.resendSignUp(state?.username)
            setTimer(initialTimerValue)
            clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 0) {
                        clearInterval(intervalRef.current)
                        return 0
                    }
                    return prevTimer - 1
                })
            }, 1000)
        } 
        catch (error) {
            console.error('Error resending OTP:', error)
        }
    }

    const handleVerifyOTP = async (e) => {
        e.preventDefault()
        try {
            await Auth.confirmSignUp(state?.username, otp)
            navigate('/login')
        } 
        catch (error) {
            setError('Error verifying OTP!')
            setShowError(true)
            console.error('Error verifying OTP:', error)
        }
    }

      //console.log(state?.username)

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
                    <div className="text-bgblue" style={{fontSize: '20px', fontWeight: 'bold'}}>NeuroChat.AI</div>
                    <div className="pt-5" style={{fontSize: '27px', fontWeight: 'bold'}}>OTP Verification</div>
                    <div className="pt-5 text-gray-500" style={{fontSize: '18px'}}>Enter the OTP sent to -</div>
                    <div className="text-gray-500" style={{fontSize: '18px', fontWeight: 'bold'}}>{state?.username}</div>
                    <div className="py-10">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} className="rounded-lg border border-bgblue text-center mx-3" style={{height: '58px', width: '53px', fontSize: '27px', fontWeight: 'bold'}} />}
                    />
                    </div>
                    <div style={{fontSize: '16px'}}>00:{timer < 10 && '0'}{timer} Sec</div>
                    <div className="h-10 pt-5" style={{fontSize: '16px'}}>{timer === 0 && (<span>Didn{"'"}t receive code? <button onClick={ResendOTP} className="text-bgblue">Re-send</button></span>)}</div>
                    <div className="text-red-500 h-10" style={{fontSize: '16px'}}>{showError && error}</div>
                    <button onClick={handleVerifyOTP} className="text-white font-semibold rounded-full bg-bgblue mt-10" style={{height: '48px', width: '311px', fontSize: '14px'}}>Continue</button>
                </div>
            </div>
        </>
    )
}

export default VerifyOTP