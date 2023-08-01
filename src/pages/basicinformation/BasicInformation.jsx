import { useState } from "react"
import { Checkbox } from "@mui/material"
import { CameraIcon } from "@heroicons/react/24/solid"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"
import { countries } from "countries-list"

function BasicInformation() {

    const [organizationName, setOrganizationName] = useState(false)
    const [profession, setProfession] = useState(false)
    const [email, setEmail] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [selectedCode, setSelectedCode] = useState('')

    const handleChange = (event) => {
        setSelectedCode(event.target.value)
    }

    //console.log(Object.values(countries))

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
                <div className="h-[700px] my-10 px-10 flex-1 flex flex-col items-center justify-between">
                    <div className="relative rounded-full" style={{height: '150px', width: '150px'}}>
                        <img className="rounded-full" alt="profile-picture" src="/src/assets/images/profile_picture.jpg" style={{height: '150px', width: '150px'}}/>
                        <div className="absolute inset-0 rounded-full w-full h-full backdrop-brightness-[0.75] flex items-end justify-center">
                            <CameraIcon className="h-10 w-10 mb-3 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col gap-2">
                                <div className="pl-2">First Name</div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="Haris" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="pl-2">Last Name</div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="Shaikh" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Organization Name <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={organizationName} onChange={() => {setOrganizationName(!organizationName)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="NeuroCare.Ai" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Profession <span className="text-sm text-gray-500">(Optional)</span></div>
                                    <Checkbox checked={profession} onChange={() => {setProfession(!profession)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="Neuro Surgeon" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
                                    <div>Email</div>
                                    <Checkbox checked={email} onChange={() => {setEmail(!email)}} />
                                </div>
                                <div className="rounded-full w-80 py-2 px-5 border border-gray-300 bg-gray-100">
                                    <input type="text" placeholder="harisahmedsheikh1997@gmail.com" style={{outline: 'none', width: '100%', background: 'transparent'}} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="pl-2 flex flex-row items-center justify-between">
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
                        <div className="text-gray-500 pt-10 py-3">Use the check box on the information which you wanna share in <span className="font-semibold">Virtual Contact Card!</span></div>
                        <div className="flex flex-row justify-between mt-10">
                            <button className="rounded-full border border-bgblue text-bgblue h-10 w-48">Cancel</button>
                            <button className="rounded-full bg-bgblue text-white h-10 w-48">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BasicInformation