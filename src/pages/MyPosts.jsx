import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { UserContext } from '../context/UserContext'
import PostCard from '../components/PostCard'

function MyPosts() {
 const {posts,setPosts} = useContext(PostContext)
 const {currentUser}=useContext(UserContext)

 const myposts=posts.filter((post)=>(
    post.post_by===currentUser.username
 ))
  return myposts.length!==0 ?(
    <div className='p-4 m-2 flex'>
      {
        myposts.map((post) => (
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

export default MyPosts

