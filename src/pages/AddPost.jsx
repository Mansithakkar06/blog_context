import React from 'react'

function AddPost({posts,setPosts}) {
  return (
    <div className='m-auto w-xl'>
      <div className='p-3'>
      <h1 className='font-medium text-3xl text-center'>Add Post</h1>
      </div>
    <div className='bg-gray-200 text-black rounded-lg px-7 py-4 w-xl'>
      <form action="">
        <label htmlFor="title">Title:</label>
        <input type="text"
        id='title'
        className='bg-gray-400 rounded-md mx-2 my-2 p-1 w-md border border-gray-800/30' />
        <label htmlFor="slug">Slug:</label>
        <input type="text"
        id='slug'
        className='bg-gray-400 rounded-md mx-2 my-2 p-1 w-md border border-gray-800/30' />
        <label htmlFor="descripttion">Description:</label><br/>
        <textarea
        rows={5}
        cols={58}
        className='bg-gray-400 rounded-md mx-10 my-2 p-1 border border-gray-800/30'>
        </textarea>
        <button className='bg-green-700 rounded-lg p-3'>Add</button>
      
      </form>
    </div>

    </div>
  )
}

export default AddPost
