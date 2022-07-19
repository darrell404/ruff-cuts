import React from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../context/Context'

export default function Header() {
    const { userData, sidebar } = useContext(AppContext)
    const [ user ] = userData
    const [ showSideBar, setShowSideBar ] = sidebar
    const [showText, setShowText] = useState(false)
    return (
        <div className='w-100 flex justify-between items-center	 h-14 border-b-2 border-l-2'>
                <div>
                <i onClick={() => setShowSideBar(!showSideBar)} onMouseOver={() => setShowText(true)} onMouseLeave={() => setShowText(false)} className={`fa-solid ${showSideBar ? "fa-arrow-left-long" : "fa-arrow-right-long"} text-xl px-4 hover:text-slate-400`}></i>
                <span className={`${showText ? "visible" : "invisible"} text-sm text-slate-500`}>Click to {showSideBar ? "hide" : "show"} sidebar</span>
                </div>
                    <div className='px-4'>
                    <i className="fa-solid fa-user p-2 border-2 text-red-500 border-red-500 rounded-full mx-3"></i>
                <span>{user.first_name}</span>
            </div>
        </div>
    )
}
