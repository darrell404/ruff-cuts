import { useEffect, useState } from 'react'

function useFetchUserInfo() {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const fetchUserData = async() => {
            const fetchedData = await fetch("/api/customer/info")
            const response = await fetchedData.json()
            setUserData(response[0])
        }
        fetchUserData()
    }, [])
   
  return { userData }
}

export default useFetchUserInfo

