import {useState} from 'react'

function useUpdatePets() {
    const [pets, setPets] = useState([])
    const [petData, setPetData] = useState({
        name: '',
        breed: '',
        age: ''
    })

    // Clears input after submit
    const clearInput = () => {
        const inputField = document.querySelectorAll('input')
        inputField.forEach(input => input.value = '')
    }

    // Update pets array after adding pet
    const clickAddPet = (event) => {
        event.preventDefault()
        setPets([...pets, petData])
        clearInput()
    }

    return { clickAddPet, petData, pets }
}

export default useUpdatePets