import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Star, Heart, Bell } from "lucide-react";

const Favourites = () => {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    const Favs = [
        {
            link: "/myprofile",
            label: "Profile Details",
        },
        {
            link: "/favourites",
            label: "Favourites",
        },
        {
            link: "/orders",
            label: "My Orders",
        },
        {
            link: "/address",
            label: "Addresses",
        },
        {
            link: "/reward",
            label: "Rewards",
        },
        {
            link: "/coupon",
            label: "Active Coupons",
        }
    ];
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Favourites");

    const { addToCart } = useCart();

    const handleTabCick = (tab) => {
        setActiveTab(tab.label);
        navigate(tab.link);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate("/cart");
    };

    const handleNotifyMe = (product) => {
        alert(`We'll notify you when "${product.name}" is back in stock!`);
    };

    const handleLogout = () => {
        navigate("/user");
    }

    return (
        <>
            <div className="profile-container">
                <h1 className="profile-heading">
                    Favourites
                </h1>

                <div className="profile-grid">
                    <div className="profile-side">
                        {Favs.map((tab) => (
                            <button type="button"
                                className={`profile-tab ${activeTab === tab.label ? "active" : ""}`}
                                key={tab.link}
                                onClick={() => handleTabCick(tab)}
                            >
                                {tab.label}
                            </button>
                        ))}
                        <button type="button"
                            className="btn-profile"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div> 
                    <div className="profile-divider"></div>

                    <div className='favourites-details'>
                        {favorites.length > 0 ? (
                            favorites.map((product) => (
                                <div className="fav-card" key={product.id}>
                                    <div className="fav-rating">
                                        <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                        <span>{product.rating}</span>
                                        <button type='button' className='prod-fav'
                                            onClick={() => toggleFavorite(product)}
                                            aria-label='Add to Favorites'
                                        >
                                            <Heart
                                                size={18}
                                                fill={isFavorite(product.id) ? "#F28706" : "none"}
                                                stroke="#F28706"
                                            />
                                        </button>
                                    </div>

                                    <h3 className="fav-name">{product.name}</h3>

                                    <div className="fav-image-wrap"
                                        onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src={product.image} alt={product.name} />
                                    </div>

                                    <p className="fav-price">
                                        Rs. {product.price ? product.price.toFixed(2) : "0.00"}
                                    </p>

                                    <div className="fav-btn-row">
                                        <button
                                            type="button"
                                            className={`fav-btnall ${!product.inStock ? 'out-of-stock' : ''}`}
                                            disabled={!product.inStock}
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                        </button>
                                        {!product.inStock && (
                                            <button
                                                type="button"
                                                className="fav-notify-icon"
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
                            <p className="fav-empty">No products found for selected filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Favourites;