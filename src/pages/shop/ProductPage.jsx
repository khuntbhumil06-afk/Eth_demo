import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Truck, Lock, Globe } from "lucide-react";

import pistachios from '../../assets/pistachios.png';
import almonds from '../../assets/almonds.png';
import blackpeppercashewnuts from '../../assets/blackpeppercashewnuts.png';
import saltedcocktailnuts from '../../assets/saltedcocktailnuts.png';

import SidebarFilters from '../../components/Common/SidebarFilters';
import ProductCard from '../../components/Common/ProductCard';
import FaqAccordion from '../../components/Common/FaqAccordion';
import FeatureList from '../../components/Common/FeatureList';

import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

const ProductPage = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();

    const [selectedSort, setSelectedSort] = useState("");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [selectedOffer, setSelectedOffer] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate("/cart");
    };

    const handleNotifyMe = (product) => {
        alert(`We'll notify you when "${product.name}" is back in stock!`);
    };

    const productlist = [
        {
            id: 1,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            rating: 4.5,
            image: pistachios,
            brand: "Nutri One",
            discount: 5,
            price: 150.00,
            inStock: true,
            category: "Premium Nuts",
        },
        {
            id: 2,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            rating: 4.5,
            image: almonds,
            brand: "Yogi",
            discount: 10,
            price: 200.00,
            inStock: false,
            category: "Premium Nuts",
        },
        {
            id: 3,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            category: "Snacks",
            brand: "Sun Gift",
            discount: 15,
            rating: 4.5,
            image: blackpeppercashewnuts,
            price: 100.00,
            inStock: true,
        },
        {
            id: 4,
            category: "Chips",
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
            id: 5,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            category: "Seeds",
            brand: "Noi",
            discount: 25,
            rating: 4.5,
            image: pistachios,
            price: 450.00,
            inStock: true,
        },
        {
            id: 6,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            category: "Fruits & Nuts",
            brand: "Sun Gift",
            discount: 30,
            rating: 4.5,
            image: almonds,
            price: 350.00,
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
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            category: "Confectionery",
            rating: 4.5,
            brand: "Amore",
            discount: 45,
            image: pistachios,
            price: 800.00,
            inStock: true,
        },
        {
            id: 10,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            category: "Confectionery",
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
            category: "Seeds",
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

    const prodlist = [
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

    const handleBrandChange = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
        );
    };

    let filteredList = productlist.filter((item) => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const matchesPrice = item.price <= maxPrice;

        let matchesOffer = true;
        if (selectedOffer === "0-20") matchesOffer = item.discount >= 0 && item.discount <= 20;
        else if (selectedOffer === "20-40") matchesOffer = item.discount > 20 && item.discount <= 40;
        else if (selectedOffer === "40-60") matchesOffer = item.discount > 40 && item.discount <= 60;

        return matchesCategory && matchesBrand && matchesPrice && matchesOffer;
    });

    if (selectedSort === "lowToHigh") filteredList.sort((a, b) => a.price - b.price);
    else if (selectedSort === "highToLow") filteredList.sort((a, b) => b.price - a.price);
    else if (selectedSort === "aToZ") filteredList.sort((a, b) => a.name.localeCompare(b.name));
    else if (selectedSort === "zToA") filteredList.sort((a, b) => b.name.localeCompare(a.name));

    return (
        <>
            <div className="prod-container">
                <h1 className="prod-heading">All Products</h1>
            </div>

            <div className="prod-content-area">
                <div className="nav-prod">
                    <SidebarFilters
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        selectedBrands={selectedBrands}
                        handleBrandChange={handleBrandChange}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                        selectedOffer={selectedOffer}
                        setSelectedOffer={setSelectedOffer}
                    />

                    <div className="prod-main">
                        <div className="prod-category-row">
                            {categorielist.map((cat, index) => (
                                <button
                                    type="button"
                                    className={`btn-prod ${activeCategory === cat.label ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => navigate(cat.link)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        <div className="prod-grid prod-grid-bordered">
                            {filteredList.length > 0 ? (
                                filteredList.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        showFav={true}
                                        isFav={isFavorite(product.id)}
                                        onToggleFavorite={toggleFavorite}
                                        onAddToCart={handleAddToCart}
                                        onNotifyMe={!product.inStock ? handleNotifyMe : null}
                                        onCardClick={(prod) => navigate(`/product/${prod.id}`, { state: { product: prod } })}
                                    />
                                ))
                            ) : (
                                <p className="prod-empty">No products found for selected filters.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='prod-text'>
                <h2 className='prod-h2'>Recommendation For You</h2>
                <div className='prod-grid'>
                    {prodlist.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            showFav={false}
                            onAddToCart={handleAddToCart}
                            onNotifyMe={handleNotifyMe}
                        />
                    ))}
                </div>
            </div>

            <div className='prod-got'>
                <h2 className='prod-h2'>Got Any Questions?</h2>
                <FaqAccordion faqs={faqs} />
            </div>

            <FeatureList features={features} />
        </>
    );
};

export default ProductPage;