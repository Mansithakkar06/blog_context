import React, { useContext, useState } from 'react'
import FormLayout from '../components/FormLayout'
import {useFormFields} from '../hooks/useFormFields'
import InputBox from '../components/InputBox';
import Button from '../components/Button'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const {success,setSuccess,error,setError}= useFormFields();
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("");
  const {login}=useContext(UserContext);
  const navigate=useNavigate()

  const submitHandler=(e)=>{
    e.preventDefault();
    const user={username:username,password:password}
    const result=login(user);
    if(result){
      setSuccess("Redirecting!!")
      setError("")
      setTimeout(() => {
        navigate("/")
      }, 2000);
    }
    else{
      setError("Invalid Credentials!!")
    }
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
