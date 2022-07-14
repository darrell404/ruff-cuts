import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import {Routes, Route, Navigate} from 'react-router-dom'
import useCheckAuth from '../hooks/useCheckAuth'
import MyPets from './MyPets'
import BookAppointment from './BookAppointment'
import HomePage from './HomePage'
import Loading from './Loading'

function App() {

  const [loggedIn, pageLoad] = useCheckAuth()

  if(pageLoad)
  return (
    <div className="App">
      <Loading />
    </div>
  )
  else
  return (
      <div className="App">
          <Routes>
            <Route exact path="/" element={loggedIn ? <Navigate to="/dashboard"/> : <LandingPage />} />
            <Route exact path="/dashboard" element={
              <PrivateRoute> 
                <Dashboard>
                  <HomePage />
                </Dashboard>
              </PrivateRoute>} />
            <Route exact path="/dashboard/pets" element={
              <PrivateRoute>
                <Dashboard>
                    <MyPets/>
                </Dashboard>
              </PrivateRoute>} />
            <Route exact path="/dashboard/bookings" element={
              <PrivateRoute>
                <Dashboard>
                  <BookAppointment/>
                </Dashboard>
              </PrivateRoute>} />
          </Routes>
      </div>
  );
}

export default App;
