import { ChevronDown, ChevronUp, Star, ShoppingCart } from 'lucide-react';
import pistachios from '../../assets/pistachios.png'
import almonds from '../../assets/almonds.png'
import blackpeppercashewnuts from '../../assets/blackpeppercashewnuts.png'
import saltedcocktailnuts from '../../assets/saltedcocktailnuts.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext';


function Product() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };
  const products = [{
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
    inStock: true,
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
      <div className="product-section">
        <h1 className='product-heading'>The crowd goes nuts about these!</h1>
        <p className='product-subheading'>
          Discover the snacks everyone’s raving about, handpicked<br />
          for adventurous palates like yours.
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-rating">
                <Star size={14} fill="#FFC107" stroke="#FFC107" />
                <span>{product.rating}</span>
              </div>

              <h3 className="product-name">{product.name}</h3>

              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>

              <p className="product-price">Rs. {product.price.toFixed(2)}</p>

              <button
                type="button"
                className={`add-to-cart-btn ${!product.inStock ? 'out-of-stock' : ''}`}
                disabled={!product.inStock}
                onClick={() => handleAddToCart(product)}
              >
                {product.inStock ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>
          ))}
        </div>

        <button type="button" className='view-all-btn' onClick={() => navigate("/product")}>
          View All Products
        </button>
      </div>
    </>
  );
}

export default Product