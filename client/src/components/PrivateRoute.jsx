import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/Context'

function PrivateRoute({children}) {
    const { loggedin } = useContext(AppContext)
    const [loggedIn] = loggedin
   
    return loggedIn ? children :  <Navigate to='/'/>

}

export default PrivateRoute