import {useContext} from 'react'
import { AppContext } from './context/Context'
import useUpdatePets from './hooks/useUpdatePets'

function MainDashboard() {

    const { updatePetDataObject, clickAddPet, petData, pets } = useUpdatePets()
    const { showdashboard } = useContext(AppContext)
    const [dashboard] = showdashboard;

    if (dashboard === "Pets") {
        return (
            
            <div className="dashboard col-span-4 p-8">
                <h2 className="font-bold pb-4">Add your pets</h2>
                <form className="form-container flex flex-col space-y-4">
                    <input onChange={updatePetDataObject} name="name" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
                    <input onChange={updatePetDataObject} name="breed" className="border rounded border-red-400 w-1/2 p-2" placeholder="Breed"/>
                    <input onChange={updatePetDataObject} name="age" className="border rounded border-red-400 w-1/2 p-2" placeholder="Age"/>
                    <button onClick={clickAddPet} className="py-2 w-1/4 list-none bg-red-400 font-bold rounded border">Save</button>
                </form>
                <div className="pt-10"> Your pets</div>
                <div>
                    <ul>
                        {pets && pets.map(pet => 
                            <li>{pet.name}</li>
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
                    <input onChange={updatePetDataObject} name="name" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
                    <input onChange={updatePetDataObject} name="breed" className="border rounded border-red-400 w-1/2 p-2" placeholder="Breed"/>
                    <input onChange={updatePetDataObject} name="age" className="border rounded border-red-400 w-1/2 p-2" placeholder="Age"/>
                    <input type="date" id="appointment-date" name="appointment-time" className="border rounded border-red-400 w-1/2 p-2"></input>
                    <input type="time" id="appointment-date" name="appointment-time" className="border rounded border-red-400 w-1/2 p-2"></input>
                    <button onClick={clickAddPet} className="py-2 w-1/4 list-none bg-red-400 font-bold rounded border">Book Now</button>
                </form>
                <div className="pt-10"> Your Appointments</div>
                <div>
                    <ul>
                        {pets && pets.map(pet => 
                            <li>{pet.name}</li>
                            )}
                    </ul>
                </div>
            </div>
    )
}

export default MainDashboard
