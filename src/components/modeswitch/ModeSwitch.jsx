// import { useContext } from "react"
// import { MyContext } from "../../context/context"
// import { SunIcon } from "@heroicons/react/24/solid"
// import { MoonIcon } from "@heroicons/react/24/solid"


function ModeSwitch() {

    // const {state, dispatch} = useContext(MyContext)

    return (
        <>
        {/* <div className="bg-gray-100 rounded-full mt-5 w-16 p-1 flex flex-row items-center justify-between">
            {state?.mode === 'dark' ? (
                <button onClick={() => {
                    dispatch({type: 'SWITCH_MODE'})
                }}>
                    <SunIcon className="h-4 w-4 text-bgblue" />
                </button>
            ) : (
                <div className="rounded-full bg-bgblue p-1">
                    <SunIcon className="h-4 w-4 text-white" />
                </div>
            )}
            {state?.mode === 'dark' ? (
                <div className="rounded-full bg-bgblue p-1">
                    <MoonIcon className="h-4 w-4 text-white" />
                </div>
            ) : (
                <button onClick={() => {
                    dispatch({type: 'SWITCH_MODE'})
                }}>
                    <MoonIcon className="h-4 w-4 text-bgblue" />
                </button>
            )}
        </div> */}
        </>
    )
}

export default ModeSwitch