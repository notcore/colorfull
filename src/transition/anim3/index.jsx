"use client";
import Folder from "@/element/folder"
import Bento from "@/element/bento"
import { 
  Clapperboard,
  PencilRuler
} from "lucide-react";


const Anim3 = () => {
  return (
    <div className="relative w-full py-40 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid max-w-[1000px] mx-7 md:mx-10 place-items-center">
        <Folder />
        <h1 className="bg-gray-100 mx-auto mt-6 font-paragraph rounded-xl px-2 py-1 max-w-[200px]"> 
          <span className="font-tittle">Project</span> 
          : Motion & graphic
        </h1>
        <h1 className="font-tittle mb-3 text-center text-4xl sm:text-5xl lg:text-6xl">
          Built for teams who move fast
        </h1>
    
        {/* Motion Logo Section */}
        <div className="mt-26 w-full">
          <div className="flex ml-auto justify-end gap-2 items-center">
            <Clapperboard className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" strokeWidth={2.5} />
            <h1 className="font-tittle text-3xl sm:text-5xl lg:text-6xl">Motion logo</h1>
          </div>
          <div className="text-end text-sm sm:text-base mb-6">
            <span className="font-tittle">Azero is designed for speed</span> — everything, from navigating the tool to rendering animations, is lightning-fast.
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <img src="/items/logo/motion.gif" className="rounded-lg w-full" alt="Motion logo example"/>
          </div>
        </div>
        
        {/* Graphic Design Section */}
        <div className="mt-26 w-full">
          <div className="flex justify-start mt-6 gap-2 items-center">
            <h1 className="font-tittle text-3xl sm:text-5xl lg:text-6xl">Design Grafis</h1>
            <PencilRuler className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" strokeWidth={2.5} />
          </div>
          <div className="text-start text-sm sm:text-base mb-6">
            <span className="font-tittle">Azero is designed for speed</span> — everything, from navigating the tool to rendering animations, is lightning-fast.
          </div>
          <Bento />
        </div>
      </div>
    </div>
  );
};

export default Anim3;