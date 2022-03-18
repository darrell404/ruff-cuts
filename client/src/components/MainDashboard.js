import {useContext} from 'react'
import { AppContext } from './context/Context'
import useValidateData from './hooks/useValidateData'
import useFetchPets from './hooks/useFetchPets'
import BookAppointment from './BookAppointment'
import MyPets from './MyPets'

function MainDashboard() {

    const { showdashboard } = useContext(AppContext)
    const [ dashboard ] = showdashboard;

    if (dashboard === "Pets") {
        return ( 
           <MyPets />
        )
    }

    return (
        <BookAppointment />
    )
}

export default MainDashboard
