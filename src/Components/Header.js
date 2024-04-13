import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../utils/redux/userSlice';

const Header = () => {
  const authToken = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(signOut());
    return navigate('/');
  }
  return (
    <nav className='px-2 py-2 flex border-b border-black bg-gradient-to-r from-indigo-500  to-pink-500 shadow-inner'>
      <Link to='/'><p className='text-2xl font-mono font-bold '>CloudNoteBook</p></Link>

      { authToken &&
      (<div className='pt-1 ms-auto px-2'>
        <Link to='/' className='p-2'>Home</Link>
        <Link to="/profile" className='p-2'>Profile</Link>
        <button className='mx-2 px-2 py-1 bg-red-600 rounded' onClick={handleSignOut}>Sign Out</button>
      </div>)
      }
      
    </nav>
  )
}

export default Header
