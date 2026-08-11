import React, { useState } from 'react';
import pistachios from '../../assets/pistachios.png';
import almonds from '../../assets/almonds.png';
import blackpeppercashewnuts from '../../assets/blackpeppercashewnuts.png';
import saltedcocktailnuts from '../../assets/saltedcocktailnuts.png';
import { useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import { Star } from 'lucide-react';

function Productlist() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
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

  const productlist = [
    // Premium Nuts
    {
      id: 1,
      name: "Tong Garden Salted Pistachios Can",
      category: "Premium Nuts",
      size: "150g",
      rating: 4.5,
      image: pistachios,
      price: 345.00,
      inStock: true,
    },
    {
      id: 2,
      name: "Tong Garden Oven Roasted Salted Almonds",
      category: "Premium Nuts",
      size: "145g",
      rating: 4.5,
      image: almonds,
      price: 345.00,
      inStock: false,
    },
    // Snacks
    {
      id: 3,
      name: "Tong Garden Black Pepper Cashew Nuts",
      category: "Snacks",
      size: "32g",
      rating: 4.5,
      image: blackpeppercashewnuts,
      price: 345.00,
      inStock: true,
    },
    // Chips
    {
      id: 4,
      name: "Tong Garden Salted Cocktail Nuts",
      category: "Chips",
      size: "32g",
      rating: 4.5,
      image: saltedcocktailnuts,
      price: 345.00,
      inStock: true,
    },
    // Seeds
    {
      id: 5,
      name: "Tong Garden Sunflower Seeds",
      category: "Seeds",
      size: "130g",
      rating: 4.3,
      image: pistachios,
      price: 150.00,
      inStock: true,
    },
    // Fruits & Nuts
    {
      id: 6,
      name: "Tong Garden Party Mix Fruits & Nuts",
      category: "Fruits & Nuts",
      size: "85g",
      rating: 4.6,
      image: almonds,
      price: 220.00,
      inStock: true,
    },
    // Dried Fruits
    {
      id: 7,
      name: "Tong Garden Dried Mango Slices",
      category: "Dried Fruits",
      size: "100g",
      rating: 4.4,
      image: blackpeppercashewnuts,
      price: 280.00,
      inStock: true,
    },
    // Confectionery
    {
      id: 8,
      name: "Tong Garden Chocolate Coated Almonds",
      category: "Confectionery",
      size: "40g",
      rating: 4.7,
      image: saltedcocktailnuts,
      price: 180.00,
      inStock: true,
    }
  ];

  const filteredProducts = selectedCategory === "All"
    ? productlist
    : productlist.filter(item => item.category === selectedCategory);

  return (
    <div className="productlist-container">
      <h1 className="productlist-heading">Explore Our Snack Universe</h1>

      <nav className="product-nav-container">
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className={`btn-list ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="productlist-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="productlist-card" key={product.id}>
              {product.rating && (
                <div className="productlist-rating">
                  <Star size={14} fill="#FFC107" stroke="#FFC107" />
                  <span>{product.rating}</span>
                </div>
              )}

              <h3 className="productlist-name">{product.name}</h3>
              <p className="productlist-size">{product.size}</p>

              <div className="productlist-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>

              <p className="productlist-price">
                Rs. {product.price ? product.price.toFixed(2) : "0.00"}
              </p>

              <button
                type="button"
                className={`add-to-cart-btnall ${!product.inStock ? 'out-of-stock' : ''}`}
                disabled={!product.inStock}
                onClick={() => handleAddToCart(product)}
              >
                {product.inStock ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>
          ))
        ) : (
          <p className="no-products">આ કેટેગરીમાં કોઈ પ્રોડક્ટ ઉપલબ્ધ નથી.</p>
        )}
      </div>

      <button type="button" className="view-all-productlist" onClick={() => navigate("/product")}>
        View All Products
      </button>
    </div>
  );
}

export default Productlist;