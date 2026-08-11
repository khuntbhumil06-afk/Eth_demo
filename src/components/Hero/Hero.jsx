import { useState, useEffect } from "react"
import banner from '../../assets/banner.png'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

function Hero(){
    const images = [
        banner,
        banner1,
        banner2,
        banner3
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        },3000)

        return () => clearInterval(interval)
    }, [images.length])

    return(
        <>
         <div className="hero-section" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div className="hero-dot">
                {images.map((_, index) => (
                    <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(false)}>

                    </span>
                ))}
            </div>
         </div>
        </>
    )
}

export default Hero