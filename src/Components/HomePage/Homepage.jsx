import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
const Homepage = () => {

    const [slide , setSlide] = useState([])
    const [menuicon , setMenuicon] = useState(false)

  const slideimg = async () => {
  try {
    const res = await fetch("https://e-commerce-backened-4fih.onrender.com/api/slides"); 
    const data = await res.json();
    console.log("Slides data:", data);
  } catch (error) {
    console.log("Error fetching slides:", error);
  }
};

useEffect(() => {
  slideimg();
}, []);

const handleclickbtn = () =>{
    setMenuicon(!menuicon)
}

  return (
   <>
   <nav>
    <div className='py-3 bg-black flex justify-center text-white items-center'>
        <p className=' text-[25px] md:text-xl '>Welcome All</p>
    </div>
    <div className='flex justify-between px-5 md:px-10 lg:px-30 items-center  h-20 md:h-25 '>
        <div><p className=' text-[20px] md:text-xl'>Logo</p></div>
        <div className='flex justify-center items-center hidden md:block md:flex gap-3 md:gap-5 lg:gap-12 text-[10px] md:text-xl'>
            <p>Logout</p>
            <p className='flex justify-center items-center gap-1'> <CiHeart  className=' text-[10px] md:text-xl '/>Wish List</p>
            <p className='flex justify-center items-center gap-1'><FaShoppingBag className='text-[10px]md:text-xl' />Shopping Bag</p>
            <p>Hi User</p>
           
        </div> 
        {menuicon ? 
          <div className='flex  md:hidden  justify-between  md:px-10 lg:px-30 items-center h-100  px-8 ml-60 bg-amber-300 flex relative md:h-25 '>
          <div><p className=' hidden text-[10px] md:text-xl'>Logo</p></div>
        <div className='flex justify-center items-center  md:flex gap-3 md:gap-5 lg:gap-12 text-[10px] md:text-xl flex-col'>
             <AiOutlineClose className='text-xl'  onClick={handleclickbtn}/>
            <p>Logout</p>
            <p className='flex justify-center items-center gap-1'> <CiHeart  className=' text-[10px] md:text-xl '/>Wish List</p>
            <p className='flex justify-center items-center gap-1'><FaShoppingBag className='text-[10px]md:text-xl' />Shopping Bag</p>
            <p>Hi User</p>
           
        </div> 
        </div>
        :
         <IoMenuSharp  className='md:hidden block text-[25px]' onClick={handleclickbtn} />
        }
         
         
    </div>
    <div className='py-3 bg-black text-[10px] md:text-xl flex justify-around items-center text-white'>
        <p>50%OFF</p>
        <p>Free shipping and return</p>
        <p>Different payment methods</p>
    </div>
   </nav>
   {/* <section>
    <div><img src="" alt="" /></div>
   </section> */}
   </>
  )
}

export default Homepage

 
        

