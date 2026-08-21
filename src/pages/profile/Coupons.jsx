import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Coupons = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Active Coupons");

    const Coupon = [
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

    const handleTabCick = (tab) => {
        setActiveTab(tab.label);
        navigate(tab.link);
    };

    const handleLogout = () => {
        navigate("/user");
    }

    const coupons = [
        {
            code: "TONG30",
            activated: "20/11/2025",
            expiry: "30/11/2025"
        },
        {
            code: "TONG30",
            activated: "10/10/2025",
            expiry: "20/11/2025"
        },
        {
            code: "TONG30",
            activated: "30/11/2025",
            expiry: "25/12/2025"
        }
    ];

    return (
        <>
            <div className="profile-container">
                <h1 className="profile-heading">
                    Active Coupons
                </h1>

                <div className="profile-grid">
                    <div className="profile-side">
                        {Coupon.map((tab) => (
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

                    <div className="coupon-table">
                        <div className="coupon-header">
                            <span className="coupon-col code">
                                Coupon Code
                            </span>
                            <span className="coupon-col">
                                Date Activated
                            </span>
                            <span className="coupon-col">
                                Expiry Date
                            </span>
                        </div>

                        {coupons.map((coupon, index) => (
                            <div className="coupon-row" key={index}>
                                <span className="coupon-col code">
                                    {coupon.code}
                                </span>
                                <span className="coupon-col">
                                    {coupon.activated}
                                </span>                    
                                <span className="coupon-col">
                                    {coupon.expiry}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Coupons;