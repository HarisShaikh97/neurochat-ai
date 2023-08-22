import { useNavigate } from "react-router-dom"
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Layout from "../../components/layout/Layout"
import chat from "../../assets/images/chat.png"
import person from "../../assets/images/person.png"

function Home() {

    const navigate = useNavigate()

    return (
        <Layout>
            <div className="bg-gray-100 mt-5" style={{height: '2px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <div className="flex flex-col gap-10 p-5" style={{width: '350px'}}>
                    {/* <div className="px-5 flex flex-row gap-5 items-center rounded-full border border-gray-300" style={{height: '42px', width: '248px'}}>
                        <MagnifyingGlassIcon className="text-gray-500" style={{height: '12px', width: '12px'}} />
                        <input type="text" placeholder="Find previous chats." style={{outline: 'none', width: '100%', fontSize: '12px'}} />
                    </div> */}
                    <div className="rounded-3xl bg-bgblue bg-opacity-5 flex flex-col gap-5 items-center py-5" style={{height: '421px', width: '314px'}}>
                        <div className="font-semibold" style={{fontSize: '22px'}}>Start your chat</div>
                        <img alt="chat" src={chat} style={{height: '129px', width: '189px'}} />
                        <img alt="person" src={person} style={{height: '164px', width: '158px'}} />
                    </div>
                </div>
                <div className="bg-gray-100" style={{height: '100%', width: '2px'}} />
                <div className="mx-auto pt-10 px-10 flex-1 flex flex-col justify-between" style={{height: '80vh'}}>
                    <div className="flex flex-col gap-10">
                        <div style={{fontSize: '22px', fontWeight: 'bold'}}>Disclaimer</div>
                        <div className="text-gray-500" style={{fontSize: '20px'}}>Please note that this software is currently in its alpha version and is <span style={{fontWeight: 'bold'}}>not</span> suitable for clinical care nor its intended use. It is intended solely for the purpose of improving research effectiveness and efficiency. So, we strongly suggest against using it as a primary tool for any medical or diagnostic purposes.</div>
                    </div>
                    <div className="flex justify-end w-full">
                        <button onClick={() => {navigate('/synaptiquery')}} className="bg-bgblue text-white rounded-3xl" style={{height: '56px', width: '343px', fontSize: '16px', fontWeight: 'bold'}}>I agree</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home