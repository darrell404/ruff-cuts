import Sidebar from './Sidebar'
import MainDashboard from './MainDashboard'

function Dashboard() {

    return (
        <div className="grid grid-cols-5 h-screen p-12">
            <Sidebar />
            <MainDashboard />
        </div>
    )
}

export default Dashboard