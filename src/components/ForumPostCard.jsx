import React from 'react';

/**
 * ForumPostCard component - Displays forum posts
 * Props:
 *   - author: Post author name
 *   - title: Post title
 *   - content: Post content preview
 *   - replies: Number of replies
 *   - date: Post date
 *   - category: Post category
 *   - onView: Callback when user clicks "View"
 */
export const ForumPostCard = ({ author, title, content, replies, date, category, onView }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-500">
            by <span className="font-semibold">{author}</span> • {date}
          </p>
        </div>
        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2">
          {category}
        </span>
      </div>

      {/* Content Preview */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-purple-600">{replies}</span> replies
        </p>
        <button
          onClick={onView}
          className="btn btn-secondary text-sm"
        >
          View Post
        </button>
      </div>
    </div>
  );
};
