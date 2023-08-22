import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function LegalDocuments() {

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96" style={{fontSize: '22px', fontWeight: 'bold'}}>Settings</div>
                <div style={{fontSize: '22px', fontWeight: 'bold'}}>Legal Documents</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="my-10 px-10 flex-1 flex flex-col gap-5">
                    <Link to="/settings/privacypolicy" className="px-5 bg-bgblue bg-opacity-5 rounded-2xl flex flex-row items-center justify-between" style={{height: '67px', width: '343px'}}>
                        <div style={{fontSize: '16px'}}>Privacy Policy</div>
                        <ChevronRightIcon className="text-black" style={{height: '20px'}} />
                    </Link>
                    <Link to="/settings/termsandconditions" className="px-5 bg-bgblue bg-opacity-5 rounded-2xl flex flex-row items-center justify-between" style={{height: '67px', width: '343px'}}>
                        <div style={{fontSize: '16px'}}>Terms of Use</div>
                        <ChevronRightIcon className="text-black" style={{height: '20px'}} />
                    </Link>
                    <Link to="/settings/disclaimer" className="px-5 bg-bgblue bg-opacity-5 rounded-2xl flex flex-row items-center justify-between" style={{height: '67px', width: '343px'}}>
                        <div style={{fontSize: '16px'}}>Disclaimer</div>
                        <ChevronRightIcon className="text-black" style={{height: '20px'}} />
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default LegalDocuments