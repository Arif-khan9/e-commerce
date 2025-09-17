import React from 'react'
import { FaGoogle } from "react-icons/fa6";
const Login = () => {
  return (
   <>
   <section className='flex justify-center items-center h-175'>
    <div className='bg-gray-100 shadow-sm px-5 py-5 rounded-xl'>
        <p className=' mt-2 text-gray-400'>please enter your details</p>
        <h1 className=' mt-3 text-2xl font-bold'>Welcome back</h1>
       <div className='flex flex-col justify-center items-center gap-5 mt-5'>
         <input className='border border-gray-400 rounded-xl p-3 w-80  ' type="text"  placeholder='Email adress'/>
        <input className='border p-3 w-80 border-gray-400 rounded-xl ' type="password" placeholder='password' />
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
            <p className='text-gray-400'>don't have an account? <span className='text-blue-600 underline'>Sign up</span></p>
        </div>
    </div>
   </section>
   </>
  )
}

export default Login
