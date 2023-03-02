import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


function NavBar() {
  const{user,status}=useContext(ShopContext)
  console.log(user,"edited one")
  if(status=="loggedIn" && user=="admin"){
  return (

   
   
<ul>
<Link to="/">  <li><a href="#home">Home</a></li></Link>
 <Link to="/addItem"><li><a href="#news">Add Item</a></li></Link>

 

</ul>
  )
  }

}

export default NavBar