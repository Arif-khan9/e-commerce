
import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Signup = () => {
 
    const [ contact , setContact] = useState({
        name: "",
        password: "",
    })
    
const handleinput = (e)=>{
  const {name , value} = e.target;
  setContact((prev)=>({
    ...prev,
    [name]: value,



  }))
}
const handlechange =(e)=>{
  e.preventDefault()
  console.log(contact)
}

    

  return (
   <>
   <section className='flex justify-center items-center h-175'>
    <div className='bg-gray-100 shadow-sm px-5 py-5 rounded-xl'>
        <p className=' mt-2 text-gray-400'>please enter your details</p>
        <h1 className=' mt-3 text-2xl font-bold'>Welcome back</h1>
       <form onSubmit={handlechange}>
        <div className='flex flex-col justify-center items-center gap-5 mt-5'>
         <input className='border border-gray-400 rounded-xl p-3 w-80  ' type="text"  placeholder='Enter your  Name' name="name" value={contact.name} onChange={handleinput}/>
        <input className='border p-3 w-80 border-gray-400 rounded-xl ' type="password" placeholder='password' name="password" value={contact.password} onChange={handleinput} />
       </div>
        <div className='flex items-center justify-center gap-15 mt-8'>
            <div className='flex items-center gap-1'>
                <input type="checkbox" id="agree"></input>
            <p className=''>Forgot password</p>
            </div>
            <p className='text-blue-600 underline'>Forgot password</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-8 gap-5'>
            <button className='bg-blue-600 px-34 py-3 text-white rounded-xl hover:bg-blue-300'>sign up</button>
            <button className='flex items-center gap-1 px-20.5 py-3 border border-gray-400 rounded-xl'><FaGoogle /> Sign in with Google</button>
            <Link to={"/login"}>
            <p className='text-gray-400'> Already have an account? <span className='text-blue-600 underline'>log in</span></p>
            </Link>
           
        </div>
       </form>
    </div>
   </section>
   </>
  )
}

export default Signup
