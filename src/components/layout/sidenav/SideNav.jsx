import { useEffect, useState, useContext } from "react"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { getUserData, getUserSubscription } from "../../../graphql/queries"
import { createUserData, createUserSubscription, updateUserSubscription } from "../../../graphql/mutations"
import { MyContext } from "../../../context/context"
import ModeSwitch from "../../modeswitch/ModeSwitch"
import synaptiquery from "../../../assets/icons/synaptiquery.svg"
import chatgpt from "../../../assets/icons/chatgpt.svg"
import claudeai from "../../../assets/icons/claudeai.svg"
import palm2 from "../../../assets/icons/palm2.svg"
import falcon from "../../../assets/icons/falcon.svg"
// import virtualcard from "../../../assets/icons/virtualcard.svg"
import web from "../../../assets/icons/web.svg"
import twitter from "../../../assets/icons/twitter.svg"
import settings from "../../../assets/icons/settings.svg"
import logout from "../../../assets/icons/logout.svg"

function SideNav() {

    const { state, dispatch } = useContext(MyContext)

    const [currentAuthenticatedUser, setCurrentAuthenticatedUser] = useState()

    const location = useLocation()
    const navigate = useNavigate()
    

    useEffect(() => {

        const addUser = async () => {

            // console.log(currentUser, currentAuthenticatedUser)

            const userData = {
                id: currentAuthenticatedUser?.attributes?.sub,
                email: currentAuthenticatedUser?.attributes?.email,
                secondaryEmail: currentAuthenticatedUser?.attributes?.email,
                firstName: currentAuthenticatedUser?.attributes?.given_name ? currentAuthenticatedUser?.attributes?.given_name : '',
                lastName: currentAuthenticatedUser?.attributes?.family_name ? currentAuthenticatedUser?.attributes?.family_name : '',
                phoneNumber: '',
                profilePicUrl: currentAuthenticatedUser?.attributes?.picture ? currentAuthenticatedUser?.attributes?.picture : '',
                profession: '',
                organization: '',
                userId: currentAuthenticatedUser?.attributes?.sub
            }

            try {
                const newUser = await API.graphql(graphqlOperation(createUserData, {input: userData}))
                // console.log(newUser)
                dispatch({
                    type: 'SET_USER_INFO',
                    payload: newUser?.data?.createUserData
                })
                dispatch({
                    type: 'SET_SYNAPTIQUERY_AGREED',
                    payload: false
                })
                dispatch({
                    type: 'SET_CHATGPT_AGREED',
                    payload: false
                })
                dispatch({
                    type: 'SET_CLAUDE_AGREED',
                    payload: false
                })
                dispatch({
                    type: 'SET_PALM_AGREED',
                    payload: false
                })
                dispatch({
                    type: 'SET_FALCON_AGREED',
                    payload: false
                })
            }
            catch (error) {
                console.error('Error adding user:', error)
            }
        }

        const fetchUserData = async () => {
            
            try {
                const user = await API.graphql(graphqlOperation(getUserData, { id: state?.user_id }))
                // console.log(user)
                if(user?.data?.getUserData) {
                    dispatch({
                        type: 'SET_USER_INFO',
                        payload: user?.data?.getUserData
                    })
                }
                else {
                    addUser()
                }
            } 
            catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        if(state?.user_id && state?.user_info === null){
            fetchUserData()
        }

    }, [dispatch, state, currentAuthenticatedUser])

    useEffect(() => {

        const addSubscription = async () => {

            // console.log(currentUser, currentAuthenticatedUser)
            const currentDate = new Date()
            // console.log(currentDate)

            const subscriptionData = {
                id: state?.user_id,
                email: state?.user_info?.email,
                package: state?.user_info?.email?.includes('@aineurocare.com') ? 'PREMIUM' : 'BASIC',
                synaptiQueryRemaining: state?.user_info?.email?.includes('@aineurocare.com') ? 100 : 5,
                synaptiNoteRemaining: state?.user_info?.email?.includes('@aineurocare.com') ? 100 : 5,
                chatGptRemaining: state?.user_info?.email?.includes('@aineurocare.com') ? 150 : 5,
                claudeRemaining: state?.user_info?.email?.includes('@aineurocare.com') ? 100 : 5,
                palmRemaining: state?.user_info?.email?.includes('@aineurocare.com') ? 50 : 5,
                falconRemaining: state?.user_info?.email?.includes('@aineurocare.com') ? 50 : 5,
                lastRenewalDate: currentDate
            }

            try {
                const newSubscription = await API.graphql(graphqlOperation(createUserSubscription, {input: subscriptionData}))
                console.log(newSubscription)
                if(newSubscription?.data?.createUserSubscription) {
                    dispatch({
                        type: 'SET_CURRENT_PACKAGE',
                        payload: newSubscription?.data?.createUserSubscription
                    })
                }
            }
            catch (error) {
                console.error('Error adding subscription:', error)
            }
        }

        const fetchUserSubscription = async () => {
            
            try {
                const subscription = await API.graphql(graphqlOperation(getUserSubscription, { id: state?.user_id }))
                console.log(subscription)
                if(subscription?.data?.getUserSubscription) {
                    dispatch({
                        type: 'SET_CURRENT_PACKAGE',
                        payload: subscription?.data?.getUserSubscription
                    })
                }
                else {
                    addSubscription()
                }
            } 
            catch (error) {
                console.error('Error fetching user data:', error)
            }
        }

        if(state?.user_id && state?.user_info && state?.current_package === null){
            fetchUserSubscription()
        }

    }, [state, dispatch])

    console.log(state)

    useEffect(() => {

        const renewBasicSubscription = async () => {

            const currentDate = new Date()
    
            const subscriptionData = {
                id: state?.user_id,
                email: state?.user_info?.email,
                package: 'BASIC',
                synaptiQueryRemaining: 5,
                synaptiNoteRemaining: 5,
                chatGptRemaining: 5,
                claudeRemaining: 5,
                palmRemaining: 5,
                falconRemaining: 5,
                lastRenewalDate: currentDate
            }
    
            try {
                const updatedUserSubscription = await API.graphql(graphqlOperation(updateUserSubscription, { input: subscriptionData}))
                // console.log('updatedUserSubscription')
                if(updatedUserSubscription?.data?.updateUserSubscription) {
                    dispatch({
                        type: 'SET_CURRENT_PACKAGE',
                        payload: updatedUserSubscription?.data?.updateUserSubscription
                    })
                }
            } catch (error) {
                console.error("Error:", error)
            }
        }

        const renewPremiumSubscription = async () => {

            const currentDate = new Date()
    
            const subscriptionData = {
                id: state?.user_id,
                email: state?.user_info?.email,
                package: 'PREMIUM',
                synaptiQueryRemaining: 100,
                synaptiNoteRemaining: 100,
                chatGptRemaining: 150,
                claudeRemaining: 100,
                palmRemaining: 50,
                falconRemaining: 50,
                lastRenewalDate: currentDate
            }
    
            try {
                const updatedUserSubscription = await API.graphql(graphqlOperation(updateUserSubscription, { input: subscriptionData}))
                // console.log('updatedUserSubscription')
                if(updatedUserSubscription?.data?.updateUserSubscription) {
                    dispatch({
                        type: 'SET_CURRENT_PACKAGE',
                        payload: updatedUserSubscription?.data?.updateUserSubscription
                    })
                }
            } catch (error) {
                console.error("Error:", error)
            }
        }

        const checkPossibleRenewal = async () => {
            const currentDate = new Date()
            const targetDate = new Date(state?.current_package?.lastRenewalDate)
            const timeDifferenceMs = currentDate - targetDate
            const daysDifference = timeDifferenceMs / (1000 * 60 * 60 * 24)
            // console.log('Difference in days:', daysDifference)
            if(state?.current_package?.package === 'BASIC' && daysDifference > 7) {
                renewBasicSubscription()
            }
            else if(state?.current_package?.package === 'PREMIUM' && daysDifference > 1) {
                renewPremiumSubscription()
            }
        }
        if(state?.current_package) {
            checkPossibleRenewal()
        }
    }, [state, dispatch])

    useEffect(() => {

        const checkUserSession = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                setCurrentAuthenticatedUser(user)
                // console.log(user)
                dispatch({
                    type: 'SET_USER_ID',
                    payload: user?.attributes?.sub
                })
            } 
            catch (error) {
                console.error('Error:', error)
                navigate('/login')
            }
        }

        if(state?.user_id === null){
            checkUserSession()
        }

    }, [dispatch, state, navigate])

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
        <aside className="w-36 py-8 flex flex-col items-center shadow-xl overflow-y-auto scrollbar-none" style={{height: '100vh'}}>
            <NavLink to="/settings/basicinformation" className="flex flex-col items-center" style={{paddingBottom: '25px'}}>
                {state?.user_info?.profilePicUrl ? (
                    <img alt="profile-picture" src={state?.user_info?.profilePicUrl} className="rounded-full" style={{height: '40px', width: '40px'}} />
                ) : (
                    <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '40px', width: '40px'}} />
                )}
                <div className="mt-3" style={{fontSize: '12px', fontWeight: 'bold'}}>{state?.user_info?.firstName?.length > 0 ? state?.user_info?.firstName : 'Join'}</div>
                <div style={{fontSize: '12px', fontWeight: 'bold'}}>{state?.user_info?.lastName?.length > 0 ? state?.user_info?.lastName : 'NeuroChat.AI'}</div>
            </NavLink>
            {location.pathname.includes('/claudeai') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="claudeai" src={claudeai} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-bgblue" style={{fontSize: '14px'}}>Claude.AI</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/claudeai" className="flex flex-col items-center py-3 w-full">
                    <img alt="claudeai" src={claudeai} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-gray-500" style={{fontSize: '14px'}}>Claude.AI</div>
                </NavLink>
            )}
            {location.pathname.includes('/chatgpt') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="chatgpt" src={chatgpt} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-bgblue" style={{fontSize: '14px'}}>ChatGPT</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/chatgpt" className="flex flex-col items-center py-3 w-full">
                    <img alt="chatgpt" src={chatgpt} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-gray-500" style={{fontSize: '14px'}}>ChatGPT</div>
                </NavLink>
            )}
            {location.pathname.includes('/palm2') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="palm2" src={palm2} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-bgblue" style={{fontSize: '14px'}}>PaLM2</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/palm2" className="flex flex-col items-center py-3 w-full">
                    <img alt="palm2" src={palm2} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-gray-500" style={{fontSize: '14px'}}>PaLM2</div>
                </NavLink>
            )}
            {location.pathname.includes('/synaptiquery') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="synaptiquery" src={synaptiquery} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-bgblue" style={{fontSize: '14px'}}>SynaptiQuery</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/synaptiquery" className="flex flex-col items-center py-3 w-full">
                    <img alt="synaptiquery" src={synaptiquery} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-gray-500" style={{fontSize: '14px'}}>SynaptiQuery</div>
                </NavLink>
            )}
            {location.pathname.includes('/falcon') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="falcon" src={falcon} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-bgblue" style={{fontSize: '14px'}}>Falcon40B</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/falcon" className="flex flex-col items-center py-3 w-full">
                    <img alt="falcon" src={falcon} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-gray-500" style={{fontSize: '14px'}}>Falcon40B</div>
                </NavLink>
            )}
            {/* {location.pathname.includes('/virtualcard') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="virtualcard" src={virtualcard} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Virtual Card</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/settings/virtualcard" className="flex flex-col items-center py-3 w-full">
                    <img alt="virtualcard" src={virtualcard} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Virtual Card</div>
                </NavLink>
            )} */}
            <a target="_blank" rel="noopener noreferrer" href="https://www.neurochat.ai/" className="flex flex-col items-center py-3 w-full">
                <img alt="web" src={web} style={{height: '22px', width: '22px'}} />
                <div className="mt-3 font-semibold text-gray-500" style={{fontSize: '8px'}}>NeuroChat</div>
                <div className="text-gray-500 px-5 text-center" style={{fontSize: '8px'}}>Visit NeuroChat to download Mobile App</div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/neurocareai" className="flex flex-col items-center py-3 w-full">
                <img alt="twitter" src={twitter} style={{height: '18px', width: '22px'}} />
                <div className="mt-3 text-gray-500" style={{fontSize: '8px'}}>Follow us on Twitter</div>
                <div className="text-gray-500 font-semibold" style={{fontSize: '14px'}}>@neurocareai</div>
            </a>
            {location.pathname.includes('/settings') && location.pathname !== '/settings/virtualcard' ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="settings" src={settings} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-bgblue" style={{fontSize: '14px'}}>Settings</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/settings" className="flex flex-col items-center py-3 w-full">
                    <img alt="settings" src={settings} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-gray-500" style={{fontSize: '14px'}}>Settings</div>
                </NavLink>
            )}
            <button onClick={handleSignOut} className="flex flex-col items-center py-3 w-full">
                <img alt="logout" src={logout} style={{height: '24px', width: '24px'}} />
                <div className="mt-3 text-gray-500" style={{fontSize: '14px'}}>Logout</div>
            </button>
            <ModeSwitch />
        </aside>
    )
}

export default SideNav