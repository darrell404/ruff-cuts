import {useContext} from 'react'
import { AppContext } from './context/Context'
import useUpdatePets from './hooks/useUpdatePets'
import useValidateData from './hooks/useValidateData'
import useFetchPets from './hooks/useFetchPets'

function MainDashboard() {

    const { clickAddPet } = useUpdatePets()
    const { showdashboard } = useContext(AppContext)
    const [ dashboard ] = showdashboard;
    const { changeInputData, disableButton} = useValidateData(dashboard)
    const pets = useFetchPets()
    const testpet = []

    if (dashboard === "Pets") {
        return (
            
            <div className="dashboard col-span-4 p-8">
                <h2 className="font-bold pb-4">Add your pets</h2>
                <form className="form-container flex flex-col space-y-4">
                    <input onChange={changeInputData} name="name" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
                    <input onChange={changeInputData} name="breed" className="border rounded border-red-400 w-1/2 p-2" placeholder="Breed"/>
                    <input onChange={changeInputData} name="age" className="border rounded border-red-400 w-1/2 p-2" placeholder="Age"/>
                    <button onClick={clickAddPet} className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Save</button>
                </form>
                <div className="pt-10 font-bold">Your pets</div>
                <div>
                    <ul>
                        {pets.length === 0 ? <p className='pt-4'>You have no registered pets</p> : pets && pets.map(pet => 
                            <li key={pet}>{pet}</li>
                            )}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className="dashboard col-span-4 p-8">
                <h2 className="font-bold pb-4">Book an appointment</h2>
                <form className="form-container flex flex-col space-y-4">
                    <select name="name" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name">
                        {pets.length === 0 ? <option>No dog registered</option> :
                        pets && pets.map(pet => 
                            <option key={pet} value={pet}>{pet}</option>
                         )
                        }
                    </select>
                    <input onChange={changeInputData} name="name" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
                    <input onChange={changeInputData} name="breed" className="border rounded border-red-400 w-1/2 p-2" placeholder="Service"/>
                    <input onChange={changeInputData} name="date" type="date" id="appointment-date" className="border rounded border-red-400 w-1/2 p-2"></input>
                    <input onChange={changeInputData} name="time" type="time" id="appointment-date" className="border rounded border-red-400 w-1/2 p-2"></input>
                    <button onClick={clickAddPet} className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Book Now</button>
                </form>
                <div className="pt-10 font-bold"> Your Appointments</div>
                <div>
                    <ul>
                        <p className='pt-4'>You have no upcoming appointments</p>
                    </ul>
                </div>
            </div>
    )
}

export default MainDashboard
