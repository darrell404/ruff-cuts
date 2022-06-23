import { useEffect, useContext, useState } from 'react'
import  { AppContext } from '../context/Context'

const useFetchPets = () => {
    const { userpets } = useContext(AppContext)
    const [pets, setPets] = userpets
    const [petsLoading, setPetsLoading] = useState(true)

    useEffect(() => {
        const fetchPets = async() => {
            const fetchFromAPI = await fetch('/api/pets/userpets')
            const mypets = await fetchFromAPI.json()
            setPets(mypets)
            setPetsLoading(false)
        }
        fetchPets()
    }, [])

    const clearInputFields = () => {
        const selectInputs = document.querySelectorAll("input")
        selectInputs.forEach(element => {
            element.value = ''
        })
    }

    const addPets = async (petdata) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(petdata)
        }
        try {
            const sendPetData = await fetch('/api/pets/addpets', options)
            const response = await sendPetData.json()
            if (response.status == 'error') {
                return
            }
            clearInputFields()
            return response.status
        }
        catch(e) {console.log(e)}
        
    }

    const fetchSinglePet = (pet) => {

    }

    return { pets, addPets, fetchSinglePet, petsLoading }
}

export default useFetchPets