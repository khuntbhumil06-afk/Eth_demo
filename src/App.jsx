import './App.css';
import './pages/css/Home.css';
import './pages/css/arrival.css';
import './pages/css/seller.css';
import './pages/css/snack.css';
import './pages/css/chip.css'; 
import './pages/css/premiumnuts.css'; 
import './pages/css/seed.css'; 
import './pages/css/fruit.css'; 
import './pages/css/contact.css'; 
import './pages/css/membership.css'; 
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
import Seeds from './pages/Seeds';
import Snacks from './pages/Snacks';
import Chips from './pages/Chips';
import PremiumNuts from './pages/PremiumNuts';
import FruitsNuts from './pages/FruitsNuts';
import DriedFruits from './pages/DriedFruits';
import Confectionery from './pages/Confectionery';
import Membership from './pages/Membership.jsx';
import ContactPage from './pages/ContactPage.jsx';


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
            <Route path='/chips' element={<Chips />} />
            <Route path='/promotions' element={<Promotional />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/arrivals' element={<Arrivals />} />
            <Route path='fruit' element={<FruitsNuts />} />
            <Route path='/seeds' element={<Seeds />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/driedfruit' element={<DriedFruits />} />
            <Route path='/confectionery' element={<Confectionery />} />
            <Route path='/nuts' element={<PremiumNuts />} />
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
