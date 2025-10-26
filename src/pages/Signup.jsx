import React, { useContext, useEffect, useState } from 'react'
import FormLayout from '../components/FormLayout'
import { useFormFields } from '../hooks/useFormFields'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const {error,setError,success,setSuccess}=useFormFields()
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [confirm,setConfirm]=useState("")
  const {signup,users}=useContext(UserContext)
  const navigate=useNavigate()

  const submitHandler=(e)=>{
    e.preventDefault();
    const usercheck=users.find((user)=>(
      user.username===username
    ))
    if(username==="" || password==="" || confirm==="")
    {
      setError("please fill all the fields!!")
    }
    else if(password!==confirm)
    {
      setError("Password and confirm password are not same!!")
    }
    else if(usercheck){
      setError("This username already exist!! please try another name!!")
    }
    else{
      const user={id:Date.now(),username:username,password:password}
      signup(user)
      setError("")
      setSuccess("Account created successfully!!")
      setTimeout(() => {
        resetForm()
        navigate('/')
      }, 2000);
    }
  }
  const resetForm=()=>{
    setUsername("")
    setPassword("")
    setConfirm("")
  }


  return (
    <div className='w-xl m-auto'>
      <FormLayout error={error} success={success} title="Signup">
        <form onSubmit={submitHandler}>
          <InputBox
          label="Username"
          placeholder="Enter username"
          value={username}
          id="username"
          onChange={(e)=>setUsername(e.target.value)}
          />
          
          <InputBox
          label="Password"
          placeholder="Enter Password"
          value={password}
          id="password"
          type='password'
          onChange={(e)=>setPassword(e.target.value)}
          />

          <InputBox
          label="Confirm Password"
          placeholder="Enter confirm password"
          value={confirm}
          id="confirm"
          type='password'
          onChange={(e)=>setConfirm(e.target.value)}
          />

          <Button>Signup</Button>
        </form>
      </FormLayout>
    </div>
  )
}

export default Signup
