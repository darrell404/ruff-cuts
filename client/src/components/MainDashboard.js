import {useContext} from 'react'
import { AppContext } from './context/Context'
import useValidateData from './hooks/useValidateData'
import useFetchPets from './hooks/useFetchPets'
import useSetTime from './hooks/useSetTime'
import useGetServices from './hooks/useGetServices'
import PetInfo from './PetInfo'

function MainDashboard() {

    const { showdashboard } = useContext(AppContext)
    const [ dashboard ] = showdashboard;
    const { changeInputData, disableButton, inputFields } = useValidateData(dashboard)
    const { pets, addPets } = useFetchPets()
    const { services, servicesName } = useGetServices()
    const times = useSetTime(25, 1100, 1300)

    const handleSubmit = (event) => {
        event.preventDefault()
        addPets(inputFields)
    }

    if (dashboard === "Pets") {
        return ( 
            <div className="dashboard col-span-4 p-8"> {console.log(servicesName)}
                <h2 className="font-bold pb-4">Add your pets</h2>
                <form className="form-container flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <input onChange={changeInputData} name="name" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
                    <input onChange={changeInputData} name="breed" className="border rounded border-red-400 w-1/2 p-2" placeholder="Breed"/>
                    <input onChange={changeInputData} name="age" className="border rounded border-red-400 w-1/2 p-2" placeholder="Age"/>
                    <button className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Save</button>
                </form>
                <div className="pt-10 font-bold">Your pets</div>
                <div>
                    <ul>
                        {pets.length === 0 ? <p className='pt-4'>You have no registered pets</p> : pets && pets.map(pet => 
                            <div className='w-60 border p-4 rounded m-2' key={pet}>
                                <h3 className='m-auto text-center w-16 pb-2'>{pet}</h3>
                                <div className='flex gap-x-2 justify-center'>
                                    <button className='border p-2 px-4 rounded bg-slate-200'>Info</button>
                                    <button className='border p-2 px-4 rounded bg-red-400'>Appointments</button>
                                </div>
                            </div>
                            )}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className="dashboard col-span-4 p-8">
                <h2 className="font-bold pb-4">Book an appointment</h2>
                <form className="form-container flex flex-col space-y-4" >
                    <select name="name" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name">
                        {pets.length === 0 ? <option>No dog registered</option> :
                        pets && pets.map(pet => 
                            <option key={pet} value={pet}>{pet}</option>
                         )
                        }
                    </select>
                    <select onChange={changeInputData} name="service" className="border rounded border-red-400 w-1/2 p-2" placeholder="Service">
                        {servicesName.map(serviceName => <option key={serviceName}>{serviceName}</option>)}    
                    </select>
                    <input onChange={changeInputData} name="date" type="date" id="appointment-date" className="border rounded border-red-400 w-1/2 p-2"></input>
                    <select onChange={changeInputData} name="time" type="time" id="appointment-time" className="border rounded border-red-400 w-1/2 p-2">
                        {times.map(time => <option key={time}>{time}</option>)}    
                    </select>
                    <button className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Book Now</button>
                </form>
                <div className="pt-10 font-bold"> Your Appointments </div>
                <div>
                    <ul>
                        <p className='pt-4'>You have no upcoming appointments</p>
                    </ul>
                </div>
            </div>
    )
}

export default MainDashboard
