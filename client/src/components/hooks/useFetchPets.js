const { useEffect, useContext } = require("react")
const { AppContext } = require("../context/Context")


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

    return pets
}

export default useFetchPets