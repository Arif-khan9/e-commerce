import React from 'react'
import  tishrt from '../assets/tishrt.jpg'
import logo from '../assets/logo.png'
const Section = () => {
  return (
   <>
   <div>
    <div className=' flex justify-center mt-8'>
        <p className='py-1 bg-blue-950 text-white text-xl w-180 rounded-2xl text-center'>SUMMER T-Shirt SALE 30%</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    <div  className=' rounded-2xl w-90 shadow-2xl mt-10'>
     <img className='h-90 rounded-t-2xl w-full object-cover' src={tishrt} alt="" />
     <div className='px-3 py-6 '>
        <h3 className='text-2xl '>Casual T-Shirt 1</h3>
        <p className='mt-3'>Fashion never stops. There is always the <br /> new project, the new opportunity. The <br /> important thing is to take your time and not <br /> get stressed. I just want to do what I do.</p>
         <p className='mt-3'>Size left : XL</p>   
         <p className='mt-3 flex items-center gap-3'>Color : <div className='h-4 w-4 bg-indigo-400 rounded-full'></div></p>
         <button className='w-full bg-blue-900 text-xl hover:bg-blue-950  text-white py-3 mt-3 rounded-2xl'>Add to Cart</button>
     </div>
    </div>
    <div  className=' rounded-2xl w-90 shadow-2xl mt-10'>
     <img className='h-90 rounded-t-2xl w-full object-cover' src={tishrt} alt="" />
     <div className='px-3 py-6 '>
        <h3 className='text-2xl '>Casual T-Shirt 2</h3>
        <p className='mt-3'>Fashion never stops. There is always the <br /> new project, the new opportunity. The <br /> important thing is to take your time and not <br /> get stressed. I just want to do what I do.</p>
         <p className='mt-3'>Size left : XL</p>   
         <p className='mt-3 flex items-center gap-3'>Color : <div className='h-4 w-4 bg-yellow-700 rounded-full'></div></p>
         <button className='w-full bg-blue-900 text-xl hover:bg-blue-950  text-white py-3 mt-3 rounded-2xl'>Add to Cart</button>
     </div>
    </div>
    <div  className=' rounded-2xl w-90 shadow-2xl mt-10'>
     <img className='h-90 rounded-t-2xl w-full object-cover' src={tishrt} alt="" />
     <div className='px-3 py-6 '>
        <h3 className='text-2xl '>Casual T-Shirt 3</h3>
        <p className='mt-3'>Fashion never stops. There is always the <br /> new project, the new opportunity. The <br /> important thing is to take your time and not <br /> get stressed. I just want to do what I do.</p>
         <p className='mt-3'>Size left : XL</p>   
         <p className='mt-3  flex items-center gap-3'>Color : <div className='h-4 w-4 bg-red-600 rounded-full'></div></p>
         <button className='w-full bg-blue-900 text-xl hover:bg-blue-950  text-white py-3 mt-3 rounded-2xl'>Add to Cart</button>
     </div>
    </div>
    <div  className=' rounded-2xl w-90 shadow-2xl mt-10'>
     <img className='h-90 rounded-t-2xl w-full object-cover' src={tishrt} alt="" />
     <div className='px-3 py-6 '>
        <h3 className='text-2xl '>Casual T-Shirt 4</h3>
        <p className='mt-3'>Fashion never stops. There is always the <br /> new project, the new opportunity. The <br /> important thing is to take your time and not <br /> get stressed. I just want to do what I do.</p>
         <p className='mt-3'>Size left : XL</p>   
         <p className='mt-3 flex items-center gap-3'>Color : <div className='h-4 w-4 bg-green-500 rounded-full'></div></p>
         <button className='w-full bg-blue-900 text-xl hover:bg-blue-950  text-white py-3 mt-3 rounded-2xl'>Add to Cart</button>
     </div>
    </div>
    <div  className=' rounded-2xl w-90 shadow-2xl mt-10'>
     <img className='h-90 rounded-t-2xl w-full object-cover' src={tishrt} alt="" />
     <div className='px-3 py-6 '>
        <h3 className='text-2xl '>Casual T-Shirt 5</h3>
        <p className='mt-3'>Fashion never stops. There is always the <br /> new project, the new opportunity. The <br /> important thing is to take your time and not <br /> get stressed. I just want to do what I do.</p>
         <p className='mt-3'>Size left : XL</p>   
         <p className='mt-3 flex items-center gap-3'>Color : <div className='h-4 w-4 bg-amber-950 rounded-full'></div></p>
         <button className='w-full bg-blue-900 text-xl hover:bg-blue-950  text-white py-3 mt-3 rounded-2xl'>Add to Cart</button>
     </div>
    </div>
    <div  className=' rounded-2xl w-90 shadow-2xl mt-10'>
     <img className='h-90 rounded-t-2xl w-full object-cover' src={tishrt} alt="" />
     <div className='px-3 py-6 '>
        <h3 className='text-2xl '>Casual T-Shirt 6</h3>
        <p className='mt-3'>Fashion never stops. There is always the <br /> new project, the new opportunity. The <br /> important thing is to take your time and not <br /> get stressed. I just want to do what I do.</p>
         <p className='mt-3'>Size left : XL</p>   
         <p className='mt-3 flex items-center gap-3'>Color : <div className='h-4 w-4 bg-amber-600 rounded-full'></div></p>
         <button className='w-full bg-blue-900 text-xl hover:bg-blue-950  text-white py-3 mt-3 rounded-2xl'>Add to Cart</button>
     </div>
    </div>
    </div>
   </div>
   <footer>
   <div className='flex justify-center '>
     <div className='border-t-3 border-gray-500 mt-20  w-300  '></div>
   </div>
   <div className='flex items-center justify-around'>
    <img className='h-25 mt-5' src={logo} alt="logo" />
    <p>Copyright © 2025 page by Arif</p>
   </div>
   </footer>
   </>
  )
}

export default Section
