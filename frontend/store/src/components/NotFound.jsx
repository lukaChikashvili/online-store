import React from 'react'
import logo from '../assets/logo.png'

const NotFound = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div>
      <img src = {logo} />

      <span className="text">404 ვერ მოიძებნა</span>
      </div>
   
    </div>
  )
}

export default NotFound
