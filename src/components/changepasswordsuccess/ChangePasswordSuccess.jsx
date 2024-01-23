import { CheckCircleIcon } from "@heroicons/react/24/solid"

function ChangePasswordSuccess() {

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[35vh]">
            <div className="w-64 h-44 bg-bglightblue rounded-xl shadow-xl flex flex-col gap-3 items-center justify-center">
                <CheckCircleIcon className="h-10 w-10 text-bgblue" />
                <div className="text-bgblue text-sm font-medium">Success!</div>
                <div className="text-xs text-center px-10">Password changed successfully!</div>
            </div>
        </div>
    )
}

export default ChangePasswordSuccess