import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import InputBox from '../components/InputBox';
import TextareaBox from '../components/TextareaBox';
import Button from '../components/Button';
import { PostContext } from '../context/PostContext';
import FormLayout from '../components/FormLayout';
import { useFormFields } from '../hooks/useFormFields';

function EditPost() {
    const { posts, setPosts } = useContext(PostContext)
    const { id } = useParams("id");
    const { title, setTitle, slug, setSlug, description, setDescription, error, setError, image, setImage, success, setSuccess, navigate } = useFormFields()
    
    let post = posts.find((p) => {
        return p.id == id;
    })

    const submitHandler = (e) => {
        e.preventDefault()
        if (title === "" || slug === "" || description === "" || image === "") {
            setError("Please fill all the fields!!!")
        }
        else {
            setPosts(posts.map((p) => (
                p.id == id ? { ...p, title: title, slug: slug, description: description, image: image } : p
            )))
            setSuccess("Post Updated successfully!! redirecting....")
            setTimeout(() => {
                navigate(`/post/${slug}`)
            }, 2000);
            setError("")
        }
    }
    useEffect(() => {
        setTitle(post.title)
        setSlug(post.slug)
        setDescription(post.description)
        setImage(post.image)
    }, [])
    return (
        <div className='m-auto w-xl'>
            <FormLayout success={success} error={error} title="Edit Post">

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
                        image && <img src={image} alt="image" className='m-auto w-48 h-25' />
                    }

                    <TextareaBox
                        label="Description"
                        placeholder='enter post description'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Button>Update</Button>

                </form>
            </FormLayout>

        </div>
    )
}

export default EditPost
