import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'

function useFetchUserInfo() {
    const { userData } = useContext(AppContext)
    const [user, setUser] = userData
    const [userDataLoading, setUserDataLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async() => {
            const fetchedData = await fetch("/api/customer/info")
            const response = await fetchedData.json()
            setUser(response[0])
            setUserDataLoading(false)
        }
        fetchUserData()
    }, [])
   
  return { user, userDataLoading }
}

export default useFetchUserInfo

