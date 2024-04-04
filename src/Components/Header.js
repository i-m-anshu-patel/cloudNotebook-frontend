import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='px-2 py-2 flex border-b border-black bg-gradient-to-r from-indigo-500  to-pink-500 shadow-inner'>
      <p className='text-xl font-mono font-bold '>CloudNoteBook</p>
      <div className='pt-1 ms-auto px-2'>
        <Link to='/' className='p-2'>Home</Link>
        <Link to="/profile" className='p-2'>Profile</Link>
      </div>
    </nav>
  )
}

export default Header
