import flowers from '../../assets/flowers.png'
import amore from '../../assets/amore.png'
import noi from '../../assets/noi.png'
import sungift from '../../assets/sungift.png'
import vutrione from '../../assets/vutrione.png'
import yogi from '../../assets/yogi.png'

function Flower() {
    const flower = {
        image: flowers
    };

    const items = [
        {
            id: 1,
            image: amore,
        },
        {
            id: 2,
            image: noi,
        },
        {
            id: 3,
            image: sungift,
        },
        {
            id: 4,
            image: vutrione,
        },
        {
            id: 5,
            image: yogi,
        },
    ];

    return (
        <div className="flower-container">
            <div className="flower-image">
                <img src={flower.image} alt="flowers" />
            </div>
            <div className='text-box'>
                <h1 className='flower-heading'>
                    Discover Adventure<br />
                    in Every Bite!
                </h1>
                <p className='flower-subheading'>
                    Since 1963, Tong Garden has been taking snack lovers on a flavourful journey across the world. Whether it’s crunchy nuts, wholesome seeds or indulgent dried fruits, every product is a celebration of quality, innovation and love for snacking. With Tong Garden, every bite is more than just a snack, it’s a gateway to a world of flavour-packed adventures.
                </p>
                <button type="button" className='btn-flower'>
                    Know More
                </button>
            </div>
            <div className='heading'>
                <h2 className='heading-text'>
                    A Family of Flavours, United by Adventure!
                </h2>
                <p className='subheading-text'>
                    Dive into the world of our unique brands, each crafted to redefine<br />
                    snacking with its own delicious twist.
                </p>

                <div className='flowers-grid'>
                    {items.map((product) => (
                        <div className="flowers-card" key={product.id}>
                            <div className="flowers-image-wrap">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Flower