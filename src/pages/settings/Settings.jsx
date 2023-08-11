import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
import { MyContext } from "../../context/context"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function Settings() {

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