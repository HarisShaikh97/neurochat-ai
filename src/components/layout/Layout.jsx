import PropTypes from 'prop-types'
import Header from "./header/Header"
import SideNav from "./sidenav/SideNav"

function Layout({children}) {

    return (
        <div className="flex flex-row w-full h-fit">
            <SideNav />
            <div className="flex flex-col w-full min-h-full">
                <Header />
                <main className="flex flex-col w-full h-full">{children}</main>
            </div>
        </div>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}