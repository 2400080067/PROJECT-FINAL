import React from 'react';

export const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
