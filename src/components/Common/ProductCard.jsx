import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, Bell } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

const ProductCard = ({ product, showFav = true }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    navigate("/cart");
  };

  const handleNotifyMe = (e) => {
    e.stopPropagation();
    alert(`We'll notify you when "${product.name}" is back in stock!`);
  };

  return (
    <div className="arrival-card">
      <div className="arrival-rating">
        <Star size={14} fill="#FFC107" stroke="#FFC107" />
        <span>{product.rating}</span>
        {showFav && (
          <button
            type="button"
            className="prod-fav"
            onClick={() => toggleFavorite(product)}
            aria-label="Add to Favorites"
          >
            <Heart
              size={18}
              fill={isFavorite(product.id) ? "#F28706" : "none"}
              stroke="#F28706"
            />
          </button>
        )}
      </div>

      <h3 className="arrival-name">{product.name}</h3>

      <div
        className="arrival-image-wrap"
        onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
        style={{ cursor: 'pointer' }}
      >
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
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : (
          <>
            <button
              type="button"
              className="arrival-btnall out-of-stock"
              disabled
            >
              Out of Stock
            </button>
            <button
              type="button"
              className="arrival-notify-icon"
              onClick={handleNotifyMe}
              aria-label="Notify me when back in stock"
            >
              <Bell size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;