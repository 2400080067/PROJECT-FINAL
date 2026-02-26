import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Navbar component - Dynamic navigation based on user role
 * Shows different links for authenticated/unauthenticated users
 * Includes mobile responsive menu
 */
export const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MH</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-gray-800">
              Mental Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-purple-600 transition">
              Resources
            </Link>
            <Link to="/forum" className="text-gray-700 hover:text-purple-600 transition">
              Forum
            </Link>

            {isAuthenticated ? (
              <>
                {user?.role === 'student' && (
                  <>
                    <Link to="/dashboard/student" className="text-gray-700 hover:text-purple-600 transition">
                      Dashboard
                    </Link>
                    <Link to="/book-session" className="text-gray-700 hover:text-purple-600 transition">
                      Book Session
                    </Link>
                    <Link to="/support-groups" className="text-gray-700 hover:text-purple-600 transition">
                      Support Groups
                    </Link>
                  </>
                )}
                {user?.role === 'admin' && (
                  <Link to="/dashboard/admin" className="text-gray-700 hover:text-purple-600 transition">
                    Admin Panel
                  </Link>
                )}
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">{user?.email}</span>
                  <button
                    onClick={logout}
                    className="btn btn-primary text-sm"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="text-gray-700 hover:text-purple-600 transition">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <div className="w-6 h-0.5 bg-gray-800"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/resources"
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/forum"
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Forum
            </Link>

            {isAuthenticated ? (
              <>
                {user?.role === 'student' && (
                  <>
                    <Link
                      to="/dashboard/student"
                      className="block text-gray-700 hover:text-purple-600 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/book-session"
                      className="block text-gray-700 hover:text-purple-600 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book Session
                    </Link>
                    <Link
                      to="/support-groups"
                      className="block text-gray-700 hover:text-purple-600 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Support Groups
                    </Link>
                  </>
                )}
                {user?.role === 'admin' && (
                  <Link
                    to="/dashboard/admin"
                    className="block text-gray-700 hover:text-purple-600 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="btn btn-primary w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-purple-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block btn btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
