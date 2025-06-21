"use client";
import { House, FolderDot, Camera, Footprints } from "lucide-react";
import { useEffect, useState } from "react";
import LiquidGlass from "liquid-glass-react";

const Bar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const menu = [
    {
      id: 0,
      icon: House,
      to: "#home",
      activeColor: "mb-2 transition duration-300 ease-in-out text-orange-500",
      inactiveColor: "text-gray-500",
    },
    {
      id: 1,
      icon: Camera,
      to: "#portofolio",
      activeColor: "mb-2 transition duration-300 ease-in-out text-indigo-500",
      inactiveColor: "text-gray-500",
    },
    {
      id: 3,
      icon: Footprints,
      to: "#exprience",
      activeColor: "mb-2 transition duration-300 ease-in-out text-green-600",
      inactiveColor: "text-gray-500",
    },
    {
      id: 2,
      icon: FolderDot,
      to: "#project",
      activeColor: "mb-2 transition duration-300 ease-in-out text-[#00d8ff]",
      inactiveColor: "text-gray-500",
    },
    {
      id: 4,
      icon: FolderDot,
      to: "#project",
      activeColor: "mb-2 transition duration-300 ease-in-out text-[#00d8ff]",
      inactiveColor: "text-gray-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      menu.forEach((item) => {
        const section = document.querySelector(item.to);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(item.to);
          }
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LiquidGlass
      mode="polar"
      overLight={false}
      displacementScale={100}
      blurAmount={0.2}
      saturation={140}
      cornerRadius={20}
      elasticity={0}
      aberrationIntensity={2}
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        stroke: "1px white",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
        }}
      >
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.to;
          return (
            <a
              key={item.id}
              href={item.to}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: isActive ? item.activeColor : item.inactiveColor,
                transition: "color 0.3s",
              }}
            >
              <Icon
                width={30}
                height={30}
                strokeWidth={1.5}
                fill={isActive ? "currentColor" : "none"}
              />
            </a>
          );
        })}
      </div>
    </LiquidGlass>
  );
};

export default Bar;
