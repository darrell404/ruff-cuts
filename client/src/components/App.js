import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import {Routes, Route, Navigate} from 'react-router-dom'
import useCheckAuth from './hooks/useCheckAuth'

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
            <Route exact path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          </Routes>
      </div>
  );
}

export default App;
