import { createContext, useState } from "react";

export const AppContext = createContext()

const ContextProvider = (props) => {
    const [dashboard, setDashboard] = useState("Pets")
    const [landingPageDisplay, setLandingPageDisplay] = useState("Login")
    const [loggedIn, setLoggedIn] = useState(false)
    const [pageLoad, setPageLoad] = useState(true)
    const [pets, setPets] = useState([])

    const passToContext = {showpage: [landingPageDisplay, setLandingPageDisplay], showdashboard: [dashboard, setDashboard], loggedin: [loggedIn, setLoggedIn], loading: [pageLoad, setPageLoad], userpets: [pets, setPets]}

    return (
        <AppContext.Provider value={passToContext}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider