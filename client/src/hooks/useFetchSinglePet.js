import { useEffect, useContext, useState } from 'react'
import { PetDataContext } from '../context/PetDataContext'

const useFetchSinglePet = (pet_id) => {
    const { petdata } = useContext(PetDataContext)
    const [selectedPet, setSelectedPet] = petdata
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        const fetchPetData = async () => {
            const petData = await fetch(`/api/pets/fetchPet/${pet_id}`)
            const response = await petData.json()
            setSelectedPet(response)
            setLoadingPage(false)
        }
        fetchPetData()
    }, [setSelectedPet])

    return { selectedPet, loadingPage }
}

export default useFetchSinglePet