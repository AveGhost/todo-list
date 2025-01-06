import Sidebar from "./components/content/sidebar/sidebar.component"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className='grid grid-cols-[250px_1fr] p-4'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout