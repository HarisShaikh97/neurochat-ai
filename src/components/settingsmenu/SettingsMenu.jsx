import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserIcon } from "@heroicons/react/24/solid"
import { MyContext } from "../../context/context"
import support from "../../assets/icons/support.png"
import virtualcard from "../../assets/icons/virtualcard.svg"
import password from "../../assets/icons/password.png"
import privacyPolicy from "../../assets/icons/privacy-policy.png"
import pricing from "../../assets/icons/pricing.png"

function SettingsMenu() {

    const { state } = useContext(MyContext)

    // console.log(state)

    return (
        <div className="w-96 flex flex-col gap-5 p-5">
            <div className="rounded-3xl bg-bgblue bg-opacity-5 w-full flex flex-col items-center py-16">
                {state?.user_info?.profilePicUrl?.length > 0 ? (
                    <img alt="profile-picture" src={state?.user_info?.profilePicUrl} className="rounded-full" style={{height: '80px', width: '80px'}} />
                ) : (
                    <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '100px', width: '100px'}} />
                )}
                <div className="mt-5" style={{fontSize: '22px', fontWeight: 'bold'}}>{(state?.user_info?.firstName?.length > 0 || state?.user_info?.lastName?.length > 0) && `${state?.user_info?.firstName} ${state?.user_info?.lastName}`}</div>
                <div className="text-gray-500 mt-3" style={{fontSize: '14px'}}>{state?.user_info?.secondaryEmail}</div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-5">
                    <Link to="/settings/basicinformation" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-2 items-center">
                        <UserIcon className="text-bgblue mt-5" style={{height: '25px'}} />
                        <div style={{fontSize: '16px'}}>Basic Information</div>
                    </Link>
                    <Link to="/settings/support" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-2 items-center">
                        <img alt="support" src={support} className="mt-5" style={{height: '25px'}} />
                        <div>Support</div>
                    </Link>
                    <Link to="/settings/virtualcard" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-3 items-center">
                        <img alt="virtual-card" src={virtualcard} className="mt-5" style={{height: '25px'}} />
                        <div style={{fontSize: '16px'}} className="px-5 text-center">Virtual Contact Card</div>
                    </Link>
                </div>
                <div className="flex flex-col gap-5">
                    <Link to="/settings/changepassword" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col items-center">
                        <img alt="password" src={password} className="mt-4 mb-1" style={{height: '35px'}} />
                        <div style={{fontSize: '16px'}}>Password</div>
                    </Link>
                    <Link to="/settings/legaldocuments" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-2 items-center">
                        <img alt="privacy-policy" src={privacyPolicy} className="mt-5" style={{height: '25px'}} />
                        <div style={{fontSize: '16px'}} className="text-center">Privacy, Terms & Disclosure</div>
                    </Link>
                    <Link to="/settings/pricingplan" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-3 items-center">
                        <img alt="pricing" src={pricing} className="mt-5" style={{height: '25px'}} />
                        <div style={{fontSize: '16px'}}>Pricing Plan</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SettingsMenu