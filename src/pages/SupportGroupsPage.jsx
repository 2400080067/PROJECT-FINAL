import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SupportGroupCard } from '../components/SupportGroupCard';

/**
 * SupportGroupsPage - Browse and join support groups
 */
export const SupportGroupsPage = () => {
  const { user } = useAuth();

  const [allGroups] = useState([
    {
      id: 1,
      name: 'Anxiety Support Group',
      description: 'Connect with others managing anxiety symptoms and share coping strategies.',
      members: 24,
      nextMeeting: 'Tomorrow at 6PM',
      category: 'Anxiety',
      details: 'Weekly meetings every Thursday'
    },
    {
      id: 2,
      name: 'Student Stress Management',
      description: 'A safe space for students to discuss academic stress and pressure.',
      members: 42,
      nextMeeting: 'Saturday at 2PM',
      category: 'Stress',
      details: 'Bi-weekly support sessions'
    },
    {
      id: 3,
      name: 'Depression Support Circle',
      description: 'Share experiences and support each other through depression recovery.',
      members: 18,
      nextMeeting: 'Wednesday at 7PM',
      category: 'Depression',
      details: 'Private group, all confidential'
    },
    {
      id: 4,
      name: 'Sleep & Insomnia Help',
      description: 'Tips and strategies for better sleep and managing insomnia.',
      members: 31,
      nextMeeting: 'Monday at 8PM',
      category: 'Sleep',
      details: 'Expert-led sessions monthly'
    },
    {
      id: 5,
      name: 'Mindfulness & Meditation',
      description: 'Practice mindfulness together and learn meditation techniques.',
      members: 56,
      nextMeeting: 'Daily at 7AM',
      category: 'Wellness',
      details: 'Open to all levels'
    },
    {
      id: 6,
      name: 'ADHD Support Network',
      description: 'Connect with others who understand ADHD challenges.',
      members: 22,
      nextMeeting: 'Friday at 5PM',
      category: 'ADHD',
      details: 'Students and professionals welcome'
    },
  ]);

  const [joinedGroupIds, setJoinedGroupIds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(allGroups.map(g => g.category))];

  const filteredGroups = selectedCategory === 'All'
    ? allGroups
    : allGroups.filter(g => g.category === selectedCategory);

  const handleJoinGroup = (groupId) => {
    if (joinedGroupIds.includes(groupId)) {
      setJoinedGroupIds(joinedGroupIds.filter(id => id !== groupId));
      alert('You have left the group.');
    } else {
      setJoinedGroupIds([...joinedGroupIds, groupId]);
      alert('✓ Successfully joined the group!');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🤝 Support Groups
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with others on similar journeys. You're not alone.
          </p>

          {user && (
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              {joinedGroupIds.length} group{joinedGroupIds.length !== 1 ? 's' : ''} joined
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-12 card">
          <h3 className="font-bold text-gray-800 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredGroups.map(group => (
            <div key={group.id} className="card">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{group.name}</h3>
              
              <p className="text-sm text-gray-600 mb-4">{group.description}</p>

              <div className="mb-4 p-3 bg-gray-50 rounded-lg text-sm">
                <p className="text-gray-700"><strong>Category:</strong> {group.category}</p>
                <p className="text-gray-700"><strong>Members:</strong> {group.members}</p>
                <p className="text-gray-700"><strong>Next Meeting:</strong> {group.nextMeeting}</p>
                <p className="text-gray-700"><strong>Details:</strong> {group.details}</p>
              </div>

              <button
                onClick={() => handleJoinGroup(group.id)}
                className={`btn w-full ${
                  joinedGroupIds.includes(group.id)
                    ? 'btn-secondary'
                    : 'btn-primary'
                }`}
              >
                {joinedGroupIds.includes(group.id) ? 'Leave Group' : 'Join Group'}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGroups.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-600 text-lg">No groups found in this category.</p>
          </div>
        )}

        {/* Benefits Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Benefits of Support Groups
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <p className="text-5xl mb-4">👥</p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Shared Experience</h3>
              <p className="text-gray-600">
                Connect with others who truly understand your struggles
              </p>
            </div>

            <div className="card text-center">
              <p className="text-5xl mb-4">💬</p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Peer Support</h3>
              <p className="text-gray-600">
                Exchange advice and support with your peer community
              </p>
            </div>

            <div className="card text-center">
              <p className="text-5xl mb-4">🌱</p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Growth</h3>
              <p className="text-gray-600">
                Learn new coping strategies and grow together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
