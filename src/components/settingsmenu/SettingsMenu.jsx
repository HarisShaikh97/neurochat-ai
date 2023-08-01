import { Link } from "react-router-dom"
import { UserIcon } from "@heroicons/react/24/solid"

function SettingsMenu() {

    return (
        <div className="w-96 flex flex-col gap-5 p-5">
            <div className="rounded-3xl bg-bgblue bg-opacity-5 w-full flex flex-col items-center py-16">
                <img className="rounded-full" alt="profile-picture" src="/src/assets/images/profile_picture.jpg" style={{height: '100px', width: '100px'}} />
                <div className="text-2xl font-semibold mt-5">Haris Shaikh</div>
                <div className="text-gray-500 text-sm mt-3">harisahmedsheikh1997@gmail.com</div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-5">
                    <Link to="/settings/basicinformation" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-2 items-center">
                        <UserIcon className="text-bgblue mt-5" style={{height: '35px', width: '35px'}} />
                        <div>Basic Information</div>
                    </Link>
                    <Link to="/settings/support" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-2 items-center">
                        <img alt="support" src="/src/assets/icons/support.png" className="mt-5" style={{height: '35px'}} />
                        <div>Support</div>
                    </Link>
                    <Link to="/settings/virtualcard" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-3 items-center">
                        <img alt="virtual-card" src="/src/assets/icons/virtualcard.svg" className="mt-5" style={{height: '30px'}} />
                        <div className="px-5 text-center">Virtual Contact Card</div>
                    </Link>
                </div>
                <div className="flex flex-col gap-5">
                    <Link to="/settings/changepassword" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col items-center">
                        <img alt="password" src="/src/assets/icons/password.png" className="mt-3" style={{height: '50px'}} />
                        <div>Password</div>
                    </Link>
                    <Link to="/settings/legaldocuments" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-2 items-center">
                        <img alt="privacy-policy" src="/src/assets/icons/privacy-policy.png" className="mt-5" style={{height: '30px'}} />
                        <div className="text-center">Privacy, Terms & Disclosure</div>
                    </Link>
                    <Link to="/settings/pricingplan" className="rounded-3xl bg-bgblue bg-opacity-5 h-28 w-40 flex flex-col gap-3 items-center">
                        <img alt="pricing" src="/src/assets/icons/pricing.png" className="mt-5" style={{height: '30px'}} />
                        <div>Pricing Plan</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SettingsMenu