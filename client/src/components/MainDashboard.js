import {useState} from 'react'
import useUpdatePets from './hooks/useUpdatePets'

function MainDashboard() {

    const { updatePetDataObject, clickAddPet, petData, pets } = useUpdatePets()

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

export default MainDashboard
