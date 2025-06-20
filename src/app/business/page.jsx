"use client";
import React, { useRef, useState } from "react";
import LiquidGlass from "liquid-glass-react";
import CardSwap, { Card } from "@/components/ui/Card";
import Howto  from "@/components/ui/Howto";
 

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
              marginLeft:"50%", 
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
          <div className="z-10 flex min-h-screen md:justify-center md:items-cente relative">
            <div className="z-20 mt-[120px] mx-5 sm:mx-15 max-w-[500px]">
              <div className="md:mx-auto md:ml-5">
                <h2 className="text-blue-600 font-tittle">Motion & desain grafis</h2>
                <div className="flex items-center  gap-2">
                
                  <h1 className="  leading-[0.8] sm:flex font-tittle text-5xl">
                    Buat brandmu 
                    <span className="flex sm:ml-3">
                      lebih
                      <img src="/items/svg/business/star.svg" className="w-9 h-9 mt-1" />
                    </span>
                  </h1> 
                </div> 
                <h1 className="  leading-[0.8] flex  font-tittle text-5xl">hidup dan profesional</h1>
                <h2 className="text-black mt-6  ">kualitas desain mewah dan unik dibuat tanpa template</h2>
                <div className="flex mt-6 gap-3">
                  <button  className="btn-donate"><a href="#produk">Produk</a></button>
                  <button  className="btn-donate-orange">Portofolio</button>
                </div>
              </div>
              <div className="p-3 backdrop-blur-md  bg-white/10 border relative md:w-[700px]  md:-ml-[19%] w-auto border-white/60 z-30  mt-50 rounded-xl">
                <img src="/items/logo/motion.gif" className="rounded-lg z-30 w-full " />
              </div> 
            </div>

            <img src="/items/svg/business/orange-atas.svg" className="absolute   sm:hidden -left-20 -top-30"/>  
            <img src="/items/svg/business/blue-bawah.svg" className="absolute floating-img -right-20 top-140 md:top-150 lg:top-130"/>

          

          </div>
          <div className="flex z-20 justify-center items-center relative min-h-screen bg-white   -mt-10">
              <div className="bg-gradient-to-t from-white w-screen  absolute top-1 h-[150px] lg:-mt-[150px]  to-transparant">
              </div>
              
              <div className="md:mx-auto">
               <div id="produk" className="md:mx-auto mt-50 ml-5">
                <h2 className="text-blue-600 font-tittle">Produk</h2>
                <div className="flex items-center  gap-2">
                
                  <h1 className="  leading-[0.8] sm:flex font-tittle text-5xl">
                    Produk yang
                    <span className="flex sm:ml-3">
                      kami
                      <img src="/items/svg/business/star.svg" className="w-9 h-9 mt-1" />
                    </span>
                  </h1> 
                </div> 
                <h1 className="  leading-[0.8] flex  font-tittle text-5xl">tawarkan</h1>
                <h2 className="text-black mt-6  ">kami menawarkan produk digital jasa design untuk membuat <br className="hidden md:block"/> bisis kamu menjadi lebih hidup</h2>

              </div>
                                       {/*  start */}
                <div className="mt-10 grid gap-4 mx-10 sm:mt-16 max-w-[800px] lg:grid-cols-2 md:mx-auto lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-2xl font-tittle tracking-tight text-gray-950 max-lg:text-center">sosial media management</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
                  </div>
                  <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                      <img className="size-full object-cover object-top" src="/items/instagram.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
              </div>
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-2xl font-tittle tracking-tight text-gray-950 max-lg:text-center"> motion logo</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.</p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img className="w-full max-lg:max-w-xs" src="/items/motion.png" alt="" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-2xl font-tittle tracking-tight text-gray-950 max-lg:text-center">design</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
                  </div>
                  <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                    <img className="h-[min(152px,40cqw)] object-cover -ml-3" src="/items/design.svg" alt="" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
              </div>
              
                </div>
                {/* end */}
              </div>
     
          </div>
          <div className="flex z-20 justify-center items-center relative min-h-screen bg-white"> 
              
              <div className="md:mx-auto">
               <div id="produk" className="md:mx-auto mt-50 md:ml-[5%] ml-5">
                <h2 className="text-blue-600 font-tittle">Produk</h2>
                <div className="flex items-center  gap-2">
                
                  <h1 className="  leading-[0.8] sm:flex font-tittle text-5xl">
                    Bgaimana cara
                    <span className="flex sm:ml-3">
                      order
                      <img src="/items/svg/business/star.svg" className="w-9 h-9 mt-1" />
                    </span>
                  </h1> 
                </div>  
                <h2 className="text-black mt-6  ">kami menawarkan produk digital jasa design untuk membuat <br className="hidden md:block"/> bisis kamu menjadi lebih hidup</h2>
              </div>
                 
                  <Howto />
                 
              </div>
     
          </div>
        </div>
      </div>
    </div>
  );
}