import { createContext, useState } from "react";

export const AppContext = createContext()

const ContextProvider = (props) => {
    const [dashboard, setDashboard] = useState("Pets")
    const [landingPageDisplay, setLandingPageDisplay] = useState("Login")

    const passToContext = {showpage: [landingPageDisplay, setLandingPageDisplay], showdashboard: [dashboard, setDashboard]}

    return (
        <AppContext.Provider value={passToContext}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider