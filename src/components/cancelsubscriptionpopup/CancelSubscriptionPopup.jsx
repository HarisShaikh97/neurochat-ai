import PropTypes from "prop-types"

function CancelSubscriptionPopup({handleCancel, handleConfirm}) {

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[35vh]">
            <div className="w-72 h-44 bg-bglightblue rounded-xl shadow-xl flex flex-col gap-10 items-center justify-center">
                <div className="text-bgblue text-sm font-medium text-center px-12">Are you sure you want to cancel the subscription?</div>
                <div className="flex flex-row gap-5 justify-between">
                    <button onClick={handleCancel} className="rounded-full bg-white border border-gray-300 text-sm h-8 w-20" >Cancel</button>
                    <button onClick={handleConfirm} className="rounded-full bg-bgblue text-white text-sm h-8 w-20" >Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default CancelSubscriptionPopup

CancelSubscriptionPopup.propTypes = {
    handleConfirm: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
}