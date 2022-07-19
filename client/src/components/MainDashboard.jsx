import Header from '../components/Header'

function MainDashboard({children}) {
    return (
        <div className='w-full flex flex-col h-screen'>
            <Header />
            <div className="col-span-4 border-l-2 p-8 bg-zinc-100 h-full">
                {children}
            </div>
        </div>
    )
}

export default MainDashboard
