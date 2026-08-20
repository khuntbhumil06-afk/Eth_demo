import { useCart } from '../../context/CartContext';
import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const [selectedAddressId, setSelectedAddressId] = useState(1);
    const [addressType, setAddressType] = useState("HOME");
    const [selectedPaymentId, setSelectedPaymentId] = useState(1);
    const [couponCode, setCouponCode] = useState("");
    const [appliedCouponDiscount, setAppliedCouponDiscount] = useState(0);
    const [rewardPoints, setRewardPoints] = useState(50);
    const [appliedRewardDiscount, setAppliedRewardDiscount] = useState(0);
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
    const [billingData, setBillingData] = useState({
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

    const [errors, setErrors] = useState({});
    const [paymentError, setPaymentError] = useState("");
    const [showOrderConfirm, setShowOrderConfirm] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);

    const savedAddresses = [
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
    ];

    const paymentMethod = [
        {
            id: 1,
            name: "Payment Gateway (UPI, Cards & NetBanking)",
            label: "Online"
        },
        {
            id: 2,
            name: "Cash on Delivery (COD)",
            label: "Cash on Delivery"
        }
    ]

    const codelist = [
        {
            id: 1,
            code: "TONG30",
            decription: "lorem ipsum simply dummy text used here"
        },
        {
            id: 2,
            code: "TONG30",
            decription: "lorem ipsum simply dummy text used here"
        }
    ];

    const subtotal = cartItems?.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    ) || 0;
    const tax = 50;
    const shippingCharge = 0;
    const total = subtotal - appliedCouponDiscount - appliedRewardDiscount + tax + shippingCharge;
    const rewardPointsEarned = Math.max(Math.round(total), 0);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        setFormData((prev) => {
            const updated = { ...prev, [name]: val };
            if (name === "agreeToTerms") {
                setBillingData({ ...updated });
            }
            else {
                setBillingData((prevBilling) => ({ ...prevBilling, agreeToTerms: false }));
            }
            return updated;
        });

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingData((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyCoupon = () => {
        if (couponCode.trim().toUpperCase() === "TONG30") {
            setAppliedCouponDiscount(30);
        } else {
            setAppliedCouponDiscount(0);
        }
    };

    const handleApplyReward = () => {
        const points = Number(rewardPoints) || 0;
        const clamped = Math.min(Math.max(points, 10), 100);
        setAppliedRewardDiscount(clamped);
    };

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

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree before creating an account';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
    };

    const handlePayNow = () => {
        if (!selectedPaymentId) {
            setPaymentError("Please select a payment method before proceeding.");
            return;
        }
        if (!validate()) {
            setPaymentError("Please complete your shipping details before payment.");
            return;
        }
        setPaymentError("");
        const newOrderNumber = Math.floor(10000000 + Math.random() * 90000000);
        setOrderNumber(newOrderNumber);
        setShowOrderConfirm(true);
    };

    const handleCancelOrder = () => {
        setShowOrderConfirm(false);
        setOrderNumber(null);
    };

    const handleDownloadReceipt = () => {
        window.print();
    };

    const selectedPaymentObj = paymentMethod.find((p) => p.id === selectedPaymentId);

    return (
        <>
            <div className="checkout-container">
                <div className='checkout-grid'>
                    <div className='checkout-left'>
                        <div className="checkout-text">
                            <h2 className="checkout-h2">Delivery</h2>
                            <p className="checkout-p">
                                Select a delivery address
                            </p>
                        </div>
                        <div className="checkout-address">
                            {savedAddresses.map((addr, index) => (
                                <div key={addr.id}>
                                    <label className='address-option'>
                                        <input type="radio" className='address-input' checked={selectedAddressId === addr.id}
                                            onChange={() => setSelectedAddressId(addr.id)}
                                        />
                                        <div className='address-details'>
                                            <span className='address-span'>
                                                {addr.type}
                                            </span>
                                            <p className='address-line'>
                                                {addr.name} {addr.line1}
                                            </p>
                                            <p className='address-line'>
                                                {addr.line2}
                                            </p>
                                        </div>
                                    </label>
                                    {index !== savedAddresses.length - 1 && (
                                        <hr className='address-divider' />
                                    )}
                                </div>
                            ))}
                        </div>
                        <button type='button' className='btn-address'>
                            Add a New Address
                        </button>
                        <div className='address-divider' />
                        <div className='address-type'>
                            {["HOME", "OFFICE", "OTHER"].map((type) => (
                                <button key={type} type='button'
                                    className={`address-tab ${addressType === type ? "active" : ""}`}
                                    onClick={() => setAddressType(type)}>
                                    {type}
                                </button>
                            ))}
                        </div>
                        <h3 className='address-h3'>
                            Shipping Address
                        </h3>
                        <form className='shipping-form' onSubmit={handleSubmit}>
                            <div className='checkout-group full'>
                                <label htmlFor="name">Country</label>
                                <select name="country" value={formData.country} onChange={handleChange}>
                                    <option value="India">India</option>
                                    <option value="uk">UK</option>
                                    <option value="usa">USA</option>
                                    <option value="canada">CANADA</option>
                                </select>
                            </div>
                            <div className='checkout-row'>
                                <div className='checkout-group'>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text"
                                        name='firstName'
                                        placeholder='Chris'
                                        className={`checkout-input ${errors.firstName ? 'input-error' : ''}`}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.firstName && (
                                        <span className="error-text">{errors.firstName}</span>
                                    )}
                                </div>

                                <div className='checkout-group'>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text"
                                        name='lastName'
                                        placeholder='Martin'
                                        className={`checkout-input ${errors.lastName ? 'input-error' : ''}`}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.lastName && (
                                        <span className="error-text">{errors.lastName}</span>
                                    )}
                                </div>
                            </div>
                            <div className='checkout-group'>
                                <label htmlFor="addressLine1">Address Line1</label>
                                <input type='text'
                                    name='addressLine1'
                                    className={`checkout-input ${errors.addressLine1 ? 'input-error' : ''}`}
                                    value={formData.addressLine1}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {errors.addressLine1 && (
                                    <span className="error-text">{errors.addressLine1}</span>
                                )}
                            </div>

                            <div className='checkout-group'>
                                <label htmlFor="addressLine2">Address Line2</label>
                                <input type='text'
                                    name='addressLine2'
                                    className={`checkout-input ${errors.addressLine2 ? 'input-error' : ''}`}
                                    value={formData.addressLine2}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {errors.addressLine2 && (
                                    <span className="error-text">{errors.addressLine2}</span>
                                )}
                            </div>

                            <div className='checkout-row three'>
                                <div className='checkout-group'>
                                    <label htmlFor="city">City</label>
                                    <input type='text'
                                        name='city'
                                        className={`checkout-input ${errors.city ? 'input-error' : ''}`}
                                        value={formData.city}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.city && (
                                        <span className="error-text">{errors.city}</span>
                                    )}
                                </div>

                                <div className='checkout-group'>
                                    <label htmlFor="state">State</label>
                                    <input type='text'
                                        name='state'
                                        className={`checkout-input ${errors.state ? 'input-error' : ''}`}
                                        value={formData.state}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.state && (
                                        <span className="error-text">{errors.state}</span>
                                    )}
                                </div>

                                <div className='checkout-group'>
                                    <label htmlFor="pin">PIN</label>
                                    <input type='text'
                                        name='pin'
                                        className={`checkout-input ${errors.pin ? 'input-error' : ''}`}
                                        value={formData.pin}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors.pin && (
                                        <span className="error-text">{errors.pin}</span>
                                    )}
                                </div>
                            </div>
                            <div className='checkout-group'>
                                <label htmlFor="phone">Phone</label>
                                <input type='text'
                                    name='phone'
                                    className={`checkout-input ${errors.phone ? 'input-error' : ''}`}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {errors.phone && (
                                    <span className="error-text">{errors.phone}</span>
                                )}
                            </div>

                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    className="checkout-checkbox"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                <label htmlFor="agreeToTerms" className="checkout-label">
                                    Use same address as billing address.
                                </label>
                            </div>
                        </form>
                        <h3 className='address-h3'>
                            Billing Address
                        </h3>
                        <form className='billing-form' onSubmit={handleSubmit}>
                            <div className='checkout-group full'>
                                <label>Country</label>
                                <select name="country" value={billingData.country} onChange={handleBillingChange}>
                                    <option value="India">India</option>
                                    <option value="uk">UK</option>
                                    <option value="usa">USA</option>
                                    <option value="canada">CANADA</option>
                                </select>
                            </div>
                            <div className='checkout-row'>
                                <div className='checkout-group'>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text"
                                        name='firstName'
                                        placeholder='Chris'
                                        className={`checkout-input ${errors.firstName ? 'input-error' : ''}`}
                                        value={billingData.firstName}
                                        onChange={handleBillingChange}
                                        disabled={billingData.agreeToTerms}
                                    />
                                    {errors.firstName && (
                                        <span className="error-text">{errors.firstName}</span>
                                    )}
                                </div>

                                <div className='checkout-group'>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text"
                                        name='lastName'
                                        placeholder='Martin'
                                        className={`checkout-input ${errors.lastName ? 'input-error' : ''}`}
                                        value={billingData.lastName}
                                        onChange={handleBillingChange}
                                        disabled={billingData.agreeToTerms}
                                    />
                                    {errors.lastName && (
                                        <span className="error-text">{errors.lastName}</span>
                                    )}
                                </div>
                            </div>
                            <div className='checkout-group'>
                                <label htmlFor="addressLine1">Address Line1</label>
                                <input type='text'
                                    name='addressLine1'
                                    className={`checkout-input ${errors.addressLine1 ? 'input-error' : ''}`}
                                    value={billingData.addressLine1}
                                    onChange={handleBillingChange}
                                    disabled={billingData.agreeToTerms}
                                />
                                {errors.addressLine1 && (
                                    <span className="error-text">{errors.addressLine1}</span>
                                )}
                            </div>

                            <div className='checkout-group'>
                                <label htmlFor="addressLine2">Address Line2</label>
                                <input type='text'
                                    name='addressLine2'
                                    className={`checkout-input ${errors.addressLine2 ? 'input-error' : ''}`}
                                    value={billingData.addressLine2}
                                    onChange={handleBillingChange}
                                    disabled={billingData.agreeToTerms}
                                />
                                {errors.addressLine2 && (
                                    <span className="error-text">{errors.addressLine2}</span>
                                )}
                            </div>

                            <div className='checkout-row three'>
                                <div className='checkout-group'>
                                    <label htmlFor="city">City</label>
                                    <input type='text'
                                        name='city'
                                        className={`checkout-input ${errors.city ? 'input-error' : ''}`}
                                        value={billingData.city}
                                        onChange={handleBillingChange}
                                        disabled={billingData.agreeToTerms}
                                    />
                                    {errors.city && (
                                        <span className="error-text">{errors.city}</span>
                                    )}
                                </div>

                                <div className='checkout-group'>
                                    <label htmlFor="state">State</label>
                                    <input type='text'
                                        name='state'
                                        className={`checkout-input ${errors.state ? 'input-error' : ''}`}
                                        value={billingData.state}
                                        onChange={handleBillingChange}
                                        disabled={billingData.agreeToTerms}
                                    />
                                    {errors.state && (
                                        <span className="error-text">{errors.state}</span>
                                    )}
                                </div>

                                <div className='checkout-group'>
                                    <label htmlFor="pin">PIN</label>
                                    <input type='text'
                                        name='pin'
                                        className={`checkout-input ${errors.pin ? 'input-error' : ''}`}
                                        value={billingData.pin}
                                        onChange={handleBillingChange}
                                        disabled={billingData.agreeToTerms}
                                    />
                                    {errors.pin && (
                                        <span className="error-text">{errors.pin}</span>
                                    )}
                                </div>
                            </div>

                            <div className='checkout-group'>
                                <label htmlFor="phone">Phone</label>
                                <input type='text'
                                    name='phone'
                                    className={`checkout-input ${errors.phone ? 'input-error' : ''}`}
                                    value={billingData.phone}
                                    onChange={handleBillingChange}
                                    disabled={billingData.agreeToTerms}
                                />
                                {errors.phone && (
                                    <span className="error-text">{errors.phone}</span>
                                )}
                            </div>
                        </form>
                        <h3 className='address-h3'>
                            Payment Method
                        </h3>
                        <div className="checkout-address">
                            {paymentMethod.map((addr, index) => (
                                <div key={addr.id}>
                                    <label className='address-option'>
                                        <input type="radio" className='address-input' checked={selectedPaymentId === addr.id}
                                            onChange={() => setSelectedPaymentId(addr.id)}
                                        />
                                        <div className='address-details'>
                                            <p className='address-line'>
                                                {addr.name}
                                            </p>
                                        </div>
                                    </label>
                                    {index !== paymentMethod.length - 1 && (
                                        <hr className='address-divider' />
                                    )}
                                </div>
                            ))}
                        </div>
                        <button type='button' className='btn-address' onClick={handlePayNow}>
                            Pay Now
                        </button>
                        {paymentError && (
                            <span className="error-text">{paymentError}</span>
                        )}
                    </div>

                    <div className='checkout-right'>
                        <div className='header-row'>
                            <h3 className='header-h3'>
                                Products
                            </h3>
                            <ChevronDown className='header-chevron' />
                        </div>
                        <div className='checkout-list'>
                            {cartItems && cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div className='checkout-image' key={item.id}>
                                        <img src={item.image} alt={item.name} />
                                        <div className='checkout-info'>
                                            <p className='checkout-name'>
                                                {item.name}
                                            </p>
                                            {item.quantity && (
                                                <span className='checkout-qty'>
                                                    Qty: {item.quantity}
                                                </span>
                                            )}
                                        </div>
                                        <p className='checkout-price'>
                                            ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className='empty-cart-msg'>Your cart is empty</p>
                            )}
                        </div>
                        <div className='address-divider'></div>
                        <div className='checkout-group'>
                            <label>Got Any Coupon Code? </label>
                            <input type='text'
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                            />
                            <button type='button' className='btn-address' onClick={handleApplyCoupon}>
                                Apply
                            </button>
                        </div>
                        <div className='code-list'>
                            {codelist.map((item) => (
                                <div className='code-item' key={item.id}>
                                    <h4>
                                        {item.code}
                                    </h4>
                                    <p>
                                        {item.decription}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='address-divider'></div>
                        <div className='reward-section'>
                            <label>Utilise Your Reward Points</label>
                            <div className='reward-row'>
                                <input type='number'
                                    value={rewardPoints}
                                    onChange={(e) => setRewardPoints(e.target.value)}
                                />
                                <button type='button' className='btn-address' onClick={handleApplyReward}>
                                    Apply
                                </button>
                            </div>
                            <p className='reward-p'>
                                You have 340 reward points
                            </p>
                            <p className='reward-p'>
                                You can use min 10 and max 100 points (1 Point = 1 Rupee)
                            </p>
                        </div>
                        <div className='address-divider'></div>
                        <div className='summary-section'>
                            <div className='summary-row'>
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className='summary-row'>
                                <span>Discount Coupon</span>
                                <span>-₹{appliedCouponDiscount.toFixed(2)}</span>
                            </div>
                            <div className='summary-row'>
                                <span>Reward Points Discount</span>
                                <span>-₹{appliedRewardDiscount.toFixed(2)}</span>
                            </div>
                            <div className='summary-row'>
                                <span>Tax</span>
                                <span>₹{tax.toFixed(2)}</span>
                            </div>
                            <div className='summary-row'>
                                <span>Shipping</span>
                                <span>{shippingCharge === 0 ? "Free" : `₹${shippingCharge.toFixed(2)}`}</span>
                            </div>
                        </div>
                        <div className='total-row'>
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {showOrderConfirm && (
                <div className='order-container' onClick={handleCancelOrder}>
                    <div className='order-modal' onClick={(e) => e.stopPropagation()}>
                        <button type='button'
                            className='order-close'
                            onClick={handleCancelOrder}
                            aria-label='Close'
                        >
                            <X size={22} />
                        </button>

                        <h2 className='order-title'>
                            Your Order has Been Placed!
                        </h2>
                        <p className='order-ordnum'>
                            Order #{orderNumber}
                        </p>

                        <div className='order-items'>
                            {cartItems && cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div className='order-item' key={item.id}>
                                        <img src={item.image} alt={item.name} className='order-item-img' />

                                        <div className='order-info'>
                                            <p className='order-name'>
                                                {item.name}
                                            </p>
                                            {item.size && (
                                                <p className='order-size'>
                                                    Size: {item.size}
                                                </p>
                                            )}
                                            <p className='order-qty'>
                                                {String(item.quantity || 1).padStart(2, "0")} × ₹{item.price}
                                            </p>
                                        </div>
                                        <p className='order-price'>
                                            ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className='empty-msg'>
                                    No item in cart
                                </p>
                            )}
                        </div>

                        <div className='order-divider'></div>

                        <div className='order-row'>
                            <span>Item Total</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className='order-row'>
                            <span>Discount Coupon</span>
                            <span>₹{appliedCouponDiscount.toFixed(2)}</span>
                        </div>
                        <div className='order-row'>
                            <span>Reward Points Discount</span>
                            <span>₹{appliedRewardDiscount.toFixed(2)}</span>
                        </div>
                        <div className='order-row'>
                            <span>Delivery</span>
                            <span className='order-free'>
                                {shippingCharge === 0 ? "Free" : `₹${shippingCharge.toFixed(2)}`}
                            </span>
                        </div>
                        <div className='order-total-row'>
                            <span>Grand Total</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>

                        <div className='order-divider'></div>
                        <div className='order-row'>
                            <span>Reward Points Earned</span>
                            <span>₹{rewardPointsEarned} Points</span>
                        </div>
                        <div className='order-divider'></div>

                        <h3 className='order-heading'>
                            Your Details
                        </h3>
                        <div className='order-details'>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    Name:
                                </span>
                                <span className="order-details-value">
                                    {formData.firstName} {formData.lastName}
                                </span>
                            </div>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    Mobile:
                                </span>
                                <span className="order-details-value">
                                    +91 {formData.phone}
                                </span>
                            </div>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    Address Line 1:
                                </span>
                                <span className="order-details-value">
                                    {formData.addressLine1}
                                </span>
                            </div>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    Address Line 2:
                                </span>
                                <span className="order-details-value">
                                    {formData.addressLine2}
                                </span>
                            </div>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    City:
                                </span>
                                <span className="order-details-value">
                                    {formData.city}
                                </span>
                            </div>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    State:
                                </span>
                                <span className="order-details-value">
                                    {formData.state}
                                </span>
                            </div>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    PIN:
                                </span>
                                <span className="order-details-value">
                                    {formData.pin}
                                </span>
                            </div>
                            <div className='order-details-row'>
                                <span className="order-details-label">
                                    Payment:
                                </span>
                                <span className="order-details-value">
                                    {selectedPaymentObj?.label}
                                </span>
                            </div>
                        </div>

                        <div className='order-divider'></div>

                        <div className='order-actions'>
                            <button type='button'
                                className='btn-cancel'
                                onClick={handleCancelOrder}
                            >
                                Cancel Order
                            </button>
                            <button type='button'
                                className='btn-download'
                                onClick={handleDownloadReceipt}
                            >
                                Download Receipt
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CheckoutPage;