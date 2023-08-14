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
import virtualcard from "../../../assets/icons/virtualcard.svg"
import web from "../../../assets/icons/web.svg"
import twitter from "../../../assets/icons/twitter.svg"
import settings from "../../../assets/icons/settings.svg"
import logout from "../../../assets/icons/logout.svg"

function SideNav() {

    const { state, dispatch } = useContext(MyContext)

    const [currentSubscription, setCurrentSubscription] = useState()
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
            }
            catch (error) {
                console.error('Error adding user:', error)
            }
        }

        const fetchUserData = async () => {
            
            try {
                const user = await API.graphql(graphqlOperation(getUserData, { id: currentAuthenticatedUser?.attributes?.sub }))
                
                // console.log(currentAuthenticatedUser?.attributes?.sub, user)
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
        if(currentAuthenticatedUser?.attributes?.sub && state?.user_info === null){
            fetchUserData()
        }

    }, [currentAuthenticatedUser, dispatch, state])

    useEffect(() => {

        const fetchUserSubscription = async () => {
            
            try {
                const subscription = await API.graphql(graphqlOperation(getUserSubscription, { id: currentAuthenticatedUser?.attributes?.sub }))
                setCurrentSubscription(subscription?.data?.getUserSubscription)
                // console.log(currentAuthenticatedUser?.attributes?.sub, subscription)
            } 
            catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        if(currentAuthenticatedUser?.attributes?.sub){
            fetchUserSubscription()
        }

    }, [currentAuthenticatedUser])

    useEffect(() => {

        const renewBasicSubscription = async () => {

            const currentDate = new Date()
    
            const subscriptionData = {
                id: currentAuthenticatedUser?.attributes?.sub,
                email: currentAuthenticatedUser?.attributes?.email,
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
                setCurrentSubscription(updatedUserSubscription?.data?.updateUserSubscription)
            } catch (error) {
                console.error("Error:", error)
            }
        }

        const renewPremiumSubscription = async () => {

            const currentDate = new Date()
    
            const subscriptionData = {
                id: currentAuthenticatedUser?.attributes?.sub,
                email: currentAuthenticatedUser?.attributes?.email,
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
                setCurrentSubscription(updatedUserSubscription?.data?.updateUserSubscription)
            } catch (error) {
                console.error("Error:", error)
            }
        }

        const checkPossibleRenewal = async () => {
            const currentDate = new Date()
            const targetDate = new Date(currentSubscription?.lastRenewalDate)
            const timeDifferenceMs = currentDate - targetDate
            const daysDifference = timeDifferenceMs / (1000 * 60 * 60 * 24)
            // console.log('Difference in days:', daysDifference)
            if(currentSubscription?.package === 'BASIC' && daysDifference > 7) {
                renewBasicSubscription()
            }
            else if(currentSubscription?.package === 'PREMIUM' && daysDifference > 1) {
                renewPremiumSubscription()
            }
        }
        if(currentSubscription) {
            checkPossibleRenewal()
        }
    }, [currentSubscription, currentAuthenticatedUser])

    

    useEffect(() => {
        
        const addSubscription = async () => {

            // console.log(currentUser, currentAuthenticatedUser)
            const currentDate = new Date()
            // console.log(currentDate)

            const subscriptionData = {
                id: currentAuthenticatedUser?.attributes?.sub,
                email: currentAuthenticatedUser?.attributes?.email,
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
                const newSubscription = await API.graphql(graphqlOperation(createUserSubscription, {input: subscriptionData}))
                // console.log(newSubscription)
                setCurrentSubscription(newSubscription?.data?.createUserSubscription)
            }
            catch (error) {
                console.error('Error adding subscription:', error)
            }
        }

        if(currentAuthenticatedUser && currentSubscription === null)
        {
            addSubscription()
        }

        // console.log(currentAuthenticatedUser, currentSubscription)

    }, [currentSubscription, currentAuthenticatedUser])

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
            }
        }

        checkUserSession()

    }, [dispatch])

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

    // console.log(state?.user_info)

    return (
        <aside className="min-h-screen w-36 py-8 flex flex-col items-center shadow-xl">
            <div className="flex flex-col items-center">
                {state?.user_info?.profilePicUrl ? (
                    <img alt="profile-picture" src={state?.user_info?.profilePicUrl} className="rounded-full" style={{height: '50px', width: '50px'}} />
                ) : (
                    <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '50px', width: '50px'}} />
                )}
                <div className="mt-3 text-sm font-semibold">{state?.user_info?.firstName}</div>
                <div className="font-semibold text-sm">{state?.user_info?.lastName}</div>
            </div>
            {location.pathname.includes('/synaptiquery') ? (
                <div className="flex flex-row items-center w-full mt-10 bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="synaptiquery" src={synaptiquery} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">SynaptiQuery</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/synaptiquery" className="flex flex-col items-center mt-10 py-3 w-full">
                    <img alt="synaptiquery" src={synaptiquery} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">SynaptiQuery</div>
                </NavLink>
            )}
            {location.pathname.includes('/chatgpt') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="chatgpt" src={chatgpt} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">ChatGPT</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/chatgpt" className="flex flex-col items-center py-3 w-full">
                    <img alt="chatgpt" src={chatgpt} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">ChatGPT</div>
                </NavLink>
            )}
            {location.pathname.includes('/claudeai') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="claudeai" src={claudeai} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Claude.AI</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/claudeai" className="flex flex-col items-center py-3 w-full">
                    <img alt="claudeai" src={claudeai} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Claude.AI</div>
                </NavLink>
            )}
            {location.pathname.includes('/palm2') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="palm2" src={palm2} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">PaLM2</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/palm2" className="flex flex-col items-center py-3 w-full">
                    <img alt="palm2" src={palm2} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">PaLM2</div>
                </NavLink>
            )}
            {location.pathname.includes('/falcon') ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="falcon" src={falcon} style={{height: '40px', width: '40px'}} />
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
                        <img alt="virtualcard" src={virtualcard} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Virtual Card</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/settings/virtualcard" className="flex flex-col items-center py-3 w-full">
                    <img alt="virtualcard" src={virtualcard} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Virtual Card</div>
                </NavLink>
            )}
            <a target="_blank" rel="noopener noreferrer" href="https://www.neurochat.ai/" className="flex flex-col items-center py-3 w-full">
                <img alt="web" src={web} style={{height: '40px', width: '40px'}} />
                <div className="mt-3 text-xs font-semibold text-gray-500">NeuroChat</div>
                <div className="text-gray-500 text-xs text-center">Visit NeuroChat to download Mobile App</div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/neurocareai" className="flex flex-col items-center py-3 w-full">
                <img alt="twitter" src={twitter} style={{height: '40px', width: '40px'}} />
                <div className="mt-3 text-xs text-gray-500">Follow us on Twitter</div>
                <div className="text-gray-500 text-sm font-semibold">@neurocareai</div>
            </a>
            {location.pathname.includes('/settings') && location.pathname !== '/settings/virtualcard' ? (
                <div className="flex flex-row items-center w-full bg-gray-100">
                    <div className="h-full w-1 rounded-r-full bg-bgblue" />
                    <div className="flex flex-col items-center py-3 w-full">
                        <img alt="settings" src={settings} style={{height: '40px', width: '40px'}} />
                        <div className="mt-3 text-sm text-bgblue">Settings</div>
                    </div>
                </div>
            ) : (
                <NavLink to="/settings" className="flex flex-col items-center py-3 w-full">
                    <img alt="settings" src={settings} style={{height: '40px', width: '40px'}} />
                    <div className="mt-3 text-sm text-gray-500">Settings</div>
                </NavLink>
            )}
            <button onClick={handleSignOut} className="flex flex-col items-center py-3 w-full">
                <img alt="logout" src={logout} style={{height: '30px', width: '30px'}} />
                <div className="mt-3 text-sm text-gray-500">Logout</div>
            </button>
            <ModeSwitch />
        </aside>
    )
}

export default SideNav