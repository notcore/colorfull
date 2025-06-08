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

const Bar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const barRef = useRef(null);

  const menu = [
    { id: 0, icon: House, to: "#home", activeColor: "text-orange-500", inactiveColor: "text-gray-500" },
    { id: 1, icon: Camera, to: "#portofolio", activeColor: "text-indigo-500", inactiveColor: "text-gray-500" },
    { id: 3, icon: Footprints, to: "#exprience", activeColor: "text-green-600", inactiveColor: "text-gray-500" },
    { id: 2, icon: FolderDot, to: "#project", activeColor: "text-[#00d8ff]", inactiveColor: "text-gray-500" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      menu.forEach((item) => {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    const footer = document.querySelector("#footer");

    const trigger = ScrollTrigger.create({
      trigger: footer,
      start: "top bottom-=20", // pas footer nyentuh bar
      onEnter: () => {
        gsap.set(bar, { position: "absolute", bottom: "20px" });
      },
      onLeaveBack: () => {
        gsap.set(bar, { position: "fixed", bottom: "16px" }); // bottom-4
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={barRef} className="z-50 w-full flex justify-center fixed bottom-4">
      <div className="bg-gray-50/80 border border-gray-300 w-[300px] h-[60px] rounded-full backdrop-blur-sm">
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
                <Icon width={40} height={40} strokeWidth={1.2} fill={isActive ? "currentColor" : "none"} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative">
      <section id="home" className="min-h-screen relative z-10"><Anim1 /></section>
      <section id="portofolio" className="relative z-20"><Anim2 /></section>
      <section id="exprience"><Anim4 /></section>
      <section id="project"><Anim3 /></section>

      {/* Bar sticky */}
      <div className="relative">
        <Bar />
        <div id="footer" className=" h-10 w-full" />
      </div>

      <div >
        <Footer />
      </div>
    </div>
  );
}
