import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Plus, Minus, X, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Check } from "lucide-react";
import { Truck, Lock, Globe } from "lucide-react";
import garden from '../assets/garden.png';
import pistachios from '../assets/pistachios.png';
import almonds from '../assets/almonds.png';
import blackpeppercashewnuts from '../assets/blackpeppercashewnuts.png';
import saltedcocktailnuts from '../assets/saltedcocktailnuts.png';

const ProductDetails = () => {
    const productdetails = {
        image: garden
    }

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [formText, setFormText] = useState({
        title: '',
        review: '',
        email: '',
        name: '',
    });

    const [errors, setErrors] = useState({})
    const handleProductDetails = (item) => {
        if (item.id === 1) {
            navigate("/user");
        }
        else {
            setIsFormOpen(true);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormText((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formText.name.trim())
            newErrors.name = "Name is required";

        if (!formText.email.trim())
            newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formText.email.trim()))
            newErrors.email = "Enter a valid email";

        if (!formText.review.trim())
            newErrors.review = "review is required";

        if (!formText.title.trim())
            newErrors.title = "title is required";
        return newErrors;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        navigate(`/form?name=${encodeURIComponent(formText.name)}&title=${encodeURIComponent(formText.title)}&email=${encodeURIComponent(formText.email)}&review=${encodeURIComponent(formText.review)}`);
        closeForm();
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setFormText({ name: '', title: '', email: '', review: '' });
        setErrors({});
    };

    const [openFaq, setOpenFaq] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = location.state?.product;

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [showRatingPopup, setShowRatingPopup] = useState(false);

    if (!product) {
        return (
            <div className="pd-empty">
                <p>product not found.</p>
                <button onClick={() => navigate("/product")}>
                    Back to Products
                </button>
            </div>
        )
    }

    const images = product.images && product.images.length > 0
        ? product.images
        : [product.image];

    const ratingBreakdown = product.ratingBreakdown || [
        {
            stars: 5,
            count: 125
        },
        {
            stars: 4,
            count: 25
        },
        {
            stars: 3,
            count: 15
        },
        {
            stars: 2,
            count: 3
        },
        {
            stars: 1,
            count: 0
        },
    ];

    const totalRatings = ratingBreakdown.reduce((sum, r) => sum + r.count, 0);
    const maxCount = Math.max(...ratingBreakdown.map((r) => r.count), 1);

    const reviews = product.reviews || [
        {
            id: 1,
            name: "Meet S.",
            rating: 5,
            title: "Flavour explosion!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            id: 2,
            name: "Nil M.",
            rating: 4,
            title: "Amazing Taste must try",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        },
        {
            id: 3,
            name: "Deeo G.",
            rating: 3,
            title: "Great quality snack",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
    ];

    const handleQtyChange = (type) => {
        if (type === "inc") setQuantity((q) => q + 1);
        if (type === "dec") setQuantity((q) => (q > 1 ? q - 1 : 1));
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        navigate("/cart");
    }

    const handleBuyNow = () => {
        addToCart({ ...product, quantity });
        navigate("/checkout");
    }

    const renderStars = (rating, size = 16) => {
        return [1, 2, 3, 4, 5].map((star) => (
            <Star
                key={star}
                size={size}
                fill={star <= Math.round(rating) ? "#F28706" : "none"}
                stroke="#F28706"
            />
        ));
    };

    const productdetailslist = [
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
            <div className="pd-container">
                <div className="pd-gallery">
                    <div className="pd-thumb-col">
                        {images.map((img, index) => (
                            <button
                                type="button"
                                key={index}
                                className={`pd-thumb ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} />
                            </button>
                        ))}
                    </div>

                    <div className="pd-main-image">
                        <img src={images[selectedImage]} alt={product.name} />
                    </div>
                </div>

                <div className="pd-info">
                    <h1 className="pd-title">{product.name} {product.size}</h1>

                    <p className="pd-price-current">Rs. {product.price?.toFixed(2)}/-</p>

                    <div className="pd-rating-wrap">
                        <button
                            type="button"
                            className="pd-rating-trigger"
                            onClick={() => setShowRatingPopup(!showRatingPopup)}
                        >
                            {renderStars(product.rating)}
                            <span className="pd-rating-text">{product.rating} out of 5</span>
                        </button>

                        {showRatingPopup && (
                            <div className="pd-rating-popup">
                                <div className="pd-rating-popup-header">
                                    <div className="pd-rating-summary">
                                        {renderStars(product.rating)}
                                        <span>{product.rating} out of 5</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="pd-popup-close"
                                        onClick={() => setShowRatingPopup(false)}
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                <p className="pd-rating-count">{totalRatings} ratings</p>

                                <div className="pd-rating-bars">
                                    {ratingBreakdown.map((r) => (
                                        <div className="pd-rating-bar-row" key={r.stars}>
                                            <span className="pd-bar-label">{r.stars} ★</span>
                                            <div className="pd-bar-track">
                                                <div
                                                    className="pd-bar-fill"
                                                    style={{ width: `${(r.count / maxCount) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="pd-bar-count">
                                                {String(r.count).padStart(3, '0')}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button type="button" className="pd-write-review-btn">
                                    Write a Review
                                </button>
                            </div>
                        )}
                    </div>

                    <ul className="pd-feature-list">
                        <li><Check size={14} /> Oven Roasted, Not Fried</li>
                        <li><Check size={14} /> Naturally Good Fats</li>
                        <li><Check size={14} /> No Cholesterol</li>
                    </ul>

                    <div className="pd-actions">
                        <div className="pd-qty">
                            <button type="button" onClick={() => handleQtyChange("dec")}>
                                <Minus size={14} />
                            </button>
                            <span>{String(quantity).padStart(2, '0')}</span>
                            <button type="button" onClick={() => handleQtyChange("inc")}>
                                <Plus size={14} />
                            </button>
                        </div>

                        <button
                            type="button"
                            className="pd-btn-add"
                            disabled={!product.inStock}
                            onClick={handleAddToCart}
                        >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>

                    <button
                        type="button"
                        className="pd-btn-buy"
                        disabled={!product.inStock}
                        onClick={handleBuyNow}
                    >
                        Buy It Now
                    </button>
                </div>
            </div>

            <div className="pd-reviews">
                <h2 className="pd-reviews-title">Customer Reviews</h2>

                <div className="pd-review-grid">
                    {reviews.map((review) => (
                        <div className="pd-review-card" key={review.id}>
                            <div className="pd-review-stars">
                                {renderStars(review.rating)}
                            </div>
                            <h4 className="pd-review-title">{review.title}</h4>
                            <p className="pd-review-text">{review.text}</p>
                            <p className="pd-review-name">— {review.name}</p>
                        </div>
                    ))}
                </div>

                <button type="button" className="pd-write-review"
                    aria-label='Form'
                    onClick={() => setIsFormOpen(true)}
                >
                    Write a review
                </button>
            </div>

            <div className="pd-card">
                <div className="productdetails-image">
                    <img src={productdetails.image} alt="garden" />
                </div>
            </div>

            <div className='prod-text'>
                <h2 className='prod-h2'>Recommendation For You</h2>
                <div className='prod-grid'>
                    {productdetailslist.map((product) => (
                        <div className="prod-card" key={product.id}>
                            <div className="prod-rating">
                                <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                <span>{product.rating}</span>
                            </div>

                            <h3 className="prod-name">{product.name}</h3>

                            <div className="prod-image-wrap">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <p className="prod-price">
                                Rs. {product.price ? product.price.toFixed(2) : "0.00"}
                            </p>

                            <div className="prod-btn-row">
                                <button
                                    type="button"
                                    className={`prod-btnall ${!product.inStock ? 'out-of-stock' : ''}`}
                                    disabled={!product.inStock}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='prod-got'>
                <h2 className='prod-h2'>Got Any Questions?</h2>
                <div className='prod-faq-list'>
                    {faqs.map((faq, index) => (
                        <div className='prod-faq-item' key={index}>
                            <button type='button' className='prod-faq-question' onClick={() => toggleFaq(index)}>
                                <span>{faq.question}</span>
                                {openFaq === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                            </button>
                            {openFaq === index && (
                                <p className="prod-faq-answer">{faq.answer}</p>
                            )}
                            <div className="prod-faq-divider"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="prod-head">
                {features.map((item) => (
                    <div className="prod-item" key={item.id}>
                        <span className="prod-icon">{item.icon}</span>
                        <span className="prod-label">{item.label}</span>
                    </div>
                ))}
            </div>

            {isFormOpen && (
                <div className="form-overlay" onClick={closeForm}>
                    <div className="form-box" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="form-close"
                            aria-label="Close"
                            onClick={closeForm}
                        >
                            &times;
                        </button>
                        <h1 className="form-heading">
                            Write a Review
                        </h1>
                        <form onSubmit={handleFormSubmit}>
                            <label className="form-label" htmlFor="title">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className={`form-input ${errors.title ? 'input-error' : ''}`}
                                value={formText.title}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.title && (
                                <span className="error-text">{errors.title}</span>
                            )}<br />

                            <label className="form-label" htmlFor="review">
                                Review
                            </label>
                            <textarea
                                type="text"
                                id="review"
                                name="review"
                                className={`form-input ${errors.review ? 'input-error' : ''}`}
                                value={formText.review}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.review && (
                                <span className="error-text">{errors.review}</span>
                            )}<br />

                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`form-input ${errors.name ? 'input-error' : ''}`}
                                value={formText.name}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.name && (
                                <span className="error-text">{errors.name}</span>
                            )}<br/>

                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`form-input ${errors.email ? 'input-error' : ''}`}
                                value={formText.email}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.email && (
                                <span className="error-text">{errors.email}</span>
                            )}<br />

                            <button type="submit" className="btn-individual form-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductDetails