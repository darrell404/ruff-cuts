import { useEffect, useContext } from 'react'
import  { AppContext } from '../context/Context'
import useValidateData from './useValidateData'


const useFetchPets = () => {
    const { userpets } = useContext(AppContext)
    const [pets, setPets] = userpets

    useEffect(() => {
        const fetchPets = async() => {
            const fetchFromAPI = await fetch('/api/pets/userpets')
            const mypets = await fetchFromAPI.json()
            setPets(mypets)
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
            const response = sendPetData.json()
            // setPets([...pets, petdata])
            clearInputFields()
        }
        catch(e) {console.log(e)}
        
    }

    const clearInput = () => {
        const inputField = document.querySelectorAll('input')
        inputField.forEach(input => input.value = '')
    }

    const fetchSinglePet = (pet) => {

    }

    return { pets, addPets, fetchSinglePet }
}

export default useFetchPets