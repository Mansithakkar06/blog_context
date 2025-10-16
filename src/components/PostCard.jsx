import React from 'react'
import { Link } from 'react-router-dom'

function PostCard() {
  return (
    <div className='w-50 bg-gray-200 p-3 m-2 rounded-lg text-black'>
      <div className='shadow-lg p-1'>
        <Link to={`/post/first`}>
        <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="img" />
        </Link>
      </div>
      <div className='m-1'>
        <p className='font-light text-sm'>posted on 15 oct 2025</p>
        <h2 className='font-medium'>post about wildlife</h2>
        <p>hello this is the post of  A Lion</p>
      </div>
    </div>
  )
}

export default PostCard
