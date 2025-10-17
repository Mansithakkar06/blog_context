import React, { useEffect, useState } from 'react'

function AddPost() {
  const [posts, setPosts] = useState(()=>{
    try {
      let saved=localStorage.getItem("posts")
      if(!saved || saved==="undefined"){
        return [];
      }
      else{
        return saved && JSON.parse(saved)
      }
    } catch (error) {
        console.log(error)
    }
  });
  const [title,setTitle]=useState("");
  const [slug,setSlug]=useState("");
  const [description,setDescription]=useState("");
  const [error,setError]=useState("");
  const [image,setImage]=useState("")

  const submitHandler=(e)=>{
    e.preventDefault()
    let date=Date().toLocaleString()
    if(title==="" || slug==="" || description==="" || image==="")
    {
      setError("Please fill all the fields!!!")
    }
    else{
      let post={id:Date.now(),title:title,slug:slug,description:description,date_posted:date.substring(4,16)}
      setPosts(prev=>{
        return [...prev,post]
      })
      setTitle("")
      setDescription("")
      setSlug("")
      setImage("")
      setError("")
    }
    
  }
  useEffect(()=>{
    console.log(posts)
      localStorage.setItem("posts",JSON.stringify(posts))
  },[posts])

  return (
    <div className='m-auto w-xl'>
      <div className='p-3'>
      <h1 className='font-medium text-3xl text-center'>Add Post</h1>
      </div>
    <div className='bg-gray-200 text-black rounded-lg px-7 py-4 w-xl'>
      <div className={`text-red-600 bg-rose-300 px-3 py-1 rounded-lg font-medium ${error==="" ? "hidden":""}`}>{error}</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title:</label>
        <input type="text"
        id='title'
        value={title}
        placeholder='enetr post title'
        onChange={(e)=>setTitle(e.target.value)}
        className='bg-gray-400 rounded-md mx-2 my-2 p-1 w-md border border-gray-800/30' />
        <label htmlFor="slug">Slug:</label>
        <input type="text"
        id='slug'
        placeholder='enter post slug'
        value={slug}
        onChange={(e)=>setSlug(e.target.value)}
        className='bg-gray-400 rounded-md mx-2 my-2 p-1 w-md border border-gray-800/30' />
        <label htmlFor="image">Image:</label>
        <input type="url"
         id="image"
         value={image}
         onChange={(e)=>setImage(e.target.value)}
         placeholder='enter image url'
         className='bg-gray-400 rounded-md mx-1 my-2 p-1 w-md border border-gray-800/30' />
        <label htmlFor="description">Description:</label><br/>
        <textarea
        rows={5}
        cols={58}
        placeholder='enter post description'
        id='description'
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className='bg-gray-400 rounded-md mx-10 my-2 p-1 border border-gray-800/30'>
        </textarea>
        
        <div className='flex justify-center'>
        <button
        type='submit'
        className='bg-green-700 rounded-lg py-3 px-7 text-white'>Add</button>
        </div>
      
      </form>
    </div>

    </div>
  )
}

export default AddPost
