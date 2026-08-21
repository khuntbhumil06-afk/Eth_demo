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

    const history = [
        {
            date: "05/11/2025",
            order: "#1234567",
            type: "Earned",
            points: 750
        },
        {
            date: "08/11/2025",
            order: "#1234567",
            type: "Used",
            points: 350,
        },
        {
            date: "11/11/2025",
            order: "#1296434",
            type: "Used",
            points: 250,
        }
    ];

    const handleTabCick = (tab) => {
        setActiveTab(tab.label);
        navigate(tab.link);
    };

    const handleLogout = () => {
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
                                <div className="reward-table">
                                    <div className="reward-header">
                                        <span className="reward-col date">
                                            Date
                                        </span>
                                        <span className="reward-col">
                                            Order No.
                                        </span>
                                        <span className="reward-col">
                                            Type
                                        </span>
                                        <span className="reward-col">
                                            Points
                                        </span>
                                    </div>
                                </div>
                                {history.length > 0 ? (
                                    history.map((history, index) => (
                                        <div className="reward-row-table" key={index}>
                                            <span className="reward-col date">
                                                {history.date}
                                            </span>
                                            <span className="reward-col">
                                                {history.order}
                                            </span>
                                            <span className="reward-col">
                                                {history.type}
                                            </span>
                                            <span
                                                className={`reward-points ${history.type === "Earned" ? "points-earned" : "points-used"
                                                    }`}
                                            >
                                                {history.type === "Earned" ? "+" : "-"}{history.points}
                                            </span>
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