import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import StudentLayout from './layouts/StudentLayout';
import AdminLayout from './layouts/AdminLayout';

// Components
import { ProtectedRoute } from './components/ProtectedRoute';

// Pages
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { ResourcesPage } from './pages/ResourcesPage';
import { BookSessionPage } from './pages/BookSessionPage';
import { SupportGroupsPage } from './pages/SupportGroupsPage';
import { ForumPage } from './pages/ForumPage';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes wrapped by main layout */}
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <LoginPage />
              </MainLayout>
            }
          />
          <Route
            path="/register"
            element={
              <MainLayout>
                <RegisterPage />
              </MainLayout>
            }
          />
          <Route
            path="/resources"
            element={
              <MainLayout>
                <ResourcesPage />
              </MainLayout>
            }
          />
          <Route
            path="/forum"
            element={
              <MainLayout>
                <ForumPage />
              </MainLayout>
            }
          />

          {/* Student routes */}
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute requiredRole="student">
                <StudentLayout>
                  <StudentDashboard />
                </StudentLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/book-session"
            element={
              <ProtectedRoute requiredRole="student">
                <StudentLayout>
                  <BookSessionPage />
                </StudentLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute requiredRole="student">
                <StudentLayout>
                  <div>My Appointments (coming soon)</div>
                </StudentLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/support-groups"
            element={
              <ProtectedRoute requiredRole="student">
                <StudentLayout>
                  <SupportGroupsPage />
                </StudentLayout>
              </ProtectedRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
