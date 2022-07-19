import { useLocation, useNavigate, useParams } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <div className="col-span-1">
            <div className="flex-col sidebar bg-white pt-24 justify-self-center h-full">
                <ul>
                    <li onClick={() => navigate('/dashboard')} name="Home" className={`pl-5 text-left m-auto my-4 py-3 cursor-pointer hover:text-red-400 ${pathname === '/dashboard' ? 'bg-red-200 text-red-600' : ''}`}><i className="fa-solid fa-house-user pr-4"></i>Home</li>
                    <li onClick={() => navigate('/dashboard/pets')} name="Pets" className={`pl-5 text-left m-auto my-4 py-3 cursor-pointer hover:text-red-400 ${pathname.includes('/dashboard/pets') ? 'bg-red-200 text-red-600' : ''}`}><i className="fa-solid fa-paw pr-4"></i> Pets</li>
                    <li onClick={() => navigate('/dashboard/bookings')} name="Bookings" className={`pl-5 text-left m-auto my-4 py-3 cursor-pointer hover:text-red-400 ${pathname.includes('/dashboard/bookings') ? 'bg-red-200 text-red-600' : ''}`}><i className="fa-solid fa-calendar-days pr-4"></i>Bookings</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar