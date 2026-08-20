import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value 
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let newErrors = { 
            name: '', 
            phone: '', 
            email: '', 
            password: '', 
            confirmPassword: '', 
            agreeToTerms: '' 
        };
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
            isValid = false;
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree before creating an account';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        console.log(formData);
        navigate('/user');
    };

    const handleGoogleLogin = () => {};

    return (
        <div className="signup-container">
            <h1 className="signup-heading">
                Sign Up
            </h1>
            <form className="signup-form" onSubmit={handleSignup} noValidate>
                <label className="signup-label" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`signup-input ${errors.name ? 'input-error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.name && (
                    <span className="error-text">{errors.name}</span>
                )}

                <label className="signup-label" htmlFor="phone">
                    Phone
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={`signup-input ${errors.phone ? 'input-error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.phone && (
                    <span className="error-text">{errors.phone}</span>
                )}

                <label className="signup-label" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`signup-input ${errors.email ? 'input-error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.email && (
                    <span className="error-text">{errors.email}</span>
                )}

                <label className="signup-label" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={`signup-input ${errors.password ? 'input-error' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.password && (
                    <span className="error-text">{errors.password}</span>
                )}

                <label className="signup-label" htmlFor="confirmPassword">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`signup-input ${errors.confirmPassword ? 'input-error' : ''}`}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.confirmPassword && (
                    <span className="error-text">{errors.confirmPassword}</span>
                )}

                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        className="signup-checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                    />
                    <label htmlFor="agreeToTerms" className="checkbox-label">
                        I agree to receive marketing emails, WhatsApp messages, and promotional content, including special deals.
                    </label>
                </div>
                {errors.agreeToTerms && (
                    <span className="error-text">{errors.agreeToTerms}</span>
                )}

                <button type="submit" className="signup-btn">
                    Create Account
                </button>

                <div className="divider">
                    <span className="divider-line"></span>
                    <span className="divider-text">or</span>
                    <span className="divider-line"></span>
                </div>

                <div className="social-login">
                    <button type="button" className="social-btn" onClick={handleGoogleLogin}>
                        <svg className="social-icon" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Continue with Google
                    </button>
                </div>

                <p className="signup-text">
                    Already have an account?{' '}
                    <span className="signup-link" onClick={() => navigate('/user')}>
                        Log in here
                    </span>
                </p>
            </form>
        </div>
    );
};

export default SignupPage;