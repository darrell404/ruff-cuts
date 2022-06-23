import { useEffect, useState } from 'react'

function useFetchUserInfo() {
    const [userData, setUserData] = useState({})
    const [userDataLoading, setUserDataLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async() => {
            const fetchedData = await fetch("/api/customer/info")
            const response = await fetchedData.json()
            setUserData(response[0])
            setUserDataLoading(false)
        }
        fetchUserData()
    }, [])
   
  return { userData, userDataLoading }
}

export default useFetchUserInfo

