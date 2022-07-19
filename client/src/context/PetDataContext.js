import { createContext, useState } from "react";

export const PetDataContext = createContext()

const PetDataContextProvider = (props) => {
    const [selectedPet, setSelectedPet] = useState({})

    const passToContext = {petdata: [selectedPet, setSelectedPet]}

    return (
        <PetDataContext.Provider value={passToContext}>
        {props.children}
        </PetDataContext.Provider>
    )
}

export default PetDataContextProvider