import BoxReveal from "@/components/ui/BoxReveal"


const timelineData = [
  {
    year: "2024 — 2027",
    title: "Mahasiswa ITB, fakultas Seni Rupa dan Desain",
    paragraph: "Keterima ITB karena gambar furry, dan sekarang saya sedang belajar untuk menjadi seorang programmer yang handal. Saya senang menciptakan desain yang ceria untuk menarik perhatian client.",
      color: 'bg-orange-600 text-white',
  },
  {
    year: "2024 — 2025",
    title: "Freelance Designer",
    paragraph: "Bekerja sebagai freelance grapich & motion designer, fokus pada pembuatan logo dan ilustrasi digital untuk berbagai klien lokal.",
      color: 'bg-green-600 text-white',
  },
  {
    year: "2004? — sekarang",
    title: "hidup",
    paragraph: "hidup dibumi menjalani karir sebagai desainer grafis, menciptakan karya seni digital yang unik.",
      color: 'bg-indigo-800 text-white',
  },
];

const Anim4 = () => {
  return (
    <div id="exp" className="relative  mt-34 flex justify-center items-center py-10">
      <div className="flex flex-col gap-6 px-5 mx-auto md:mt-20 ">
         <h1 className="bg-gray-100 mx-auto mt-6 font-paragraph rounded-xl px-2 py-1 max-w-[200px]"> 
            <span className="font-tittle">Exprience</span> 
            : Perjalanan
        </h1>
      <h1 className="font-tittle mb-27 text-center text-4xl sm:text-5xl lg:text-6xl">
        Built for teams who move fast
      </h1>
        <img
        src="/items/svg/orange2-3d.svg"  
        className="will-change-transform md:top-50 md:hidden -top-20 absolute -left-60 md:-left-40 z-0 w-[350px] "
        alt="Orange decoration"
      />
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex max-w-[1000px] z-10  hover:backdrop-blur-xl hover:bg-white/40 transition duration-500 rounded-lg p-5 lg:mx-55 flex-col sm:flex-row sm:items-start gap-4"
          >
            <div className={`text-xs max-w-[150px] font-mono px-3 py-1 rounded-full sm:w-28 flex-shrink-0 ${item.color}`}>
              {item.year}
            </div>
            <div className="flex-1 border-l-2 border-black pl-5">
              <h1 className="font-tittle text-start text-3xl sm:text-5xl lg:text-6xl"> 
               {item.title}
              </h1>
              <BoxReveal>
                {item.paragraph}
              </BoxReveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anim4;