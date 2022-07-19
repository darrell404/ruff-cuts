import { useParams } from 'react-router'
import Loading from '../components/Loading'
import useFetchSinglePet from '../hooks/useFetchSinglePet'

export default function PetInfo() {
    const { pet_id } = useParams()
    const { selectedPet, loadingPage } = useFetchSinglePet(parseInt(pet_id))

    return (
    <div className="dashboard col-span-4 p-8 bg-white border border-slate-200">
        {loadingPage ? <Loading /> :  
        <div className="dashboard col-span-4 mx-auto p-8">
            <h2 className="text-3xl text-center pb-4">{selectedPet[0].pet_name}</h2>
            <h5>{}</h5>
        </div>
        }
    </div>
  )
}
