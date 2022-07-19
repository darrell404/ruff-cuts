import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Context'

export default function Header() {
    const { userData } = useContext(AppContext)
    const [ user ] = userData
    return (
        <div className='w-100 h-14 border-b-2 border-l-2 relative'>
            <div className='absolute right-0 mt-2 w-1/6'>
                <i className="fa-solid fa-user p-2 border-2 text-red-500 border-red-500 rounded-full mx-3"></i>
                <span>{user.first_name}</span>
            </div>
        </div>
    )
}
