import { useState, useEffect, useRef } from 'react'
import monthly from '../../assets/monthly.png'

function Monthly() {
    const month = {
        image: monthly
    };
    
    const startDateRef = useRef(null);
    if (startDateRef.current === null) {
        const now = new Date();
        startDateRef.current = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
    }

    const [timeElapsed, setTimeElapsed] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const updateCountUp = () => {
            const now = new Date().getTime();
            const start = startDateRef.current.getTime();
            const elapsed = now - start;

            const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
            const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

            setTimeElapsed({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        };

        updateCountUp();
        const timer = setInterval(updateCountUp, 1000);

        return () => clearInterval(timer);
    }, []);

    const countdown = [
        { 
            value: timeElapsed.days, 
            label: "DAYS" 
        },
        { 
            value: timeElapsed.hours, 
            label: "HOURS" 
        },
        { 
            value: timeElapsed.minutes, 
            label: "MINUTES" 
        },
        { 
            value: timeElapsed.seconds, 
            label: "SECONDS" 
        },
    ];

    return (
        <>
            <div className="monthly-container">
                <h1 className="monthly-heading">
                    Monthly Giveaway
                </h1>
                <div className="monthly-grid">
                    <div className='monthly-image'>
                        <img src={month.image} alt='month' />
                        <div className='heading-h2'>
                            <h2 className='h2'>
                                The timer's ticking. Get ready to unlock the surprise,<br />
                                your monthly reason to snack more!
                            </h2>
                            <div className='countdown-wrap'>
                                {countdown.map((item) => (
                                    <div className='countdown-circle' key={item.label}>
                                        <span className='countdown-value'>{item.value}</span>
                                        <span className='countdown-label'>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Monthly