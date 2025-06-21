"use client";
import React, { useRef, useState } from "react";
import LiquidGlass from "liquid-glass-react";
import HowToSection from "@/business/HowToSection";
import ProdukSection from "@/business/ProdukSection";
import WelcomeSection from "@/business/WelcomeSection";
import ResultSection from "@/business/ResultSection";

export default function Business() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        // background: "white",
        // padding: "50px",
        position: "relative",
      }}
      className="overflow-x-hidden max-w-screen overflow-y-scroll scrollbar-hide scroll-smooth"
    >
      <div style={{ height: "200vh" }}>
        <LiquidGlass
          mode="polar"
          overLight={false}
          displacementScale={100}
          blurAmount={0.1}
          saturation={140}
          cornerRadius={0}
          elasticity={0}
          aberrationIntensity={2}
          style={{
            position: "fixed",
            top: "3%",
            width: "100%",
            padding: "0",
            border: "none",
            fontSize: "18px",
            textAlign: "start",
            marginLeft: "50%",
            zIndex: "1000",
          }}
        >
          <div className=" w-screen relative h-full ">
            <h2 className="-top-2  font-tittle text-black absolute">Azero</h2>
            <p
              style={{
                fontSize: "14px",
                opacity: "0.8",
              }}
            ></p>
          </div>
        </LiquidGlass>
        <div className="min-h-screen relative">
          <WelcomeSection />
          <ProdukSection />
          <ResultSection />
          <HowToSection />
        </div>
      </div>
    </div>
  );
}
