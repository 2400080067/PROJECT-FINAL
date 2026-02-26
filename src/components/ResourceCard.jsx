import React from 'react';

/**
 * ResourceCard component - Displays individual mental health resources
 * Props:
 *   - title: Resource title
 *   - description: Brief description
 *   - category: Category of resource
 *   - icon: Icon/emoji for visual appeal
 *   - onLearnMore: Callback when user clicks "Learn More"
 */
export const ResourceCard = ({ title, description, category, icon, onLearnMore }) => {
  return (
    <div className="card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Icon/Header */}
      <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      
      <p className="text-sm text-gray-600 mb-3">{description}</p>

      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Learn More Button */}
      <button
        onClick={onLearnMore}
        className="btn btn-primary w-full mt-2"
      >
        Learn More
      </button>
    </div>
  );
};
