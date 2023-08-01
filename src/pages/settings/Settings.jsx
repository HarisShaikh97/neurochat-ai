import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function Settings() {

    return (
        <Layout>
            <div className="flex items-center gap-5 pl-10">
                <div className="w-96 text-2xl font-semibold">Settings</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
            </div>
        </Layout>
    )
}

export default Settings