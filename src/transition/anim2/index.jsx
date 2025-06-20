"use client";
import { Phone, Mail } from "lucide-react";
import BoxReveal from "@/components/ui/BoxReveal";


const Anim2 = () => {
  const contact = [
    {
      id: 0,
      icon: <Phone size={18} />,
      contact: '089218381',
      link: 'wa.me/097329380',
      color: "hover:text-green-600"
    },
    {
      id: 1,
      icon: <Mail size={18} />,
      contact: 'hyuma_dev@email.com',
      link: 'www.email.com',
      color: "hover:text-red-600"
    }
  ];

  return (
    <div className="w-full  min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] mx-10 xl:pl-20 md:pl-10 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-1 order-2">
        <h1 className="bg-gray-100 my-6 font-paragraph rounded-xl px-2 py-1 max-w-[200px]"> 
            <span className="font-tittle">About me</span> 
            : Designer 
      </h1>
          <h1 className="font-tittle mb-3 text-start text-3xl sm:text-5xl lg:text-6xl">Hai nama aku Azero</h1>     
          <BoxReveal>
            — ini azero seorang desainer dan motion grafis, aku telah memulai perjalanan sebagai desainer selama 1 tahun lebih, 
            memulai karir sebagai desainer sejak kelas 8 smp dan telah melayani lebih dari 1000 client.
          </BoxReveal>
          <div className="flex flex-wrap gap-3 my-3 mb-6 justify-start">
            <span className="bg-blue-600 text-white font-paragraph rounded-xl px-3 py-1 text-sm">
              motion
            </span>
            <span className="bg-orange-400 text-white font-paragraph rounded-xl px-3 py-1 text-sm">
              desainer
            </span>
            <span className="bg-green-600 text-white font-paragraph rounded-xl px-3 py-1 text-sm">
              grafis
            </span>
          </div>
          <p className="font-medium mb-2">contact:</p>
          <div className="space-y-3">
            {contact.map((item) => (
              <div key={item.id} className={`flex ${item.color} gap-2 items-center`}>
                {item.icon}
                <a href={item.link} className="text-sm sm:text-base transition-colors">
                  {item.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:order-2 order-1 flex justify-center">
          <img
            src="/items/res/foto.png"
            className="w-[200px] md:w-[300px] object-cover"
            alt="Profile photo"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
      </div>

    </div>
  );
};

export default Anim2;