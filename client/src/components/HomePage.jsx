import useFetchUserInfo from '../hooks/useFetchUserInfo'
import Loading from './Loading'

export default function HomePage() {
  const { userData, userDataLoading } = useFetchUserInfo()

return (
  <div className="dashboard col-span-4 p-8">
    {userDataLoading ? <Loading /> : 
    <>
      <h1 className='text-3xl text-center'>Welcome, {userData.first_name}!</h1>
      <p>
        Book appointments with us now
      </p>
    </>
    }
    </div>
  )
}
