import { useContext } from "react"
import PropTypes from "prop-types"
import { MyContext } from "../../context/context"

function WaitingMessage({ query, modelType }) {

    const { state } = useContext(MyContext)

    const currentDate = new Date()

    // console.log(currentUser, currentDate?.toTimeString()?.slice(0, 5))

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-5 justify-end">
                <div className="flex flex-col pt-2 gap-3">
                    <div className="flex flex-row gap-3 items-center font-semibold">
                        <div>{state?.user_info?.firstName?.length > 0 && state?.user_info?.lastName?.length > 0 ? `${state?.user_info?.firstName} ${state?.user_info?.lastName}` : state?.user_info?.email}</div>
                        <div className="text-xs text-gray-500">{currentDate?.toTimeString()?.slice(0, 5)}</div>
                    </div>
                    <div className="text-sm font-light">{query}</div>
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
                    <img alt={modelType} src={`/src/assets/icons/${modelType}.svg`} style={{height: '40px'}} />
                </div>
                <div className="flex-1 flex flex-col pt-2 gap-3">
                    <div className="flex flex-row items-center gap-5 font-semibold">
                        {modelType === 'synaptiquery' && <div>SynaptiQuery</div>}
                        {modelType === 'chatgpt' && <div>ChatGPT</div>}
                        {modelType === 'claudeai' && <div>Claude.AI</div>}
                        {modelType === 'palm2' && <div>PaLM2</div>}
                        {modelType === 'falcon' && <div>Falcon40B</div>}
                        <div className="text-xs text-gray-500">{currentDate?.toTimeString()?.slice(0, 5)}</div>
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