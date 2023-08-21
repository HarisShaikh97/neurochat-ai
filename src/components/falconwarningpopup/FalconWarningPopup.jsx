import PropTypes from "prop-types"
import { XMarkIcon } from "@heroicons/react/24/solid"
import warning from "../../assets/icons/warning.png"

function FalconWarningPopup({setShowWarningMessage}) {

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[25vh] z-50">
            <div className="bg-bglightblue rounded-xl shadow-xl flex flex-col items-center p-5" style={{height: '428px', width: '341px'}}>
                <div className="w-full flex justify-end">
                    <button onClick={() => {setShowWarningMessage(false)}}>
                        <XMarkIcon className="h-6 w-6 text-bgblue" />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 h-full w-full">
                    <img alt="warning" src={warning} style={{height: '29px'}} />
                    <div style={{fontSize: '16px', fontWeight: 'bold', color: '#DEA30E'}}>Attention Users</div>
                    <div className="text-center text-bgblue px-5" style={{fontSize: '14px'}}>Please note that Falcon40B is currently in the experimental phase. During this time, you may experience slower response times and a potential decrease in the overall quality of responses. Rest assured, we are actively working on improving the functionality of Falcon40B to enhance your experience. Thank you for your patience and understanding.</div>
                </div>
            </div>
        </div>
    )
}

export default FalconWarningPopup

FalconWarningPopup.propTypes = {
    setShowWarningMessage: PropTypes.func.isRequired
}