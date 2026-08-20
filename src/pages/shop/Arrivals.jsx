import pistachios from '../assets/pistachios.png';
import almonds from '../assets/almonds.png';
import blackpeppercashewnuts from '../assets/blackpeppercashewnuts.png';
import saltedcocktailnuts from '../assets/saltedcocktailnuts.png';
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Star, Bell } from 'lucide-react';
import { Truck, Lock, Globe } from "lucide-react";
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Arrivals = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(0);
    const { addToCart } = useCart();

    const [selectedSort, setSelectedSort] = useState("");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [selectedOffer, setSelectedOffer] = useState("");
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isOfferOpen, setIsOfferOpen] = useState(true);

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate("/cart");
    };

    const handleNotifyMe = (product) => {
        alert(`We'll notify you when "${product.name}" is back in stock!`);
    };

    const categories = [
        "All",
        "Deals Of The Month"
    ];
    const [activeCategory, setActiveCategory] = useState("All");

    const arrivallist = [
        {
            id: 1,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            rating: 4.5,
            brand: "Sun Gift",
            discount: 55,
            image: pistachios,
            price: 250.00,
            inStock: true,
            category: "Deals Of The Month",
        },
        {
            id: 2,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            rating: 4.5,
            brand: "Sun Gift",
            discount: 10,
            image: almonds,
            price: 350.00,
            inStock: false,
            category: "Deals Of The Month",
        },
        {
            id: 3,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            category: "Snacks",
            brand: "Noi",
            discount: 30,
            rating: 4.5,
            image: blackpeppercashewnuts,
            price: 300.00,
            inStock: true,
        },
        {
            id: 4,
            category: "Deals Of The Month",
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            brand: "Nutri One",
            discount: 35,
            image: saltedcocktailnuts,
            price: 200.00,
            inStock: true,
        },
        {
            id: 5,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            category: "Deals Of The Month",
            rating: 4.5,
            brand: "Noi",
            discount: 20,
            image: pistachios,
            price: 400.00,
            inStock: true,
        },
        {
            id: 6,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            category: "Deals Of The Month",
            rating: 4.5,
            brand: "Amore",
            discount: 25,
            image: almonds,
            price: 900.00,
            inStock: true,
        },
        {
            id: 7,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            category: "Deals Of The Month",
            rating: 4.5,
            brand: "Nutri One",
            discount: 45,
            image: blackpeppercashewnuts,
            price: 850.00,
            inStock: true,
        },
        {
            id: 8,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            brand: "Yogi",
            discount: 60,
            category: "Deals Of The Month",
            rating: 4.5,
            image: saltedcocktailnuts,
            price: 750.00,
            inStock: false,
        },
        {
            id: 9,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            brand: "Noi",
            discount: 15,
            category: "Deals Of The Month",
            rating: 4.5,
            image: pistachios,
            price: 650.00,
            inStock: true,
        },
        {
            id: 10,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            brand: "Yogi",
            discount: 50,
            category: "Deals Of The Month",
            rating: 4.5,
            image: almonds,
            price: 500.00,
            inStock: true,
        },
        {
            id: 11,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            category: "Deals Of The Month",
            rating: 4.5,
            brand: "Amore",
            discount: 40,
            image: blackpeppercashewnuts,
            price: 860.00,
            inStock: false,
        },
        {
            id: 12,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            brand: "Amore",
            discount: 30,
            category: "Deals Of The Month",
            rating: 4.5,
            image: saltedcocktailnuts,
            price: 600.00,
            inStock: true,
        },
    ];

    const handleBrandChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    let filteredList = arrivallist.filter((item) => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const matchesPrice = item.price <= maxPrice;

        let matchesOffer = true;
        if (selectedOffer === "0-20") matchesOffer = item.discount >= 0 && item.discount <= 20;
        else if (selectedOffer === "20-40") matchesOffer = item.discount > 20 && item.discount <= 40;
        else if (selectedOffer === "40-60") matchesOffer = item.discount > 40 && item.discount <= 60;

        return matchesCategory && matchesBrand && matchesPrice && matchesOffer;
    });

    if (selectedSort === "lowToHigh") {
        filteredList.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "highToLow") {
        filteredList.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "aToZ") {
        filteredList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "zToA") {
        filteredList.sort((a, b) => b.name.localeCompare(a.name));
    }

    const aarilist = [
        {
            id: 1,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            rating: 4.5,
            image: pistachios,
            price: 345.00,
            inStock: true,
        },
        {
            id: 2,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            rating: 4.5,
            image: almonds,
            price: 345.00,
            inStock: false,
        },
        {
            id: 3,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            image: blackpeppercashewnuts,
            price: 345.00,
            inStock: true,
        },
        {
            id: 4,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            image: saltedcocktailnuts,
            price: 345.00,
            inStock: true,
        },
    ];

    const faqs = [
        {
            question: "Do you add any preservatives or artificial flavors?",
            answer: "Never! Our nuts are 100% natural, with no additives or hidden nasties — just pure, healthy goodness.",
        },
        {
            question: "Are your products gluten-free and vegan?",
            answer: "Yes, most of our products are gluten-free and vegan. Please check individual product labels for specific allergen information.",
        },
        {
            question: "How should I store the nuts after opening the pack?",
            answer: "Store in a cool, dry place in an airtight container to keep them fresh and crunchy for longer.",
        },
        {
            question: "Where do you source your peanuts from?",
            answer: "We source our peanuts from trusted farms, ensuring quality and freshness in every pack.",
        },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

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
            <div className="arrival-container">
                <h1 className="arrival-heading">New Arrivals</h1>
            </div>

            <div className="arrival-content-area">
                <div className="nav-arrival">
                    <aside className="arrival-sidebar">
                        <div className="arrival-group">
                            <h3 className="arrival-title">Sort By</h3>
                            {["lowToHigh", "highToLow", "bestSellers", "aToZ", "zToA"].map((sortKey) => (
                                <label key={sortKey} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedSort === sortKey}
                                        onChange={() => setSelectedSort(selectedSort === sortKey ? "" : sortKey)}
                                    />
                                    {sortKey === "lowToHigh" && " Price low to high"}
                                    {sortKey === "highToLow" && " Price high to low"}
                                    {sortKey === "bestSellers" && " Best Sellers"}
                                    {sortKey === "aToZ" && " A to Z"}
                                    {sortKey === "zToA" && " Z to A"}
                                </label>
                            ))}
                        </div>

                        <div className="filter-divider"></div>

                        <h2 className="arrival-heading">Filters</h2>

                        <div className="arrival-group">
                            <div className="arrival-header" onClick={() => setIsBrandOpen(!isBrandOpen)}>
                                <span>Brands</span>
                                {isBrandOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                            {isBrandOpen && (
                                <div className="arrival-content">
                                    {["Amore", "Noi", "Nutri One", "Sun Gift", "Yogi"].map((brand) => (
                                        <label key={brand} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => handleBrandChange(brand)}
                                            />
                                            {" "}{brand}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="arrival-group">
                            <h3 className="arrival-title">Price Range</h3>
                            <input
                                type="range"
                                min="1"
                                max="1500"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="arrival-slider"
                            />
                            <div className="arrival-range-values">
                                <span>01</span>
                                <span>{maxPrice}</span>
                            </div>
                        </div>

                        <div className="arrival-group">
                            <div className="arrival-header" onClick={() => setIsOfferOpen(!isOfferOpen)}>
                                <span>Offers</span>
                                {isOfferOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                            {isOfferOpen && (
                                <div className="arrival-content">
                                    {[
                                        { label: "00% - 20%", value: "0-20" },
                                        { label: "20% - 40%", value: "20-40" },
                                        { label: "40% - 60%", value: "40-60" },
                                    ].map((offer) => (
                                        <label key={offer.value} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={selectedOffer === offer.value}
                                                onChange={() => setSelectedOffer(selectedOffer === offer.value ? "" : offer.value)}
                                            />
                                            {" "}{offer.label}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </aside>

                    <div className="arrival-main">
                        <div className="arrival-category-row">
                            {categories.map((product, index) => (
                                <button
                                    type="button"
                                    className={`btn-arrival ${activeCategory === product ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setActiveCategory(product)}
                                >
                                    {product}
                                </button>
                            ))}
                        </div>

                        <div className="arrival-grid prod-grid-bordered">
                            {filteredList.length > 0 ? (
                                filteredList.map((product) => (
                                    <div className="arrival-card" key={product.id}>
                                        <div className="arrival-rating">
                                            <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                            <span>{product.rating}</span>
                                        </div>

                                        <h3 className="arrival-name">{product.name}</h3>

                                        <div className="arrival-image-wrap"
                                            onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img src={product.image} alt={product.name} />
                                        </div>

                                        <p className="arrival-price">
                                            Rs. {product.price ? product.price.toFixed(2) : "0.00"}
                                        </p>

                                        <div className="arrival-btn-row">
                                            <button
                                                type="button"
                                                className={`arrival-btnall ${!product.inStock ? 'out-of-stock' : ''}`}
                                                disabled={!product.inStock}
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                            </button>
                                            {!product.inStock && (
                                                <button
                                                    type="button"
                                                    className="arrival-notify-icon"
                                                    onClick={() => handleNotifyMe(product)}
                                                    aria-label="Notify me when back in stock"
                                                >
                                                    <Bell size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="arrival-empty">No products found for selected filters.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='arrival-text'>
                <h2 className='arrival-h2'>Recommendation For You</h2>
                <div className='arrival-grid'>
                    {aarilist.map((product) => (
                        <div className="arrival-card" key={product.id}>
                            <div className="arrival-rating">
                                <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                <span>{product.rating}</span>
                            </div>

                            <h3 className="arrival-name">{product.name}</h3>

                            <div className="arrival-image-wrap">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <p className="arrival-price">
                                Rs. {product.price ? product.price.toFixed(2) : "0.00"}
                            </p>

                            <div className="arrival-btn-row">
                                {product.inStock ? (
                                    <button
                                        type="button"
                                        className="arrival-btnall"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            className="arrival-btnall notify-me"
                                            onClick={() => handleNotifyMe(product)}
                                        >
                                            Notify Me
                                        </button>
                                        <button
                                            type="button"
                                            className="arrival-notify-icon"
                                            onClick={() => handleNotifyMe(product)}
                                            aria-label="Notify me when back in stock"
                                        >
                                            <Bell size={16} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='arrival-got'>
                <h2 className='arrival-h2'>Got Any Questions?</h2>
                <div className='arrival-faq-list'>
                    {faqs.map((faq, index) => (
                        <div className='arrival-faq-item' key={index}>
                            <button type='button' className='arrival-faq-question' onClick={() => toggleFaq(index)}>
                                <span>{faq.question}</span>
                                {openFaq === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                            </button>
                            {openFaq === index && (
                                <p className="arrival-faq-answer">{faq.answer}</p>
                            )}
                            <div className="arrival-faq-divider"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="arrival-head">
                {features.map((item) => (
                    <div className="arrival-item" key={item.id}>
                        <span className="arrival-icon">{item.icon}</span>
                        <span className="arrival-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Arrivals;