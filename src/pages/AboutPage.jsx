import garden from '../assets/garden.png'
import amore from '../assets/amore.png'
import noi from '../assets/noi.png'
import sungift from '../assets/sungift.png'
import vutrione from '../assets/vutrione.png'
import yogi from '../assets/yogi.png'
import { useNavigate } from 'react-router-dom'
import { Truck, Lock, Globe } from "lucide-react";

const AboutPage = () => {
    const navigate = useNavigate();
    const about = {
        image: garden
    };

    const handleExploreRange = (product) => {
        navigate("/productpage");
    };
    const items = [
        {
            id: 1,
            image: amore,
            name: "Comfort in every crunch. Amore is your go-to for soulful snacks that bring warm sweetness, and a little indulgence to every moment."
        },
        {
            id: 2,
            image: noi,
            name: "Snack bold, snack different. NOI is for the curious foodie who craves flavour-packed twists and unapologetically bold bites."
        },
        {
            id: 3,
            image: sungift,
            name: "Simple joys, naturally nutty. Sun Gift brings you the wholesome goodness of classic nuts and seeds with timeless taste."
        },
        {
            id: 4,
            image: vutrione,
            name: "Nutrition meats flavour. NutriOne offers snacks that nourish from the inside out, a health conscious choice with a delicious twist."
        },
        {
            id: 5,
            image: yogi,
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
    ]

    const features = [
        {
            id: 1,
            icon: <Truck size={40} strokeWidth={2} />,
            label: "Fast Delivery"
        },
        {
            id: 2,
            icon: <Lock size={40} strokeWidth={2} />,
            label: "Secure Payments"
        },
        {
            id: 3,
            icon: <Globe size={40} strokeWidth={2} />,
            label: "Global Reach"
        },
    ];

    return (
        <>
            <div className='container-div'>
                <div className="about-container">
                    <p className="heading-p">
                        Our Satory
                    </p>
                    <h1 className="heading-h1">
                        The Snack Story That<br />
                        Crossed Borders
                    </h1>
                    <p className="subheading-p">
                        Tong Garden Group has been a beloved name in the world of snacks since 1963. As one of Asia’s leading brands, we’ve built our legacy on trusted quality, a wide portfolio of snack brands, and a commitment to delighting generations - then and now.<br /><br />
                        With dedicated manufacturing facilities in Thailand, Malaysia, and India, offices across Asia, and a strong international network of sales and distribution, Tong Garden Group continues to lead the way in flavour innovation. We source exceptional ingredients from the regions that grow them best, so every pack delivers an authentic taste of the world <br /><br />
                        <span className="subheading-p2">
                            Discover your adventure, all in one garden - Tong Garden
                        </span>
                    </p>
                    <div className='about-images'>
                        <img src={about.image} alt='garden' />
                    </div>
                </div>
                <div className='about-text'>
                    <p className="heading-p">
                        Philosophy
                    </p>
                    <p className="subheading-p">
                        At Tong Garden Group, we are united by one belief. Every brand <br />
                        under our umbrella carries a distinct promise:
                    </p>
                    <h1 className='heading-h1'>
                        Build on Quality,<br />
                        Loved for Boldness
                    </h1>
                    <p className="subheading-p">
                        Whether it’s a classic nut mix or a bold new flavour, we believe that when someone<br />
                        opens a Tong Garden pack, they don’t just snack.<br />
                        they unpack a <span className="sub-text">World of adventures.</span>
                    </p>
                </div>
                <div className='about-hero'>
                    <p className='heading-p'>
                        Brand vision
                    </p>
                    <h2 className='heading-h1'>
                        A World Full of Snackventures
                    </h2>
                    <p className='subheading-p'>
                        We dream of a world where every snack tells a story - of cultures,<br />
                        colours, and flavours coming together. It’s a celebration of taste, a journey<br />
                        of the senses, and above all, a world of adventures from Tong Garden.
                    </p>
                    <div className="about-divider"></div>
                    <div className='about-section'>
                        <div className='about-heading'>
                            <h2 className='heading-h2'>
                                Our Distribution<br />
                                Network
                            </h2>
                            <p className='subheading-p3'>
                                We make sure our snacks reach far and wide.<br />
                                With a strong international network of sales and distribution, Tong<br />
                                Garden Group delivers to homes, stores, and markets across the globe.<br />
                                Whether it’s through supermarkets, retail partners, or online platforms,<br />
                                our snacks are always within reach - fresh, tasty, and ready to enjoy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='about-herosection'>
                    <h1 className='heading-h1'>
                        Our Brands
                    </h1>
                    <p className='subheading-p'>
                        From classics to bold new twists, each Tong Garden Group brand<br />
                        brings a unique flavour story. Whether you’re in the mood for something<br />
                        healthy, indulgent, or adventurous - there’s a snack for it.
                    </p>
                    <div className='about-hero-grid'>
                        {items.map((product) => (
                            <div className="about-hero-card" key={product.id}>
                                <div className="about-hero-image-wrap">
                                    <img src={product.image} alt={product.name} />
                                </div>

                                <h3 className="about-hero-name">{product.name}</h3>

                                <button
                                    type="button"
                                    className="about-hero-btn"
                                    onClick={() => handleExploreRange(product)}
                                >
                                    Explore Range
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-head">
                    {features.map((item) => (
                        <div className="about-item" key={item.id}>
                            <span className="about-icon">{item.icon}</span>
                            <span className="about-label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AboutPage;