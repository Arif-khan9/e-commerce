import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
const Homepage = () => {
  return (
   <>
   <nav>
    <div className='py-3 bg-black flex justify-center text-white items-center'>
        <p className=' text-sm md:text-xl '>Welcome All</p>
    </div>
    <div className='flex justify-between px-5 md:px-10 lg:px-30 items-center h-20 md:h-25 '>
        <div><p className=' text-[10px] md:text-xl'>Logo</p></div>
        <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-12 text-[10px] md:text-xl'>
            <p>Logout</p>
            <p className='flex justify-center items-center gap-1'> <CiHeart  className=' text-[10px] md:text-xl '/>Wish List</p>
            <p className='flex justify-center items-center gap-1'><FaShoppingBag className='text-[10px]md:text-xl' />Shopping Bag</p>
            <p>Hi User</p>
        </div> 
    </div>
    <div className='py-3 bg-black text-[10px] md:text-xl flex justify-around items-center text-white'>
        <p>50%OFF</p>
        <p>Free shipping and return</p>
        <p>Different payment methods</p>
    </div>
   </nav>
   </>
  )
}

export default Homepage
