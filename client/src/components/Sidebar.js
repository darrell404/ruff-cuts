import useHighlightSelected from "./hooks/useHighlightSelected"
import { AppContext } from './context/Context' 
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const { showdashboard } = useContext(AppContext)
    const { select, clickEvent } = useHighlightSelected(showdashboard)
    const navigate = useNavigate()

    return (
        <div className="col-span-1">
            <div className="flex-col sidebar border-2 pt-24 justify-self-center h-full border-red-200 rounded">
                <ul>
                    <li onClick={() => navigate('/dashboard')} name="Pets" className={`text-center w-3/4 m-auto border rounded my-4 py-2 cursor-pointer ${select === 'Pets' ? "bg-red-400" : "bg-red-200"}`}>Home</li>
                    <li onClick={() => navigate('/dashboard/pets')} name="Pets" className={`text-center w-3/4 m-auto border rounded my-4 py-2 cursor-pointer ${select === 'Pets' ? "bg-red-400" : "bg-red-200"}`}>Pets</li>
                    <li onClick={() => navigate('/dashboard/bookings')} name="Bookings" className={`text-center w-3/4 m-auto border rounded my-4 py-2 cursor-pointer ${select === 'Bookings' ? "bg-red-400" : "bg-red-200"}`}>Bookings</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar