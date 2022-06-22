import MainDashboard from './MainDashboard'
import Sidebar from './Sidebar'

function Dashboard({component: Component}) {
    return (
        <div className="grid gap-4 grid-cols-5 h-screen p-12">
            <Sidebar />
            <MainDashboard>
                <Component />
            </MainDashboard>
        </div>
    )
}

export default Dashboard