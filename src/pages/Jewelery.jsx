import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Jewelery = () => {

    const[card , setCard] = useState([])
    
       const cardFetchapi = async ()=>{
        try{
            const res = await fetch("https://e-commerce-backened-4fih.onrender.com/products")
            const data = await res.json()
            console.log(data)
            setCard(data)
             setCard(data.slice(4, 8))
        }catch(error){
            console.log(error, "error")
        }
       }
      useEffect(()=>{
        cardFetchapi()
      },[])
    
  return (
   <>
   <div className='mt-10 px-15'>
          <p className='text-2xl font-bold text-gray-700 '> JEWELERY</p>
       </div>
       <div className='flex flex-col lg:flex-row justify-between px-15 mt-10 lg:gap-0 gap-3 '>
           <div className='flex gap-2.5 flex-col lg:flex-row'>
               
               <button className='border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white'>FEMALE</button>
               <button className='border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white'>HIGH PRICE</button>
               <button className='border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white'>SELECT A COLORE</button>
               <button className='border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white'>SELECT A SIZE</button>
           </div>
           <div>
               <button className='border px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-white'>CLEAR FILTER</button>
           </div>
       </div>
       <section>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-10 gap-15 px-10 '>
              {
                card.map((item , index )=>{
                    return(
                         <Link to={'/order'}>
                         <div key={index} className=' w-90 bg-blue-100 rounded-2xl  shadow-2xl'>
                   <img className='h-70 rounded-t-2xl w-full object-contain' src={item.image } alt="" />
                   <div className='px-3'>
                       <h3 className='text-xl font-bold mt-4'>{item.category}</h3>
                   <p className='mt-2'>{item.description.slice(0 , 100)}</p>
                   <div className='flex mt-1 items-center justify-between py-2'>
                       <p>${item.price}</p>
                       <div className='flex py-5 gap-2'>
                           <div className='h-4 w-4 rounded-full bg-amber-900'></div>
                           <div className='h-4 w-4 rounded-full bg-blue-500'></div>
                           <div className='h-4 w-4 rounded-full bg-orange-600'></div>
                       </div>
                   </div>
                   </div>
               </div> 
                         </Link>
                    )
                })
              }
                 
           </div>
       </section>
   </>
  )
}

export default Jewelery
