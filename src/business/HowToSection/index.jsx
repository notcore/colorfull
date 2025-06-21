import Howto from "@/components/ui/Howto";

const HowToSection = () => {
  return (
    <div className="flex z-20 justify-center items-center relative min-h-screen bg-white">
        <div className="md:mx-auto">
            <div id="produk" className="md:mx-auto mt-50 md:ml-[5%] ml-5">
            <h2 className="text-blue-600 font-tittle">Produk</h2>
            <div className="flex items-center  gap-2">
                <h1 className="  leading-[0.8] sm:flex font-tittle text-5xl">
                Bagaimana cara
                <span className="flex sm:ml-3">
                    order
                    <img
                    src="/items/svg/business/star.svg"
                    className="w-9 h-9 mt-1"
                    />
                </span>
                </h1>
            </div>
            <h2 className="text-black mt-6  ">
                kami menawarkan produk digital jasa design untuk membuat{" "}
                <br className="hidden md:block" /> bisis kamu menjadi lebih hidup
            </h2>
            </div>
            <Howto />
        </div>
    </div>
  );
};

export default HowToSection;
