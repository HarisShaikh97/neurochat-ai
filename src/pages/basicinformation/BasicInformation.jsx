import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { Checkbox } from "@mui/material"
import { CameraIcon } from "@heroicons/react/24/solid"
import { getUserData } from "../../graphql/queries"
import { updateUserData } from "../../graphql/mutations"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"
import UpdateProfileSuccess from "../../components/updateprofilesuccess/UpdateProfileSuccess"
import UpdateProfilePicture from "../../components/updateprofilepicture/UpdateProfilePicture"
import { countries } from "countries-list"

function BasicInformation() {

    const [currentUser, setCurrentUser] = useState(null)
    const [selectOrganizationName, setSelectOrganizationName] = useState(false)
    const [selectProfession, setSelectProfession] = useState(false)
    const [selectEmail, setSelectEmail] = useState(false)
    const [selectPhoneNumber, setSelectPhoneNumber] = useState(false)
    const [selectedCode, setSelectedCode] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [organizationName, setOrganizationName] = useState('')
    const [profession, setProfession] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showUpdateProfilePicture, setShowUpdateProfilePicture] = useState(false)

    const handleChange = (event) => {
        setSelectedCode(event.target.value)
    }

    const { state, dispatch } = useContext(MyContext)

    const navigate = useNavigate()

    useEffect(() => {

        const fetchUserData = async () => {
            
            try {
                const user = await API.graphql(graphqlOperation(getUserData, { id: state?.user_id }))
                setCurrentUser(user?.data?.getUserData)
                setSelectedCode(user?.data?.getUserData?.phoneNumber?.split('+')[1]?.split('-')[0])
                console.log(state?.user_id, user)
            } 
            catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        if(state?.user_id?.length > 0 && !currentUser) {
            fetchUserData()
        }

    }, [state, currentUser])

    useEffect(() => {

        const checkUserSession = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                setIsAuthenticated(true)
                // console.log(user)
                dispatch({
                    type: 'SET_USER_ID',
                    payload: user?.attributes?.sub
                })
            } 
            catch (error) {
                setIsAuthenticated(false)
            }
        }

        checkUserSession()

    }, [dispatch])

    useEffect(() => {
        if(isAuthenticated === false) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    const handleUpdateAttributes = async (e) => {
        e.preventDefault()

        let info = {
            id: currentUser?.id,
            firstName: firstName?.length === 0 && currentUser?.firstName ? currentUser?.firstName : firstName,
            lastName: lastName?.length === 0 && currentUser?.lastName ? currentUser?.lastName : lastName,
            organization: organizationName?.length === 0 && currentUser?.organization ? currentUser?.organization : organizationName,
            profession: profession?.length === 0 && currentUser?.profession ? currentUser?.profession : profession,
            email: currentUser?.email,
            secondaryEmail: email?.length === 0 ? currentUser?.secondaryEmail : email,
            profilePicUrl: currentUser?.profilePicUrl,
            phoneNumber: phoneNumber?.length === 0 ? (currentUser?.phoneNumber ? currentUser?.phoneNumber : '') : (`+${selectedCode}-${phoneNumber}`),
            userId: currentUser?.userId
        }
    
        console.log(info)

        try {
            const updatedUserData = await API.graphql(graphqlOperation(updateUserData, { input: info}))
            console.log(updatedUserData)
            if(updatedUserData?.data?.updateUserData) {
                setShowSuccess(true)
                setCurrentUser(updatedUserData?.data?.updateUserData)
                setTimeout(() => {
                    setShowSuccess(false)
                },3000)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    // console.log(URL.createObjectURL(selectedImage))

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96 text-2xl font-semibold">Settings</div>
                <div className="text-2xl font-semibold">Basic Information</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="py-10 px-10 flex-1 flex flex-col items-center relative">
                    {showSuccess && <UpdateProfileSuccess />}
                    {showUpdateProfilePicture && <UpdateProfilePicture setShowUpdateProfilePicture={setShowUpdateProfilePicture} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
                    <div className="relative rounded-full" style={{height: '150px', width: '150px'}}>
                        {currentUser?.profilePicUrl?.length > 0 ? (
                            <img alt="profile-picture" src={currentUser?.profilePicUrl} className="rounded-full" style={{height: '150px', width: '150px'}} />
                        ) : (
                            <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '150px', width: '150px'}} />
                        )}
                        <button onClick={() => {setShowUpdateProfilePicture(true)}} className="absolute inset-0 rounded-full w-full h-full backdrop-brightness-[0.75] flex items-end justify-center">
                            <CameraIcon className="h-10 w-10 mb-3 text-white" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 mt-24">
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col gap-2">
                                <div className="pl-2">First Name</div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} placeholder={currentUser?.firstName} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="pl-2">Last Name</div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} placeholder={currentUser?.lastName} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Organization Name <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={selectOrganizationName} onChange={() => {setSelectOrganizationName(!selectOrganizationName)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" value={organizationName} onChange={(e) => {setOrganizationName(e.target.value)}} placeholder={currentUser?.organization} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Profession <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={selectProfession} onChange={() => {setSelectProfession(!selectProfession)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" value={profession} onChange={(e) => {setProfession(e.target.value)}} placeholder={currentUser?.profession} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Email</div>
                                    <Checkbox checked={selectEmail} onChange={() => {setSelectEmail(!selectEmail)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder={currentUser?.secondaryEmail} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Phone Number</div>
                                    <Checkbox checked={selectPhoneNumber} onChange={() => {setSelectPhoneNumber(!selectPhoneNumber)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100 flex flex-row gap-5 items-center">
                                    <select style={{outline: 'none', background: 'transparent', width: '90px'}} className="text-gray-400" value={selectedCode} onChange={handleChange}>
                                        {Object.values(countries).map((country, key) => {
                                            return(
                                                <option className="px-5" key={key} value={country.phone}>
                                                    {`${country.emoji} +${country.phone}`}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <input type="text" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} placeholder={currentUser?.phoneNumber?.split('-')[1]} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 pt-10 py-3">Use the check box on the information which you wanna share in <span className="font-semibold">Virtual Contact Card!</span></div>
                        <div className="flex flex-row justify-between mt-10">
                            <button onClick={() => {navigate('/settings')}} className="rounded-full border border-bgblue text-bgblue h-10 w-48">Cancel</button>
                            <button onClick={handleUpdateAttributes} className="rounded-full bg-bgblue text-white h-10 w-48">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BasicInformation