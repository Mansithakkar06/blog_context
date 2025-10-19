import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputBox from '../components/InputBox';
import TextareaBox from '../components/TextareaBox';
import Button from '../components/Button';

function EditPost({ posts,setPosts }) {
    const { id } = useParams("id");
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [image, setImage] = useState("")
    const [success, setSuccess] = useState("")
    let post = posts.find((p) => {
        return p.id == id;
    })

    const submitHandler = (e) => {
        e.preventDefault()
        if (title === "" || slug === "" || description === "" || image === "") {
            setError("Please fill all the fields!!!")
        }
        else {
            setPosts(posts.map((p)=>(
                p.id==id?{ ...p, title: title, slug: slug, description: description, image: image }:p
            )))
            setSuccess("Post Updated successfully!! redirecting....")
            setTimeout(() => {
                navigate(`/post/${slug}`)
            }, 2000);
            setTitle("")
            setDescription("")
            setSlug("")
            setImage("")
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
            <div className='p-3'>
                <h1 className='font-medium text-3xl text-center'>Edit Post</h1>
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
                        image && <img src={image} alt="image" className='m-auto w-48 h-25' />
                    }

                    <TextareaBox
                        label="Description"
                        placeholder='enter post description'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Button text="Update" />

                </form>
            </div>

        </div>
    )
}

export default EditPost
