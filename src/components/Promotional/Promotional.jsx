import pistachios from '../../assets/pistachios.png'
import almonds from '../../assets/almonds.png'
import blackpeppercashewnuts from '../../assets/blackpeppercashewnuts.png'
import saltedcocktailnuts from '../../assets/saltedcocktailnuts.png'
import { useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import { ChevronDown, ChevronUp, Star, ShoppingCart } from 'lucide-react';

function Promotional() {
    const navigate = useNavigate();
    const { addToCart } = useCart();
      const handleAddToCart = (product) => {
        addToCart(product);
        navigate("/cart");
      };
    const promotional = [{
        id: 1,
        name: "Tong Garden Salted Pistachios Can, 150g",
        rating: 4.5,
        image: pistachios,
        price: 345.00,
        inStock: true,
    },
    {
        id: 2,
        name: "Tong Garden Oven Roasted Salted Almonds, 145g",
        rating: 4.5,
        image: almonds,
        price: 345.00,
        inStock: false,
    },
    {
        id: 3,
        name: "Tong Garden Black pepper Cashew Nuts, 32 g",
        rating: 4.5,
        image: blackpeppercashewnuts,
        price: 345.00,
        inStock: true,
    },
    {
        id: 4,
        name: "Tong Garden Black pepper Cashew Nuts, 32 g",
        rating: 4.5,
        image: saltedcocktailnuts,
        price: 345.00,
        inStock: true,
    },
    ];
    return (
        <>
            <div className="promotional-container">
                <h1 className="promotional-h1">
                    Promotional Offers
                </h1>
                <div className="promotional-grid">
                    {promotional.map((product) => (
                        <div className="promotional-card" key={product.id}>
                            <div className="promotional-rating">
                                <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                <span>{product.rating}</span>
                            </div>

                            <h3 className="promotional-name">{product.name}</h3>

                            <div className="promotional-image-wrap">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <p className="promotional-price">Rs. {product.price.toFixed(2)}</p>

                            <button
                                type="button"
                                className={`promotional-btn ${!product.inStock ? 'out-of-stock' : ''}`}
                                disabled={!product.inStock}
                                onClick={() => handleAddToCart(product)}
                            >
                                {product.inStock ? 'Add to cart' : 'Out of stock'}
                            </button>
                        </div>
                    ))}
                </div>
                <button type="button" className="btn-promotional" onClick={() => navigate("/product")}>
                    View All Products   
                </button>
            </div>
        </>
    )
}

export default Promotional