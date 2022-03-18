import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from './context/Context'
import useValidateData from './hooks/useValidateData'
import useGetServices from './hooks/useGetServices'
import useFetchPets from './hooks/useFetchPets'
import useSetTime from './hooks/useSetTime'
import useFetchBookings from './hooks/useFetchBookings'

export default function BookAppointment() {

const { showdashboard } = useContext(AppContext)
const [ dashboard, setDashboard ] = showdashboard;
const { changeInputData, addBooking, minimumDate, disableButton, inputFields } = useValidateData(dashboard)
const { services, servicesName } = useGetServices()
const times = useSetTime(25, 1100, 1300)
const { pets, addPets } = useFetchPets()
const bookings = useFetchBookings()
const [loading, setLoading] = useState(true)

const handleSubmitBooking = (event) => {
    event.preventDefault()
    addBooking()
}

function showBookingForm() {
    document.getElementById("view-booking").classList.add("hidden")
    document.getElementById("add-booking").classList.remove("hidden")
}

function hideBookingForm() {
    document.getElementById("add-booking").classList.add("hidden")
    document.getElementById("view-booking").classList.remove("hidden")
}
    return (
        <div className="dashboard col-span-4 p-8">
            <div className="col-span-4 p-8" id="view-booking">
                <div className="pt-10 font-bold"> Your Appointments </div>
                <div>
                    <ul>
                        <p className='pt-4'>You have no upcoming appointments</p>
                    </ul>
                </div>
                <button onClick={showBookingForm} className="py-2 mt-4 w-1/5 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border">Book Now</button>
            </div>
            <div className="col-span-4 p-8 hidden" id="add-booking">
                <h2 className="font-bold pb-4">Book an appointment</h2>
                <form className="form-container flex flex-col space-y-4" onSubmit={handleSubmitBooking}>
                    <select onChange={changeInputData} name="name" defaultValue="" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name">
                        <option disabled hidden value="">Select pet</option>
                        {pets.length === 0 ? <option>No dog registered</option> :
                        pets && pets.map(pet => 
                            <option key={pet} value={pet}>{pet}</option>
                            )
                        }
                    </select>
                    <select onChange={changeInputData} name="service" defaultValue="" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Service">
                    <option disabled hidden value="">Select service</option>
                        {servicesName.map(serviceName => <option key={serviceName}>{serviceName}</option>)}    
                    </select>
                    <input onChange={changeInputData} name="date" min={minimumDate} data-input="true" type="date" id="appointment-date" className="border rounded border-red-400 w-1/2 p-2"></input>
                    <select onChange={changeInputData} name="time" defaultValue="" data-input="true" type="time" id="appointment-time" className="border rounded border-red-400 w-1/2 p-2">
                    <option disabled hidden value="">Select time</option>
                        {times.map(time => <option key={time}>{time}</option>)}    
                    </select>
                    <button className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Book Now</button>
                    <button className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={hideBookingForm}>Cancel</button>
                </form>
            </div>
        </div>
    )
}
