import { useEffect, useState } from 'react';

// menu maskot

const Maskot = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState("maskot.png");
    const [animationState, setAnimationState] = useState("");

    useEffect(() => {
        let interval, timeout1, timeout2, timeout3;

        const showMaskot = () => {
            
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);

            
            setCurrentImage("maskot2.png");
            setAnimationState("enter");
            setIsVisible(true);

            timeout1 = setTimeout(() => {
                setAnimationState("visible");
                setCurrentImage("maskot.png");

                timeout2 = setTimeout(() => {
                    setCurrentImage("maskot2.png");
                    setAnimationState("exit");

                    timeout3 = setTimeout(() => {
                        setIsVisible(false);
                        setAnimationState("");
                    }, 1000);
                }, 7000);
            }, 1000);
        };

        
        timeout1 = setTimeout(showMaskot, 0);
        interval = setInterval(showMaskot, 19000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <a href="/business" className={`maskot-container fixed z-30 top-20 left-0 ${animationState}`}>
            <img 
                src={`/items/png/${currentImage}`}
                alt="Maskot" 
                className="w-[150px] "
                loading="lazy"
            />
        </a>
    );
};

export default Maskot;

