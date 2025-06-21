import Card2 from "@/components/ui/card2";

const ResultSection = () => {
  return (
    <div className="flex z-20 justify-center items-center relative min-h-screen bg-white   -mt-10">
      <div className="bg-gradient-to-t from-white w-screen  absolute top-1 h-[150px] lg:-mt-[150px]  to-transparant"></div>

      <div className="md:mx-auto">
        <div id="produk" className="md:mx-auto mt-50 ml-10">
          <h2 className="text-blue-600 font-tittle">Produk</h2>
          <div className="flex items-center  gap-2">
            <h1 className="  leading-[0.8] sm:flex font-tittle text-5xl">
              orderan yang
              <span className="flex sm:ml-3">
                pernah
                <img
                  src="/items/svg/business/star.svg"
                  className="w-9 h-9 mt-1"
                />
              </span>
            </h1>
          </div>
          <h2 className="  leading-[0.8] flex  font-tittle text-5xl">
            dibuat
          </h2>
          <p className="text-black mt-6  ">
            kami menawarkan produk digital jasa design untuk membuat{" "}
            <br className="hidden md:block" /> bisis kamu menjadi lebih hidup
          </p>
        </div>
     <div className="relative md:max-w-[800px] max-w-screen  my-24 overflow-hidden">
  {/* Efek kabut kiri */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent"></div>

  {/* Efek kabut kanan */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent"></div>

  {/* Carousel container */}
  <div
    className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
    style={{ scrollSnapType: "x mandatory" }}
  >
    {/* Card Centered */}
    <div className="shrink-0 scroll-snap-center">
      <Card2 img="1.jpeg" title="hello world" p="lorem ipsum dolor vinteg" />
    </div>
    <div className="shrink-0 scroll-snap-center">
      <Card2 img="2.jpeg" title="hello world" p="lorem ipsum dolor vinteg" />
    </div>
    <div className="shrink-0 scroll-snap-center">
      <Card2 img="3.jpeg" title="hello world" p="lorem ipsum dolor vinteg" />
    </div>
    <div className="shrink-0 scroll-snap-center">
      <Card2 img="4.jpeg" title="hello world" p="lorem ipsum dolor vinteg" />
    </div>
    {/* Tambah card sesuka lo */}
  </div>
</div>

      </div>
    </div>
  );
};

export default ResultSection;