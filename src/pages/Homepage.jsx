import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Navbar from '../Components/Navbar';

const Homepage = () => {
  const [slide, setSlide] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideimg = async () => {
    try {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/products");
      const data = await res.json();

      const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];
      const selected = categories
        .map(cat => data.find(item => item.category === cat))
        .filter(Boolean);

      setSlide(selected);
    } catch (error) {
      console.log("Error fetching slides:", error);
    }
  };

  useEffect(() => {
    slideimg();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slide.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slide.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <Navbar/>
    <section className='flex flex-col items-center justify-center py-10 px-5 bg-gradient-to-b from-gray-900 via-gray-800 to-black'>
      {slide.length > 0 && (
        <div className='relative w-full md:w-[80%] lg:w-[70%] h-[400px] md:h-[550px] flex items-center justify-center rounded-3xl shadow-2xl overflow-hidden'>

          {/* Left Button */}
          <button
            onClick={handlePrev}
            className='absolute left-3 md:left-6 bg-black/60 text-white p-3 md:p-4 rounded-full hover:bg-black transition z-10'
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Image */}
          <div className='w-full h-full flex flex-col items-center justify-center bg-gray-900'>
            <img
              src={slide[currentIndex].image}
              alt={slide[currentIndex].title}
              className='max-h-full max-w-full object-contain rounded-2xl drop-shadow-lg'
            />
            <p className='absolute bottom-65 text-white text-lg md:text-4xl  px-5 py-2 rounded-lg'>
              {slide[currentIndex].category.toUpperCase()}
            </p>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className='absolute right-3 md:right-6 bg-black/60 text-white p-3 md:p-4 rounded-full hover:bg-black transition z-10'
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
    </>
    
  );
};

export default Homepage;
