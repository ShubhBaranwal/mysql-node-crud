import React, { useRef } from 'react'

const CreateData = ({ createUser}) => {
let nameRef=useRef()
let mobileRef=useRef()
let emailRef=useRef()

function handleClick(){
let data={
    name:nameRef.current.value,
    mobile:mobileRef.current.value,
    email:emailRef.current.value
}
createUser(data)
    console.log("data submitted",data);
}

    return (
    <div className='main-form d-flex   flex-column bg-dark w-75 m-auto gap-3 p-4'>
      
      <label htmlFor="">Name
      </label>
<input type="text" className='w-75 m-auto' ref={nameRef} placeholder='Enter Your Name' />
      <label htmlFor="">Mobile
      </label>
<input type="number" className='w-75 m-auto' ref={mobileRef} placeholder='Enter Your Mobile' />
      <label htmlFor="">Email
      </label>
<input type="text" placeholder='Enter Your Email'  ref={emailRef} className='w-75 m-auto'/>
<button className='w-50 m-auto btn btn-danger' onClick={handleClick}>Add-Data</button>
    </div>
  )
}

export default CreateData
