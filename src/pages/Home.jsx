import React from 'react'
import PostCard from '../components/PostCard'

function Home({ posts }) {
  return posts.length!==0 ?(
    <div className='p-4 m-2 flex'>
      {
        posts.map((post) => (
          <div key={post.id}>
          <PostCard post={post} />
          </div>
        ))
      }
    </div>
  ):
  (
    <div className='p-4 text-white flex justify-center'>
      <h1 className='text-2xl mt-5'>No posts yet!!</h1>
    </div>
  )
}

export default Home
