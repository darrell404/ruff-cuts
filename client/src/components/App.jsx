import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import {Routes, Route, Navigate} from 'react-router-dom'
import useCheckAuth from './hooks/useCheckAuth'
import MyPets from './MyPets'
import BookAppointment from './BookAppointment'
import HomePage from './HomePage'

function App() {

  const [loggedIn, pageLoad] = useCheckAuth()

  if(pageLoad)
  return (
    <div className="App">
      <div>Loading Data</div>
    </div>
  )
  else
  return (
      <div className="App">
          <Routes>
            <Route exact path="/" element={loggedIn ? <Navigate to="/dashboard"/> : <LandingPage />} />
            <Route exact path="/dashboard" element={
              <PrivateRoute> 
                <Dashboard component={HomePage} />
              </PrivateRoute>} />
            <Route exact path="/dashboard/pets" element={
              <PrivateRoute>
                <Dashboard component={MyPets}/>
              </PrivateRoute>} />
            <Route exact path="/dashboard/bookings" element={
              <PrivateRoute>
                <Dashboard component={BookAppointment}/>
              </PrivateRoute>} />
          </Routes>
      </div>
  );
}

export default App;
