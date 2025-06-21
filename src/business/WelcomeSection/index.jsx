const WelcomeSection = () => {
    return (
        <div className="z-10 flex min-h-screen md:justify-center md:items-cente relative">
            <div className="z-20 mt-[120px] mx-5 sm:mx-15 max-w-[500px]">
                <div className="md:mx-auto md:ml-5">
                <h2 className="text-blue-600 font-tittle">Motion & desain grafis</h2>
                <div className="flex items-center  gap-2">
                    <h1 className="  leading-[0.8] sm:flex font-tittle text-5xl">
                    Buat brandmu
                    <span className="flex sm:ml-3">
                        lebih
                        <img
                        src="/items/svg/business/star.svg"
                        className="w-9 h-9 mt-1"
                        />
                    </span>
                    </h1>
                </div>
                <h1 className="  leading-[0.8] flex  font-tittle text-5xl">
                    hidup dan profesional
                </h1>
                <h2 className="text-black mt-6  ">
                    kualitas desain mewah dan unik dibuat tanpa template
                </h2>
                <div className="flex mt-6 gap-3">
                    <button className="btn-donate">
                    <a href="#produk">Produk</a>
                    </button>
                    <button className="btn-donate-orange">Portofolio</button>
                </div>
                </div>
                <div className="p-3 backdrop-blur-md  bg-white/10 border relative md:w-[700px]  md:-ml-[19%] w-auto border-white/60 z-30  mt-50 rounded-xl">
                <img
                    src="/items/logo/motion.gif"
                    className="rounded-lg z-30 w-full "
                />
                </div>
                </div>

                <img
                    src="/items/svg/business/orange-atas.svg"
                    className="absolute   sm:hidden -left-20 -top-30"
                />
                <img
                    src="/items/svg/business/blue-bawah.svg"
                    className="absolute floating-img -right-20 top-140 md:top-150 lg:top-130"
                />
        </div>
    );
};
export default WelcomeSection;
