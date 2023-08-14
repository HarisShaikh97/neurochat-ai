import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import chat from "../../assets/images/chat.png"
import person from "../../assets/images/person.png"

function Home() {

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

    return (
        <Layout>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <div className="w-96 flex flex-col gap-10 p-5">
                    <div className="w-full h-12 px-5 flex flex-row gap-5 items-center rounded-full border border-gray-300">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                        <input type="text" placeholder="Find previous chats." style={{outline: 'none', width: '100%'}} />
                    </div>
                    <div className="rounded-3xl bg-bgblue bg-opacity-5 w-full flex flex-col gap-10 items-center py-10">
                        <div className="text-2xl font-medium">Start your chat</div>
                        <img alt="chat" src={chat} style={{width: '250px'}} />
                        <img alt="person" src={person} style={{width: '250px'}} />
                    </div>
                </div>
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="h-[80vh] mx-auto pt-10 px-10 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="text-2xl font-semibold">Disclaimer</div>
                        <div className="text-lg text-gray-500">Please note that this software is currently in its alpha version and is <span className="font-semibold">not</span> suitable for clinical care nor its intended use. It is intended solely for the purpose of improving research effectiveness and efficiency. So, we strongly suggest against using it as a primary tool for any medical or diagnostic purposes.</div>
                    </div>
                    <div className="flex justify-end w-full">
                        <button onClick={() => {navigate('/synaptiquery')}} className="bg-bgblue text-white font-semibold px-36 py-3 rounded-2xl">I agree</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home