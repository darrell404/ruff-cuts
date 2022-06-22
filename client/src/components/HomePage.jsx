import useFetchUserInfo from './hooks/useFetchUserInfo'

export default function HomePage() {
  const { userData } = useFetchUserInfo()

    return (
      <div className='h-full'>
         <h1 className='text-3xl'>Welcome, {userData.first_name}!</h1>
      </div>
    )

}
