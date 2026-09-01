import React from 'react';

const Button = ({ children, type = 'button', className = '', onClick, ...props }) => {
    return (
        <button
            type={type}
            className={`btn-blogdetails ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;