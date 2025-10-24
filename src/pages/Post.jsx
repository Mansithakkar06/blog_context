import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PostContext } from '../context/PostContext';

function Post() {
    const {posts,setPosts}=useContext(PostContext)
    const {slug}=useParams("slug");
    const navigate=useNavigate();
    let post=posts.find((post)=>{
        return post.slug===slug;
    })
    let id=post.id;
    const handleDelete=(id)=>{
        setPosts(posts.filter((post)=>(
            post.id!==id
        )))
        navigate("/");
    }
    return (
        <div>
            <div className='flex justify-end py-3 px-2'>
                <Link to={`/edit/${id}`} className='bg-green-700 px-4 py-2 rounded-lg'>Edit</Link>
                <button onClick={()=>handleDelete(id)} className='bg-red-600 px-4 py-2 rounded-lg mx-3'>Delete</button>
            </div>
            <div className=''>
                <img src={post.image} alt="img" className='rounded-lg w-full'/>
            </div>
            <div className='px-4'>
                <p>posted on {post.date_posted}</p>
                <h1 className='text-2xl mt-3'>{post.title}</h1>
                <p>{post.description}</p>
            </div>
        </div>
    )
}

export default Post
