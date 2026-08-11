import pattri from '../../assets/pattri.png'

function AboutSection() {
    const about = {
        image: pattri
    };
    return (
        <>
            <div className="aboutsection-container">
                <div className='section-text'>
                    <h1 className='section-heading'>
                        The Perfect, Festive Gift
                    </h1>
                    <p className='section-subheading'>
                        Packed with flavour, love,<br />and festive vibes.<br />Our festive packs make<br />every celebration snack-worthy.
                    </p>

                    <div className='section-btn'>
                        <p className='btn-heading'>
                            Festive Bites, Happy Vibes
                        </p>
                        <button type='button' className='btn-view'>
                            View All Products
                        </button>
                    </div>
                </div>
                <div className="about-image">
                    <img src={about.image} alt='pattri'/>
                </div>

            </div>
        </>
    )
}

export default AboutSection