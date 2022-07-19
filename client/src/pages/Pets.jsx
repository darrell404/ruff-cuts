import useFetchPets from '../hooks/useFetchPets'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router'

export default function Pets() {

    const navigate = useNavigate()
    const { petsLoading, pets, addPets } = useFetchPets()

    return (
        <>
            { petsLoading ? <Loading/> : 
            <div className='dashboard col-span-4 border border-slate-200'>
                <div className="dashboard col-span-4 mx-auto p-8 bg-white" id="view-pets">
                    <div className="pt-10 font-bold">Your pets</div>
                    <div className='grid grid-cols-2 gap-8'>
                        {pets.length === 0 ? <p className='pt-4'>You have no registered pets</p> : pets && pets.map(pet => 
                            <div className='border border-2 p-4 rounded m-2 hover:bg-red-100' key={pet.pet_id}>
                                <div className=''>
                                    <h3 className='m-auto text-center w-16 pb-2 text-lg'>{pet.pet_name}</h3>
                                    <div className='flex justify-between mx-20'>
                                        <button className='border p-2 px-4 rounded bg-slate-200 text-sm' onClick={() => navigate(`/dashboard/pets/${pet.pet_id}`)}>Information</button>
                                        <button className='border p-2 px-4 rounded bg-red-400 text-sm'>Appointments</button>
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                    <div className='flex justify-end'>
                    <button className="py-2 mt-4 w-1/5 bg-red-400 disabled:bg-red-200 font-bold rounded border text-sm" onClick={() => (navigate('/dashboard/pets/add'))}>Add Pets</button>
                    </div>
                </div> 
            </div>
            }            
        </>
    )
}
