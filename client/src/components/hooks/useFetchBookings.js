import { useEffect, useState } from "react"
import { AppContext } from "../context/Context"

const useFetchBookings = () => {

const [bookings, setBookings] = useState([])

useEffect(() => {
    const fetchBookingsFromAPI = async() => {
        try {
            const fetchbookings = await fetch("/api/bookings/all")
            const result = await fetchbookings.json()
            setBookings(result)
        }
        catch(err) {
            console.log(err)
        }
    }
    fetchBookingsFromAPI()
}, []) 
   
    return bookings
}

export default useFetchBookings