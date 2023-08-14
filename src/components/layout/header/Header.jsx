import logo from "../../../assets/logo/NeuroChat_Logo.png"

function Header() {

    return (
        <div className="h-28 px-10 w-full flex items-center justify-start">
            <div className="flex flex-row gap-3 items-center py-1 px-5 rounded-full bg-bgblue">
                <img src={logo} alt="logo" style={{height: '35px', width: '35px'}} />
                <div className="text-lg text-white font-semibold">NeuroChat.AI</div>
            </div>
        </div>
    )
}

export default Header