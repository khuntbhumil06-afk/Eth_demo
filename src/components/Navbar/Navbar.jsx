import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, User, ShoppingCart, Globe, ChevronDown, X } from 'lucide-react'
import logo from '../../assets/logo.png'

function Navbar() {
    const navigate = useNavigate();
    const [isShopOpen, setIsShopOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchText, setSearchText] = useState('')

    const [selectedLang, setSelectedLang] = useState('EN');
    const [isLangOpen, setIsLangOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);

    const language = [
        {
            code: "EN",
            label: "English"
        },
        {
            code: "GUJ",
            label: "Gujarati"
        },
        {
            code: "HN",
            label: "Hindi"
        },
    ];

    const menuLinks = [
        {
            link: "/product",
            label: "All Products"
        },
        {
            link: "/arrivals",
            label: "New Arrivals"
        },
        {
            link: "/seller",
            label: "Best Sellers"
        },
        {
            link: "/snacks",
            label: "Snacks"
        },
        {
            link: "/chips",
            label: "Chips"
        },
        {
            link: "/nuts",
            label: "Premium Nuts"
        },
        {
            link: "/seeds",
            label: "Seeds"
        },
        {
            link: "/fruit",
            label: "Fruits & Nuts"
        },
        {
            link: "/driedfruit",
            label: "Dried Fruits"
        },
        {
            link: "/confectionery",
            label: "Confectionery"
        },
    ];

    const menu = [
        {
            link: "/membership",
            label: "Membership"
        },
        {
            link: "/contact",
            label: "Contact Us"
        },
        {
            link: "/blog",
            label: "Blogs"
        }
    ];

    useEffect(() => {
        const checkAuth = () => {
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userData = localStorage.getItem('user');
            setIsLoggedIn(loggedIn);
            setUser(userData ? JSON.parse(userData) : null);
        };

        checkAuth();
        window.addEventListener('authChange', checkAuth); 
        window.addEventListener('storage', checkAuth);    

        return () => {
            window.removeEventListener('authChange', checkAuth);
            window.removeEventListener('storage', checkAuth);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleUserIconClick = () => {
        if (isLoggedIn) {
            setIsUserMenuOpen(!isUserMenuOpen);
        } else {
            navigate('/user');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        window.dispatchEvent(new Event('authChange'));
        setIsUserMenuOpen(false);
        navigate('/user');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim() !== "") {
            navigate(`/search?q=${searchText}`);
            setIsSearchOpen(false);
            setSearchText('');
        }
    };
    const handleLangSelect = (code) => {
        setSelectedLang(code);
        setIsLangOpen(false);
    };

    return (
        <nav className="nav-container">
            <div className="nav-left">
                <button type="button" className="btn-shop" onClick={() => setIsShopOpen(!isShopOpen)}>
                    SHOP
                </button>
                {isShopOpen && (
                    <div className="dropdown">
                        {
                            menuLinks?.map((menulink, index) => (
                                <Link key={index} to={menulink.link} onClick={() => setIsShopOpen(false)}>{menulink.label}</Link>
                            ))
                        }
                    </div>
                )}
                <Link to="/promotions" className="nav-link">PROMOTIONS</Link>
                <Link to="/about" className="nav-link">ABOUT US</Link>
            </div>

            <div className="logo">
                <Link to="/" className="brand">
                    <img src={logo} alt="Tong Garden Logo" />
                </Link>
            </div>

            <div className="nav-right">
                <button type="button" className="icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <Search size={20} />
                </button>

                <div className="right">
                    <button type="button" className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        MENU
                    </button>
                    {isMenuOpen && (
                        <div className="dropdown">
                            {
                                menu?.map((menu, index) => (
                                    <Link key={index} to={menu.link} onClick={() => setIsMenuOpen(false)}>
                                        {menu.label}
                                    </Link>
                                ))
                            }
                        </div>
                    )}
                </div>

                <div className="user-account-container" style={{ position: 'relative' }} ref={userMenuRef}>
                    <button
                        type="button"
                        className="icon-btn"
                        aria-label="User Account"
                        onClick={handleUserIconClick}
                    >
                        <User size={20} />
                        {isLoggedIn && user?.name && (
                            <span className="user-name-label">{user.name}</span>
                        )}
                    </button>

                    {isLoggedIn && isUserMenuOpen && (
                        <div className="dropdown user-dropdown">
                            <Link
                                to="/myprofile"
                                onClick={() => setIsUserMenuOpen(false)}
                            >
                                My Profile
                            </Link>
                            <button
                                type="button"
                                className="logout-option"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>

                <button type="button" className="icon-btn" aria-label="Cart" onClick={() => {
                    navigate("/cart");
                }}>
                    <ShoppingCart size={20} />
                </button>

                <div className='lang-container' style={{ position: 'relative' }}>
                    <div className="lang-select" aria-label="Select Language"
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Globe size={20} />
                        <span>{selectedLang}</span>
                        <ChevronDown size={16} />
                    </div>
                    {isLangOpen && (
                        <div className='dropdown lang-dropdown'>
                            {language.map((lang) => (
                                <button key={lang.code} type="button" className='lang-option'
                                    onClick={() => handleLangSelect(lang.code)}
                                >
                                    {lang.code} ({lang.code})
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {isSearchOpen && (
                <div className="search-overlay">
                    <form className="search-box" onSubmit={handleSearchSubmit}>
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search products..." value={searchText} onChange={(e) => setSearchText(e.target.value)} autoFocus />
                        <button type="button" className="close-search-btn" onClick={() => setIsSearchOpen(false)}>
                            <X size={18} />
                        </button>
                    </form>
                </div>
            )}
        </nav>
    )
}

export default Navbar