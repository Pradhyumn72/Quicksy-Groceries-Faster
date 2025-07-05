import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      id: 1,
      name: 'Biscuits & Cookies',
      image: '🍪',
      bgColor: 'bg-orange-100'
    },
    {
      id: 2,
      name: 'Makeup & Beauty',
      image: '💄',
      bgColor: 'bg-pink-100'
    },
    {
      id: 3,
      name: 'Skincare',
      image: '🧴',
      bgColor: 'bg-blue-100'
    },
    {
      id: 4,
      name: 'Bath & Body',
      image: '🧼',
      bgColor: 'bg-blue-50'
    },
    {
      id: 5,
      name: 'Hair Care',
      image: '💇‍♀️',
      bgColor: 'bg-cyan-100'
    },
    {
      id: 6,
      name: 'Cleaning Essentials',
      image: '🧽',
      bgColor: 'bg-green-100'
    },
    {
      id: 7,
      name: 'Home Needs',
      image: '🏠',
      bgColor: 'bg-teal-100'
    },
    {
      id: 8,
      name: 'Stationery & Books',
      image: '📚',
      bgColor: 'bg-indigo-100'
    },
    {
      id: 9,
      name: 'Kitchen & Dining',
      image: '🍽️',
      bgColor: 'bg-red-100'
    },
    {
      id: 10,
      name: 'Electronics & Appliances',
      image: '📱',
      bgColor: 'bg-gray-100'
    },
    {
      id: 11,
      name: 'Fragrances & Grooming',
      image: '🧴',
      bgColor: 'bg-purple-100'
    }
  ];

  const itemsPerView = 8;
  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            currentIndex === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900'
          }`}
        >
          <BsChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            currentIndex >= maxIndex 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900'
          }`}
        >
          <BsChevronRight size={20} />
        </button>

        {/* Slider Content */}
        <div className="mx-12">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-1/8 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="group cursor-pointer">
                  {/* Category Image Container */}
                  <div className={`${category.bgColor} rounded-2xl p-6 mb-3 aspect-square flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-md`}>
                    <div className="text-4xl">
                      {category.image}
                    </div>
                  </div>
                  
                  {/* Category Name */}
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-800 leading-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-blue-500 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;