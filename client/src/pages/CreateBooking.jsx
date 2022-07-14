import { useNavigate } from 'react-router'
import useValidateData from '../hooks/useValidateData'
import useGetServices from '../hooks/useGetServices'
import useFetchPets from '../hooks/useFetchPets'
import useSetTime from '../hooks/useSetTime'

export default function CreateBooking() {
    const navigate = useNavigate()
    const { changeInputData, addBooking, minimumDate, disableButton } = useValidateData()
    const { pets } = useFetchPets()
    const { servicesName } = useGetServices()
    const times = useSetTime(25, 1100, 1300)

    const handleSubmitBooking = (event) => {
        event.preventDefault()
        addBooking()
    }

    return (
    <div className="col-span-4 p-8" id="add-booking">
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
            <select onChange={changeInputData} name="service" defaultValue="" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Service">
            <option disabled hidden value="">Select service</option>
                {servicesName.map(serviceName => <option key={serviceName}>{serviceName}</option>)}    
            </select>
            <input onChange={changeInputData} name="date" min={minimumDate} data-input="true" type="date" id="appointment-date" className="border rounded border-red-400 w-1/2 p-2"></input>
            <select onChange={changeInputData} name="time" defaultValue="" data-input="true" type="time" id="appointment-time" className="border rounded border-red-400 w-1/2 p-2">
            <option disabled hidden value="">Select time</option>
                {times.map(time => <option key={time}>{time}</option>)}    
            </select>
            <button type="submit" onClick={handleSubmitBooking} className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Book Now</button>
            <button type="reset" className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={() => navigate('/dashboard/bookings')}>Cancel</button>
        </form>
    </div>
  )
}
