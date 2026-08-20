import member from '../../assets/member.png'
import corporate from '../../assets/corporate.png'
import wholesale from '../../assets/wholesale.png'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Membership = () => {
    const navigate = useNavigate();

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [formText, setFormText] = useState({
        name: '',
        phone: '',
        email: '',
        companyname: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const handleMembershipClick = (item) => {
        if (item.id === 1) {
            navigate("/user");
        }
        else {
            setIsFormOpen(true);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormText((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formText.name.trim())
            newErrors.name = "Name is required";

        if (!formText.phone.trim())
            newErrors.phone = "Phone is required";
        else if (!/^\d{10}$/.test(formText.phone.trim()))
            newErrors.phone = "Enter a valid 10-digit phone number";

        if (!formText.email.trim())
            newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formText.email.trim()))
            newErrors.email = "Enter a valid email";

        if (!formText.companyname.trim())
            newErrors.companyname = "Company name is required";

        if (!formText.message.trim())
            newErrors.message = "required";
        return newErrors;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        navigate(`/form?name=${encodeURIComponent(formText.name)}&phone=${encodeURIComponent(formText.phone)}&email=${encodeURIComponent(formText.email)}&company=${encodeURIComponent(formText.companyname)}&message=${encodeURIComponent(formText.message)}`);
        closeForm();
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setFormText({ name: '', phone: '', email: '', companyname: '', message: ''});
        setErrors({});
    };

    const memberlist = [
        {
            id: 1,
            image: member,
            title: "Individual",
            description: <>
                Be the first to hear about Tong Garden’s latest<br />
                flavours, festive launches, and exciting product<br />
                drops, from our garden of goodness to your inbox.
            </>,
            button: "Become a Member"

        },
        {
            id: 2,
            image: corporate,
            title: "Corporate",
            description: <>
                Explore thoughtful, flavour-packed gifting options,<br />
                curated, especially for your clients, teams, and<br />
                events. Discover what’s inside the pack, how to<br />
                customize and how to make every corporate<br />
                moment a tasteful one.
            </>,
            button: "Become a Member"
        },
        {
            id: 3,
            image: wholesale,
            title: "Wholesale",
            description: <>
                Get access to exclusive bulk deals, special<br />
                discounts, and early access to high-demand<br />
                snacks. Perfect for retailers, distributors, or anyone<br />
                snacking on a large scale.
            </>,
            button: "Become a Member"
        },
    ]

    return (
        <>
            <div className="member-container">
                <h1 className="member-heading">
                    Membership
                </h1>
            </div>
            <div className="member-individual">
                {memberlist.map((item, index) => (
                    <div className={`individual ${index % 2 === 1 ? 'individual-reverse' : ''}`}
                        key={item.id}>
                        <div className='indi'>
                            <div className="individual-card">
                                <div className="individual-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </div>
                        </div>
                        <div className="individual-text">
                            <h2 className='individual-h2'>
                                {item.title}
                            </h2>
                            <p className='individual-p'>
                                {item.description}
                            </p>
                            <button type='button'
                                className='btn-individual'
                                aria-label='Form'
                                onClick={() => handleMembershipClick(item)}
                            >
                                {item.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {isFormOpen && (
                <div className="form-overlay" onClick={closeForm}>
                    <div className="form-box" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="form-close"
                            aria-label="Close"
                            onClick={closeForm}
                        >
                            &times;
                        </button>
                        <h1 className="form-heading">
                            Membership Form
                        </h1>
                        <form onSubmit={handleFormSubmit}>
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`form-input ${errors.name ? 'input-error' : ''}`}
                                value={formText.name}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.name && (
                                <span className="error-text">{errors.name}</span>
                            )}<br/>

                            <label className="form-label" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className={`form-input ${errors.phone ? 'input-error' : ''}`}
                                value={formText.phone}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.phone && (
                                <span className="error-text">{errors.phone}</span>
                            )}<br/>

                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`form-input ${errors.email ? 'input-error' : ''}`}
                                value={formText.email}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.email && (
                                <span className="error-text">{errors.email}</span>
                            )}<br/>

                            <label className="form-label" htmlFor="companyname">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyname"
                                name="companyname"
                                className={`form-input ${errors.companyname ? 'input-error' : ''}`}
                                value={formText.companyname}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.companyname && (
                                <span className="error-text">{errors.companyname}</span>
                            )}<br/>

                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                type="text"
                                id="message"
                                name="message"
                                className={`form-input ${errors.message ? 'input-error' : ''}`}
                                value={formText.message}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            {errors.message && (
                                <span className="error-text">{errors.message}</span>
                            )}<br/>

                            <button type="submit" className="btn-individual form-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Membership;