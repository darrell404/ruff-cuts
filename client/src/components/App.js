import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
  );
}

export default App;
