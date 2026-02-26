import React, { createContext, useContext, useState } from 'react';

/**
 * AuthContext - Manages authentication state across the application
 * Provides user info, login/logout functionality, and role-based access
 */
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Simulated login function
   * In real app, this would call backend API
   */
  const login = (email, password, role) => {
    // Mock authentication - normally you'd validate with backend
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      role, // 'student' or 'admin'
      name: email.split('@')[0],
      joinDate: new Date().toISOString(),
    };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  /**
   * Logout function - clears user data
   */
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  /**
   * Register function - creates new user
   */
  const register = (email, password, name, role) => {
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
      joinDate: new Date().toISOString(),
    };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  /**
   * Check if user has specific role
   */
  const hasRole = (requiredRole) => {
    return user?.role === requiredRole;
  };

  // Try to restore user from localStorage on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to restore user:', error);
      }
    }
  }, []);

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register,
    hasRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use AuthContext
 * Usage: const { user, login, logout } = useAuth();
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
