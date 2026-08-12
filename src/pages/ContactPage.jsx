import tong from '../assets/tong.png'

const ContactPage = () => {
    const contactlist = {
        image: tong
    }
    return (
        <>
            <div className="contact-container">
                <h1 className="contact-heading">
                    Contact Us
                </h1>
                <div className='contact-layout'>
                    <div className='contact-image'>
                        <img src={contactlist.image} alt='contact us' />
                    </div>
                    <div className='contact-form'>
                        <form className='form'>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        First Name
                                    </label>
                                    <input type='text' className='form-input' name='firstname' id='firstname' />
                                </div>

                                <div className='form-group'>
                                    <label className='form-label'>
                                        Last Name
                                    </label>
                                    <input type='text' className='form-input' name='lastname' id='lastname' />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Email
                                    </label>
                                    <input type='email' className='form-input' name='email' id='email' />
                                </div>

                                <div className='form-group'>
                                    <label className='form-label'>
                                        Phone No:
                                    </label>
                                    <input type='text' className='form-input' name='phone' id='phone' />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Message
                                    </label>
                                    <textarea type='text' className='form-input' name='message' id='message' />
                                </div>

                            </div>

                            <button type="submit" className="btn-form">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className='contact-map'>
                    <iframe title='Tong Garden'
                        src="https://www.google.com/maps/place/Tong+Garden+Food+Products+India+Pvt.+Ltd"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                </div>
                <div className='contact-row'>
                    <div className='address'>
                        <h2 className='address-h2'>
                            Address
                        </h2>
                        <p className='address-p'>
                            Tong Garden Road 123 - 8346728<br />
                            Mumbai, Maharashtra
                        </p>
                    </div>
                    <div className='information'>
                        <h2 className='information-h2'>
                            Information
                        </h2>
                        <p className='information-p'>
                            support@tonggarden.com<br />
                            +91 8866772211
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;