import { useEffect, useState, useContext } from "react"
import { AppContext } from "../context/Context"

const useFetchBookings = () => {

const { appointments } = useContext(AppContext)
const [bookings, setBookings] = appointments
const [loading, setLoading] = useState(true)

useEffect(() => {
    const fetchBookingsFromAPI = async() => {
        try {
            const fetchbookings = await fetch("/api/bookings/all")
            const result = await fetchbookings.json()
            for (var data in result) {
                var date = new Date(result[data].booking_date)
                result[data].booking_date = date.toDateString()
            }
            setBookings(result)
            setLoading(false)
        }
        catch(err) {
            console.log(err)
        }
    }
    fetchBookingsFromAPI()
}, []) 
   
    return { bookings, loading }
}

export default useFetchBookings