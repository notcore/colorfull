import { useEffect, useState } from 'react';

const Maskot = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState("maskot.png");
    const [animationState, setAnimationState] = useState("");

    useEffect(() => {
        let interval, timeout1, timeout2, timeout3;

        const showMaskot = () => {
            // Reset any existing timeouts
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);

            // Start entering animation with maskot2.png
            setCurrentImage("maskot2.png");
            setAnimationState("enter");
            setIsVisible(true);

            // After entering animation completes (1s)
            timeout1 = setTimeout(() => {
                setAnimationState("visible");
                setCurrentImage("maskot.png");

                // Stay visible for 5 seconds
                timeout2 = setTimeout(() => {
                    setCurrentImage("maskot2.png");
                    setAnimationState("exit");

                    // After exiting animation completes (1s)
                    timeout3 = setTimeout(() => {
                        setIsVisible(false);
                        setAnimationState("");
                    }, 1000);
                }, 7000);
            }, 1000);
        };

        // Initial trigger
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
        <a href="https://lynk.id/azerodesign" className={`maskot-container fixed z-30 top-20 left-0 ${animationState}`}>
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

