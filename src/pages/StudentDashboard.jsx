import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SessionBookingForm } from '../components/SessionBookingForm';
import { SupportGroupCard } from '../components/SupportGroupCard';

/**
 * StudentDashboard - Dashboard for student users
 * Displays bookings, support groups, and quick actions
 */
export const StudentDashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([
    {
      id: 1,
      therapist: 'Dr. Sarah Johnson',
      date: '2024-03-15',
      time: '2:00 PM',
      status: 'Confirmed',
    },
    {
      id: 2,
      therapist: 'Dr. Michael Chen',
      date: '2024-03-20',
      time: '3:30 PM',
      status: 'Pending',
    },
  ]);

  const [joinedGroups, setJoinedGroups] = useState([
    {
      id: 1,
      name: 'Anxiety Support Group',
      category: 'Anxiety',
      members: 24,
    },
    {
      id: 2,
      name: 'Student Stress Management',
      category: 'Stress',
      members: 42,
    },
  ]);

  const [showBookingForm, setShowBookingForm] = useState(false);

  /**
   * Handle new booking
   */
  const handleNewBooking = (formData) => {
    const newBooking = {
      id: bookings.length + 1,
      therapist: formData.therapistName,
      date: formData.sessionDate,
      time: formData.sessionTime,
      status: 'Pending',
    };
    setBookings([...bookings, newBooking]);
    setShowBookingForm(false);
    alert('Session booked successfully!');
  };

  /**
   * Cancel booking
   */
  const handleCancelBooking = (id) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.filter(b => b.id !== id));
    }
  };

  /**
   * Leave group
   */
  const handleLeaveGroup = (id) => {
    if (confirm('Are you sure you want to leave this group?')) {
      setJoinedGroups(joinedGroups.filter(g => g.id !== id));
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome, {user?.name || 'Student'}! 👋
          </h1>
          <p className="text-gray-600">
            Your mental health dashboard - manage sessions, connect with support groups, and access resources
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="card text-center">
                <p className="text-3xl font-bold text-purple-600">{bookings.length}</p>
                <p className="text-gray-600 text-sm">Total Sessions</p>
              </div>
              <div className="card text-center">
                <p className="text-3xl font-bold text-purple-600">{joinedGroups.length}</p>
                <p className="text-gray-600 text-sm">Support Groups</p>
              </div>
              <div className="card text-center">
                <p className="text-3xl font-bold text-purple-600">12</p>
                <p className="text-gray-600 text-sm">Resources</p>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📅 Upcoming Sessions</h2>
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map(booking => (
                    <div key={booking.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800">{booking.therapist}</p>
                        <p className="text-sm text-gray-600">
                          {booking.date} at {booking.time}
                        </p>
                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-2 ${
                          booking.status === 'Confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="text-red-600 hover:text-red-800 font-semibold text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No upcoming sessions. Book your first session!</p>
              )}
            </div>

            {/* Book New Session */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {showBookingForm ? 'Book a Session' : 'Schedule a New Session'}
              </h2>
              {showBookingForm ? (
                <>
                  <SessionBookingForm onSubmit={handleNewBooking} />
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="btn btn-secondary w-full mt-4"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="btn btn-primary w-full"
                >
                  Book a Session with Therapist
                </button>
              )}
            </div>
          </div>

          {/* Sidebar - Active Groups */}
          <div>
            <div className="card sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">🤝 Your Groups</h2>
              {joinedGroups.length > 0 ? (
                <div className="space-y-4">
                  {joinedGroups.map(group => (
                    <div key={group.id} className="border border-gray-200 rounded-lg p-4">
                      <p className="font-semibold text-gray-800 mb-1">{group.name}</p>
                      <p className="text-xs text-gray-600 mb-3">
                        {group.members} members • {group.category}
                      </p>
                      <button
                        onClick={() => handleLeaveGroup(group.id)}
                        className="text-red-600 hover:text-red-800 text-xs font-semibold"
                      >
                        Leave Group
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">Join support groups to connect with others</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
