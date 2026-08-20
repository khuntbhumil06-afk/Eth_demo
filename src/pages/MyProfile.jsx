import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const MyProfile = () => {
    const Tabs = [
        {
            link: "/myprofile",
            label: "Profile Details",
        },
        {
            link: "/favourites",
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
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Profile Details");
    const [isEditing, setIsEditing] = useState(false);

    const [user, setUser] = useState({
        firstName: "Meet",
        lastName: "Patel",
        email: "meetpatel@gmail.com",
        mobile: "+91 95627 83426"
    });

    const [editData, setEditData] = useState(user);
    const [errors, setErrors] = useState({});

    const handleTabCick = (tab) => {
        setActiveTab(tab.label);
        setIsEditing(false);
        navigate(tab.link);
    };

    const handleLogout = () => {
        navigate("/user");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }

    const validate = () => {
        let newErrors = {};
        let isValid = true;
        const phoneRegex = /^\+?\d{1,3}?[\s-]?\d{5}\s?\d{5}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!editData.firstName.trim()) {
            newErrors.firstName = "FirstName is required";
            isValid = false;
        }
        if (!editData.lastName.trim()) {
            newErrors.lastName = "LastName is required";
            isValid = false;
        }
        if (!editData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(editData.email)) {
            newErrors.email = "Enter a valid email";
            isValid = false;
        }
        if (!editData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
            isValid = false;
        } else if (!phoneRegex.test(editData.mobile)) {
            newErrors.mobile = "Enter a valid mobile number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const openEditModal = () => {
        setEditData(user);
        setErrors({});
        setIsEditing(true);
    };

    const closeEditModal = () => {
        setIsEditing(false);
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setUser(editData);
        closeEditModal();
    };


    return (
        <>
            <div className="profile-container">
                <h1 className="profile-heading">
                    My Profile
                </h1>

                <div className="profile-grid">
                    <div className="profile-side">
                        {Tabs.map((tab) => (
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

                    <div className="profile-content">
                        {activeTab === "Profile Details" && (
                            <>
                                <div className="profile-row">
                                    <span className="profile-label">
                                        Name
                                    </span>
                                    <span className="profile-value">
                                        {user.firstName} {user.lastName}
                                    </span>
                                </div>

                                <div className="profile-row">
                                    <span className="profile-label">
                                        Email
                                    </span>
                                    <span className="profile-value">
                                        {user.email}
                                    </span>
                                </div>

                                <div className="profile-row">
                                    <span className="profile-label">
                                        Mobile
                                    </span>
                                    <span className="profile-value">
                                        {user.mobile}
                                    </span>
                                </div>
                                <button type="button" className="btn-edit" onClick={openEditModal}>
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {isEditing && createPortal(
                <div className="profile-modal-overlay" onClick={closeEditModal}>
                    <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
                        <button type="button"
                            className="profile-modal-close"
                            aria-label="close"
                            onClick={closeEditModal}
                        >
                            <X size={20} />
                        </button>

                        <h3 className="address-h3">
                            Edit Profile
                        </h3>

                        <form className="shipping-form" onSubmit={handleSubmit}>
                            <div className="profile-row-two">
                                <div className="checkout-group full">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text"
                                        name="firstName"
                                        className={`checkout-input ${errors.firstName ? "input-error" : ""}`}
                                        value={editData.firstName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.firstName && (
                                        <span className="error-text">{errors.firstName}</span>
                                    )}
                                </div>
                                <div className="checkout-group full">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text"
                                        name="lastName"
                                        className={`checkout-input ${errors.lastName ? "input-error" : ""}`}
                                        value={editData.lastName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.lastName && (
                                        <span className="error-text">{errors.lastName}</span>
                                    )}
                                </div>
                            </div>

                            <div className="checkout-group full">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    name="email"
                                    className={`checkout-input ${errors.email ? "input-error" : ""}`}
                                    value={editData.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {errors.email && (
                                    <span className="error-text">{errors.email}</span>
                                )}
                            </div>

                            <div className="checkout-group full">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="text"
                                    name="mobile"
                                    className={`checkout-input ${errors.mobile ? "input-error" : ""}`}
                                    value={editData.mobile}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {errors.mobile && (
                                    <span className="error-text">{errors.mobile}</span>
                                )}
                            </div>

                            <button type="submit" className="btn-save">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}

export default MyProfile;