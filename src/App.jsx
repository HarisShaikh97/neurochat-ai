import { useContext, useEffect } from 'react'
import { MyContext } from './context/context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import ResetPassword from './pages/resetpassword/ResetPassword'
import ResetPasswordSuccessful from './pages/resetpasswordsuccessful/ResetPasswordSuccessful'
import VerifyOTP from './pages/verifyotp/VerifyOTP'
import Home from './pages/home/Home'
import AskMeAnything from './pages/askmeanything/AskMeAnything'
import SynaptiPDF from './pages/synaptipdf/SynaptiPDF'
import SynaptiQuery from './pages/synaptiquery/SynaptiQuery'
import Synaptinote from './pages/synaptinote/SynaptiNote'
import ChatGPT from './pages/chatgpt/ChatGPT'
import ClaudeAI from './pages/claudeai/ClaudeAI'
import PaLM2 from './pages/palm2/PaLM2'
import Settings from './pages/settings/Settings'
import BasicInformation from './pages/basicinformation/BasicInformation'
import ChangePassword from './pages/changepassword/ChangePassword'
import Support from './pages/support/Support'
import LegalDocuments from './pages/legaldocuments/LegalDocuments'
import PricingPlan from './pages/pricingplan/PricingPlan'
import VirtualCard from './pages/virtualcard/VirtualCard'
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy'
import TermsAndConditions from './pages/termsandconditions/TermsAndConditions'
import Disclaimer from './pages/disclaimer/Disclaimer'
import WelcomeScreen from './pages/welcomescreen/WelcomeScreen'
import './App.css'

function App() {

    const {state, dispatch} = useContext(MyContext)

    useEffect(() => {
        if (state?.isLoading) {
            setTimeout(() => {
                dispatch({
                    type: "SET_IS_LOADING",
                    payload: false
                })
            }, 3000)
        }
    },[state, dispatch])

    return (
        <BrowserRouter>
            {state?.isLoading ? (
                <WelcomeScreen />
            ) : (
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/forgotpassword' element={<ForgotPassword />} />
                    <Route path='/resetpassword' element={<ResetPassword />} />
                    <Route path='/resetpasswordsuccessful' element={<ResetPasswordSuccessful />} />
                    <Route path='/verifyotp' element={<VerifyOTP />} />
                    <Route path='/askmeanything' element={<AskMeAnything />} />
                    <Route path='/synaptipdf' element={<SynaptiPDF />} />
                    <Route path='/synaptiquery' element={<SynaptiQuery />} />
                    <Route path='/synaptinote' element={<Synaptinote />} />
                    <Route path='/chatgpt' element={<ChatGPT />} />
                    <Route path='/claudeai' element={<ClaudeAI />} />
                    <Route path='/palm2' element={<PaLM2 />} />
                    <Route exact path='/settings' element={<Settings />} />
                    <Route path='/settings/basicinformation' element={<BasicInformation />} />
                    <Route path='/settings/changepassword' element={<ChangePassword />} />
                    <Route path='/settings/support' element={<Support />} />
                    <Route path='/settings/legaldocuments' element={<LegalDocuments />} />
                    <Route path='/settings/privacypolicy' element={<PrivacyPolicy />} />
                    <Route path='/settings/termsandconditions' element={<TermsAndConditions />} />
                    <Route path='/settings/disclaimer' element={<Disclaimer />} />
                    <Route path='/settings/virtualcard' element={<VirtualCard />} />
                    <Route path='/settings/pricingplan' element={<PricingPlan />} />
                    <Route path='/welcome' element={<WelcomeScreen />} />
                </Routes>
            )}
        </BrowserRouter>
    )
}

export default App
