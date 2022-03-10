import { useEffect, useState } from "react"


function useGetServices() {
    const [services, setServices] = useState()

    useEffect(() => {
        const fetchServices = async () => {
            const getServices = await fetch("/api/services");
            const servicesData = await getServices.json()
            setServices(servicesData[0])

        fetchServices()
        }
    }, [])

    return services
}

export default useGetServices