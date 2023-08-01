import { useState } from "react"
import PropTypes from 'prop-types'
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function SubscribedPopup() {

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[35vh]">
            <div className="w-64 h-44 bg-bglightblue rounded-xl shadow-xl flex flex-col gap-3 items-center justify-center">
                <img alt="congratulations" src="/src/assets/icons/congratulations.png" style={{height: '35px'}} />
                <div className="text-bgblue text-sm font-medium">Congratulations!</div>
                <div className="text-xs text-center px-10">You have been successfully subscribed the Premium Plan</div>
            </div>
        </div>
    )
}

function CancelPopup({handleCancel, handleConfirm}) {

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[35vh]">
            <div className="w-72 h-44 bg-bglightblue rounded-xl shadow-xl flex flex-col gap-10 items-center justify-center">
                <div className="text-bgblue text-sm font-medium text-center px-12">Are you sure you want to cancel the subscription?</div>
                <div className="flex flex-row gap-5 justify-between">
                    <button onClick={handleCancel} className="rounded-full bg-white border border-gray-300 text-sm h-8 w-20" >Cancel</button>
                    <button onClick={handleConfirm} className="rounded-full bg-bgblue text-white text-sm h-8 w-20" >Confirm</button>
                </div>
            </div>
        </div>
    )
}

CancelPopup.propTypes = {
    handleConfirm: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
};

function PricingPlan() {

    const [showSubscribed, setShowSubscribed] = useState(false)
    const [showCancel, setShowCancel] = useState(false)
    const [subscribed, setSubscribed] = useState(false)

    function handleSubscribe() {
        setSubscribed(true)
        setShowSubscribed(true)

        setTimeout(() => {
            setShowSubscribed(false)
        },3000)
    }

    function handleCancel() {
        setShowCancel(false)
    }

    function handleConfirm() {
        setSubscribed(false)
        setShowCancel(false)
    }

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96 text-2xl font-semibold">Settings</div>
                <div className="text-2xl font-semibold">Pricing Plan</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="pt-10 flex-1 flex flex-col items-center relative">
                    {showSubscribed && <SubscribedPopup />}
                    {showCancel && <CancelPopup handleCancel={handleCancel} handleConfirm={handleConfirm} />}
                    <div className="rounded-full h-12 w-12 bg-bglightblue flex items-center justify-center">
                        <img alt="pricing-plan" src="/src/assets/icons/pricingplan.png" style={{height: '15px'}} />
                    </div>
                    <div className="text-2xl font-medium pt-5">Subscribe to NeuroChat</div>
                    <div className="pt-3 font-light">To gain access to all bots, please subscribe. Prices will increase as we add more bots.</div>
                    <div className="flex flex-row gap-10 pt-10">
                        <div className="flex flex-col">
                            <div className="rounded-3xl flex flex-col border-2 border-gray-300 h-[28rem] w-96">
                                <div className="w-full flex flex-row pt-5 gap-5 items-center justify-center">
                                    <div className="rounded-full h-10 w-10 bg-bglightblue flex items-center justify-center">
                                        <img alt="basic-plan" src="/src/assets/icons/basicplan.png" style={{height: '12px'}} />
                                    </div>
                                    <div className="text-lg font-medium text-bgblue">Basic Plan</div>
                                </div>
                                <div className="flex flex-col gap-5 pt-8 pl-5">
                                    <div className="font-semibold">One APP multiple models</div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>20 messages per week</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>5 messages per model</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>Access to all modules</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>The credits are renewed every week</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>Higher Word Limit</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl"><span className="font-semibold">Free</span>/week</div>
                                    <div className="text-lg font-semibold text-bgblue">Messages left: 4/20 for this week</div>
                                </div>
                            </div>
                            <div className="mt-56 h-12 w-full rounded-3xl bg-bgblue bg-opacity-50 text-white flex gap-5 items-center justify-center">
                                <div>Subscribed</div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="rounded-3xl flex flex-col border-2 border-bgblue bg-opacity-30 bg-bglightblue h-[28rem] w-96">
                                <div className="w-full flex flex-row pt-5 gap-5 items-center justify-center">
                                    <div className="rounded-full h-10 w-10 bg-bglightblue flex items-center justify-center">
                                        <img alt="premium-plan" src="/src/assets/icons/premiumplan.png" style={{height: '15px'}} />
                                    </div>
                                    <div className="text-lg font-medium text-bgblue">Premium Plan</div>
                                </div>
                                <div className="flex flex-col gap-5 pt-8 pl-5">
                                    <div className="font-semibold">One APP multiple models</div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>Unlimited Chats Apps</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>Unlimited Individual Data</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>Access to all modules</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>No Ads</div>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>Higher Word Limit</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl"><span className="font-semibold">$ 25</span>/month</div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 rounded-3xl border border-bgblue h-16 w-96 pl-5 mt-20">
                                <input type="text" placeholder="Premium3M" style={{outline: 'none', background: 'transparent', width: '100%'}} />
                                <div className="text-white bg-bgblue rounded-3xl flex items-center justify-center text-center h-full w-48">Coupon Code</div>
                            </div>
                            {subscribed ? (
                                <button onClick={() => {setShowCancel(true)}} className="mt-20 h-12 w-full rounded-3xl bg-[#F06060] text-white flex items-center justify-center">
                                    <div>Cancel Subscription</div>
                                </button>
                            ) : (
                                <button onClick={handleSubscribe} className="mt-20 h-12 w-full rounded-3xl bg-bgblue text-white flex flex-row gap-5 items-center justify-center">
                                    <img alt="premium-plan" src="/src/assets/icons/premiumplanwhite.png" style={{height: '20px'}} />
                                    <div>Upgrade to Premium Plan</div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PricingPlan