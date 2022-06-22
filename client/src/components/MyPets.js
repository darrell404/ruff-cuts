import {useContext} from 'react'
import { AppContext } from './context/Context'
import useValidateData from './hooks/useValidateData'
import useFetchPets from './hooks/useFetchPets'
import Sidebar from './Sidebar'

export default function MyPets() {

    const { showdashboard } = useContext(AppContext)
    const [ dashboard ] = showdashboard;
    const { changeInputData, disableButton, inputFields } = useValidateData(dashboard)
    const { pets, addPets } = useFetchPets()

    const handleSubmitPet = (event) => {
        event.preventDefault()
        addPets(inputFields)
    }

    function showPetsForm() {
        document.getElementById("view-pets").classList.add("hidden")
        document.getElementById("add-pets").classList.remove("hidden")
    }
    
    function hidePetsForm() {
        document.getElementById("add-pets").classList.add("hidden")
        document.getElementById("view-pets").classList.remove("hidden")
    }

    const getPetInfo = (pet) => {

    }

    return (
        <>
        <div className='dashboard col-span-4 p-8'>
            <div className="dashboard col-span-4 p-8 hidden" id="add-pets">
                    <h2 className="font-bold pb-4">Add your pets</h2>
                    <form className="form-container flex flex-col space-y-4" onSubmit={handleSubmitPet}>
                        <input onChange={changeInputData} name="name" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
                        <input onChange={changeInputData} name="breed" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Breed"/>
                        <input onChange={changeInputData} name="age" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Age"/>
                        <button type="submit" className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Save</button>
                        <button type="reset" className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={hidePetsForm}>Cancel</button>
                    </form>
            </div>
            <div className="dashboard col-span-4 p-8" id="view-pets">
                    <div className="pt-10 font-bold">Your pets</div>
                    <div>
                        <ul>
                            {pets.length === 0 ? <p className='pt-4'>You have no registered pets</p> : pets && pets.map(pet => 
                                <div className='w-1/2 border p-4 rounded m-2' key={pet.pet_name}>
                                    <div className='flex gap-x-2 justify-center'>
                                        <h3 className='m-auto text-center w-16 pb-2'>{pet.pet_name}</h3>
                                        <button className='border p-2 px-4 rounded bg-slate-200' onClick={getPetInfo(pet)}>Info</button>
                                        <button className='border p-2 px-4 rounded bg-red-400'>Appointments</button>
                                    </div>
                                </div>
                                )}
                        </ul>
                    </div>
                    <button className="py-2 mt-4 w-2/5 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={showPetsForm}>Add Pets</button>
                </div>
        </div>
        </>
    )
}
