import { useState } from 'react';
import { Truck, Lock, Globe } from 'lucide-react';
import pistachios from '../../assets/pistachios.png';
import almonds from '../../assets/almonds.png';
import blackpeppercashewnuts from '../../assets/blackpeppercashewnuts.png';
import saltedcocktailnuts from '../../assets/saltedcocktailnuts.png';
import ProductCard from '../../components/Common/ProductCard';
import SidebarFilters from '../../components/Common/SidebarFilters';
import FaqAccordion from '../../components/Common/FaqAccordion';
import FeatureList from '../../components/Common/FeatureList';

const Arrivals = () => {
    const [selectedSort, setSelectedSort] = useState("");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [selectedOffer, setSelectedOffer] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Deals Of The Month"];

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

    if (selectedSort === "lowToHigh") filteredList = [...filteredList].sort((a, b) => a.price - b.price);
    else if (selectedSort === "highToLow") filteredList = [...filteredList].sort((a, b) => b.price - a.price);
    else if (selectedSort === "aToZ") filteredList = [...filteredList].sort((a, b) => a.name.localeCompare(b.name));
    else if (selectedSort === "zToA") filteredList = [...filteredList].sort((a, b) => b.name.localeCompare(a.name));

    return (
        <>
            <div className="arrival-container">
                <h1 className="arrival-heading">New Arrivals</h1>
            </div>

            <div className="arrival-content-area">
                <div className="nav-arrival">
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

                    <div className="arrival-main">
                        <div className="arrival-category-row">
                            {categories.map((cat, index) => (
                                <button
                                    type="button"
                                    className={`btn-arrival ${activeCategory === cat ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="arrival-grid prod-grid-bordered"> 
                            {filteredList.length > 0 ? (
                                filteredList.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <p className="arrival-empty">No products found for selected filters.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="arrival-text">
                <h2 className="arrival-h2">Recommendation For You</h2>
                <div className="arrival-grid">
                    {aarilist.map((product) => (
                        <ProductCard key={product.id} product={product} showFav={false} />
                    ))}
                </div>
            </div>

            <div className="arrival-got">
                <h2 className="arrival-h2">Got Any Questions?</h2>
                <FaqAccordion faqs={faqs} />
            </div>

            <FeatureList features={features} />
        </>
    );
};

export default Arrivals;