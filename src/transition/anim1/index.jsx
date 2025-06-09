"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const judul = useRef(null);
  const blue = useRef(null);
  const orange = useRef(null);
  const container = useRef(null);

  useEffect(() => {
 
    const ctx = gsap.context(() => {
 
      gsap.set([blue.current, orange.current], {
        x: gsap.utils.wrap([-200, 200])
      });

 
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,  
          markers: false, 
          onUpdate: self => {
            
            if (self.getVelocity() > 300) return;
          }
        }
      });
      tl.fromTo(blue.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        0
      ).to(blue.current,
        { x: -200, opacity: 0, duration: 0.5 },
        0.5
      );
      tl.fromTo(orange.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        0
      ).to(orange.current,
        { x: 200, opacity: 0, duration: 0.5 },
        0.5
      );
      tl.fromTo(judul.current,
        { y: 10, opacity: 0, scale: 1.2 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5 },
        0
      ).to(judul.current,
        { y: 140, opacity: 0, scale: 0, duration: 0.5 },
        0.5
      );
    }, container);

    return () => ctx.revert(); 
  }, []);

  return (
    <div 
      ref={container}
      className="relative overflow-hidden w-full h-screen flex flex-col items-center justify-center "
    >
     
      <img
        ref={orange} 
        src="/items/svg/orange-3d.svg"  
        className="will-change-transform fixed z-0 w-[150px] top-0 right-0"
        alt="Orange decoration"
      />

      
      <div ref={judul} className="fixed z-10 -mt-20 sm:mt-0 text-center px-4">
        <div className="mx-auto">
          <h1 className="bg-gray-100 mx-auto font-paragraph rounded-xl px-2 py-1 max-w-[200px]"> 
            <span className="font-tittle">Design</span> 
            : Motion & graphic
          </h1>
        </div>
        <h1 className="font-tittle text-6xl lg:text-8xl">hello i'm</h1>
        <img
          src="/items/svg/azero-tittle.svg"  
          className="will-change-transform w-[190px] lg:w-[290px] mx-auto -mt-5" 
          alt="Azero Title"
        />
        <p className="mt-6 max-w-md mx-auto">
          Over 20,000 creative teams use Azero to create stunning animations online.
        </p>
      </div>

       
      <img
        ref={blue} 
        src="/items/svg/blue-3d.svg" 
        className="will-change-transform fixed z-0 w-[130px] left-0 bottom-1"
        alt="Blue decoration"
      />
    </div>
  );
}

export default ScrollSection;