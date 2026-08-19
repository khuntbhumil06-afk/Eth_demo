import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";

const AddressPage = () => {
    const navigate = useNavigate();
    const [addressType, setAddressType] = useState("HOME");
    const [editingAddress, setEditingAddress] = useState(null);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        country: "India",
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pin: "",
        phone: "",
        agreeToTerms: false
    });
    const AddressTabs = [
        {
            link: "/myprofile",
            label: "Profile Details",
        },
        {
            link: "/favourited",
            label: "Favourites",
        },
        {
            link: "/orders",
            label: "My Orders",
        },
        {
            link: "/address",
            label: "Addresses",
        },
        {
            link: "/reward",
            label: "Rewards",
        },
        {
            link: "/coupon",
            label: "Active Coupons",
        }
    ];

    const [activeTab, setActiveTab] = useState("Addresses");

    const handleTabCick = (tab) => {
        setActiveTab(tab.label);
        navigate(tab.link);
    };

    const handleLogout = () => {
        navigate("/user");
    }

    const [AddressList, setAddressList] = useState([
        {
            id: 1,
            type: "HOME",
            name: "Chris Martin,",
            line1: "HG 1245, New Ravi Albert road, London ",
            line2: "1245679, UK"
        },
        {
            id: 2,
            type: "OFFICE",
            name: "Diljit Dosanjh,",
            line1: "GH 1245, Bal road, Toronto",
            line2: "1245679, Canada"
        }
    ]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const resetForm = () => {
        setFormData({
            country: "India",
            firstName: "",
            lastName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            pin: "",
            phone: ""
        });
        setErrors({});
    };

    const handleEditAddress = (addr) => {
        setEditingAddress(addr);
        setAddressType(addr.type);
        const nameParts = addr.name.replace(",", "").split(" ");
        setFormData({
            country: "India",
            firstName: nameParts[0] || "",
            lastName: nameParts[1] || "",
            addressLine1: addr.line1 || "",
            addressLine2: addr.line2 || "",
            city: "",
            state: "",
            pin: "",
            phone: ""
        });
        setErrors({});
    };

    const handleDeleteAddress = (id) => {
        setAddressList((prev) => prev.filter((addr) => addr.id !== id));
    };

    const handleAddAddress = () => {
        setEditingAddress({});
        setAddressType("HOME");
        resetForm();
    };

    const closeModal = () => {
        setEditingAddress(null);
        resetForm();
        setAddressType("HOME");
    }

    const validate = () => {
        let newErrors = {};
        let isValid = true;

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'firstName is required';
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'lastName is required';
            isValid = false;
        }

        if (!formData.addressLine1.trim()) {
            newErrors.addressLine1 = 'addressLine1 is required';
            isValid = false;
        }

        if (!formData.addressLine2.trim()) {
            newErrors.addressLine2 = 'addressLine2 is required';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
            isValid = false;
        }

        if (!formData.city.trim()) {
            newErrors.city = 'city is required';
            isValid = false;
        }

        if (!formData.state) {
            newErrors.state = 'state is required';
            isValid = false;
        }

        if (!formData.pin) {
            newErrors.pin = 'pin is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        const formattedAddress = {
            id: editingAddress?.id || Date.now(),
            type: addressType,
            name: `${formData.firstName} ${formData.lastName}`,
            line1: `${formData.addressLine1} ${formData.addressLine2}`,
            line2: `${formData.city} ${formData.state} ${formData.pin} ${formData.country}`
        }

        if (editingAddress?.id) {
            setAddressList((prev) =>
                prev.map((item) => (
                    item.id === editingAddress.id ? formattedAddress : item
                ))
            );
        }else {
            setAddressList((prev) => [...prev, formattedAddress]);
        }

        closeModal();
    };

    return (
        <>
            <div className="profile-container">
                <h1 className="profile-heading">
                    Addresses
                </h1>

                <div className="profile-grid">
                    <div className="profile-side">
                        {AddressTabs.map((tab) => (
                            <button type="button"
                                className={`profile-tab ${activeTab === tab.label ? "active" : ""}`}
                                key={tab.link}
                                onClick={() => handleTabCick(tab)}
                            >
                                {tab.label}
                            </button>
                        ))}
                        <button type="button"
                            className="btn-profile"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                    <div className="profile-divider"></div>

                    <div className="profile-address">
                        <div className="profile-card">
                            {AddressList.map((addr) => (
                                <div key={addr.id} className="address-card">
                                    <div className="address-top">
                                        <span className="address-span">
                                            {addr.type}
                                        </span>
                                        <div className="address-section">
                                            <button type="button"
                                                className="address-icon"
                                                onClick={() => handleEditAddress(addr)}
                                                aria-label="Edit aaddress"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                            <button type="button"
                                                className="address-icon"
                                                onClick={() => handleDeleteAddress(addr.id)}
                                                aria-label="Delete aaddress"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="address-line">
                                        {addr.name} {addr.line1}
                                    </p>
                                    <p className="address-line">
                                        {addr.line2}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button type='button' className='btn-address'
                            onClick={handleAddAddress}
                        >
                            Add a New Address
                        </button>
                    </div>
                </div>
                {editingAddress && (
                    <div className="edit-address-wrapper" onClick={closeModal}>
                        <div className="edit-address" onClick={(e) => e.stopPropagation()}>
                            <button type="button" className="address-modal"
                                aria-label="close"
                                onClick={closeModal}
                            >
                                <X size={20} />
                            </button>
                            <div className="address-type">
                                {["HOME", "OFFICE", "OTHER"].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        className={`address-tab ${addressType === type ? "active" : ""}`}
                                        onClick={() => setAddressType(type)}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>

                            <form className="shipping-form" onSubmit={handleSubmit}>
                                <div className="checkout-group full">
                                    <label htmlFor="country">Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    >
                                        <option value="India">India</option>
                                        <option value="uk">UK</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">CANADA</option>
                                    </select>
                                </div>

                                <div className="checkout-row">
                                    <div className="checkout-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Chris"
                                            className={`checkout-input ${errors.firstName ? "input-error" : ""}`}
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {errors.firstName && (
                                            <span className="error-text">{errors.firstName}</span>
                                        )}
                                    </div>

                                    <div className="checkout-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Martin"
                                            className={`checkout-input ${errors.lastName ? "input-error" : ""}`}
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {errors.lastName && (
                                            <span className="error-text">{errors.lastName}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="checkout-group">
                                    <label htmlFor="addressLine1">Address Line 1</label>
                                    <input
                                        type="text"
                                        name="addressLine1"
                                        className={`checkout-input ${errors.addressLine1 ? "input-error" : ""}`}
                                        value={formData.addressLine1}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.addressLine1 && (
                                        <span className="error-text">{errors.addressLine1}</span>
                                    )}
                                </div>

                                <div className="checkout-group">
                                    <label htmlFor="addressLine2">Address Line 2</label>
                                    <input
                                        type="text"
                                        name="addressLine2"
                                        className={`checkout-input ${errors.addressLine2 ? "input-error" : ""}`}
                                        value={formData.addressLine2}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.addressLine2 && (
                                        <span className="error-text">{errors.addressLine2}</span>
                                    )}
                                </div>

                                <div className="checkout-row three">
                                    <div className="checkout-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            className={`checkout-input ${errors.city ? "input-error" : ""}`}
                                            value={formData.city}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {errors.city && (
                                            <span className="error-text">{errors.city}</span>
                                        )}
                                    </div>

                                    <div className="checkout-group">
                                        <label htmlFor="state">State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            className={`checkout-input ${errors.state ? "input-error" : ""}`}
                                            value={formData.state}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {errors.state && (
                                            <span className="error-text">{errors.state}</span>
                                        )}
                                    </div>

                                    <div className="checkout-group">
                                        <label htmlFor="pin">PIN</label>
                                        <input
                                            type="text"
                                            name="pin"
                                            className={`checkout-input ${errors.pin ? "input-error" : ""}`}
                                            value={formData.pin}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {errors.pin && (
                                            <span className="error-text">{errors.pin}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="checkout-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className={`checkout-input ${errors.phone ? "input-error" : ""}`}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.phone && (
                                        <span className="error-text">{errors.phone}</span>
                                    )}
                                </div>

                                <button type="submit" className="btn-save">
                                    Save Address
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default AddressPage;