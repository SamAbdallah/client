import './App.css';
import { useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./App.css"
import { ShopContext } from './Context/ShopContext';

// import Axios from 'axios';
import Login from './components/Login/Login';
// import { ShopContextProvider } from './Context/ShopContext';
import Items from './components/Items/Items'; 
import NavBar from './components/NavBar/NavBar';
import AddItem from './components/addItem/AddItem';

function App(){
  const [user,setUser]=useState("client")
  const [status,setStatus]=useState("")
  return(
  <ShopContext.Provider value={{user,setUser,status,setStatus}}>
   <Router>
    <Login/>

    <NavBar/>
   <Routes>
    <Route path="/" element={<Items/>}></Route>
    <Route path="/addItem" element={<AddItem/>}></Route>

    
    </Routes> 
  
  </Router>
  
  </ShopContext.Provider>
  )
}
export default App 
// function App() {  

//   const [ListOfUsers,setListOfUsers]=useState([])
//   const [name,setName]=useState("")
//   const [age,setAge]=useState(0)
//   const [userName,setUserName]=useState("")
//   useEffect(()=>{
//     Axios.get("http://localhost:3005/getUsers").then((response)=>{
//       setListOfUsers(response.data) 
//     })


//   },[])

  // const addUser=()=>{
  //   Axios.post("http://localhost:3005/createUser",{
  //     name:name,
  //     age:age,
  //     userName:userName
  //   }) 
  // }
//   return (
//     <div className="App">
//       <div className="usersDisplay">
//         {ListOfUsers.map((user)=>{
//           return(<div>
//             <h1>Name:{user.name}</h1>
//             <h1>Age:{user.age}</h1>
//             <h1>UserName:{user.userName}</h1>


//           </div>)
//         })}
//       </div>

//       <div>

//         <input type="text" placeholder='enter name' onChange={(e)=>{setName(e.target.value)}}/>
//         <input type="number" placeholder='enter age'onChange={(e)=>{setAge(e.target.value)}}/>
//         <input type="text"  placeholder='enter nickname' onChange={(e)=>{setUserName(e.target.value)}}/>    
//         <button onClick={addUser}>Add user</button>  
      
//       </div>
//     </div>
//   );
// }

// export default App;
