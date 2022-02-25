import dogBannerImage from '../images/dog-banner.jpeg'
import useHighlightSelected from './hooks/useHighlightSelected'
import { AppContext } from './context/Context' 
import { useContext } from 'react'

function LandingPage() {

    const { showpage } = useContext(AppContext)
    const { select, clickEvent } = useHighlightSelected(showpage)

    return (
        <div>
            <div className="grid md:grid-cols-4 xl:grid-cols-5 h-screen">
                <div className='col-span-2 xl:col-span-3 h-full bg-dog-banner bg-cover md:block hidden' src={dogBannerImage} alt="Dog"></div>
                <div className="col-span-2 flex flex-col">
                    <h1 className="mx-auto font-bold pt-32 text-7xl header">Ruff Cuts</h1>
                    <div className="button-container mx-auto mt-20">
                        <button onClick={clickEvent} name="login" className={`py-2 px-4 list-none bg-red-200 font-bold rounded border ${select === 'Login' ? "bg-red-400" : "bg-red-200"}`}>
                            Login
                        </button>
                        <button onClick={clickEvent} name="register" className={`py-2 px-4 list-none bg-red-200 font-bold rounded border ${select === 'Register' ? "bg-red-400" : "bg-red-200"}`}>
                            Register
                        </button>
                    </div>
                    {select === "Login" ? 
                    <form className='flex flex-col mx-auto mt-8 w-1/2'>
                        <input className='border rounded-t border-slate-400 p-2' type="text" name="email" placeholder='Username' autoComplete='email'></input>
                        <input className='border rounded-b border-slate-400 p-2' type="password" name="password" placeholder='Password' autoComplete='current-password'></input>
                        <button className="mt-4 mx-auto py-2 px-4 bg-red-400 w-1/2 rounded font-bold">Submit</button>
                    </form> :
                    <form className='flex flex-col mx-auto mt-8 w-1/2'>
                        <input className='border rounded-t border-slate-400 p-2' type="text" name="firtname" placeholder='First Name' autoComplete='given-name'></input>
                        <input className='border border-slate-400 p-2' type="text" name="lasname" placeholder='Last Name' autoComplete='family-name'></input>
                        <input className='border border-slate-400 p-2' type="text" name="email" placeholder='Email' autoComplete='email'></input>
                        <input className='border border-slate-400 p-2' type="password" name="password" placeholder='Password' autoComplete='new-password'></input>
                        <input className='border rounded-b border-slate-400 p-2' type="password" name="password" placeholder='Verify Password' autoComplete='new-password'></input>
                        <button className="mt-4 mx-auto py-2 px-4 bg-red-400 w-1/2 rounded font-bold">Submit</button>
                    </form>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage