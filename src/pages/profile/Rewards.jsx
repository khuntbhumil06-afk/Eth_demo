import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { X } from 'lucide-react';
import { createPortal } from "react-dom";

const Rewards = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Rewards");
    const [showHistory, setShowHistory] = useState(false);

    const Reward = [
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

    const [history] = useState([
        {
            id: 1,
            Date: "05/11/2025",
            Label: "Order No. #1234567",
            Type: "Earned",
            Points: 750,
        },
        {
            id: 2,
            Date: "08/11/2025",
            Label: "Order No. #1234567",
            Type: "Used",
            Points: 350,
        },
        {
            id: 3,
            Date: "11/11/2025",
            Label: "Order No. #1296434",
            Type: "Used",
            Points: 250,
        }
    ]);

    const handleTabCick = (tab) => {
        setActiveTab(tab.label);
        navigate(tab.link);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        window.dispatchEvent(new Event('authChange'));
        navigate("/user");
    }

    const [rewards] = useState({
        earned: 2000,
        used: 750
    });

    const totalPoints = rewards.earned - rewards.used;

    return (
        <>
            <div className="profile-container">
                <h1 className="profile-heading">
                    Reward Points
                </h1>

                <div className="profile-grid">
                    <div className="profile-side">
                        {Reward.map((tab) => (
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

                    <div className="reward-grid">
                        <div className="reward-row">
                            <span className="reward-label">
                                Total Reward Points:
                            </span>
                            <span className="reward-value">
                                {totalPoints.toLocaleString()}
                            </span>
                        </div>

                        <div className="reward-row">
                            <span className="reward-label">
                                Earned:
                            </span>
                            <span className="reward-value">
                                {rewards.earned.toLocaleString()}
                            </span>
                        </div>

                        <div className="reward-row">
                            <span className="reward-label">
                                Used:
                            </span>
                            <span className="reward-value">
                                {rewards.used.toLocaleString()}
                            </span>
                        </div>
                        <div className="reward-history-btn-wrap">
                            <button type="button" className="btn-history"
                                onClick={() => setShowHistory(!showHistory)}
                            >
                                {showHistory ? "Hide History" : "History"}
                            </button>
                        </div>

                        {showHistory && (
                            <div className="reward-history">
                                {history.length > 0 ? (
                                    history.map((item) => (
                                        <div className="reward-item" key={item.id}>
                                            <div className="reward-left">
                                                <span className={`reward-tag ${item.Type.toLowerCase()}`}>
                                                    {item.Type}
                                                </span>
                                                <span className="reward-order">
                                                    {item.Label}
                                                </span>
                                            </div>
                                            <div className="reward-right">
                                                <span className={`reward-points ${item.Type === "Earned" ? "positive" : "negative"}`}>
                                                    {item.Type === "Earned" ? "+" : "-"}{item.Points}
                                                </span>
                                                <span className="reward-date">{item.Date}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="reward-empty">No reward history yet.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rewards;