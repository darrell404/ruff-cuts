import { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import useValidateData from '../hooks/useValidateData'
import useGetServices from '../hooks/useGetServices'
import useFetchPets from '../hooks/useFetchPets'
import useSetTime from '../hooks/useSetTime'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Context'

export default function CreateBooking() {
    const navigate = useNavigate()
    const time = useContext(AppContext)
    const [ availableTime, setAvailableTime ] = useState([])
    const { changeInputData, addBooking, minimumDate, disableButton } = useValidateData()
    const { pets } = useFetchPets()
    const { servicesName } = useGetServices()
    const times = useSetTime(25, 1100, 1300)
    const [bookingInput, setBookingInput] = useState('')
    const [dateInput, setDateInput] = useState('')
    const previousInputValues = useRef({bookingInput, dateInput})

    const checkAvailableSlots = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"date": dateInput})
        }

        const checkAvailability = await fetch('/api/bookings/availability', options)
        const response = await checkAvailability.json()
        const bookedTimes = []
        response.forEach(bookTime => bookedTimes.push(bookTime.booking_time))
        setAvailableTime(times.filter(time => !bookedTimes.includes(time)))
    }

    useEffect(() => {
        previousInputValues.current.bookingInput = bookingInput
        previousInputValues.current.dateInput = dateInput
        if (previousInputValues.current.bookingInput == '' || previousInputValues.current.dateInput == '') {
            return
        }
        else {
            checkAvailableSlots()
        }
    }, [bookingInput, dateInput])

    const handleSubmitBooking = (event) => {
        event.preventDefault()
        addBooking()
    }

    const changedInput = (e) => {
        changeInputData(e)
        if (e.target.name === 'service') {
            setBookingInput(e.target.value)
        }
        if (e.target.name === 'date') {
            setDateInput(e.target.value)
        }
    }

    return (
    <div className="col-span-4 p-8 bg-white border border-slate-200" id="add-booking">
        <h2 className="font-bold pb-4">Book an appointment</h2>
        <form className="form-container flex flex-col space-y-4">
            <select onChange={changeInputData} name="name" defaultValue="" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name">
                <option disabled hidden value="">Select pet</option>
                {pets.length === 0 ? <option>No dog registered</option> :
                pets && pets.map(pet => 
                    <option key={pet.pet_name} value={pet.pet_name}>{pet.pet_name}</option>
                    )
                }
            </select>
            <select onChange={(e) => changedInput(e)} name="service" defaultValue="" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Service">
            <option disabled hidden value="">Select service</option>
                {servicesName.map(serviceName => <option key={serviceName}>{serviceName}</option>)}    
            </select>
            <input onChange={(e) => changedInput(e)} name="date" min={minimumDate} data-input="true" type="date" id="appointment-date" className="border rounded border-red-400 w-1/2 p-2"></input>
            {
                previousInputValues.current.bookingInput == '' && previousInputValues.current.dateInput == '' ? 
                <p>Please select a service and date above</p> :
                availableTime.length == 0
                    ?
                    <p className='py-2'>There are no available bookings for this day</p> :
                    <select onChange={changeInputData} name="time" defaultValue="" data-input="true" type="time" id="appointment-time" className="border rounded border-red-400 w-1/2 p-2">
                    <option disabled hidden value="">Select time</option>
                        {availableTime.map(time => <option key={time}>{time}</option>)}    
                    </select>
            }
            <button type="submit" onClick={handleSubmitBooking} className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Book Now</button>
            <button type="reset" className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={() => navigate('/dashboard/bookings')}>Cancel</button>
        </form>
    </div>
  )
}
