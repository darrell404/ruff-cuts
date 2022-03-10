import { useEffect, useState } from "react"


function useGetServices() {
    const [services, setServices] = useState({})
    const [servicesName, setServicesName] = useState([])

    useEffect(() => {
        const fetchServices = async () => {
            const getServices = await fetch("/api/services");
            const servicesData = await getServices.json()
            setServices(servicesData)

            servicesData.forEach(service => setServicesName((oldArray) => [...oldArray, service.service_name]))
        }
        fetchServices()
    }, [])

    return { services, servicesName }
}

export default useGetServices