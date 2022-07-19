import { useContext } from 'react'
import MainDashboard from '../components/MainDashboard'
import Sidebar from '../components/Sidebar'
import { AppContext } from '../context/Context'

function Dashboard({children}) {
    const {sidebar} = useContext(AppContext)
    const [showSideBar, setShowSideBar] = sidebar

    return (
        <div className="flex">
            {showSideBar && <Sidebar />}
            <MainDashboard>
                {children}
            </MainDashboard>
        </div>
    )
}

export default Dashboard