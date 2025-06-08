
const Footer = () => {
    return(
        <footer className="bg-gradient-bluecyan overflow-hidden relative w-full h-auto p-10">
        
        <div className=" hidden w-1 before:content-['.']"></div>

        {/* sesuai janji ya bang kalo dihapus atau diganti blackscreen makasi:)  */}
        <a className="text-white/80 opacity-70 select-none pointer-events-none text-sm absolute top-1 left-1" href="https://wa.me/6288214821134">developer @hyuma.dev</a>

            <h1 className="font-tittle  text-start text-white text-4xl sm:text-5xl lg:text-6xl">
                Terima kasih
            </h1>
            <p className="text-white">
                      Over 20,000 creative teams use Azero to create stunning animations online.
                    </p>
                    <img
                    src="/items/svg/biru-3d.svg"  
                    className="will-change-transform  absolute top-0 -right-20 z-0 w-[350px] "
                    alt="Orange decoration"
                  />
        </footer>
    )
}

export default Footer;