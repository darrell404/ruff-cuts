import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import {Routes, Route, Navigate} from 'react-router-dom'
import useCheckAuth from '../hooks/useCheckAuth'
import MyPets from '../pages/PetsPage'
import BookAppointment from '../pages/BookingPage'
import HomePage from './HomePage'
import Loading from './Loading'
import CreateBooking from '../pages/CreateBooking'
import AddPets from '../pages/AddPets'

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
            <Route exact path="/" element={loggedIn ? <Navigate to="/dashboard"/> : <LoginPage />} />
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
            <Route exact path="/dashboard/bookings/add" element={
              <PrivateRoute>
                <Dashboard>
                  <CreateBooking />
                </Dashboard>
              </PrivateRoute>} />
            <Route exact path="/dashboard/pets/add" element={
            <PrivateRoute>
              <Dashboard>
                <AddPets />
              </Dashboard>
            </PrivateRoute>} />
          </Routes>
      </div>
  );
}

export default App;
