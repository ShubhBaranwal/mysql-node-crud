import React from 'react'

const Users = ({user,handleDelete}) => {
  

    return (
    <div className='row d-flex justify-content-lg-between'>
{user.map((item)=>{
return <div key={item.userId} className='bg-dark col-4 text-white m-2'>
   <div className='d-flex justify-content-end m-2 gap-2'>
   <button className='btn btn-danger' onClick={()=>handleDelete(item.userId)}>D</button>
    <button className='btn btn-success'>E</button>
    </div> 
 <h2>Name : {item.name}</h2>
 <h2>Email : {item.email}</h2>
 <h2>Mobile:  {item.mobile}</h2>
</div>
})

}
      
    </div>
  )
}

export default Users
