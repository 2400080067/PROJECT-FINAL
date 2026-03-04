import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ forRole = 'student' }) => {
  if (forRole === 'admin') {
    return (
      <nav className="space-y-3">
        <Link to="/admin/dashboard" className="block text-sm text-gray-700 hover:text-green-600">Overview</Link>
        <Link to="/admin/users" className="block text-sm text-gray-700 hover:text-green-600">Manage Users</Link>
        <Link to="/admin/resources" className="block text-sm text-gray-700 hover:text-green-600">Resources</Link>
        <Link to="/admin/sessions" className="block text-sm text-gray-700 hover:text-green-600">Counseling Sessions</Link>
        <Link to="/admin/forum" className="block text-sm text-gray-700 hover:text-green-600">Forum Moderation</Link>
      </nav>
    );
  }

  return (
    <nav className="space-y-3">
      <Link to="/student/dashboard" className="block text-sm text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/resources" className="block text-sm text-gray-700 hover:text-blue-600">Resources</Link>
      <Link to="/appointments" className="block text-sm text-gray-700 hover:text-blue-600">My Appointments</Link>
      <Link to="/book-session" className="block text-sm text-gray-700 hover:text-blue-600">Book Session</Link>
      <Link to="/forum" className="block text-sm text-gray-700 hover:text-blue-600">Forum</Link>
      <Link to="/support-groups" className="block text-sm text-gray-700 hover:text-blue-600">Support Groups</Link>
    </nav>
  );
};

export default Sidebar;
