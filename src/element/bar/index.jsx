"use client";
import { House, FolderDot, Camera, Footprints } from "lucide-react";
import { useEffect, useState } from "react";

const Bar = () => {
  const [activeSection, setActiveSection] = useState('#home');
  
  const menu = [
    { 
      id: 0,
      icon: House,  
      to: '#home',
      activeColor: 'mb-2 transition duration-300 ease-in-out text-orange-500',  
      inactiveColor: 'text-gray-500'
    },
    { 
      id: 1,
      icon: Camera,
      to: '#portofolio',
      activeColor: 'mb-2 transition duration-300 ease-in-out text-indigo-500',
      inactiveColor: 'text-gray-500'
    },
    { 
      id: 3,
      icon: Footprints,
      to: '#exprience',
      activeColor: 'mb-2 transition duration-300 ease-in-out text-green-600',
      inactiveColor: 'text-gray-500'
    },
    { 
      id: 2,
      icon: FolderDot,
      to: '#project',
      activeColor: 'mb-2 transition duration-300 ease-in-out text-[#00d8ff]',
      inactiveColor: 'text-gray-500'
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      menu.forEach(item => {
        const section = document.querySelector(item.to);
        if (section) {
          const rect = section.getBoundingClientRect();
          
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(item.to);
          }
        }
      });
    };

  
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-2 left-0 z-50 right-0 mx-auto bg-gray-50/80 border border-gray-300 w-[300px] h-[60px] rounded-full backdrop-blur-sm">
      <div className="grid grid-cols-4 h-full items-center justify-center px-4">
        {menu.map((item) => {
          const Icon = item.icon; 
          const isActive = activeSection === item.to;
          return (
            <a 
              key={item.id} 
              href={item.to}
              className={`flex justify-center transition-colors duration-300 ${
                isActive ? item.activeColor : item.inactiveColor
              }`}
            >
              <Icon 
                width={40} 
                height={40} 
                strokeWidth={1.2} 
                fill={isActive ? "currentColor" : "none"} 
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Bar;