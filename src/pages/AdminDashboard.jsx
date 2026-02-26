import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ResourceCard } from '../components/ResourceCard';

/**
 * AdminDashboard - Dashboard for admin users
 * Manage resources, sessions, and support groups
 */
export const AdminDashboard = () => {
  const { user } = useAuth();

  const [resources, setResources] = useState([
    { id: 1, title: 'Understanding Anxiety', category: 'Anxiety', icon: '😟', description: 'Learn effective coping strategies' },
    { id: 2, title: 'Sleep Better Tonight', category: 'Sleep', icon: '😴', description: 'Improve your sleep quality' },
    { id: 3, title: 'Stress Management 101', category: 'Stress', icon: '🧘', description: 'Practical stress relief techniques' },
  ]);

  const [sessionBookings, setSessionBookings] = useState([
    { id: 1, student: 'John Doe', therapist: 'Dr. Sarah Johnson', date: '2024-03-15', status: 'Confirmed' },
    { id: 2, student: 'Jane Smith', therapist: 'Dr. Michael Chen', date: '2024-03-20', status: 'Pending' },
    { id: 3, student: 'Alex Brown', therapist: 'Dr. Emma Rodriguez', date: '2024-03-22', status: 'Confirmed' },
  ]);

  const [supportGroups, setSupportGroups] = useState([
    { id: 1, name: 'Anxiety Support Group', members: 24, status: 'Active' },
    { id: 2, name: 'Student Stress Management', members: 42, status: 'Active' },
    { id: 3, name: 'Depression Support Circle', members: 18, status: 'Active' },
  ]);

  const [showAddResource, setShowAddResource] = useState(false);
  const [newResource, setNewResource] = useState({ title: '', category: '', description: '', icon: '' });

  /**
   * Add new resource
   */
  const handleAddResource = (e) => {
    e.preventDefault();
    if (newResource.title && newResource.category) {
      setResources([
        ...resources,
        {
          id: resources.length + 1,
          ...newResource,
          icon: newResource.icon || '📚'
        }
      ]);
      setNewResource({ title: '', category: '', description: '', icon: '' });
      setShowAddResource(false);
      alert('Resource added successfully!');
    }
  };

  /**
   * Delete resource
   */
  const handleDeleteResource = (id) => {
    if (confirm('Are you sure?')) {
      setResources(resources.filter(r => r.id !== id));
    }
  };

  /**
   * Approve booking
   */
  const handleApproveBooking = (id) => {
    setSessionBookings(sessionBookings.map(booking =>
      booking.id === id ? { ...booking, status: 'Confirmed' } : booking
    ));
  };

  /**
   * Reject booking
   */
  const handleRejectBooking = (id) => {
    setSessionBookings(sessionBookings.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome {user?.email}. Manage platform content and user activities
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">{resources.length}</p>
            <p className="text-gray-600">Resources</p>
          </div>
          <div className="card text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">{sessionBookings.length}</p>
            <p className="text-gray-600">Session Bookings</p>
          </div>
          <div className="card text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">{supportGroups.length}</p>
            <p className="text-gray-600">Support Groups</p>
          </div>
          <div className="card text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">5000+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Manage Resources */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">📚 Manage Resources</h2>
                <button
                  onClick={() => setShowAddResource(!showAddResource)}
                  className="btn btn-primary text-sm"
                >
                  Add Resource
                </button>
              </div>

              {showAddResource && (
                <form onSubmit={handleAddResource} className="mb-6 p-4 bg-gray-50 rounded-lg space-y-3">
                  <input
                    type="text"
                    placeholder="Resource Title"
                    value={newResource.title}
                    onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                    className="w-full"
                  />
                  <select
                    value={newResource.category}
                    onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
                    className="w-full"
                  >
                    <option value="">Select Category</option>
                    <option value="Anxiety">Anxiety</option>
                    <option value="Depression">Depression</option>
                    <option value="Sleep">Sleep</option>
                    <option value="Stress">Stress</option>
                  </select>
                  <textarea
                    placeholder="Description"
                    value={newResource.description}
                    onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                    className="w-full"
                    rows="2"
                  ></textarea>
                  <div className="flex gap-2">
                    <button type="submit" className="btn btn-primary flex-1 text-sm">Save</button>
                    <button
                      type="button"
                      onClick={() => setShowAddResource(false)}
                      className="btn btn-secondary flex-1 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-3">
                {resources.map(resource => (
                  <div key={resource.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{resource.icon} {resource.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mt-2">
                        {resource.category}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteResource(resource.id)}
                      className="text-red-600 hover:text-red-800 font-semibold ml-4"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Session Bookings Review */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Session Bookings</h2>
              <div className="space-y-3">
                {sessionBookings.map(booking => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">{booking.student}</p>
                    <p className="text-sm text-gray-600">
                      {booking.therapist} • {booking.date}
                    </p>
                    <div className="flex gap-2 mt-3">
                      {booking.status === 'Pending' ? (
                        <>
                          <button
                            onClick={() => handleApproveBooking(booking.id)}
                            className="text-green-600 hover:text-green-800 text-sm font-semibold"
                          >
                            ✓ Approve
                          </button>
                          <button
                            onClick={() => handleRejectBooking(booking.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-semibold"
                          >
                            ✕ Reject
                          </button>
                        </>
                      ) : (
                        <span className="text-sm font-semibold text-green-600">✓ Confirmed</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Groups */}
        <div className="mt-8 card">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🤝 Support Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportGroups.map(group => (
              <div key={group.id} className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">{group.name}</p>
                <p className="text-sm text-gray-600 mb-3">
                  {group.members} members • <span className="text-green-600">{group.status}</span>
                </p>
                <button className="text-purple-600 hover:text-purple-800 text-sm font-semibold">
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
