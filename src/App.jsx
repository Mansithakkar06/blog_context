import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Post from './pages/Post'
import Layout from './Layout'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/all-post' element={<AllPost />} />
              <Route path='/add-post' element={<AddPost />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/post/:slug' element={<Post />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
