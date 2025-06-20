"use client";
import React from 'react';

// ubah bagian sini aja,jangan hapus wide nya
const BentoGrid = () => {
  const gridItems = [
    {
      id: 1,
      title: "Travel Inspiration",
      description: "Beautiful destinations around the world",
      image: "/items/logo/1.jpeg",
      size: "wide",
      costume:''
    },
    {
      id: 2,
      title: "Recipe Ideas",
      description: "Delicious meals to try this weekend",
      image: "/items/logo/2.jpeg",
      size: "tall",
      costume: ''
    },
    {
      id: 3,
      title: "DIY Projects",
      description: "Creative crafts for your home",
      image: "/items/logo/3.jpeg",
      size: "default",
      costume : ''
    },
    {
      id: 4,
      title: "Fashion Trends",
      description: "Latest styles for the season",
      image: "/items/logo/4.jpeg",
      size: "default",
      costume: ''
    },
    {
      id: 5,
      title: "Tech Gadgets",
      description: "Cool new tech you'll want to buy",
      image: "/items/logo/5.jpeg",
      size: "default",
      costume: 'sm:hidden'
    },
    {
      id: 6,
      title: "Home Decor",
      description: "Interior design inspiration",
      image: "/items/logo/6.jpeg",
      size: "wide",
      costume: 'hidden md:block'
    },
  ];

// ============================================================================================================================================

  const getSizeClasses = (size) => {
    const base = "relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]";
    
    switch(size) {
      case 'tall':
        return `${base} min-h-[300px] sm:min-h-[400px] md:row-span-2`;
      case 'wide':
        return `${base} min-h-[200px] col-span-2 md:min-h-[250px]`;
      case 'big':
        return `${base} min-h-[300px] col-span-2 row-span-2 sm:min-h-[400px]`;
      default:
        return `${base} min-h-[200px] sm:min-h-[250px]`;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile (2 cols) */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {gridItems.map((item) => (
          <div key={item.id} className={`${getSizeClasses(item.size)} ${item.costume}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-3 text-white">
              <h3 className="text-sm font-bold mb-1 group-hover:text-amber-200 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
                {item.description}
              </p>
              <button className="absolute top-2 right-2 bg-white/90 hover:bg-white text-gray-900 p-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet (3 cols) and Desktop (4 cols) */}
      <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px, 1fr)]">
        {gridItems.map((item) => (
          <div 
            key={item.id}
            className={`${getSizeClasses(item.size)} ${item.size === 'big' ? 'sm:col-span-2 sm:row-span-2' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="relative z-20 h-full flex flex-col justify-end p-4 md:p-6 text-white">
              <h3 className="text-base md:text-lg font-bold mb-1 group-hover:text-amber-200 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
                {item.description}
              </p>
              <button className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;