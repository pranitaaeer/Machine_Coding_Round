import  { useState } from 'react'
import "./App.css"
import axios from "axios"

const App = () => {
  const [username,setuserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:4000/api/register",{username,email,password})
      if(res.data.user){
        alert(res.data.message)
      }
    } catch (error) {
        alert(error.message)
    }finally{
      setuserName("")
      setEmail("")
      setPassword("")
    }
  }
  return (
    <div className='main'>
      <div className='card'>
        <h1>Sign up Form</h1>
        <div className='content'>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type='text'
              placeholder='Enter your name'
              value={username}
              onChange={(e)=>setuserName(e.target.value)}
            />

            <label>Email</label>
            <input 
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <label>password</label>
            <input 
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App