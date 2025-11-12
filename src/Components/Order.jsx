import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { contextApi } from "./Authstatus";
import logo from '../assets/logo.png'

const Order = () => {
  const [card, setCard] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, userName } = useContext(contextApi);

 
  useEffect(() => {
    if (!isAuthenticated || !userName) {
      navigate("/login");
    }
  }, [isAuthenticated, userName, navigate]);

  
  const cardFetchapi = async () => {
    try {
      const res = await fetch(
        `https://e-commerce-backened-4fih.onrender.com/products/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      console.log("Fetched product:", data);
      setCard(data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    cardFetchapi();
  }, [id]);

  if (!card) {
    return (
      <p className="text-center text-4xl mt-20 flex justify-center items-center">
        Loading...
      </p>
    );
  }

  const images = Array.isArray(card.images)
    ? card.images
    : [card.thumbnail || card.image];

  const nextImg = () => {
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
     <div className="px-15 mt-5">
          <p className='text-[20px] md:text-xl font-bold '> <Link to={"/"}><img className='h-20' src={logo} alt="" /></Link></p>
          </div>
      <div>
        <button
          className="px-12 p-2 bg-blue-900 text-white rounded-full mt-15 ml-15 hover:bg-blue-950"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="w-6 h-6 black" />
        </button>
      </div>

      <div className="flex justify-center items-center h-150 gap-15 md:flex-col lg:flex-row flex-col">
        <div className="relative">
          <img
            src={images[currentImg]}
            alt={card.title || "Product"}
            className="h-[400px] w-[350px] md:h-[400px] md:w-[500px] object-contain rounded-2xl shadow-2xl bg-white p-4 transition-all duration-300"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-blue-100"
              >
                <ChevronLeft className="w-6 h-6 black" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-blue-100"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </>
          )}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {card.title}
          </h1>

          {card.brand && (
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Brand:</span> {card.brand}
            </p>
          )}

          {card.category && (
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Category:</span> {card.category}
            </p>
          )}

          <div className="flex items-center gap-2 mt-2">
            {card.rating && (
              <p className="flex items-center text-yellow-500">
                <Star className="w-5 h-5 fill-yellow-400" /> {card.rating}
              </p>
            )}
            {card.stock && (
              <span className="text-gray-500">• Stock: {card.stock}</span>
            )}
          </div>

          {card.price && (
            <p className="text-2xl font-semibold text-green-600 mt-2">
              ₹{card.price}
            </p>
          )}

          {card.discountPercentage && (
            <p className="text-lg text-red-500 mt-1">
              {card.discountPercentage}% OFF
            </p>
          )}

          {card.description && (
            <p className="text-gray-700 mt-4 leading-relaxed">
              {card.description}
            </p>
          )}

          <div className="flex flex-col items-start mt-5">
            <button className="px-8 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-950 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
