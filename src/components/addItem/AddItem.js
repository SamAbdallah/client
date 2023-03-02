import React from 'react'
import "./addItem.css"
import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
function AddItem() {
  const{status}=useContext(ShopContext)
 
 const [name,setName]=useState("")
 const [price,setPrice]=useState ("")

  const addItem= async (e)=>{
    e.preventDefault()
    const data={
        name:name,
        price:price,
    }
    try{
        const res=await axios.post("http://localhost:3005/createItem",data) 
        console.log("Done")
        alert("item added!")

    }
    catch(err){
        console.log(err)
    }
    alert("item added!")
  }
  if(status=="loggedIn"){
  return (
    <div className="form-style-6">
  
    <input type="text" name="name" placeholder="item Name" onChange={(e)=>{setName(e.target.value)}} />
    <input type="text" name="price" placeholder="item Price"onChange={(e)=>{setPrice(e.target.value)}} />
    <button type="submit" onClick={addItem}>Add</button>

   
    </div>
  )}
} 

export default AddItem