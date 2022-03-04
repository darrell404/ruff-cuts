import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './context/Context'

function PrivateRoute({component: Component}) {
    const { loggedin } = useContext(AppContext)
    const [loggedIn] = loggedin
    if (loggedIn)
    return (
            <Component />
        )
    return (
            <Navigate to='/'/>
    )
}

export default PrivateRoute