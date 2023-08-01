import { useNavigate } from "react-router-dom"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Layout from "../../components/layout/Layout"

function Home() {

    const navigate = useNavigate()

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="rounded-lg bg-bgblue text-white py-1 px-3">EN</div>
                <div className="rounded-full h-7 w-7 flex items-center justify-center border-2 border-black font-semibold">i</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <div className="w-96 flex flex-col gap-10 p-5">
                    <div className="w-full h-12 px-5 flex flex-row gap-5 items-center rounded-full border border-gray-300">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                        <input type="text" placeholder="Find previous chats." style={{outline: 'none', width: '100%'}} />
                    </div>
                    <div className="rounded-3xl bg-bgblue bg-opacity-5 w-full flex flex-col gap-10 items-center py-10">
                        <div className="text-2xl font-medium">Start your chat</div>
                        <img alt="chat" src="/src/assets/images/chat.png" style={{width: '250px'}} />
                        <img alt="chat" src="/src/assets/images/person.png" style={{width: '250px'}} />
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