import dried from '../assets/dried.png'
import taste from '../assets/taste.png'
import winter from '../assets/winter.png'
import { useNavigate } from "react-router-dom";
import { Truck, Lock, Globe } from "lucide-react";
import React, { useState } from 'react';

const Blogs = () => {
    const navigate = useNavigate();
    const [selectedBrands, setSelectedBrands] = useState([]);

    const blogslist = [
        {
            id: 1,
            image: dried,
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            brand: "Snacks",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "22/12/2025"
        },
        {
            id: 2,
            image: taste,
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            brand: "Chips",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "23/12/2025"
        },
        {
            id: 3,
            image: winter,
            brand: "Seed",
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "24/12/2025"
        },
        {
            id: 4,
            image: taste,
            brand: "Premium Nuts",
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "20/10/2025"
        },
        {
            id: 5,
            brand: "Fruits & Nuts",
            image: winter,
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "30/3/2026"
        },
        {
            id: 6,
            image: dried,
            brand: "Dried Fruits",
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "10/11/2025"
        },
        {
            id: 7,
            image: winter,
            brand: "Confectionery",
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "22/4/2025"
        },
        {
            id: 8,
            image: dried,
            brand: "Snacks",
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "23/9/2024"
        },
        {
            id: 9,
            image: taste,
            brand: "Seed",
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: <>
                It is known that weight loss is one of<br />
                the most frequently aimed objectives,<br />
                and to achieve this the individuals<br />
                stick to very strict diets and perform<br />
                intense exercises.
            </>,
            button: "Read More...",
            date: "24/1/2025"
        },
    ];

    const handleBrandChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    let filteredList = blogslist.filter((item) => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);

        return matchesBrand
    });

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
            <div className="blogs-container">
                <h1 className="blogs-heading">
                    Blogs
                </h1>
            </div>
            <div className='blogs-content-area'>
                <div className='nav-blogs'>
                    <aside className="blogs-sidebar">
                        <h2 className="blogs-header">Filters</h2>

                        <div className="blogs-group">
                            <div className="blogs-content">
                                {["Snacks", "Chips", "Premium Nuts", "Seed", "Fruits & Nuts", "Dried Fruits", "Confectionery"].map((brand) => (
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
                        </div>
                    </aside>

                    <div className="blogs-grid blogs-grid-bordered">
                        {filteredList.length > 0 ? (
                            filteredList.map((product) => (
                                <div className="blogs-card" key={product.id}>
                                    <div className="blogs-image-wrap">
                                        <img src={product.image} alt={product.name} />
                                    </div>

                                    <h3 className="blogs-name">{product.name}</h3>

                                    <p className="blogs-description">
                                        {product.description}
                                    </p>

                                    <button type='button' className='btn-blogs' onClick={() => navigate(`/blogs/${product.id}`)}>
                                        {product.button}
                                    </button>

                                    <span className='blogs-date'>
                                        {product.date}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="blogs-empty">No products found for selected filters.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="blogs-head">
                {features.map((item) => (
                    <div className="blogs-item" key={item.id}>
                        <span className="blogs-icon">{item.icon}</span>
                        <span className="blogs-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Blogs;