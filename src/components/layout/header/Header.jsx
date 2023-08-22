import logo from "../../../assets/logo/NeuroChat_Logo.png"

function Header() {

    return (
        <div className="h-28 px-10 w-full flex items-center justify-start">
            <div className="flex flex-row gap-1 items-center justify-center rounded-full bg-bgblue" style={{height: '37px', width: '160px'}}>
                <img src={logo} alt="logo" style={{height: '31px', width: '31px'}} />
                <div className="text-white" style={{fontSize: '15px', fontWeight: 'bold'}}>NeuroChat.AI</div>
            </div>
        </div>
    )
}

export default Header