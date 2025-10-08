import React from 'react'

import clothes from '../assets/clothes.jpg'; 
const Button = () => {
  return (
     <>
     <div className='py-10 flex-col  md:flex-row flex items-center justify-center  md:flex md:justify-center gap-2  '>
        <div className='flex gap-2'>
         <button className='border px-4 md:px-6 lg:px-8 py-3 bg-white text-black hover:bg-blue-950 hover:text-white'>ELECTRONICS</button>
        <button className='border px-4 md:px-6 lg:px-8 py-3 bg-white text-black hover:bg-blue-950 hover:text-white'>MEN'S CLOTHING</button>
        </div>
        <div className='flex gap-2'>
         <button className='border px-4 md:px-6 lg:px-8 py-3 bg-white text-black hover:bg-blue-950 hover:text-white'>JEWELERY</button>
        <button className='border px-4 md:px-6 lg:px-8 py-3 bg-white text-black hover:bg-blue-950 hover:text-white'>WOMEN'S CLOTHING</button>

        </div>

     </div>
     <div className='flex justify-center'>
        <div className='text-white bg-blue-950 py-2 rounded-2xl text-2xl text-center w-80 md:w-180'>SALES UPTO 50%</div>
        
     </div>
     <div className='flex justify-center mt-10'>
        <img className=' md:h-140 w-90 md:w-250 shadow-2xl object-contain' src={clothes} alt="" />
     </div>
     </>
  )
}

export default Button
