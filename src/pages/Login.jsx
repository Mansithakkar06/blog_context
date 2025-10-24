import React, { useState } from 'react'
import FormLayout from '../components/FormLayout'
import {useFormFields} from '../hooks/useFormFields'
import InputBox from '../components/InputBox';
import Button from '../components/Button'

function Login() {
  const {success,error}= useFormFields();
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("");

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(username,password)
  }
  return (
    <div className='w-xl m-auto'>
      <FormLayout title="Login" success={success} error={error}>
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
          type='password'
          placeholder="Enter Password"
          value={password}
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
          />
          
          <Button>Login</Button>
        </form>

      </FormLayout>
    </div>
  )
}

export default Login
