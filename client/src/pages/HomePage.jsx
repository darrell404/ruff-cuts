import useFetchUserInfo from '../hooks/useFetchUserInfo'
import useFetchBookings from '../hooks/useFetchBookings'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const { user, userDataLoading } = useFetchUserInfo()
  const [loading, setLoading]= useState(true)
  const { bookings } = useFetchBookings()
  const [upcomingBooking, setUpcomingBooking] = useState({})
  const now = new Date().toLocaleString()

  useEffect(() => {
    if(bookings.length !== 0) {
      for (let booking of bookings) {
        let bookingTime = new Date(`${booking.booking_date} ${booking.booking_time}`).toLocaleString()
        if (bookingTime > now) {
          setUpcomingBooking(booking)
          setLoading(false)
          return
        }
      }
      setLoading(false)
    }
  }, [bookings])

return (
    <>
    {(loading || userDataLoading) ? <Loading /> : 
    <div className="dashboard col-span-4 border border-slate-200">
      <div className="bg-white mx-auto p-8">
        <h1 className='text-3xl text-center'>Welcome, {user.first_name}!</h1>
        <p>
          Book appointments with us now
        </p>
        <h2>Your upcoming booking</h2>
        <div> 
          {Object.keys(upcomingBooking).length === 0 ?
          <p>You have no upcoming bookings</p> :
          <p>{upcomingBooking.booking_date} {upcomingBooking.booking_time}</p>
          }
        </div>
      </div>
      </div>
    }
    </>
  )
}