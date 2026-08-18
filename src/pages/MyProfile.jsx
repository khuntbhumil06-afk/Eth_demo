import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyProfile = () => {
    const Tabs = [
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
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Profile Details");
    const [isEditing, setIsEditing] = useState(false);

    const [user, setUser] = useState({
        name: "Meet Patel",
        email: "meetpatel@gmail.com",
        mobile: "+91 95627 83426"
    });

    const [editData, setEditData] = useState(user);

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
    }

    const handleEditClick = () => {
        if (isEditing) {
            setUser(editData);
        } else {
            setEditData(user);
        }
        setIsEditing((prev) => !prev);
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
                                    {isEditing ? (
                                        <input type="text" name="name"
                                            className="profile-input"
                                            value={editData.name}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <span className="profile-value">
                                            {user.name}
                                        </span>
                                    )}
                               </div>

                               <div className="profile-row">
                                    <span className="profile-label">
                                        Email
                                    </span>
                                    {isEditing ? (
                                        <input type="email" name="email"
                                            className="profile-input"
                                            value={editData.email}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <span className="profile-value">
                                            {user.email}
                                        </span>
                                    )}
                               </div>

                               <div className="profile-row">
                                    <span className="profile-label">
                                        Mobile
                                    </span>
                                    {isEditing ? (
                                        <input type="text" name="mobile"
                                            className="profile-input"
                                            value={editData.mobile}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <span className="profile-value">
                                            {user.mobile}
                                        </span>
                                    )}
                               </div>
                               <button type="button" className="btn-edit" onClick={handleEditClick}> 
                                    {isEditing ? "Save" : "Edit"}
                               </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;