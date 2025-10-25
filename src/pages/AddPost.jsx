import React, { useContext } from 'react'
import InputBox from '../components/InputBox';
import TextareaBox from '../components/TextareaBox';
import Button from '../components/Button';
import { PostContext } from '../context/PostContext';
import FormLayout from '../components/FormLayout';
import { useFormFields } from '../hooks/useFormFields';
import { UserContext } from '../context/UserContext';

function AddPost() {
  const {currentUser}=useContext(UserContext)
  const {setPosts }=useContext(PostContext)
  const {title,setTitle,slug,setSlug,description,setDescription,error,setError,image,setImage,success,setSuccess,navigate,resetForm}=useFormFields()
  
  const submitHandler = (e) => {
    e.preventDefault()
    let date = Date().toLocaleString()
    if (title === "" || slug === "" || description === "" || image === "") {
      setError("Please fill all the fields!!!")
    }
    else {
      let post = {
        id: Date.now(),
        title: title,
        slug: slug, 
        description: description,
        image: image,
        date_posted: date.substring(4, 16),
        post_by:currentUser.username
       }
       
      setPosts(prev => {
        return [...prev, post]
      })
      setSuccess("Post added successfully!! redirecting to Home page....")
      setTimeout(() => {
        navigate('/')
      }, 2000);
     resetForm();
    }

  }

  return (
    <div className='m-auto w-xl'>
        <FormLayout success={success} error={error} title="Add Post">
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

          <Button>Add</Button>

        </form>
        </FormLayout>
    </div>
  )
}

export default AddPost
