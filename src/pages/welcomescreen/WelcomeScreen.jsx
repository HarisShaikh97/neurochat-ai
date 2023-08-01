function WelcomeScreen() {

    return (
        <div className="w-screen h-screen bg-bgblue text-white flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <img alt="neurochat" src="/src/assets/logo/NeuroChat_Logo.png" style={{ height: '175px', width: '175px'}} />
                <div className="flex flex-col">
                    <div className="text-4xl font-semibold">NeuroChat.Ai</div>
                    <div className="text-end text-2xl font-semibold">(beta)</div>
                </div>
            </div>
            <div className="flex flex-col py-20 text-center items-center">
                <div className="text-3xl font-semibold">Disclaimer</div>
                <div className="text-sm pt-8">This product is solely intended for research purposes</div>
                <div className="text-sm pt-3">and is not suitable for clinical use.</div>
                <div className="text-xl pt-8">Powered by:</div>
                <div className="flex flex-row items-center gap-3 mt-5 px-3 py-1 border border-white rounded-lg">
                    <img alt="brain" src="/src/assets/icons/brain-icon.svg" style={{height: '35px', width: '35px'}} />
                    <div className="font-semibold">NeuroCare.Ai</div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen