import MainDashboard from '../components/MainDashboard'
import Sidebar from '../components/Sidebar'

function Dashboard({children}) {
    return (
        <div className="grid grid-cols-5">
            <Sidebar />
            <MainDashboard>
                {children}
            </MainDashboard>
        </div>
    )
}

export default Dashboard