import { Truck, Lock, Globe } from "lucide-react"
import singup from '../../assets/singup.png'

function Club() {
    const features = [
        {
            id: 1,
            icon: <Truck size={40} strokeWidth={2} />,
            label: "Fast Delivery",
        },
        {
            id: 2,
            icon: <Lock size={40} strokeWidth={2} />,
            label: "Secure Payments",
        },
        {
            id: 3,
            icon: <Globe size={40} strokeWidth={2} />,
            label: "Global Reach",
        },
    ];

    const club = {
        image: singup,
    };

    return (
        <>
            <div className="club-container">
                <div className="club-head">
                    {features.map((item) => (
                        <div className="club-item" key={item.id}>
                            <span className="club-icon">{item.icon}</span>
                            <span className="club-label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="club-wrapper">
                <div className="club-left">
                    <div className="club-bar">
                        <h1 className="club-heading">
                            Join Our <br />
                            Snack Club!
                        </h1>
                        <p className="club-subheading">
                            Be the first one to hear about our newest flavours,<br />
                            exclusive offers and more.
                        </p>
                        <button type="button" className="btn-club">
                            Sign Up
                        </button>
                    </div>
                    <div className="club-grid">
                        <div className="club-image">
                            <img src={club.image} alt="SingUp" />
                        </div>
                    </div>
                </div>
                <div className="club-right">
                    <div className="head-text">
                        <h2 className="head-h2">
                            Snack Updates,<br />
                            Straight to<br />
                            Your Inbox!
                        </h2>
                        <div className="club-input">
                            <input type="email" placeholder="Email" />
                            <button type="button" className="btn-input">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Club