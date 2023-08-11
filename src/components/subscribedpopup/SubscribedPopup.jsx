function SubscribedPopup() {

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[35vh]">
            <div className="w-64 h-44 bg-bglightblue rounded-xl shadow-xl flex flex-col gap-3 items-center justify-center">
                <img alt="congratulations" src="/src/assets/icons/congratulations.png" style={{height: '35px'}} />
                <div className="text-bgblue text-sm font-medium">Congratulations!</div>
                <div className="text-xs text-center px-10">You have been successfully subscribed the Premium Plan</div>
            </div>
        </div>
    )
}

export default SubscribedPopup