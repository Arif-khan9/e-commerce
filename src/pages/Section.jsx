import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const Section = () => {
  const [card, setCard] = useState([])

  const cardFetchapi = async () => {
    try {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/products")
      const data = await res.json()
      console.log(data)
      setCard(data)
    } catch (error) {
      console.log("Error fetching data:", error)
    }
  }

  useEffect(() => {
    cardFetchapi()
  }, [])

  return (
    <>
      <div>
        <div className="flex justify-center mt-8">
          <p className="py-1 bg-blue-950 text-white text-xl w-90 md:w-180 rounded-2xl text-center">
            SUMMER T-Shirt SALE 30%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-20 lg:grid-cols-3 place-items-center">
          {card.map((item, index) => {
            // ✅ Safe image check (covers all possible keys)
            const imageUrl =
              item.image?.startsWith('http')
                ? item.image
                : item.img?.startsWith('http')
                ? item.img
                : item.thumbnail?.startsWith('http')
                ? item.thumbnail
                : item.image
                ? `https://e-commerce-backened-4fih.onrender.com${item.image}`
                : item.img
                ? `https://e-commerce-backened-4fih.onrender.com${item.img}`
                : item.thumbnail
                ? `https://e-commerce-backened-4fih.onrender.com${item.thumbnail}`
                : null

            return (
              <div key={index} className="rounded-2xl w-90 bg-blue-50 mt-10">
                <img
                  className="h-90 rounded-2xl w-full object-contain"
                  src={imageUrl || logo} // fallback to logo if no image found
                  alt={item.title || 'product'}
                />

                <div className="px-3 py-6">
                  <h3 className="text-2xl">{item.category}</h3>
                  <p className="mt-3">{item.description?.slice(0, 120)}</p>
                  <p className="mt-3">Size left : XL</p>

                  {/* ✅ Corrected color section */}
                  <div className="mt-3 flex items-center gap-3">
                    <span>Color:</span>
                    <div className="h-4 w-4 bg-indigo-400 rounded-full"></div>
                  </div>

                  <button className="w-full bg-blue-900 text-xl hover:bg-blue-950 text-white py-3 mt-3 rounded-2xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <footer>
        <div className="flex justify-center">
          <div className="border-t-3 border-gray-500 mt-20 w-90 md:w-180 lg:w-300"></div>
        </div>

        <div className="flex items-center justify-around">
          <img className="h-20 md:h-25 mt-5" src={logo} alt="logo" />
          <p className="mt-3 md:mt-0 text-sm md:text-xl">
            Copyright © 2025 page by Arif
          </p>
        </div>
      </footer>
    </>
  )
}

export default Section
