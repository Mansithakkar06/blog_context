import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox';
import TextareaBox from '../components/TextareaBox';
import Button from '../components/Button';

function AddPost({ setPosts }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("")
  const [success, setSuccess] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    let date = Date().toLocaleString()
    if (title === "" || slug === "" || description === "" || image === "") {
      setError("Please fill all the fields!!!")
    }
    else {
      let post = { id: Date.now(), title: title, slug: slug, description: description, image: image, date_posted: date.substring(4, 16) }
      setPosts(prev => {
        return [...prev, post]
      })
      setSuccess("Post added successfully!! redirecting to Home page....")
      setTimeout(() => {
        navigate('/')
      }, 2000);
      setTitle("")
      setDescription("")
      setSlug("")
      setImage("")
      setError("")
    }

  }


  return (
    <div className='m-auto w-xl'>
      <div className='p-3'>
        <h1 className='font-medium text-3xl text-center'>Add Post</h1>
      </div>
      <div className='bg-gray-200 text-black rounded-lg px-7 py-4 w-xl'>
        <div className={`text-red-600 bg-rose-300 px-3 py-1 rounded-lg font-medium ${error === "" ? "hidden" : ""}`}>{error}</div>
        <div className={`text-green-800 bg-green-400 px-3 py-1 rounded-lg font-medium ${success === "" ? "hidden" : ""}`}>{success}</div>
        <form onSubmit={submitHandler}>

          <InputBox
            label="Title"
            id="title"
            value={title}
            placeholder='enetr post title'
            onChange={(e) => setTitle(e.target.value)}
          />

          <InputBox
            label="Slug"
            id="slug"
            value={slug}
            placeholder='enetr post slug'
            onChange={(e) => setSlug(e.target.value)}
          />

          <InputBox
            label="Image"
            type='url'
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder='enter image url'
          />
          {
            image&&<img src={image} alt="image" className='m-auto w-48 h-25' />
          }


          <TextareaBox
            label="Description"
            placeholder='enter post description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button text="Add" />

        </form>
      </div>

    </div>
  )
}

export default AddPost
