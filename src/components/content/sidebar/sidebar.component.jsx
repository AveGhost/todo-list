import { Icon } from "@iconify/react/dist/iconify.js"
import { useContext } from "react"
import { ModalStateContext } from "../../../context/modal-state.context"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
    const { isTaskOpen, setIsTaskOpen } = useContext(ModalStateContext)
    return (
        <div className="flex flex-col justify-between h-[250px] items-center">
            {useLocation().pathname === '/'
            ?
                <button className="flex items-center justify-center gap-2 bg-orange-600 rounded-lg max-w-[180px] w-full p-4 font-medium" onClick={() => setIsTaskOpen(!isTaskOpen)}>
                    <Icon icon="material-symbols:add" width="18" height="18" />
                    Add task
                </button>
            :
                <Link to='/' className="flex items-center justify-center gap-2 bg-orange-600 rounded-lg max-w-[180px] w-full p-4 font-medium">Home</Link>
            }
            <Link to="/completed" className="rounded-lg text-center max-w-[180px] p-4 border-teal-900 border w-full hover:bg-teal-900 hover:shadow-[0_0_10px_4px] hover:shadow-teal-900 transition duration-300">Completed</Link>
            <Link to="/deleted" className="rounded-lg text-center max-w-[180px] p-4 border-rose-900 border w-full hover:bg-rose-900 hover:shadow-[0_0_10px_4px] hover:shadow-rose-900 transition duration-300">Deleted</Link>
        </div>
    )
}

export default Sidebar