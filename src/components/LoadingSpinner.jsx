import React from 'react';

export const LoadingSpinner = ({ size = 6 }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-blue-500`}
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      />
    </div>
  );
};

export default LoadingSpinner;
