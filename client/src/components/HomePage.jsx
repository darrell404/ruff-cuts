import useFetchUserInfo from './hooks/useFetchUserInfo'
import useFetchBookings from './hooks/useFetchBookings'
import Loading from './Loading'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const { userData, userDataLoading } = useFetchUserInfo()
  const { bookings } = useFetchBookings()
  const [upcomingBooking, setUpcomingBooking] = useState({})
  const now = new Date().toLocaleString()

  useEffect(() => {
    if(bookings.length !== 0) {
      for (let booking of bookings) {
        console.log(booking)
        let bookingTime = new Date(`${booking.booking_date} ${booking.booking_time}`).toLocaleString()
        if (bookingTime > now) {
          console.log(bookingTime)
          setUpcomingBooking(booking)
          break
        }
      }
    }
  }, [bookings])

return (
  <div className="dashboard col-span-4 p-8">
    {userDataLoading ? <Loading /> : 
    <>
      <h1 className='text-3xl text-center'>Welcome, {userData.first_name}!</h1>
      <p>
        Book appointments with us now {console.log(bookings)}
      </p>
      <h2>Your upcoming booking</h2>
      <div>
        {Object.keys(upcomingBooking).length === 0 ?
        <p>You have no upcoming bookings</p> :
        <p>{upcomingBooking.booking_date} {upcomingBooking.booking_time}</p>
        }
      </div>
    </>
    }
    </div>
  )
}
