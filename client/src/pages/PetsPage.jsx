import useFetchPets from '../hooks/useFetchPets'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router'

export default function PetsPage() {

    const navigate = useNavigate()
    const { petsLoading, pets, addPets } = useFetchPets()

    return (
        <>
        <div className='dashboard col-span-4 p-8'>
            { petsLoading ? <Loading/> : 
                <div className="dashboard col-span-4 mx-auto p-8" id="view-pets">
                    <div className="pt-10 font-bold">Your pets</div>
                    <div>
                        <ul>
                            {pets.length === 0 ? <p className='pt-4'>You have no registered pets</p> : pets && pets.map(pet => 
                                <div className='w-1/2 border p-4 rounded m-2' key={pet.pet_id}>
                                    <div className='flex gap-x-2 justify-center'>
                                        <h3 className='m-auto text-center w-16 pb-2'>{pet.pet_name}</h3>
                                        <button className='border p-2 px-4 rounded bg-slate-200' onClick={() => navigate(`/dashboard/pets/${pet.pet_id}`)}>Info</button>
                                        <button className='border p-2 px-4 rounded bg-red-400'>Appointments</button>
                                    </div>
                                </div>
                                )}
                        </ul>
                    </div>
                    <button className="py-2 mt-4 w-2/5 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={() => (navigate('/dashboard/pets/add'))}>Add Pets</button>
                </div> 
            }            
        </div>
        </>
    )
}
