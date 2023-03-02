

import "./Login.css" 
import { Link } from 'react-router-dom'

import React, { useContext, useState } from 'react'
import { ShopContext } from "../../Context/ShopContext"
function Login() {
  const{user,setUser,status,setStatus}=useContext(ShopContext)
  const[userName,setUserName]=useState("")
  const[password,setPassword]=useState("")
  const handleClick=()=>{
    setStatus("loggedIn")

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(userName=="Sam" && password=="123456"){
      setUser("admin")
      setStatus("loggedIn")
      console.log(user)
    }
    else{
      alert("wrong credentials")
    }
  }
  if(status==""){
  return (
    
<div class="form-style-6">
<form>
<input type="text" name="field1" placeholder="UserName" onChange={(e)=>{setUserName(e.target.value)}}/>
<input type="password" name="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
<button type="submit" value="Login" onClick={handleSubmit}>Submit</button>
<Link to ="/" onClick={handleClick}>Customer</Link>
</form>
</div>
  )
  }
}

export default Login  