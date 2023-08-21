import { useContext } from "react"
import PropTypes from "prop-types"
import { MyContext } from "../../context/context"
import synaptiquery from "../../assets/icons/synaptiquery.svg"
import chatgpt from "../../assets/icons/chatgpt.svg"
import claudeai from "../../assets/icons/claudeai.svg"
import palm2 from "../../assets/icons/palm2.svg"
import falcon from "../../assets/icons/falcon.svg"

function WaitingMessage({ query, modelType }) {

    const { state } = useContext(MyContext)

    const currentDate = new Date()

    // console.log(currentUser, currentDate?.toTimeString()?.slice(0, 5))

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-5 justify-end">
                <div className="flex flex-col pt-2 gap-3">
                    <div className="flex flex-row gap-3 items-center justify-end">
                    <div className="font-bold" style={{fontSize: '14px'}}>{state?.user_info?.firstName?.length > 0 && state?.user_info?.lastName?.length > 0 ? `${state?.user_info?.firstName} ${state?.user_info?.lastName}` : state?.user_info?.email}</div>
                        <div className="text-gray-500" style={{fontSize: '10px'}}>{currentDate?.toTimeString()?.slice(0, 5)}</div>
                    </div>
                    <div style={{fontSize: '16px'}}>{query}</div>
                </div>
                <div>
                    {state?.user_info?.profilePicUrl?.length > 0 ? (
                        <img alt="profile-picture" src={state?.user_info?.profilePicUrl} className="rounded-full" style={{height: '40px', width: '40px'}} />
                    ) : (
                        <div className="rounded-full bg-gradient-to-br from-[#B4AF9D] to-[#737063]" style={{height: '40px', width: '40px'}} />
                    )}
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    {modelType === 'synaptiquery' && <img alt={modelType} src={synaptiquery} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'chatgpt' && <img alt={modelType} src={chatgpt} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'claudeai' && <img alt={modelType} src={claudeai} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'palm2' && <img alt={modelType} src={palm2} style={{height: '40px', width: '40px'}} />}
                    {modelType === 'falcon' && <img alt={modelType} src={falcon} style={{height: '40px', width: '40px'}} />}
                </div>
                <div className="flex-1 flex flex-col pt-2 gap-3">
                    <div className="flex flex-row items-center gap-5">
                        {modelType === 'synaptiquery' && <div className="font-semibold" style={{fontSize: '14px'}}>SynaptiQuery</div>}
                        {modelType === 'chatgpt' && <div className="font-semibold" style={{fontSize: '14px'}}>ChatGPT</div>}
                        {modelType === 'claudeai' && <div className="font-semibold" style={{fontSize: '14px'}}>Claude.AI</div>}
                        {modelType === 'palm2' && <div className="font-semibold" style={{fontSize: '14px'}}>PaLM2</div>}
                        {modelType === 'falcon' && <div className="font-semibold" style={{fontSize: '14px'}}>Falcon40B</div>}
                        <div className="text-gray-500" style={{fontSize: '10px'}}>{currentDate?.toTimeString()?.slice(0, 5)}</div>
                    </div>
                    <div className="text-sm font-light">
                        {`${modelType === 'synaptiquery' ? "SynaptiQuery" : ''}${modelType === 'chatgpt' ? "ChatGPT" : ''}${modelType === 'claudeai' ? "Claude.AI" : ''}${modelType === 'palm2' ? "PaLM2" : ''}${modelType === 'falcon' ? "Falcon40B" : ''} is thinking.....`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingMessage

WaitingMessage.propTypes = {
    query: PropTypes.string.isRequired,
    modelType: PropTypes.string.isRequired
}