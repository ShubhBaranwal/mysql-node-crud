import React, { useEffect, useState } from 'react'
import CreateData from './component/CreateData'
import axios from 'axios';
import Users from './component/Users';
const App = () => {
let [show,setShow]=useState('AddData');
let [user,setUsers]=useState([]);

useEffect(()=>{
  axios.get("http://localhost:3000/api/users").then((res)=>{

let data=res.data;
setUsers(data)
  }).catch((err)=> {
    console.log(err);
  })
},[createUser,handleDelete])

function createUser(data){

  axios.post('http://localhost:3000/api/createUser',data).then((res)=>{
    console.log("data success fully gone",res.data);
    setShow("displayData")
}).catch((err)=> {
  console.log(err);
})

}

function handleDelete(deletedId){
  console.log(deletedId);
  axios.delete(`http://localhost:3000/api/deleteUser/${deletedId}`).then((res)=>{
    console.log("data success fully gone");
}).catch((err)=>{
  console.log(err);
})


}

  return (
    <div className='container-fluid'>
<nav className='d-flex justify-content-center gap-5 m-4'>
  <button className={show=="AddData" ? "btn btn-danger" : "btn btn-success" } onClick={()=>setShow("AddData")} >Add Data</button>
  <button className={show=="displayData" ? "btn btn-danger" : "btn btn-success" }  onClick={()=>setShow("displayData")}>Show Data</button>
</nav>

{show=='AddData' ? <CreateData  createUser={ createUser}/> : <Users user={user} handleDelete={handleDelete}/>

}
      
    </div>
  )
}

export default App
