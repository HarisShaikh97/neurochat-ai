import { useState, useContext } from "react"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"
import SubscribedPopup from "../../components/subscribedpopup/SubscribedPopup"
import CancelSubscriptionPopup from "../../components/cancelsubscriptionpopup/CancelSubscriptionPopup"
import pricingPlan from "../../assets/icons/pricingplan.png"
import basicPlan from "../../assets/icons/basicplan.png"
import premiumPlan from "../../assets/icons/premiumplan.png"
import premiumPlanWhite from "../../assets/icons/premiumplanwhite.png"

function PricingPlan() {

    const { state } = useContext(MyContext)

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

    // console.log( currentSubscription, state?.user_id)

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96" style={{fontSize: '22px', fontWeight: 'bold'}}>Settings</div>
                <div style={{fontSize: '22px', fontWeight: 'bold'}}>Pricing Plan</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '2px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '2px'}} />
                <div className="py-10 flex-1 flex flex-col items-center overflow-y-auto relative" style={{maxHeight: '83vh'}}>
                    {showSubscribed && <SubscribedPopup />}
                    {showCancel && <CancelSubscriptionPopup handleCancel={handleCancel} handleConfirm={handleConfirm} />}
                    <div className="rounded-full bg-bglightblue flex items-center justify-center" style={{minHeight: '40px', width: '40px'}}>
                        <img alt="pricing-plan" src={pricingPlan} style={{height: '15px'}} />
                    </div>
                    <div className="text-2xl font-medium pt-5">Subscribe to NeuroChat</div>
                    <div className="pt-3 font-light">To gain access to all bots, please subscribe. Prices will increase as we add more bots.</div>
                    <div className="flex flex-row gap-10 pt-10">
                        <div className="flex flex-col">
                            <div className="rounded-3xl flex flex-col border-2 border-gray-300 h-[28rem] w-96">
                                <div className="w-full flex flex-row pt-5 gap-5 items-center justify-center">
                                    <div className="rounded-full h-10 w-10 bg-bglightblue flex items-center justify-center">
                                        <img alt="basic-plan" src={basicPlan} style={{height: '12px'}} />
                                    </div>
                                    <div className="text-lg font-medium text-bgblue">Basic Plan</div>
                                </div>
                                <div className="flex flex-col gap-5 pt-8 pl-5">
                                    <div className="font-semibold">One APP multiple models</div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-3 items-center">
                                            <CheckCircleIcon className="h-8 w-8 text-bgblue" />
                                            <div>25 messages per week</div>
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
                                    {state?.current_package?.package === 'BASIC' && <div className="text-lg font-semibold text-bgblue">Messages left: {state?.current_package?.chatGptRemaining + state?.current_package?.claudeRemaining + state?.current_package?.falconRemaining + state?.current_package?.palmRemaining + state?.current_package?.synaptiQueryRemaining}/25 for this week</div>}
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
                                        <img alt="premium-plan" src={premiumPlan} style={{height: '15px'}} />
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
                                            <div>Access to all Modules</div>
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
                                <button disabled onClick={handleSubscribe} className="mt-20 h-12 w-full rounded-3xl bg-bgblue bg-opacity-50 text-white flex flex-row gap-5 items-center justify-center">
                                    <img alt="premium-plan" src={premiumPlanWhite} style={{height: '20px'}} />
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