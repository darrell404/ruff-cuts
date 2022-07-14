import {useContext, useState} from 'react'
import { AppContext } from '../context/Context'
import useValidateData from '../hooks/useValidateData'
import useFetchPets from '../hooks/useFetchPets'
import Loading from './Loading'
import { useNavigate } from 'react-router'

export default function MyPets() {

    const navigate = useNavigate()

    const { showdashboard } = useContext(AppContext)
    const [ showPetsForm, setShowPetsForm ] = useState(false) 
    const [ dashboard ] = showdashboard;
    const { changeInputData, disableButton, inputFields } = useValidateData(dashboard)
    const { petsLoading, pets, addPets } = useFetchPets()

    const handleSubmitPet = async (event) => {
        event.preventDefault()
        const addpetStatus = await addPets(inputFields)
        setShowPetsForm(false)
    }

    const getPetInfo = (pet) => {

    }

    return (
        <>
        <div className='dashboard col-span-4 p-8'>
            { petsLoading ? <Loading/> : 
            !showPetsForm ? 
                <div className="dashboard col-span-4 mx-auto p-8" id="view-pets">
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
                    <button className="py-2 mt-4 w-2/5 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={() => setShowPetsForm(true)}>Add Pets</button>
                </div> :
                <div className="dashboard col-span-4 p-8" id="add-pets">
                    <h2 className="font-bold pb-4">Add your pets</h2>
                    <form className="form-container flex flex-col space-y-4">
                        <input onChange={changeInputData} name="name" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
                        <input onChange={changeInputData} name="breed" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Breed"/>
                        <input onChange={changeInputData} name="age" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Age"/>
                        <button type="submit" onClick={handleSubmitPet} className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Save</button>
                        <button type="reset" className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={() =>setShowPetsForm(false)}>Cancel</button>
                    </form>
                </div>
            }            
        </div>
        </>
    )
}
