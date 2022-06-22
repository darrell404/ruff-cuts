import React from 'react'

export default function PetInfo({pet}) {
  return (
    <div className='flex'>
        <div>
            <h1 className='font-bold'>{pet}</h1>
        </div>
        <div>
            <p>Info</p>
            <p>Appointments</p>
        </div>
    </div>
  )
}
