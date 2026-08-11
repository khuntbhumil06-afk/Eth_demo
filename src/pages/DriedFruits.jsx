import pistachios from '../assets/pistachios.png';
import almonds from '../assets/almonds.png';
import blackpeppercashewnuts from '../assets/blackpeppercashewnuts.png';
import saltedcocktailnuts from '../assets/saltedcocktailnuts.png';
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Star, Bell } from 'lucide-react';
import { Truck, Lock, Globe } from "lucide-react";
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const DriedFruits = () => {
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
        "Snacks",
        "Chips",
        "Premium Nuts",
        "Seeds",
        "Fruits & Nuts",
        "Dried Fruits",
        "Confectionery"
    ];
    const [activeCategory, setActiveCategory] = useState("Dried Fruits");

    const driedlist = [
        {
            id: 1,
            category: "Fruits & Nuts",
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            brand: "Amore",
            discount: 20,
            image: saltedcocktailnuts,
            price: 400.00,
            inStock: true,
        },
        {
            id: 2,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            rating: 4.5,
            image: pistachios,
            brand: "Fruits & Nuts",
            discount: 5,
            price: 150.00,
            inStock: true,
            category: "Dried Fruits",
        },
        {
            id: 3,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            category: "Seeds",
            rating: 4.5,
            brand: "Amore",
            discount: 45,
            image: pistachios,
            price: 800.00,
            inStock: true,
        },
        {
            id: 4,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            rating: 4.5,
            image: almonds,
            brand: "Yogi",
            discount: 10,
            price: 200.00,
            inStock: false,
            category: "Dried Fruits",
        },
        {
            id: 5,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            category: "Dried Fruits",
            brand: "Noi",
            discount: 25,
            rating: 4.5,
            image: pistachios,
            price: 450.00,
            inStock: true,
        },
        {
            id: 6,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            category: "Dried Fruits",
            brand: "Sun Gift",
            discount: 15,
            rating: 4.5,
            image: blackpeppercashewnuts,
            price: 100.00,
            inStock: true,
        },
        {
            id: 7,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            category: "Dried Fruits",
            rating: 4.5,
            brand: "Nutri One",
            discount: 40,
            image: blackpeppercashewnuts,
            price: 250.00,
            inStock: true,
        },
        {
            id: 8,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            category: "Dried Fruits",
            brand: "Yogi",
            discount: 35,
            rating: 4.5,
            image: saltedcocktailnuts,
            price: 500.00,
            inStock: false,
        },
        {
            id: 9,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            category: "Premium Nuts",
            brand: "Sun Gift",
            discount: 30,
            rating: 4.5,
            image: almonds,
            price: 350.00,
            inStock: true,
        },
        {
            id: 10,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            category: "Dried Fruits",
            rating: 4.5,
            brand: "Noi",
            discount: 50,
            image: almonds,
            price: 650.00,
            inStock: true,
        },
        {
            id: 11,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            brand: "Amore",
            discount: 55,
            category: "Fruits & Nuts",
            rating: 4.5,
            image: blackpeppercashewnuts,
            price: 1000.00,
            inStock: false,
        },
        {
            id: 12,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            brand: "Yogi",
            discount: 60,
            category: "Dried Fruits",
            rating: 4.5,
            image: saltedcocktailnuts,
            price: 700.00,
            inStock: true,
        },
    ];

    const categorielist = [
        {
            link: "/product",
            label: "All"
        },
        {
            link: "/snacks",
            label: "Snacks"
        },
        {
            link: "/chips",
            label: "Chips"
        },
        {
            link: "/nuts",
            label: "Premium Nuts"
        },
        {
            link: "/seeds",
            label: "Seeds"
        },
        {
            link: "/fruit",
            label: "Fruits & Nuts"
        },
        {
            link: "/driedfruit",
            label: "Dried Fruits"
        },
        {
            link: "/confectionery",
            label: "Confectionery"
        },
    ]

    const handleBrandChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    let filteredList = driedlist.filter((item) => {
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

    const driedslist = [
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
            <div className="fruits-container">
                <h1 className="fruits-heading">Dried Fruits</h1>
            </div>

            <div className="fruits-content-area">
                <div className="nav-fruits">
                    <aside className="fruits-sidebar">
                        <div className="fruits-group">
                            <h3 className="fruits-title">Sort By</h3>
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

                        <h2 className="fruits-heading">Filters</h2>

                        <div className="fruits-group">
                            <div className="fruits-header" onClick={() => setIsBrandOpen(!isBrandOpen)}>
                                <span>Brands</span>
                                {isBrandOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                            {isBrandOpen && (
                                <div className="fruits-content">
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

                        <div className="fruits-group">
                            <h3 className="fruits-title">Price Range</h3>
                            <input
                                type="range"
                                min="1"
                                max="1500"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="fruits-slider"
                            />
                            <div className="fruits-range-values">
                                <span>01</span>
                                <span>{maxPrice}</span>
                            </div>
                        </div>

                        <div className="fruits-group">
                            <div className="fruits-header" onClick={() => setIsOfferOpen(!isOfferOpen)}>
                                <span>Offers</span>
                                {isOfferOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                            {isOfferOpen && (
                                <div className="fruits-content">
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

                    <div className="fruits-main">
                        <div className="fruits-category-row">
                            {/* {categories.map((product, index) => (
                                <button
                                    type="button"
                                    className={`btn-prod ${activeCategory === product ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setActiveCategory(product)}
                                >
                                    {product}
                                </button>
                            ))} */}
                            {categorielist.map((cat, index) => (
                                <button
                                    type="button"
                                    className={`btn-fruits ${activeCategory === cat.label ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => navigate(cat.link)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        <div className="fruits-grid prod-grid-bordered">
                            {filteredList.length > 0 ? (
                                filteredList.map((product) => (
                                    <div className="fruits-card" key={product.id}>
                                        <div className="fruits-rating">
                                            <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                            <span>{product.rating}</span>
                                        </div>

                                        <h3 className="fruits-name">{product.name}</h3>

                                        <div className="fruits-image-wrap">
                                            <img src={product.image} alt={product.name} />
                                        </div>

                                        <p className="fruits-price">
                                            Rs. {product.price ? product.price.toFixed(2) : "0.00"}
                                        </p>

                                        <div className="fruits-btn-row">
                                            <button
                                                type="button"
                                                className={`fruits-btnall ${!product.inStock ? 'out-of-stock' : ''}`}
                                                disabled={!product.inStock}
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                            </button>
                                            {!product.inStock && (
                                                <button
                                                    type="button"
                                                    className="fruits-notify-icon"
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
                                <p className="fruits-empty">No products found for selected filters.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='fruits-text'>
                <h2 className='fruits-h2'>Recommendation For You</h2>
                <div className='fruits-grid'>
                    {driedslist.map((product) => (
                        <div className="fruits-card" key={product.id}>
                            <div className="fruits-rating">
                                <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                <span>{product.rating}</span>
                            </div>

                            <h3 className="fruits-name">{product.name}</h3>

                            <div className="fruits-image-wrap">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <p className="fruits-price">
                                Rs. {product.price ? product.price.toFixed(2) : "0.00"}
                            </p>

                            <div className="fruits-btn-row">
                                {product.inStock ? (
                                    <button
                                        type="button"
                                        className="fruits-btnall"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            className="fruits-btnall notify-me"
                                            onClick={() => handleNotifyMe(product)}
                                        >
                                            Notify Me
                                        </button>
                                        <button
                                            type="button"
                                            className="fruits-notify-icon"
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

            <div className='fruits-got'>
                <h2 className='fruits-h2'>Got Any Questions?</h2>
                <div className='fruits-faq-list'>
                    {faqs.map((faq, index) => (
                        <div className='fruits-faq-item' key={index}>
                            <button type='button' className='fruits-faq-question' onClick={() => toggleFaq(index)}>
                                <span>{faq.question}</span>
                                {openFaq === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                            </button>
                            {openFaq === index && (
                                <p className="fruits-faq-answer">{faq.answer}</p>
                            )}
                            <div className="fruits-faq-divider"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="fruits-head">
                {features.map((item) => (
                    <div className="fruits-item" key={item.id}>
                        <span className="fruits-icon">{item.icon}</span>
                        <span className="fruits-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DriedFruits;