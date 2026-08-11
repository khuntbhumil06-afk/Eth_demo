import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return <div className="cart-empty">Your cart is empty.</div>;
    }
    
    return (
        <div className="cart-container">
            <h1 className="cart-heading">Your Cart</h1>
            {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                        <h3>{item.name} {item.size}</h3>
                        <p>Rs. {item.price.toFixed(2)}</p>
                        <div className="cart-qty">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <button className="cart-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <h2 className="cart-total">Total: Rs. {total.toFixed(2)}</h2>
            <button type='button' className='btn-checkout' onClick={() => navigate("/checkout")}>
                CheckOut
            </button>
        </div>
    );
}
 
export default CartPage;