import React from 'react';

export const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
