import './App.css';
import './pages/css/Home.css';
import './pages/css/arrival.css';
import './pages/css/seller.css';
import './pages/css/snack.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import Arrivals from './pages/Arrivals';
import Promotional from './pages/PromotionalPage';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import SignupPage from './pages/SignupPage';
import Seller from './pages/Seller';
import CheckoutPage from './pages/CheckoutPage';
import Snacks from './pages/Snacks';

function App() {
  return (
    <>
      <CartProvider>
        <div className='main-container'>
          <Navbar />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/user' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/seller' element={<Seller />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/promotions' element={<Promotional />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/arrivals' element={<Arrivals />} />
            <Route path='/snacks' element={<Snacks />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </>
  )
}

export default App
