import { useState, useEffect, useContext, useRef } from "react"
import { Auth } from "aws-amplify"
import OTPInput from "react-otp-input"
import { MyContext } from "../../context/context"
import ModeSwitch from "../../components/modeswitch/ModeSwitch"

function VerifyOTP() {

    const {state} = useContext(MyContext)

    const [otp, setOtp] = useState('')
    const initialTimerValue = 59
    const [timer, setTimer] = useState(initialTimerValue)

    const intervalRef = useRef()

    useEffect(() => {
        const decrementTimer = () => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(intervalRef.current)
                    return 0
                }
                return prevTimer - 1
            });
        };

        intervalRef.current = setInterval(decrementTimer, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    const ResendOTP = () => {
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

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
          await Auth.confirmSignUp(state?.username, otp)
          console.log('Verified!');
        } catch (error) {
          console.error('Error verifying OTP:', error)
        }
      }

      //console.log(state?.username);

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
                    <div className="text-2xl font-semibold pt-5">OTP Verification</div>
                    <div className="pt-5 font-light text-gray-500">Enter the OTP sent to -</div>
                    <div className="text-gray-500">{state?.username}</div>
                    <div className="py-10">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} className="rounded-lg border border-bgblue text-lg font-semibold text-center mx-3" style={{height: '50px', width: '50px'}} />}
                    />
                    </div>
                    <div>00:{timer < 10 && '0'}{timer} Sec</div>
                    <div className="py-10">Didn{"'"}t receive code? <button onClick={ResendOTP} className="text-bgblue">Re-send</button></div>
                    <button onClick={handleVerifyOTP} className="text-white rounded-full bg-bgblue h-12 w-80 mt-10">Continue</button>
                </div>
            </div>
        </>
    )
}

export default VerifyOTP