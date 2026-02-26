import React from 'react';

/**
 * SupportGroupCard component - Displays individual support groups
 * Props:
 *   - name: Group name
 *   - description: Group description
 *   - members: Number of members
 *   - nextMeeting: Date of next meeting
 *   - category: Type of support group
 *   - onJoin: Callback when user clicks "Join"
 */
export const SupportGroupCard = ({ name, description, members, nextMeeting, category, onJoin }) => {
  return (
    <div className="card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Info */}
      <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-t border-b border-gray-200">
        <div>
          <p className="text-xs text-gray-600 mb-1">Members</p>
          <p className="text-lg font-bold text-purple-600">{members}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 mb-1">Next Meeting</p>
          <p className="text-sm font-semibold text-gray-800">{nextMeeting}</p>
        </div>
      </div>

      {/* Join Button */}
      <button
        onClick={onJoin}
        className="btn btn-primary w-full"
      >
        Join Group
      </button>
    </div>
  );
};
