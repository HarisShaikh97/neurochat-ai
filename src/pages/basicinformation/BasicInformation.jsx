import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { API, graphqlOperation } from "aws-amplify"
import { Checkbox } from "@mui/material"
import { CameraIcon } from "@heroicons/react/24/solid"
import { updateUserData } from "../../graphql/mutations"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"
import LoadingPopup from "../../components/loadingpopup/LoadingPopup"
import UpdateProfileSuccess from "../../components/updateprofilesuccess/UpdateProfileSuccess"
import UpdateProfilePicture from "../../components/updateprofilepicture/UpdateProfilePicture"
import { countries } from "countries-list"

function BasicInformation() {

    const { state, dispatch } = useContext(MyContext)

    const navigate = useNavigate()

    const [selectOrganizationName, setSelectOrganizationName] = useState(false)
    const [selectProfession, setSelectProfession] = useState(false)
    const [selectEmail, setSelectEmail] = useState(false)
    const [selectPhoneNumber, setSelectPhoneNumber] = useState(false)
    const [selectedCode, setSelectedCode] = useState(state?.user_info?.phoneNumber?.split('-')[0]?.substring(1))
    const [firstName, setFirstName] = useState(state?.user_info?.firstName)
    const [lastName, setLastName] = useState(state?.user_info?.lastName)
    const [organizationName, setOrganizationName] = useState(state?.user_info?.organization)
    const [profession, setProfession] = useState(state?.user_info?.profession)
    const [email, setEmail] = useState(state?.user_info?.secondaryEmail)
    const [phoneNumber, setPhoneNumber] = useState(state?.user_info?.phoneNumber?.split('-')[1])
    const [showSuccess, setShowSuccess] = useState(false)
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)
    const [showUpdateProfilePicture, setShowUpdateProfilePicture] = useState(false)
    const [showLoadingPopup, setShowLoadingPopup] = useState(false)

    function containsOnlyNumbers(inputString) {
        const regex = /^[0-9]+$/
        return regex.test(inputString)
    }

    const handleChange = (event) => {
        setSelectedCode(event.target.value)
    }

    const handleUpdateAttributes = async (e) => {
        e.preventDefault()

        
        let info = {
            id: state?.user_info?.id,
            firstName: firstName,
            lastName: lastName,
            organization: organizationName,
            profession: profession,
            email: state?.user_info?.email,
            secondaryEmail: email,
            profilePicUrl: state?.user_info?.profilePicUrl,
            phoneNumber: `+${selectedCode}-${phoneNumber}`,
            userId: state?.user_info?.userId
        }
    
        // console.log(info)
        if(firstName?.length === 0) {
            setError('First Name cannot be empty!')
            setShowError(true)
        }
        else if(lastName?.length === 0) {
            setError('Last Name cannot be empty!')
            setShowError(true)
        }
        else if(email?.length === 0) {
            setError('Email cannot be empty!')
            setShowError(true)
        }
        else if(phoneNumber?.length === 0) {
            setError('Phone Number cannot be empty!')
            setShowError(true)
        }
        else if(containsOnlyNumbers(phoneNumber) === false) {
            setError('Phone Number cannot have characters!')
            setShowError(true)
        }
        else {
            setShowLoadingPopup(true)
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
                setShowLoadingPopup(false)
            } catch (error) {
                setError('Invalid Email!')
                setShowError(true)
                console.error("Error:", error)
                setShowLoadingPopup(false)
            }
        }
    }

    // console.log(URL.createObjectURL(selectedImage))

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96" style={{fontSize: '22px', fontWeight: 'bold'}}>Settings</div>
                <div style={{fontSize: '22px', fontWeight: 'bold'}}>Basic Information</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '2px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '2px'}} />
                <div className="py-10 px-10 flex-1 flex flex-col items-center relative">
                    {showSuccess && <UpdateProfileSuccess />}
                    {showUpdateProfilePicture && <UpdateProfilePicture setShowUpdateProfilePicture={setShowUpdateProfilePicture} />}
                    {showLoadingPopup && <LoadingPopup />}
                    <div className="relative rounded-full" style={{height: '175px', width: '175px'}}>
                        {state?.user_info?.profilePicUrl?.length > 0 ? (
                            <img alt="profile-picture" src={state?.user_info?.profilePicUrl} className="rounded-full" style={{height: '175px', width: '175px'}} />
                        ) : (
                            <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '175px', width: '175px'}} />
                        )}
                        <button onClick={() => {setShowUpdateProfilePicture(true)}} className="absolute inset-0 rounded-full w-full h-full backdrop-brightness-[0.75] flex items-end justify-center">
                            <CameraIcon className="h-10 w-10 mb-3 text-white" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 mt-16">
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col gap-2">
                                <div className="pl-2 font-semibold" style={{fontSize: '14px'}}>First Name</div>
                                <div className="rounded-full px-5 border border-gray-300 bg-gray-100 flex items-center" style={{fontSize: '16px', height: '48px', width: '311px'}}>
                                    <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="pl-2 font-semibold" style={{fontSize: '14px'}}>Last Name</div>
                                <div className="rounded-full px-5 border border-gray-300 bg-gray-100 flex items-center" style={{fontSize: '16px', height: '48px', width: '311px'}}>
                                    <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div className="font-semibold" style={{fontSize: '14px'}}>Organization Name <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={selectOrganizationName} onChange={() => {setSelectOrganizationName(!selectOrganizationName)}} />
                                </div>
                                <div className="rounded-full px-5 border border-gray-300 bg-gray-100 flex items-center" style={{fontSize: '16px', height: '48px', width: '311px'}}>
                                    <input type="text" value={organizationName} onChange={(e) => {setOrganizationName(e.target.value)}} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div className="font-semibold" style={{fontSize: '14px'}}>Profession <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={selectProfession} onChange={() => {setSelectProfession(!selectProfession)}} />
                                </div>
                                <div className="rounded-full px-5 border border-gray-300 bg-gray-100 flex items-center" style={{fontSize: '16px', height: '48px', width: '311px'}}>
                                    <input type="text" value={profession} onChange={(e) => {setProfession(e.target.value)}} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div className="font-semibold" style={{fontSize: '14px'}}>Email</div>
                                    <Checkbox checked={selectEmail} onChange={() => {setSelectEmail(!selectEmail)}} />
                                </div>
                                <div className="rounded-full px-5 border border-gray-300 bg-gray-100 flex items-center" style={{fontSize: '16px', height: '48px', width: '311px'}}>
                                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div className="font-semibold" style={{fontSize: '14px'}}>Phone Number</div>
                                    <Checkbox checked={selectPhoneNumber} onChange={() => {setSelectPhoneNumber(!selectPhoneNumber)}} />
                                </div>
                                <div className="rounded-full px-5 border border-gray-300 bg-gray-100 flex flex-row gap-5 items-center" style={{fontSize: '16px', height: '48px', width: '311px'}}>
                                    <select style={{outline: 'none', background: 'transparent', width: '90px'}} className="text-gray-400" value={selectedCode} onChange={handleChange}>
                                        {Object.values(countries).map((country, key) => {
                                            return(
                                                <option className="px-5" key={key} value={country.phone}>
                                                    {`${country.emoji} +${country.phone}`}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <input type="text" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 pt-5 py-3" style={{fontSize: '16px'}}>Use the check box on the information which you wanna share in <span className="font-semibold">Virtual Contact Card!</span></div>
                        <div className="text-red-500 h-10"  style={{fontSize: '16px'}}>{showError && error}</div>
                        <div className="flex flex-row justify-between">
                            <button onClick={() => {navigate('/settings')}} className="rounded-full border border-bgblue text-bgblue" style={{height: '42px', width: '155px', fontSize: '16px'}}>Cancel</button>
                            <button onClick={handleUpdateAttributes} className="rounded-full bg-bgblue text-white" style={{height: '42px', width: '155px', fontSize: '16px'}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BasicInformation