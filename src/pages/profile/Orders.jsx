import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Headphones, Trash2 } from "lucide-react";

const Orders = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("My Orders");
    const [orders, setOrders] = useState([]);

    const [viewOrder, setViewOrder] = useState(null);

    const [cancelOrderNumber, setCancelOrderNumber] = useState(null);
    const [selectedReasons, setSelectedReasons] = useState([]);
    const [cancelNote, setCancelNote] = useState("");
    const [showCancelConfirm, setShowCancelConfirm] = useState(false);

    const [refundOrderNumber, setRefundOrderNumber] = useState(null);
    const [selectedRefundReasons, setSelectedRefundReasons] = useState([]);
    const [refundNote, setRefundNote] = useState("");
    const [showRefundConfirm, setShowRefundConfirm] = useState(false);

    const order = [
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

    useEffect(() => {
        loadOrders();
    }, []);

    const CANCEL_REASONS = [
        "Changed my mind",
        "I no longer want the product",
        "Ordered by mistake",
        "I selected the wrong item/quantity",
        "Concerned about product quality",
        "Allergic / dietary concern discovered",
        "Other"
    ];

    const REFUND_REASONS = [
        "Received damaged product",
        "Product wasn't in good condition",
        "Wrong item delivered",
        "Missing items in the order",
        "Expired Product",
        "Allergic / dietary concern discovered",
        "Did not receive the order",
        "Other"
    ];

    const loadOrders = () => {
        try {
            const savedOrders = JSON.parse(localStorage.getItem("tongGardenOrders")) || [];
            setOrders(savedOrders);
        } catch (err) {
            console.error("Failed to load orders:", err);
            setOrders([]);
        }
    };

    const handleTabCick = (tab) => {
        setActiveTab(tab.label);
        navigate(tab.link);
    };

    const handleLogout = () => {
        navigate("/user");
    }

    const handleOpenViewOrder = (ord) => {
        setViewOrder(ord);
    };

    const handleCloseViewOrder = () => {
        setViewOrder(null);
    };

    const handleOpenCancelModal = (orderNumber) => {
        setCancelOrderNumber(orderNumber);
        setSelectedReasons([]);
        setCancelNote("");
    };

    const handleCloseCancelModal = () => {
        setCancelOrderNumber(null);
        setSelectedReasons([]);
        setCancelNote("");
    };

    const handleToggleReason = (reason) => {
        setSelectedReasons((prev) =>
            prev.includes(reason)
                ? prev.filter((r) => r !== reason)
                : [...prev, reason]
        );
    };

    const handleCancelSubmit = () => {
        try {
            const savedOrders = JSON.parse(localStorage.getItem("tongGardenOrders")) || [];
            const updated = savedOrders.map((ord) =>
                ord.orderNumber === cancelOrderNumber
                    ? {
                        ...ord,
                        status: "Cancelled",
                        cancelReasons: selectedReasons,
                        cancelNote: cancelNote
                    }
                    : ord
            );
            localStorage.setItem("tongGardenOrders", JSON.stringify(updated));
            setOrders(updated);
        } catch (err) {
            console.error("Failed to cancel order:", err);
        }

        setCancelOrderNumber(null);
        setSelectedReasons([]);
        setCancelNote("");
        setShowCancelConfirm(true);
    };

    const handleCloseCancelConfirm = () => {
        setShowCancelConfirm(false);
    };

    const handleDeleteOrder = (orderNumber) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete Order #${orderNumber}? This cannot be undone.`
        );
        if (!confirmDelete) return;

        try {
            const savedOrders = JSON.parse(localStorage.getItem("tongGardenOrders")) || [];
            const updated = savedOrders.filter((ord) => ord.orderNumber !== orderNumber);
            localStorage.setItem("tongGardenOrders", JSON.stringify(updated));
            setOrders(updated);
        } catch (err) {
            console.error("Failed to delete order:", err);
        }
    };

    const handleWriteReview = (orderNumber) => {
        navigate(`/orders/${orderNumber}/review`);
    };

    const handleDownloadReceipt = () => {
        window.print();
    };

    const handleOpenRefundModal = (orderNumber) => {
        setRefundOrderNumber(orderNumber);
        setSelectedRefundReasons([]);
        setRefundNote("");
        setViewOrder(null);
    };

    const handleCloseRefundModal = () => {
        setRefundOrderNumber(null);
        setSelectedRefundReasons([]);
        setRefundNote("");
    };

    const handleToggleRefundReason = (reason) => {
        setSelectedRefundReasons((prev) =>
            prev.includes(reason)
                ? prev.filter((r) => r !== reason)
                : [...prev, reason]
        );
    };

    const handleRefundSubmit = () => {
        try {
            const savedOrders = JSON.parse(localStorage.getItem("tongGardenOrders")) || [];
            const updated = savedOrders.map((ord) =>
                ord.orderNumber === refundOrderNumber
                    ? {
                        ...ord,
                        refundRequested: true,
                        refundRequestedAt: new Date().toISOString(),
                        refundReasons: selectedRefundReasons,
                        refundNote: refundNote
                    }
                    : ord
            );
            localStorage.setItem("tongGardenOrders", JSON.stringify(updated));
            setOrders(updated);
        } catch (err) {
            console.error("Failed to save refund request:", err);
        }

        setRefundOrderNumber(null);
        setSelectedRefundReasons([]);
        setRefundNote("");
        setShowRefundConfirm(true);
    };

    const handleCloseRefundConfirm = () => {
        setShowRefundConfirm(false);
    };

    const formatDate = (isoDate) => {
        if (!isoDate) return "";
        const d = new Date(isoDate);
        const datePart = d.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        const timePart = d.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
        return `${datePart}, ${timePart}`;
    };

    const getItemCount = (items) => {
        if (!items || items.length === 0) return 0;
        return items.reduce((sum, item) => sum + (item.quantity || 1), 0);
    };

    return (
        <>
            <div className="profile-container">
                <h1 className="profile-heading">
                    My Orders
                </h1>

                <div className="profile-grid">
                    <div className="profile-side">
                        {order.map((tab) => (
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

                    <div className="profile-main">
                        {orders.length === 0 ? (
                            <p className="empty-cart-msg">
                                You have no orders yet.
                            </p>
                        ) : (
                            <div className="orders-grid">
                                {orders.map((ord) => {
                                    const firstItem = ord.items && ord.items[0];
                                    const isActive = ord.status === "Placed" || ord.status === "Active";
                                    const isCancelled = ord.status === "Cancelled";

                                    return (
                                        <div className="order-card" key={ord.orderNumber}>
                                            <button
                                                type="button"
                                                className="order-card-delete"
                                                onClick={() => handleDeleteOrder(ord.orderNumber)}
                                                aria-label="Delete order"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                            <div className="order-card-top">
                                                <div className="order-card-img-wrap">
                                                    {firstItem?.image ? (
                                                        <img
                                                            src={firstItem.image}
                                                            alt={firstItem.name}
                                                            className="order-card-img"
                                                        />
                                                    ) : (
                                                        <div className="order-card-img placeholder-img" />
                                                    )}
                                                </div>

                                                <div className="order-card-details">
                                                    <div className="order-card-title-row">
                                                        <p className="order-card-title">
                                                            Order #{ord.orderNumber}
                                                        </p>
                                                        {isActive && (
                                                            <span className="order-status-badge active">
                                                                Active
                                                            </span>
                                                        )}
                                                        {isCancelled && (
                                                            <span className="order-status-badge cancelled">
                                                                Cancelled
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="order-card-price">
                                                        Rs. {Number(ord.total || 0).toFixed(0)}
                                                    </p>
                                                    <p className="order-card-count">
                                                        {getItemCount(ord.items)} Item{getItemCount(ord.items) !== 1 ? "s" : ""}
                                                    </p>
                                                    <p className="order-card-date">
                                                        {formatDate(ord.date)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="order-card-actions">
                                                {isActive ? (
                                                    <button
                                                        type="button"
                                                        className="btn-order-outline"
                                                        onClick={() => handleOpenCancelModal(ord.orderNumber)}
                                                    >
                                                        Cancel Order
                                                    </button>
                                                ) : (
                                                    !isCancelled && (
                                                        <button
                                                            type="button"
                                                            className="btn-order-outline"
                                                            onClick={() => handleWriteReview(ord.orderNumber)}
                                                        >
                                                            Write a Review
                                                        </button>
                                                    )
                                                )}
                                                {isCancelled && <span />}
                                                <button
                                                    type="button"
                                                    className="btn-order-outline"
                                                    onClick={() => handleOpenViewOrder(ord)}
                                                >
                                                    View Order
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {viewOrder && (
                <div className="order-container" onClick={handleCloseViewOrder}>
                    <div className="order-modal" onClick={(e) => e.stopPropagation()}>
                        <button type="button"
                            className="order-close"
                            onClick={handleCloseViewOrder}
                            aria-label="Close"
                        >
                            <X size={22} />
                        </button>

                        <h2 className="order-title">
                            Order Details
                        </h2>
                        <p className="order-ordnum">
                            Order #{viewOrder.orderNumber}
                        </p>

                        <div className="order-items">
                            {viewOrder.items && viewOrder.items.length > 0 ? (
                                viewOrder.items.map((item, idx) => (
                                    <div className="order-item" key={item.id || idx}>
                                        {item.image && (
                                            <img src={item.image} alt={item.name} className="order-item-img" />
                                        )}
                                        <div className="order-info">
                                            <p className="order-name">
                                                {item.name}
                                            </p>
                                            {item.size && (
                                                <p className="order-size">
                                                    Size: {item.size}
                                                </p>
                                            )}
                                            <p className="order-qty">
                                                {String(item.quantity || 1).padStart(2, "0")} × ₹{item.price}
                                            </p>
                                        </div>
                                        <p className="order-price">
                                            ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="empty-msg">No items found</p>
                            )}
                        </div>

                        <div className="order-divider"></div>

                        <div className="order-row">
                            <span>Item Total</span>
                            <span>₹{Number(viewOrder.subtotal || 0).toFixed(2)}</span>
                        </div>
                        <div className="order-row">
                            <span>Discount Coupon</span>
                            <span>₹{Number(viewOrder.couponDiscount || 0).toFixed(2)}</span>
                        </div>
                        <div className="order-row">
                            <span>Reward Points Discount</span>
                            <span>₹{Number(viewOrder.rewardDiscount || 0).toFixed(2)}</span>
                        </div>
                        <div className="order-row">
                            <span>Delivery</span>
                            <span className="order-free">
                                {viewOrder.shippingCharge === 0 ? "Free" : `₹${Number(viewOrder.shippingCharge || 0).toFixed(2)}`}
                            </span>
                        </div>
                        <div className="order-total-row">
                            <span>Grand Total</span>
                            <span>₹{Number(viewOrder.total || 0).toFixed(2)}</span>
                        </div>

                        <div className="order-divider"></div>
                        <div className="order-row">
                            <span>Reward Points Earned</span>
                            <span>₹{viewOrder.rewardPointsEarned || 0} Points</span>
                        </div>
                        <div className="order-divider"></div>

                        <h3 className="order-heading">
                            Delivery Details
                        </h3>
                        <div className="order-details">
                            <div className="order-details-row">
                                <span className="order-details-label">Name:</span>
                                <span className="order-details-value">
                                    {viewOrder.shippingAddress?.firstName} {viewOrder.shippingAddress?.lastName}
                                </span>
                            </div>
                            <div className="order-details-row">
                                <span className="order-details-label">Mobile:</span>
                                <span className="order-details-value">
                                    +91 {viewOrder.shippingAddress?.phone}
                                </span>
                            </div>
                            <div className="order-details-row">
                                <span className="order-details-label">Address Line 1:</span>
                                <span className="order-details-value">
                                    {viewOrder.shippingAddress?.addressLine1}
                                </span>
                            </div>
                            <div className="order-details-row">
                                <span className="order-details-label">Address Line 2:</span>
                                <span className="order-details-value">
                                    {viewOrder.shippingAddress?.addressLine2}
                                </span>
                            </div>
                            <div className="order-details-row">
                                <span className="order-details-label">City:</span>
                                <span className="order-details-value">
                                    {viewOrder.shippingAddress?.city}
                                </span>
                            </div>
                            <div className="order-details-row">
                                <span className="order-details-label">State:</span>
                                <span className="order-details-value">
                                    {viewOrder.shippingAddress?.state}
                                </span>
                            </div>
                            <div className="order-details-row">
                                <span className="order-details-label">PIN:</span>
                                <span className="order-details-value">
                                    {viewOrder.shippingAddress?.pin}
                                </span>
                            </div>
                            <div className="order-details-row">
                                <span className="order-details-label">Payment:</span>
                                <span className="order-details-value">
                                    {viewOrder.payment}
                                </span>
                            </div>
                        </div>

                        <div className="order-divider"></div>

                        <div className="order-actions">
                            <button
                                type="button"
                                className="btn-download"
                                onClick={() => handleOpenRefundModal(viewOrder.orderNumber)}
                                disabled={viewOrder.refundRequested}
                            >
                                {viewOrder.refundRequested ? "Refund Requested" : "Ask For Refund"}
                            </button>
                            <button
                                type="button"
                                className="btn-download"
                                onClick={() => handleDownloadReceipt(viewOrder)}
                            >
                                Download Receipt
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {cancelOrderNumber && (
                <div className="order-container" onClick={handleCloseCancelModal}>
                    <div className="cancel-modal" onClick={(e) => e.stopPropagation()}>
                        <button type="button"
                            className="order-close"
                            onClick={handleCloseCancelModal}
                            aria-label="Close"
                        >
                            <X size={22} />
                        </button>

                        <h2 className="cancel-title">
                            Why Do You Want To Cancel The Order?
                        </h2>

                        <div className="cancel-reasons">
                            {CANCEL_REASONS.map((reason) => (
                                <label className="cancel-reason-item" key={reason}>
                                    <input
                                        type="checkbox"
                                        checked={selectedReasons.includes(reason)}
                                        onChange={() => handleToggleReason(reason)}
                                    />
                                    <span>{reason}</span>
                                </label>
                            ))}
                        </div>

                        <p className="cancel-note-label">Note:</p>
                        <textarea
                            className="cancel-note-textarea"
                            value={cancelNote}
                            onChange={(e) => setCancelNote(e.target.value)}
                            rows={4}
                        />

                        <button type="button"
                            className="cancel-submit-btn"
                            onClick={handleCancelSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}

            {showCancelConfirm && (
                <div className="order-container" onClick={handleCloseCancelConfirm}>
                    <div className="cancel-confirm-modal" onClick={(e) => e.stopPropagation()}>
                        <button type="button"
                            className="order-close"
                            onClick={handleCloseCancelConfirm}
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                        <Headphones size={40} className="cancel-confirm-icon" />
                        <p className="cancel-confirm-text">
                            Our executive will be in touch with you soon.
                        </p>
                    </div>
                </div>
            )}

            {refundOrderNumber && (
                <div className="order-container" onClick={handleCloseRefundModal}>
                    <div className="cancel-modal" onClick={(e) => e.stopPropagation()}>
                        <button type="button"
                            className="order-close"
                            onClick={handleCloseRefundModal}
                            aria-label="Close"
                        >
                            <X size={22} />
                        </button>

                        <h2 className="cancel-title">
                            Help Us Understand Your Refund Request
                        </h2>

                        <div className="cancel-reasons">
                            {REFUND_REASONS.map((reason) => (
                                <label className="cancel-reason-item" key={reason}>
                                    <input
                                        type="checkbox"
                                        checked={selectedRefundReasons.includes(reason)}
                                        onChange={() => handleToggleRefundReason(reason)}
                                    />
                                    <span>{reason}</span>
                                </label>
                            ))}
                        </div>

                        <p className="cancel-note-label">Note:</p>
                        <textarea
                            className="cancel-note-textarea"
                            value={refundNote}
                            onChange={(e) => setRefundNote(e.target.value)}
                            rows={4}
                        />

                        <button type="button"
                            className="cancel-submit-btn"
                            onClick={handleRefundSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}

            {showRefundConfirm && (
                <div className="order-container" onClick={handleCloseRefundConfirm}>
                    <div className="cancel-confirm-modal" onClick={(e) => e.stopPropagation()}>
                        <button type="button"
                            className="order-close"
                            onClick={handleCloseRefundConfirm}
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                        <Headphones size={40} className="cancel-confirm-icon" />
                        <p className="cancel-confirm-text">
                            Your refund request has been submitted. Our team will review it soon.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Orders;