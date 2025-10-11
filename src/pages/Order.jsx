import React from 'react'
import image from '../assets/tishrt.jpg'
const Order = () => {
  return (
    <>
   <div className='flex justify-center items-center h-180 gap-10 flex-col  md:flex-col lg:flex-row'>
    <div><img className='md:h-150 w-85   md:w-150 object-cover mt-90 md:mt-0' src={image} alt="" /></div>
    <div className='md:h-120 md:w-130  px-5 '>
        <h1 className='text-4xl font-bold'>Casual T-Shrit 3</h1>
        <p className='text-2xl font-bold text-green-500 mt-2'>15% OFF</p>
        <p className='text-xl mt-3 '>Casual T-Shrit 315% OFF Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.</p>
        <div className='flex flex-col items-start'>
            <select name="" id="" className= ' w-80 md:w-120 py-3 mt-8 border bg-blue-900 text-white px-2'>
            <option value="">BLUE</option>
            <option value="">GREEN</option>
            <option value="">ORANGE</option>
            <option value="">YELLOW</option>
        </select>
        <select name="" id="" className='w-80 md:w-120 py-3 mt-8 border bg-blue-900 text-white px-2'>
            <option value="">XL</option>
            <option value="">XXL</option>
            <option value="">S</option>
        </select>
        <button className='px-8 py-3 bg-blue-800 text-white mt-5 rounded-full hover:bg-blue-500'>Add to Cart</button>
        </div>
    </div>
   </div>
    </>
  )
}

export default Order
