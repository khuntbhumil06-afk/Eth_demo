import './App.css';
import './pages/css/Home.css';
import './pages/css/arrival.css';
import './pages/css/seller.css';
import './pages/css/snack.css';
import './pages/css/chip.css';
import './pages/css/premiumnuts.css';
import './pages/css/seed.css';
import './pages/css/profile.css';
import './pages/css/fruit.css';
import './pages/css/contact.css';
import './pages/css/membership.css';
import './pages/css/blog.css';
import './pages/css/blogdetails.css';
import './pages/css/productdetails.css';
import './pages/css/festival.css';
import './pages/css/checkout.css';
import './pages/css/add/address.css';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import HomePage from './pages/Homepage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import Arrivals from './pages/Arrivals';
import Promotional from './pages/PromotionalPage';
import Footer from './components/Footer/Footer';
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
import Blogs from './pages/Blogs.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Festival from './pages/Festival.jsx';
import MyProfile from './pages/MyProfile.jsx';
import AddressPage from './pages/AddressPage.jsx';
import Favourites from './pages/Favourited.jsx';


function App() {
  return (
    <>
      <CartProvider>
        <FavoritesProvider>
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
              <Route path='/fruit' element={<FruitsNuts />} />
              <Route path='/blog' element={<Blogs />} />
              <Route path='/myprofile' element={<MyProfile />} />
              <Route path='/address' element={<AddressPage />} />
              <Route path='/seeds' element={<Seeds />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/blogs/:id' element={<BlogDetails />} />
              <Route path='/festival' element={<Festival />} />
              <Route path='/favourites' element={<Favourites />} />
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
        </FavoritesProvider>
      </CartProvider>
    </>
  )
}

export default App
