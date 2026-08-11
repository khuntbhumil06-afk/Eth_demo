import { useRef, useEffect } from 'react';
import snap from '../../assets/snap.png';
import snap1 from '../../assets/snap1.png';
import snap2 from '../../assets/snap2.png';
import snap3 from '../../assets/snap3.png';

export default function Snack() {
    const ref = useRef(null);
    const drag = useRef({ active: false, start: 0, scroll: 0 });

    const items = [
        { id: 1, img: snap },
        { id: 2, img: snap1 },
        { id: 3, img: snap2 },
        { id: 4, img: snap3 },
        { id: 5, img: snap1 },
    ];
    const list = [...items, ...items, ...items];

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const cards = Array.from(el.querySelectorAll('.snap-card'));
        if (!cards.length) return;

        const setW = cards[items.length].offsetLeft - cards[0].offsetLeft;
        el.scrollLeft = setW;

        let animId;

        const updateStyles = () => {
            const center = el.offsetWidth / 2;

            if (el.scrollLeft >= setW * 2.3) el.scrollLeft -= setW;
            if (el.scrollLeft <= setW * 0.2) el.scrollLeft += setW;

            cards.forEach((card) => {
                const cardCenter = card.offsetLeft - el.scrollLeft + card.offsetWidth / 2;
                const dist = Math.abs(center - cardCenter);
                card.style.transform = `scale(${Math.max(0.78, 1.12 - (dist / 600) * 0.32)})`;
                card.style.opacity = Math.max(0.28, 1 - (dist / 600) * 0.72);
                card.style.zIndex = Math.max(1, Math.min(20, Math.round(20 - dist / 25)));
            });

            animId = requestAnimationFrame(updateStyles);
        };

        animId = requestAnimationFrame(updateStyles);

        return () => cancelAnimationFrame(animId);
    }, [items.length]);

    const startDrag = (x) => {
        drag.current = { active: true, start: x, scroll: ref.current.scrollLeft };
        ref.current.style.cursor = 'grabbing';
    };

    const moveDrag = (x) => {
        if (!drag.current.active) return;
        ref.current.scrollLeft = drag.current.scroll - (x - drag.current.start) * 1.5;
    };

    const stopDrag = () => {
        drag.current.active = false;
        if (ref.current) ref.current.style.cursor = 'grab';
    };

    return (
        <div className="snack-container">
            <div className="heading-test">
                <h1 className="snack-heading">Snack.Snap.Share.Repeat!</h1>
                <p className="snack-subheading">@tonggardenfood</p>
            </div>

            <div
                className="snap-carousel"
                ref={ref}
                style={{ cursor: 'grab' }}
                onMouseDown={(e) => startDrag(e.pageX)}
                onMouseMove={(e) => moveDrag(e.pageX)}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onTouchStart={(e) => startDrag(e.touches[0].pageX)}
                onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
                onTouchEnd={stopDrag}
            >
                {list.map((item, i) => (
                    <div className="snap-card" key={`${item.id}-${i}`}>
                        <div className="snap-image-wrap">
                            <img src={item.img} alt="snack" draggable="false" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}