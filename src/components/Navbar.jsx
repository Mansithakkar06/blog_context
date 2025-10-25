import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Button from './Button'

function Navbar() {
  const {currentUser,logout}=useContext(UserContext)
  const submitHandler=(e)=>{
    logout();
  }
  return (
    <header className='w-full p-3 mb-10 bg-gray-200 top-0 fixed shadow-lg shadow-black-500/50 text-black'>
      <nav className='flex justify-between mx-8'>
        <div>
        <Link to='/'>Blog</Link>
        </div>
        <div>
        <ul className='flex'>
            <li className='px-3 hover:text-purple-600'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='px-3 hover:text-purple-600'>
                <NavLink to="/add-post">Add Post</NavLink>
            </li>
            {/* <li className='px-3 hover:text-purple-600'>
                <NavLink to="/all-post">All Post</NavLink>
            </li> */}
            
            {!currentUser&&<li className='px-3 hover:text-purple-600'>
                <NavLink to="/login">Login</NavLink>
            </li>}
            {!currentUser &&<li className='px-3 hover:text-purple-600'>
                <NavLink to="/signup">Signup</NavLink>
            </li>}
            {currentUser&&<li className='px-3 hover:text-purple-600'>
              <form onSubmit={submitHandler}>
                <button>Logout</button>
              </form>
            </li>}
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
