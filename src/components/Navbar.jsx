import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-end items-center bg-black h-[60px] text-white font-bold gap-4'>
        <Link to='/'>
          Shop
        </Link>
        <Link to='/Cart' className='mr-8'>
          <AiOutlineShoppingCart size={32}/>  
        </Link>
    </div>
  )
}

export default Navbar