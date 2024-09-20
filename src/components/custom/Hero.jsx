import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
    <h1
    className='font-extrabold text-[60px] text-center mt-16'
    >
        <span className='text-[#f56551]'>Let's go on a trip: </span>to give a break to our mind and soul.
    </h1>
    <p className='text-xl text-gray-500 text-center'>Your personal travel itinary planner</p>
    <Link to={'/create-trip'}>
    <Button>Get started</Button>
    </Link>
    
    </div>
  )
}

export default Hero