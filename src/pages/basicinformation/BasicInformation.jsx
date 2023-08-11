import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { Checkbox } from "@mui/material"
import { CameraIcon } from "@heroicons/react/24/solid"
import { updateUserData } from "../../graphql/mutations"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"
import UpdateProfileSuccess from "../../components/updateprofilesuccess/UpdateProfileSuccess"
import UpdateProfilePicture from "../../components/updateprofilepicture/UpdateProfilePicture"
import { countries } from "countries-list"

function BasicInformation() {

    const { state, dispatch } = useContext(MyContext)

    const [selectOrganizationName, setSelectOrganizationName] = useState(false)
    const [selectProfession, setSelectProfession] = useState(false)
    const [selectEmail, setSelectEmail] = useState(false)
    const [selectPhoneNumber, setSelectPhoneNumber] = useState(false)
    const [selectedCode, setSelectedCode] = useState(state?.user_info?.phoneNumber?.split('-')[0]?.substring(1))
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [organizationName, setOrganizationName] = useState('')
    const [profession, setProfession] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)
    const [showUpdateProfilePicture, setShowUpdateProfilePicture] = useState(false)

    const handleChange = (event) => {
        setSelectedCode(event.target.value)
    }

    const navigate = useNavigate()

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
            id: state?.user_info?.id,
            firstName: firstName?.length === 0 && state?.user_info?.firstName ? state?.user_info?.firstName : firstName,
            lastName: lastName?.length === 0 && state?.user_info?.lastName ? state?.user_info?.lastName : lastName,
            organization: organizationName?.length === 0 && state?.user_info?.organization ? state?.user_info?.organization : organizationName,
            profession: profession?.length === 0 && state?.user_info?.profession ? state?.user_info?.profession : profession,
            email: state?.user_info?.email,
            secondaryEmail: email?.length === 0 ? state?.user_info?.secondaryEmail : email,
            profilePicUrl: state?.user_info?.profilePicUrl,
            phoneNumber: phoneNumber?.length === 0 ? (state?.user_info?.phoneNumber ? state?.user_info?.phoneNumber : '') : (`+${selectedCode}-${phoneNumber}`),
            userId: state?.user_info?.userId
        }
    
        // console.log(info)

        try {
            const updatedUserData = await API.graphql(graphqlOperation(updateUserData, { input: info}))
            // console.log(updatedUserData)
            if(updatedUserData?.data?.updateUserData) {
                setShowSuccess(true)
                setShowError(false)
                dispatch({
                    type: 'SET_USER_INFO',
                    payload: updatedUserData?.data?.updateUserData
                })
                setTimeout(() => {
                    setShowSuccess(false)
                },3000)
            }
        } catch (error) {
            setError('Invalid Email!')
            setShowError(true)
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
                    {showUpdateProfilePicture && <UpdateProfilePicture setShowUpdateProfilePicture={setShowUpdateProfilePicture} />}
                    <div className="relative rounded-full" style={{height: '150px', width: '150px'}}>
                        {state?.user_info?.profilePicUrl?.length > 0 ? (
                            <img alt="profile-picture" src={state?.user_info?.profilePicUrl} className="rounded-full" style={{height: '150px', width: '150px'}} />
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
                                    <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} placeholder={state?.user_info?.firstName} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="pl-2">Last Name</div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} placeholder={state?.user_info?.lastName} style={{outline: 'none', width: '100%', background: 'transparent'}} />
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
                                    <input type="text" value={organizationName} onChange={(e) => {setOrganizationName(e.target.value)}} placeholder={state?.user_info?.organization} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Profession <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={selectProfession} onChange={() => {setSelectProfession(!selectProfession)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" value={profession} onChange={(e) => {setProfession(e.target.value)}} placeholder={state?.user_info?.profession} style={{outline: 'none', width: '100%', background: 'transparent'}} />
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
                                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder={state?.user_info?.secondaryEmail} style={{outline: 'none', width: '100%', background: 'transparent'}} />
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
                                    <input type="text" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} placeholder={state?.user_info?.phoneNumber?.split('-')[1]} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 pt-10 py-3">Use the check box on the information which you wanna share in <span className="font-semibold">Virtual Contact Card!</span></div>
                        {showError && (<div className="text-red-500 pt-5">{error}</div>)}
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