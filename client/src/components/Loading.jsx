import React from 'react'
import '../index.css'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full w-full">
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div>
  )
}
