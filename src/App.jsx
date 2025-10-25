import { useState,useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Post from './pages/Post'
import Layout from './Layout'
import EditPost from './pages/EditPost'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
// const [posts, setPosts] = useState(() => {
//         try {
//             let saved = localStorage.getItem("posts")
//             if (!saved || saved === "undefined") {
//                 return [];
//             }
//             else {
//                 return saved && JSON.parse(saved)
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     });

//     useEffect(() => {
//         localStorage.setItem("posts", JSON.stringify(posts))
//     }, [posts])
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/all-post' element={<AllPost />} />
              <Route path='/add-post' element={
                <ProtectedRoute>
                  <AddPost />
                </ProtectedRoute>} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/post/:slug' element={<Post />} />
              <Route path='/edit/:id' element={<EditPost />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
