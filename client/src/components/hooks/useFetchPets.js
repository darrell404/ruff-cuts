import { useEffect, useContext } from 'react'
import  { AppContext } from '../context/Context'
import useValidateData from './useValidateData'


const useFetchPets = () => {
    var fetchedPets = []
    const { userpets } = useContext(AppContext)
    const [pets, setPets] = userpets

    useEffect(() => {
        const fetchPets = async() => {
            const fetchFromAPI = await fetch('/api/pets/userpets')
            const pets = await fetchFromAPI.json()
            if (Object.keys(pets) !== 0) {
                for (const pet in pets) {
                    fetchedPets.push(pets[pet].pet_name)
                }
                setPets(fetchedPets)
            }
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
            setPets([...pets, petdata.name])
            clearInputFields()
        }
        catch(e) {console.log(e)}
        
    }

    const clearInput = () => {
        const inputField = document.querySelectorAll('input')
        inputField.forEach(input => input.value = '')
    }

    return { pets, addPets }
}

export default useFetchPets