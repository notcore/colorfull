"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Anim1 from "@/transition/anim1";
import Anim2 from "@/transition/anim2";
import Anim3 from "@/transition/anim3";
import Anim4 from "@/transition/anim4";
import Footer from "@/transition/footer";
import { House, FolderDot, Camera, Footprints } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [currentSection, setCurrentSection] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);
  const timeoutRef = useRef(null);

  const sections = [
    {
      id: "home",
      name: "Home",
      icon: <House width={20} height={20} strokeWidth={1.5} className="text-white" />,
      description: "Selamat datang!",
    },
    {
      id: "portofolio",
      name: "About me",
      icon: <Camera width={20} height={20} strokeWidth={1.5} className="text-white" />,
      description: "hai! nama aku Azero",
    },

    {
      id: "exprience",
      name: "Exprience",
      icon: <Footprints width={20} height={20} strokeWidth={1.5} className="text-white" />,
      description: "Perjalananku",
    },
        {
      id: "project",
      name: "Projects",
      icon: <FolderDot width={20} height={20} strokeWidth={1.5} className="text-white" />,
      description: "Karya terbaik yang pernah dibuat",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          if (currentSection !== section.id) {
            setCurrentSection(section.id);
            triggerNotification();
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  const triggerNotification = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      setShowNotification(false);
    }
    setShowNotification(true);
    timeoutRef.current = setTimeout(() => setShowNotification(false), 3000);
  };

  useEffect(() => {
    if (notificationRef.current) {
      gsap.to(notificationRef.current, {
        opacity: showNotification ? 1 : 0,
        y: showNotification ? 0 : 20,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [showNotification]);

  const currentData = sections.find((s) => s.id === currentSection);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
{currentData && (
  <div
    ref={notificationRef}
    className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/90 text-white px-5 py-3 rounded-full text-sm font-medium shadow-lg z-50 opacity-0 backdrop-blur-sm flex items-center gap-3"
    style={{ maxWidth: '90vw', width: 'auto' }}
  >
    <div className="bg-white/20 p-2 rounded-full">{currentData.icon}</div>
    <div>
      <h1 className="font-medium text-sm">{currentData.name}</h1>
      <p className="text-xs text-white/80">{currentData.description}</p>
    </div>
  </div>
)}

      {/* Sections */}
      <div id="home" className="relative z-10 h-screen w-full">
        <Anim1 />
      </div>
      <div id="portofolio" className="relative z-20 w-full">
        <Anim2 />
      </div>
      <div id="exprience" className="relative z-20 w-full">
        <Anim4 />
      </div>
      <div id="project" className="relative z-20 w-full">
        <Anim3 />
      </div>

      {/* Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[300px] h-[60px] bg-gray-50/80 border border-gray-300 rounded-full backdrop-blur-sm flex items-center justify-center">
        <div className="grid grid-cols-4 w-full px-4">
          {sections.map((section) => {
            const Icon = section.icon.type;
            const active = currentSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`flex justify-center items-center transition-all duration-300 ${
                  active ? "text-blue-600 mb-2" : "text-gray-500"
                }`}
              >
                <Icon
                  width={40}
                  height={40}
                  strokeWidth={1.2}
                  fill={active ? "currentColor" : "none"}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div id="project" className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}