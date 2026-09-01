import pistachios from '../../assets/pistachios.png';
import almonds from '../../assets/almonds.png';
import blackpeppercashewnuts from '../../assets/blackpeppercashewnuts.png';
import saltedcocktailnuts from '../../assets/saltedcocktailnuts.png';

import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Star, Bell, Heart } from 'lucide-react';
import { Truck, Lock, Globe } from "lucide-react";
import React, { useState } from 'react';

import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

import SidebarFilters from '../../components/Common/SidebarFilters';
import ProductCard from '../../components/Common/ProductCard';
import FaqAccordion from '../../components/Common/FaqAccordion';
import FeatureList from '../../components/Common/FeatureList';

const Seller = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(0);
    const { addToCart } = useCart();

    const [selectedSort, setSelectedSort] = useState("");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [selectedOffer, setSelectedOffer] = useState("");
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isOfferOpen, setIsOfferOpen] = useState(true);
    const { toggleFavorite, isFavorite } = useFavorites();

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate("/cart");
    };

    const handleNotifyMe = (product) => {
        alert(`We'll notify you when "${product.name}" is back in stock!`);
    };


    const sellerlist = [
        {
            id: 1,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            rating: 4.5,
            brand: "Noi",
            image: pistachios,
            price: 300.00,
            discount: 30,
            inStock: true,
        },
        {
            id: 2,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            brand: "Amore",
            rating: 4.5,
            image: almonds,
            discount: 20,
            price: 350.00,
            inStock: false,
        },
        {
            id: 3,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            brand: "Yogi",
            discount: 5,
            rating: 4.5,
            image: blackpeppercashewnuts,
            price: 150.00,
            inStock: true,
        },
        {
            id: 4,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            brand: "Nutri One",
            discount: 25,
            rating: 4.5,
            image: saltedcocktailnuts,
            price: 500.00,
            inStock: true,
        },
        {
            id: 5,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            rating: 4.5,
            brand: "Nutri One",
            discount: 10,
            image: pistachios,
            price: 450.00,
            inStock: true,
        },
        {
            id: 6,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            rating: 4.5,
            brand: "Yogi",
            discount: 50,
            image: almonds,
            price: 600.00,
            inStock: true,
        },
        {
            id: 7,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            brand: "Sun Gift",
            discount: 40,
            image: blackpeppercashewnuts,
            price: 650.00,
            inStock: true,
        },
        {
            id: 8,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            brand: "Sun Gift",
            discount: 55,
            image: saltedcocktailnuts,
            price: 550.00,
            inStock: false,
        },
        {
            id: 9,
            name: "Tong Garden Salted Pistachios Can,",
            size: "150g",
            rating: 4.5,
            brand: "Sun Gift",
            discount: 35,
            image: pistachios,
            price: 1000.00,
            inStock: true,
        },
        {
            id: 10,
            name: "Tong Garden Oven Roasted Salted Almonds, ",
            size: "145g",
            rating: 4.5,
            image: almonds,
            brand: "Amore",
            discount: 45,
            price: 950.00,
            inStock: true,
        },
        {
            id: 11,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            brand: "Noi",
            image: blackpeppercashewnuts,
            price: 750.00,
            discount: 30,
            inStock: false,
        },
        {
            id: 12,
            name: "Tong Garden Black pepper Cashew Nuts, ",
            size: "32g",
            rating: 4.5,
            brand: "Noi",
            discount: 60,
            image: saltedcocktailnuts,
            price: 850.00,
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

    let filteredList = sellerlist.filter((item) => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const matchesPrice = item.price <= maxPrice;

        let matchesOffer = true;
        if (selectedOffer === "0-20") matchesOffer = item.discount >= 0 && item.discount <= 20;
        else if (selectedOffer === "20-40") matchesOffer = item.discount > 20 && item.discount <= 40;
        else if (selectedOffer === "40-60") matchesOffer = item.discount > 40 && item.discount <= 60;

        return matchesBrand && matchesPrice && matchesOffer;
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

    const sellist = [
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

    return (
        <>
            <div className="seller-container">
                <h1 className="seller-heading">Best Sellers</h1>
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
                    {sellist.map((product) => (
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
}

export default Seller;