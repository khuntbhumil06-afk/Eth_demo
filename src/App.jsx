import './App.css';
import './pages/css/product/Home.css';
import './pages/css/product/arrival.css';
import './pages/css/product/seller.css';
import './pages/css/product/snack.css';
import './pages/css/product/chip.css';
import './pages/css/product/premiumnuts.css';
import './pages/css/product/seed.css';
import './pages/css/product/fruit.css';
import './pages/css/product/productdetails.css';
import './pages/css/product/festival.css';
import './pages/css/product/checkout.css';
import './pages/css/member/contact.css';
import './pages/css/member/membership.css';
import './pages/css/member/blog.css';
import './pages/css/member/blogdetails.css';
import './pages/css/myprofile/profile.css';
import './pages/css/myprofile/address.css';
import './pages/css/myprofile/fav.css';
import './pages/css/myprofile/reward.css';
import './pages/css/myprofile/coupon.css';
import './pages/css/myprofile/order.css';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/Homepage';
import CartPage from './pages/CartPage';
import Promotional from './pages/PromotionalPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/login/LoginPage.jsx';
import SignupPage from './pages/login/SignupPage.jsx';
import ProductPage from './pages/shop/ProductPage.jsx';
import Arrivals from './pages/shop/Arrivals';
import Seller from './pages/shop/Seller';
import CheckoutPage from './pages/shop/CheckoutPage';
import Seeds from './pages/shop/Seeds';
import Snacks from './pages/shop/Snacks';
import Chips from './pages/shop/Chips';
import PremiumNuts from './pages/shop/PremiumNuts';
import FruitsNuts from './pages/shop/FruitsNuts';
import DriedFruits from './pages/shop/DriedFruits';
import Confectionery from './pages/shop/Confectionery';
import ProductDetails from './pages/shop/ProductDetails.jsx';
import Festival from './pages/shop/Festival.jsx';
import Membership from './pages/menu/Membership.jsx';
import ContactPage from './pages/menu/ContactPage.jsx';
import Blogs from './pages/menu/Blogs.jsx';
import BlogDetails from './pages/menu/BlogDetails.jsx';
import MyProfile from './pages/profile/MyProfile.jsx';
import AddressPage from './pages/profile/AddressPage.jsx';
import Favourites from './pages/profile/Favourited.jsx';
import Rewards from './pages/profile/Rewards.jsx';
import Coupons from './pages/profile/Coupons.jsx';
import Orders from './pages/profile/Orders.jsx';

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
              <Route path='/about' element={<AboutPage />} />
              <Route path='/promotions' element={<Promotional />} />
              <Route path='/seller' element={<Seller />} />
              <Route path='/product' element={<ProductPage />} />
              <Route path='/chips' element={<Chips />} />
              <Route path='/arrivals' element={<Arrivals />} />
              <Route path='/fruit' element={<FruitsNuts />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/seeds' element={<Seeds />} />
              <Route path='/driedfruit' element={<DriedFruits />} />
              <Route path='/snacks' element={<Snacks />} />
              <Route path='/nuts' element={<PremiumNuts />} />
              <Route path='/festival' element={<Festival />} />
              <Route path='/confectionery' element={<Confectionery />} />
              <Route path='/blog' element={<Blogs />} />
              <Route path='/blogs/:id' element={<BlogDetails />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/membership' element={<Membership />} />
              <Route path='/address' element={<AddressPage />} />
              <Route path='/favourites' element={<Favourites />} />
              <Route path='/myprofile' element={<MyProfile />} />
              <Route path='/reward' element={<Rewards />} />
              <Route path='/coupon' element={<Coupons />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>

            <Footer />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </>
  )
}

export default App
