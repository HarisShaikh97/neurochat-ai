import { EnvelopeIcon } from "@heroicons/react/24/solid"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function Support() {

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96 font-bold" style={{fontSize: '22px'}}>Settings</div>
                <div className="text-2xl font-bold" style={{fontSize: '22px'}}>Support</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="my-10 px-10 flex-1 flex flex-col gap-10">
                    <div style={{fontSize: '16px'}}>We have a team ready to help with any issue you may be having. Contact NeuroCare.AI support for assistance.</div>
                    <div className="flex flex-row gap-5">
                        <EnvelopeIcon className="text-bgblue" style={{height: '24px'}} />
                        <div className="text-bgblue" style={{fontSize: '16px'}}>support@neurocare.ai</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Support