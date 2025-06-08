"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GifSwiper = () => {
  const gifs = [
    {
      id: 1,
      url: '/items/logo/motion.gif',
      title: 'Funny Cat'
    },
    {
      id: 2,
      url: '/items/logo/motion.gif',
      title: 'Funny Cat'
    },
    {
      id: 3,
      url: '/items/logo/motion.gif',
      title: 'Funny Cat'
    },
    {
      id: 4,
      url: '/items/logo/motion.gif',
      title: 'Funny Cat'
    },
    
    // ... tambahkan GIF lainnya
  ];

return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      {/* Gradasi putih di samping kiri dan kanan */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        speed={600}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        className="relative z-0"
      >
        {gifs.map((gif) => (
          <SwiperSlide key={gif.id}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={gif.url} 
                  alt={gif.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{gif.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default GifSwiper;