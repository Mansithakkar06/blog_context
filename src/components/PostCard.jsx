import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({post}) {
  return (
    <div className='w-50 bg-gray-200 p-3 m-2 rounded-lg text-black'>
      <div className='shadow-lg p-1'>
        <Link to={`/post/${post.slug}`}>
        <img src={post.image} alt="img" className='w-full h-32 object-cover rounded-t-lg' />
        </Link>
      </div>
      <div className='m-1'>
        <p className='font-light text-sm'>posted on <span className='font-normal italic'>{post.date_posted}</span></p>
        <h2 className='font-medium'>{post.title}</h2>
        <p>{post.descripion}</p>
      </div>
    </div>
  )
}

export default PostCard
