import { createContext, useState } from "react";

export const AppContext = createContext()

const ContextProvider = (props) => {
    const [loginPageDisplay, setLoginPageDisplay] = useState("Login")
    const [loggedIn, setLoggedIn] = useState(false)
    const [pageLoad, setPageLoad] = useState(true)
    const [pets, setPets] = useState([])
    const [bookings, setBookings] = useState([])
    const [availableTime, setAvailableTime] = useState([])
    const [user, setUser] = useState({})

    const passToContext = {loginPage: [loginPageDisplay, setLoginPageDisplay], loggedin: [loggedIn, setLoggedIn], loading: [pageLoad, setPageLoad], userpets: [pets, setPets], appointments: [bookings, setBookings], userData: [user, setUser], time: [availableTime, setAvailableTime]}

    return (
        <AppContext.Provider value={passToContext}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider