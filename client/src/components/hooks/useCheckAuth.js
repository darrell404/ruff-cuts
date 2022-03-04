import { useEffect, useContext } from "react"
import { AppContext } from "../context/Context"

const useCheckAuth = () => {

    var user = {}
    const { loggedin, loading } = useContext(AppContext)
    const [loggedIn, setLoggedIn] = loggedin
    const [pageLoad, setPageLoad] = loading

    useEffect(() => {
    const checkLoggedInStatus = async() => {
        const checkFromAPI = await fetch('/api/loggedin')
        const loggedinResponse = await checkFromAPI.json()
        user = loggedinResponse
        if (user.hasOwnProperty("customer_id")) {
            setLoggedIn(true)
        }
        setPageLoad(false)
    }
    checkLoggedInStatus()
    }, [])

    return [loggedIn, pageLoad]
}

export default useCheckAuth