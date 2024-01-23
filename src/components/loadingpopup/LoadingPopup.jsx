import BlueCircularLoader from "../bluecircularloader/BlueCircularLoader"

function LoadingPopup() {

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[35vh] z-50">
            <div className="w-64 h-44 bg-bglightblue rounded-xl shadow-xl flex items-center justify-center">
                <BlueCircularLoader height="75" width="75" />
            </div>
        </div>
    )
}

export default LoadingPopup