import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const {slug}=useParams("slug");
    return (
        <div>
            <div className=''>
                <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="img" className='rounded-lg'/>
            </div>
            <div className='px-4'>
                <p>posted on 15 oct 2025</p>
                <h1 className='text-2xl mt-3'>title</h1>
                <p>description</p>
            </div>
        </div>
    )
}

export default Post
