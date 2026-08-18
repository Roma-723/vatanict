import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loading