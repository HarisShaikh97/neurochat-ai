import { Auth } from "aws-amplify"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import ModeSwitch from "../../modeswitch/ModeSwitch"

function SideNav() {

    const location = useLocation()
    const navigate = useNavigate()

    const handleSignOut = async (e) => {
        e.preventDefault()
        try {
            await Auth.signOut()
            navigate('/login')
        } 
        catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <aside className="min-h-screen w-36 py-8 flex flex-col items-center shadow-xl">
            <div className="flex flex-col items-center">
                <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '50px', width: '50px'}} />
                <div className="mt-3 text-sm font-semibold">Join</div>
                <div className="font-semibold text-sm">NeuroChat.AI</div>
            </div>
            {location.pathname.includes('/synaptiquery') ? (
                <div className="flex flex-row items-center w-full mt-10 bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="synaptiquery" src="/src/assets/icons/synaptiquery.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">SynaptiQuery</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/synaptiquery" className="flex flex-col items-center mt-10 py-3 w-full">
                    <img alt="synaptiquery" src="/src/assets/icons/synaptiquery.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">SynaptiQuery</div>
                </NavLink>
            )}
            {location.pathname.includes('/chatgpt') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="chatgpt" src="/src/assets/icons/chatgpt.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">ChatGPT</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/chatgpt" className="flex flex-col items-center py-3 w-full">
                    <img alt="chatgpt" src="/src/assets/icons/chatgpt.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">ChatGPT</div>
                </NavLink>
            )}
            {location.pathname.includes('/claudeai') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="claudeai" src="/src/assets/icons/claudeai.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Claude.AI</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/claudeai" className="flex flex-col items-center py-3 w-full">
                    <img alt="claudeai" src="/src/assets/icons/claudeai.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Claude.AI</div>
                </NavLink>
            )}
            {location.pathname.includes('/palm2') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="palm2" src="/src/assets/icons/palm2.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">PaLM2</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/palm2" className="flex flex-col items-center py-3 w-full">
                    <img alt="palm2" src="/src/assets/icons/palm2.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">PaLM2</div>
                </NavLink>
            )}
            {/* {location.pathname.includes('/synaptinote') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="synaptinote" src="/src/assets/icons/synaptinote.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">SynaptiNote</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/synaptinote" className="flex flex-col items-center py-3 w-full">
                    <img alt="synaptinote" src="/src/assets/icons/synaptinote.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">SynaptiNote</div>
                </NavLink>
            )} */}
            {/* {location.pathname.includes('/synaptipdf') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="synaptipdf" src="/src/assets/icons/synaptipdf.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">SynaptiPDF</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/synaptipdf" className="flex flex-col items-center py-3 w-full">
                    <img alt="synaptipdf" src="/src/assets/icons/synaptipdf.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">SynaptiPDF</div>
                </NavLink>
            )} */}
            {location.pathname.includes('/falcon') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="falcon" src="/src/assets/icons/falcon.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Falcon40B</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/falcon" className="flex flex-col items-center py-3 w-full">
                    <img alt="falcon" src="/src/assets/icons/falcon.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Falcon40B</div>
                </NavLink>
            )}
            {location.pathname.includes('/virtualcard') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="virtualcard" src="/src/assets/icons/virtualcard.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Virtual Card</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/settings/virtualcard" className="flex flex-col items-center py-3 w-full">
                    <img alt="virtualcard" src="/src/assets/icons/virtualcard.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Virtual Card</div>
                </NavLink>
            )}
            <div className="flex flex-col items-center py-3 w-full">
                <img alt="web" src="/src/assets/icons/web.svg" style={{height: '40px', width: '40px'}} />
                <div className="mt-3 text-xs font-semibold text-gray-500">NeuroChat</div>
                <div className="text-gray-500 text-xs text-center">Visit NeuroChat to download Mobile App</div>
            </div>
            <div className="flex flex-col items-center py-3 w-full">
                <img alt="twitter" src="/src/assets/icons/twitter.svg" style={{height: '40px', width: '40px'}} />
                <div className="mt-3 text-xs text-gray-500">Follow us on Twitter</div>
                <div className="text-gray-500 text-sm font-semibold">@neurocareai</div>
            </div>
            {location.pathname.includes('/settings') && location.pathname !== '/settings/virtualcard' ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="settings" src="/src/assets/icons/settings.svg" style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Settings</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/settings" className="flex flex-col items-center py-3 w-full">
                    <img alt="settings" src="/src/assets/icons/settings.svg" style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Settings</div>
                </NavLink>
            )}
            <button onClick={handleSignOut} className="flex flex-col items-center py-3 w-full">
                <img alt="logout" src="/src/assets/icons/logout.svg" style={{height: '30px', width: '30px'}} />
                <div className="mt-3 text-sm text-gray-500">Logout</div>
            </button>
            <ModeSwitch />
        </aside>
    )
}

export default SideNav