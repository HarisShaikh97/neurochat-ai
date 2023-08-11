import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function LegalDocuments() {

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96 text-2xl font-semibold">Settings</div>
                <div className="text-2xl font-semibold">Legal Documents</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="my-10 px-10 flex-1 flex flex-col gap-5">
                    <Link to="/settings/privacypolicy" className="p-5 w-96 bg-bgblue bg-opacity-5 rounded-xl flex flex-row justify-between">
                        <div className="text-gray-500">Privacy Policy</div>
                        <ChevronRightIcon className="h-5 w-5 text-black" />
                    </Link>
                    <Link to="/settings/termsandconditions" className="p-5 w-96 bg-bgblue bg-opacity-5 rounded-xl flex flex-row justify-between">
                        <div className="text-gray-500">Terms of Use</div>
                        <ChevronRightIcon className="h-5 w-5 text-black" />
                    </Link>
                    <Link to="/settings/disclaimer" className="p-5 w-96 bg-bgblue bg-opacity-5 rounded-xl flex flex-row justify-between">
                        <div className="text-gray-500">Disclaimer</div>
                        <ChevronRightIcon className="h-5 w-5 text-black" />
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default LegalDocuments