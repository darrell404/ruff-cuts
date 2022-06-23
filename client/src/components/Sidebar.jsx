import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate()

    return (
        <div className="col-span-1">
            <div className="flex-col sidebar bg-red-400 border-2 pt-24 justify-self-center h-full border-red-200 rounded">
                <ul>
                    <li onClick={() => navigate('/dashboard')} name="Home" className={`text-center w-3/4 m-auto border-4 bg-red-200 rounded my-4 py-2 cursor-pointer`}>Home</li>
                    <li onClick={() => navigate('/dashboard/pets')} name="Pets" className={`text-center w-3/4 m-auto border-4 bg-red-200 rounded my-4 py-2 cursor-pointer`}>Pets</li>
                    <li onClick={() => navigate('/dashboard/bookings')} name="Bookings" className={`text-center w-3/4 m-auto border-4 bg-red-200 rounded my-4 py-2 cursor-pointer`}>Bookings</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar