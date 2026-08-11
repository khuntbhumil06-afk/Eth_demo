// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   MessageCircle
// } from "lucide-react";
import logo1 from '../../assets/logo1.png'

function Footer() {
    const quickLinks = [
        "Shop",
        "New Arrivals",
        "About us",
        "Contact Us",
        "Blogs",
        "Corporate"
    ];
    const bottomLinks = [
        "T&C",
        "Privacy Policy",
        "Shipping Policy",
        "CSR",
        "Return Refund",
        "FAQ",
        "Blogs"
    ];

    return (
        <>
            <div className="footer">
                <div className="footer-divider"></div>
                <div className="footer-top">
                    <div className="footer-left">
                        <h2 className="footer-heading">
                            Crave Something Bold?<br />
                            Let's Snack On!
                        </h2>
                        <div className="footer-logo">
                            <img src={logo1} alt="Tong Garden Logo" />
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3 className="footer-title">Quick Links</h3>
                        {quickLinks.map((link, index) => (
                            <a href="/" className="footer-link" key={index}>{link}</a>
                        ))}
                    </div>

                    <div className="footer-contact">
                        <p className="footer-address">
                            Plot NO.SM-14/1Sanand GIDC-2,<br />
                            Sanand Viramgam Highway, Sanand,<br />
                            Gujarat, India -382170
                        </p>
                        <a href="tel:+919320174808" className="footer-phone">+91 93201-74808</a>
                        {/* <div className="footer-socials">
                            <a href="/" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="/" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="/" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="/" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div> */}
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">© Copyright 2025, Tong Garden</p>
                    <div className="footer-bottom-links">
                        {bottomLinks.map((link, index) => (
                            <a href="#" className="footer-bottom-link" key={index}>{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer