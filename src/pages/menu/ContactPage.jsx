import tong from '../../assets/tong.png'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ContactPage = () => {
    const navigate = useNavigate();

    const [formText, setFormText] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormText((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formText.firstname.trim())
            newErrors.firstname = "Name is required";

        if (!formText.lastname.trim())
            newErrors.lastname = "LastName is required";

        if (!formText.phone.trim())
            newErrors.phone = "Phone is required";
        else if (!/^\d{10}$/.test(formText.phone.trim()))
            newErrors.phone = "Enter a valid 10-digit phone number";

        if (!formText.email.trim())
            newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formText.email.trim()))
            newErrors.email = "Enter a valid email";

        if (!formText.message.trim())
            newErrors.message = "required";
        return newErrors;
    };

    const handleContact = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log(formText);
        navigate('/');
    };

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
                        <form className='form' onSubmit={handleContact}>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="firstname">
                                        First Name
                                    </label>
                                    <input type='text' className={`form-input ${errors.firstname ? 'form-error' : ''}`}
                                        value={formText.firstname}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        name='firstname'
                                        id='firstname'
                                    />
                                    {errors.firstname && (
                                        <span className="error-text">{errors.firstname}</span>
                                    )}
                                </div>

                                <div className='form-group'>
                                    <label className='form-label' htmlFor="lastname">
                                        Last Name
                                    </label>
                                    <input type='text' className={`form-input ${errors.lastname ? 'form-error' : ''}`}
                                        value={formText.lastname}
                                        onChange={handleChange}
                                        autoComplete="off" name='lastname' id='lastname'
                                    />
                                    {errors.lastname && (
                                        <span className="error-text">{errors.lastname}</span>
                                    )}
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="email">
                                        Email
                                    </label>
                                    <input type='email' className={`form-input ${errors.email ? 'form-error' : ''}`}
                                        value={formText.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        name='email' id='email'
                                    />
                                    {errors.email && (
                                        <span className="error-text">{errors.email}</span>
                                    )}
                                </div>

                                <div className='form-group'>
                                    <label className='form-label' htmlFor="phone">
                                        Phone No:
                                    </label>
                                    <input type='text' className={`form-input ${errors.phone ? 'form-error' : ''}`}
                                        value={formText.phone}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        name='phone' id='phone'
                                    />
                                    {errors.phone && (
                                        <span className="error-text">{errors.phone}</span>
                                    )}
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="message">
                                        Message
                                    </label>
                                    <textarea type='text' className={`form-input ${errors.message ? 'form-error' : ''}`}
                                        value={formText.message}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        name='message' id='message'
                                    />
                                    {errors.message && (
                                        <span className="error-text">{errors.message}</span>
                                    )}
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
                        src="https://www.google.com/maps?q=22.9849905,72.2485874&z=15&output=embed"
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