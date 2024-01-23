import logo from "../../assets/logo/NeuroChat_Logo.png"
import brain from "../../assets/icons/brain-icon.svg"

function WelcomeScreen() {

    return (
        <div className="w-screen h-screen bg-bgblue text-white flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <img alt="neurochat" src={logo} style={{ height: '162px', width: '162px'}} />
                <div className="flex flex-col">
                    <div style={{fontSize: '36px', fontWeight: 'bold'}}>NeuroChat.AI</div>
                    <div className="text-end" style={{fontSize: '22px', fontWeight: 'bold'}}>(beta)</div>
                </div>
            </div>
            <div className="flex flex-col py-20 text-center items-center">
                <div style={{fontSize: '22px', fontWeight: 'bold'}}>Disclaimer</div>
                <div className="pt-8" style={{fontSize: '12px'}}>This product is solely intended for research purposes</div>
                <div className="pt-3" style={{fontSize: '12px'}}>and is not suitable for clinical use.</div>
                <div className="pt-8" style={{fontSize: '15px'}}>Powered by:</div>
                <div className="flex flex-row items-center justify-center gap-1 mt-5 border border-white rounded-lg" style={{height: '37px', width: '175px'}}>
                    <img alt="brain" src={brain} style={{height: '30px', width: '38px'}} />
                    <div style={{fontSize: '15px', fontWeight: 'bold'}}>NeuroCare.AI</div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen