import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        emailOrPhone: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        let newErrors = { emailOrPhone: '', password: '' };
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!formData.emailOrPhone.trim()) {
            newErrors.emailOrPhone = 'Email or phone number is required';
            isValid = false;
        } else if (
            !emailRegex.test(formData.emailOrPhone) &&
            !phoneRegex.test(formData.emailOrPhone)
        ) {
            newErrors.emailOrPhone = 'Enter a valid email or 10-digit phone number';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        console.log(formData);
        navigate('/');
    };

    const handleGoogleLogin = () => { };
    const handleAppleLogin = () => { };

    return (
        <div className="login-container">
            <h1 className="login-heading">
                Login
            </h1>
            <form className="login-form" onSubmit={handleLogin} noValidate>
                <label className="login-label" htmlFor="emailOrPhone">
                    Email / Phone No.
                </label>
                <input
                    type="text"
                    id="emailOrPhone"
                    name="emailOrPhone"
                    className={`login-input ${errors.emailOrPhone ? 'input-error' : ''}`}
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.emailOrPhone && (
                    <span className="error-text">{errors.emailOrPhone}</span>
                )}

                <label className="login-label" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={`login-input ${errors.password ? 'input-error' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {errors.password && (
                    <span className="error-text">{errors.password}</span>
                )}

                <p className="forgot-password" onClick={() => navigate('/forgot-password')}>
                    Forgot Your Password?
                </p>

                <button type="submit" className="login-btn">
                    Login
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
                    Don't have an account?{' '}
                    <span className="signup-link" onClick={() => navigate('/signup')}>
                        Sign up here
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;