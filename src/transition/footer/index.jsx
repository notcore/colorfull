
const Footer = () => {
    return(
        <footer className="bg-gradient-bluecyan overflow-hidden relative w-full h-auto p-10">
        
        <a className="text-blue-800 opacity-70 bg-white px-2 rounded-full text-sm absolute top-2 left-2" href="https://wa.me/6288214821134">developer @hyuma.dev</a>

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