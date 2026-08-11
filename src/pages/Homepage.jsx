import AboutSection from "../components/Aboutsection/AboutSection";
import Club from "../components/Club/Club";
import Flower from "../components/Flowers/Flower";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import Monthly from "../components/Monthly/Monthly";
import Productlist from "../components/Productlist/Productlist";
import Product from "../components/Products/Product";
import Promotional from "../components/Promotional/Promotional";
import Snack from "../components/Snack/Snack";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Marquee />
            <Product />
            <Productlist />
            <Promotional />
            <Flower />
            <AboutSection />
            <Monthly />
            <Snack />
            <Club />
        </div>
    );
}

export default HomePage;