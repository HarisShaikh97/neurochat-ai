import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
// import QRCodeReact from "qrcode.react"
// import { Checkbox } from "@mui/material"
// import { CameraIcon } from "@heroicons/react/24/solid"
// import { countries } from "countries-list"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function VirtualCard() {

    const { dispatch } = useContext(MyContext)

    const navigate = useNavigate()

    const [isAuthenticated, setIsAuthenticated] = useState(true)

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

    // const [organizationName, setOrganizationName] = useState(false)
    // const [profession, setProfession] = useState(false)
    // const [email, setEmail] = useState(false)
    // const [phoneNumber, setPhoneNumber] = useState(false)
    // const [selectedCode, setSelectedCode] = useState('')

    // const handleChange = (event) => {
    //     setSelectedCode(event.target.value)
    // }

    // const contactDetails = "BEGIN:VCARD\nFN:Haris Shaikh\nEMAIL:harisahmedsheikh1997@gmail.com\nTEL:+11234567890\nEND:VCARD"

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96 text-2xl font-semibold">Settings</div>
                <div className="text-2xl font-semibold">Virtual Card</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="flex-1 flex pt-60 justify-center">
                    <div className="text-bgblue text-7xl font-semibold">Coming Soon!</div>
                </div>
                {/* <div className="my-10 px-10 flex-1 flex flex-row justify-between">
                    <div className="h-[650px] w-72 rounded-lg border border-bgblue flex flex-col relative">
                        <img alt="profile-picture" src="/src/assets/images/profile_picture.jpg" className="rounded-full absolute top-12 left-1/2 transform -translate-x-1/2" style={{height: '150px', width: '150px'}} />
                        <div className="bg-bgblue h-32 rounded-t-lg"></div>
                        <div className="flex-1 pt-24 flex flex-col items-center">
                            <div className="text-md font-semibold">Haris Shaikh</div>
                            <div className="text-sm">Developer at Neurocare.Ai</div>
                            <QRCodeReact className="mt-5" value={contactDetails} />
                        </div>
                        <div className="bg-bgblue flex flex-col items-center h-48 rounded-b-lg">
                            <div className="flex flex-row gap-2 items-center mt-3">
                                <img src="/src/assets/logo/NeuroChat_Logo.png" alt="logo" style={{height: '35px', width: '35px'}} />
                                <div className="text-white text-2xl font-semibold">NeroChat.Ai</div>
                            </div>
                            <div className="flex flex-row gap-3 w-full px-5 pt-1">
                                <div className="flex-1 flex flex-col">
                                    <div className="bg-white text-bgblue text-xs text-center rounded-full w-full">Download th app now!</div>
                                    <div className="flex flex-row pt-1">
                                        <div className="flex-1 flex flex-col text-sm text-white">
                                            <div>Seamlessly</div>
                                            <div>Share Contacts,</div>
                                        </div>
                                        <div>
                                            <img alt="arrow" src="/src/assets/icons/arrow.png" style={{height: '35px', width: '35px'}} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-sm text-white">
                                        <div>Saving Time - Your</div>
                                        <div>Most Valuable Asset!</div>
                                    </div>
                                    <div className="text-white">& Much More!</div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <img src="/src/assets/images/qrcode.png" alt="qrcode" style={{height: '65px', width: '65px'}} />
                                    <img src="/src/assets/images/googleplay.png" alt="google-play" style={{width: '65px'}} />
                                    <img src="/src/assets/images/appstore.png" alt="appstore" style={{width: '65px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 items-center">
                        <div className="relative rounded-full" style={{height: '100px', width: '100px'}}>
                            <img className="rounded-full" alt="profile-picture" src="/src/assets/images/profile_picture.jpg" style={{height: '100px', width: '100px'}}/>
                            <div className="absolute inset-0 rounded-full w-full h-full backdrop-brightness-[0.75] flex items-end justify-center">
                                <CameraIcon className="h-10 w-10 mb-3 text-white" />
                            </div>
                        </div>
                        <div className="w-96 py-10 flex flex-col gap-3 items-center bg-bgblue bg-opacity-5 rounded-xl">
                            <div className="flex flex-row gap-8 justify-center">
                                <div className="flex flex-col gap-2">
                                    <div>First Name</div>
                                    <div className="rounded-full w-36 py-2 px-5 border border-gray-300 bg-gray-100">
                                        <input type="text" placeholder="Haris" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div>Last Name</div>
                                    <div className="rounded-full w-36 py-2 px-5 border border-gray-300 bg-gray-100">
                                        <input type="text" placeholder="Shaikh" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-80">
                                <div className="flex flex-row items-center justify-between">
                                    <div>Organization Name <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={organizationName} onChange={() => {setOrganizationName(!organizationName)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="NeuroCare.Ai" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col w-80">
                                <div className="flex flex-row items-center justify-between">
                                    <div>Profession <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={profession} onChange={() => {setProfession(!profession)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="Neuro Surgeon" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col w-80">
                                <div className="flex flex-row items-center justify-between">
                                    <div>Email</div>
                                    <Checkbox checked={email} onChange={() => {setEmail(!email)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="harisahmedsheikh1997@gmail.com" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col w-80">
                                <div className="flex flex-row items-center justify-between">
                                    <div>Phone Number</div>
                                    <Checkbox checked={phoneNumber} onChange={() => {setPhoneNumber(!phoneNumber)}} />
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
                                    <input type="text" placeholder="1234567" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-gray-500 items-center">
                            <div>select information to share in your</div>
                            <div className="font-semibold">Virtual Contact Card!</div>
                        </div>
                        <div className="flex flex-col gap-5 items-center w-full">
                            <button className="rounded-full bg-bgblue text-white py-3 w-72">Save</button>
                            <button className="rounded-2xl bg-bgblue text-white font-semibold py-3 w-80">Share Card</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </Layout>
    )
}

export default VirtualCard