import React from 'react'
import useValidateData from '../hooks/useValidateData'
import useFetchPets from '../hooks/useFetchPets'
import { useNavigate } from 'react-router'

export default function AddPets() {

    const { changeInputData, disableButton, inputFields } = useValidateData()
    const { addPets } = useFetchPets()
    const navigate = useNavigate('')

    const handleSubmitPet = async (event) => {
        event.preventDefault()
        const addpetStatus = await addPets(inputFields)
    }

    return (
    <div className="dashboard col-span-4 p-8" id="add-pets">
        <h2 className="font-bold pb-4">Add your pets</h2>
        <form className="form-container flex flex-col space-y-4">
            <input onChange={changeInputData} name="name" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Pet name"/>
            <input onChange={changeInputData} name="breed" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Breed"/>
            <input onChange={changeInputData} name="age" data-input="true" className="border rounded border-red-400 w-1/2 p-2" placeholder="Age"/>
            <button type="submit" onClick={handleSubmitPet} className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" disabled={disableButton}>Save</button>
            <button type="reset" className="py-2 w-1/4 list-none bg-red-400 disabled:bg-red-200 font-bold rounded border" onClick={() => navigate('/dashboard/pets')}>Cancel</button>
        </form>
    </div>
  )
}
