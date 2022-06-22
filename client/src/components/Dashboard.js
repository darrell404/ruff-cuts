import Sidebar from './Sidebar'

function Dashboard({component: Component}) {
    return (
        <div className="grid grid-cols-5 h-screen p-12">
            <Sidebar />
            <Component />
        </div>
    )
}

export default Dashboard