import React, { useContext } from 'react'
import useFetchBookings from '../hooks/useFetchBookings'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router'

export default function BookingPage() {

const { loading, bookings } = useFetchBookings()
const navigate = useNavigate()
    return (
        <>
        <div className="dashboard col-span-4 p-8">
            { loading ? <Loading /> :
            <div>
            <div className="col-span-4 p-8" id="view-booking">
                <div className="pt-10 font-bold"> Your Appointments </div>
                <div>
                    { bookings.length === 0 ?
                    <ul>
                        <p className='pt-4'>You have no upcoming appointments</p>
                    </ul> :
                    <table className="py-2 px-4 bookings-table">
                        <thead>
                            <tr>
                                <td className='py-1 px-4 font-bold'>Pet Name</td>
                                <td className='py-1 px-4 font-bold'>Breed</td>
                                <td className='py-1 px-4 font-bold'>Appointment Date</td>
                                <td className='py-1 px-4 font-bold'>Appointment Time</td>
                                <td className='py-1 px-4 font-bold'>Status</td>
                            </tr>
                            {bookings && bookings.map(booking => 
                                <tr key={booking.booking_id}>
                                    <td className='py-1 px-4'>{booking.pet_name}</td>
                                    <td className='py-1 px-4'>{booking.pet_breed}</td>
                                    <td className='py-1 px-4'>{booking.booking_date}</td>
                                    <td className='py-1 px-4'>{booking.booking_time}</td>
                                </tr>
                                )}
                        </thead>
                    </table>
                     }
                </div>
                <button onClick={() => navigate('/dashboard/bookings/add')} className="py-2 mt-4 w-1/5 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border">Book Now</button>
            </div> 
            </div> }
        </div>
        </>
    )
}
