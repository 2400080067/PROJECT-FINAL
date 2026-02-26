# 🔌 API Integration Guide

This document outlines how to integrate the frontend application with a backend API.

---

## 📋 Overview

Currently, the application uses mock data and frontend-only state management. To integrate with a real backend, you'll need to:

1. Replace mock data with API calls
2. Update authentication flow
3. Implement proper error handling
4. Add API base URL configuration

---

## 🔑 Authentication Endpoints

### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe",
  "role": "student" // or "admin"
}

Response:
{
  "success": true,
  "data": {
    "id": "user_id_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "student",
    "token": "jwt_token_here"
  }
}
```

### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "role": "student"
}

Response:
{
  "success": true,
  "data": {
    "id": "user_id_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "student",
    "token": "jwt_token_here"
  }
}
```

### Logout
```
POST /api/auth/logout
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Get Current User
```
GET /api/auth/me
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": {
    "id": "user_id_123",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "student"
  }
}
```

---

## 📚 Resources Endpoints

### Get All Resources
```
GET /api/resources?category=anxiety&search=sleep
Authorization: Bearer {token} (optional)

Response:
{
  "success": true,
  "data": [
    {
      "id": "res_1",
      "title": "Understanding Anxiety",
      "description": "Learn about anxiety...",
      "category": "Anxiety",
      "icon": "😟",
      "content": "Full content here...",
      "createdAt": "2024-02-26T10:00:00Z"
    }
  ]
}
```

### Get Single Resource
```
GET /api/resources/:id
Authorization: Bearer {token} (optional)

Response:
{
  "success": true,
  "data": {
    "id": "res_1",
    "title": "Understanding Anxiety",
    "description": "Learn about anxiety...",
    "category": "Anxiety",
    "icon": "😟",
    "content": "Full detailed content...",
    "createdAt": "2024-02-26T10:00:00Z"
  }
}
```

### Create Resource (Admin Only)
```
POST /api/resources
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "New Resource",
  "description": "Description here",
  "category": "Stress",
  "icon": "🧘",
  "content": "Full content here"
}

Response:
{
  "success": true,
  "data": {
    "id": "res_new",
    "title": "New Resource",
    ...
  }
}
```

### Update Resource (Admin Only)
```
PUT /api/resources/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description",
  "category": "Stress",
  "icon": "🧘",
  "content": "Updated content"
}

Response:
{
  "success": true,
  "data": { ... }
}
```

### Delete Resource (Admin Only)
```
DELETE /api/resources/:id
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Resource deleted successfully"
}
```

---

## 📅 Session Booking Endpoints

### Get Available Therapists
```
GET /api/therapists?date=2024-03-15
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": [
    {
      "id": "therapist_1",
      "name": "Dr. Sarah Johnson",
      "specialization": "Anxiety & Stress",
      "experience": 10,
      "image": "url_to_image",
      "availability": [
        {
          "date": "2024-03-15",
          "times": ["09:00", "10:00", "14:00", "15:00"]
        }
      ]
    }
  ]
}
```

### Book Session
```
POST /api/sessions/book
Authorization: Bearer {token}
Content-Type: application/json

{
  "therapistId": "therapist_1",
  "therapistName": "Dr. Sarah Johnson",
  "sessionDate": "2024-03-15",
  "sessionTime": "14:00",
  "sessionType": "individual",
  "topic": "Anxiety management",
  "notes": "Additional notes here"
}

Response:
{
  "success": true,
  "data": {
    "id": "booking_123",
    "therapistId": "therapist_1",
    "userId": "user_123",
    "sessionDate": "2024-03-15",
    "sessionTime": "14:00",
    "status": "pending",
    "createdAt": "2024-02-26T10:00:00Z"
  }
}
```

### Get My Bookings (Student)
```
GET /api/sessions/my-bookings
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": [
    {
      "id": "booking_123",
      "therapist": "Dr. Sarah Johnson",
      "therapistId": "therapist_1",
      "date": "2024-03-15",
      "time": "14:00",
      "status": "confirmed",
      "sessionType": "individual"
    }
  ]
}
```

### Get All Bookings (Admin)
```
GET /api/sessions/all?status=pending
Authorization: Bearer {token} (Admin only)

Response:
{
  "success": true,
  "data": [
    {
      "id": "booking_123",
      "studentId": "user_123",
      "studentName": "John Doe",
      "therapist": "Dr. Sarah Johnson",
      "date": "2024-03-15",
      "time": "14:00",
      "status": "pending"
    }
  ]
}
```

### Update Booking Status (Admin)
```
PUT /api/sessions/:id/status
Authorization: Bearer {token} (Admin only)
Content-Type: application/json

{
  "status": "confirmed" // or "rejected", "cancelled"
}

Response:
{
  "success": true,
  "data": { ... }
}
```

### Cancel Booking (Student)
```
DELETE /api/sessions/:id
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Booking cancelled successfully"
}
```

---

## 🤝 Support Groups Endpoints

### Get All Support Groups
```
GET /api/support-groups?category=anxiety
Authorization: Bearer {token} (optional)

Response:
{
  "success": true,
  "data": [
    {
      "id": "group_1",
      "name": "Anxiety Support Group",
      "description": "Connect with others managing anxiety...",
      "category": "Anxiety",
      "members": 24,
      "nextMeeting": "2024-02-27T18:00:00Z",
      "details": "Weekly meetings every Thursday"
    }
  ]
}
```

### Join Support Group
```
POST /api/support-groups/:id/join
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Joined group successfully",
  "data": {
    "groupId": "group_1",
    "userId": "user_123",
    "joinedAt": "2024-02-26T10:00:00Z"
  }
}
```

### Leave Support Group
```
POST /api/support-groups/:id/leave
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Left group successfully"
}
```

### Get My Groups (Student)
```
GET /api/support-groups/my-groups
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": [
    {
      "id": "group_1",
      "name": "Anxiety Support Group",
      "members": 24,
      "category": "Anxiety"
    }
  ]
}
```

---

## 💬 Forum Endpoints

### Get All Posts
```
GET /api/forum/posts?category=stress&search=exam
Authorization: Bearer {token} (optional)

Response:
{
  "success": true,
  "data": [
    {
      "id": "post_1",
      "author": "John Doe",
      "authorId": "user_123",
      "title": "Tips for managing exam anxiety",
      "content": "I found these really helpful techniques...",
      "category": "Anxiety",
      "replies": 12,
      "createdAt": "2024-02-24T10:00:00Z",
      "likes": 5
    }
  ]
}
```

### Get Single Post with Replies
```
GET /api/forum/posts/:id
Authorization: Bearer {token} (optional)

Response:
{
  "success": true,
  "data": {
    "id": "post_1",
    "author": "John Doe",
    "title": "Tips for managing exam anxiety",
    "content": "Full content here...",
    "category": "Anxiety",
    "createdAt": "2024-02-24T10:00:00Z",
    "replies": [
      {
        "id": "reply_1",
        "author": "Jane Smith",
        "content": "Great tips! I also recommend...",
        "createdAt": "2024-02-24T11:00:00Z",
        "likes": 3
      }
    ]
  }
}
```

### Create Post
```
POST /api/forum/posts
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "How to deal with stress",
  "content": "I've been struggling with stress lately...",
  "category": "Stress"
}

Response:
{
  "success": true,
  "data": {
    "id": "post_new",
    "author": "John Doe",
    "title": "How to deal with stress",
    "content": "I've been struggling with stress lately...",
    "category": "Stress",
    "replies": 0,
    "createdAt": "2024-02-26T10:00:00Z"
  }
}
```

### Create Reply
```
POST /api/forum/posts/:id/replies
Authorization: Bearer {token}
Content-Type: application/json

{
  "content": "I have a similar experience..."
}

Response:
{
  "success": true,
  "data": {
    "id": "reply_new",
    "author": "Jane Smith",
    "content": "I have a similar experience...",
    "createdAt": "2024-02-26T10:00:00Z"
  }
}
```

### Delete Post (Author or Admin)
```
DELETE /api/forum/posts/:id
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Post deleted successfully"
}
```

---

## 🔧 Implementation Guide

### Step 1: Create API Configuration

Create `src/api/config.js`:
```javascript
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
```

### Step 2: Create API Service

Create `src/api/authService.js`:
```javascript
import apiClient from './config';

export const authService = {
  register: (email, password, name, role) =>
    apiClient.post('/auth/register', { email, password, name, role }),
  
  login: (email, password, role) =>
    apiClient.post('/auth/login', { email, password, role }),
  
  logout: () =>
    apiClient.post('/auth/logout'),
  
  getCurrentUser: () =>
    apiClient.get('/auth/me'),
};
```

### Step 3: Update AuthContext

Modify `src/context/AuthContext.jsx` to use API:
```javascript
const login = async (email, password, role) => {
  try {
    const response = await authService.login(email, password, role);
    const { data } = response.data;
    
    setUser(data);
    setIsAuthenticated(true);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
};
```

### Step 4: Create Resource Services

Create `src/api/resourceService.js`, `src/api/sessionService.js`, etc.

### Step 5: Update Components

Replace mock data with API calls in pages and components.

---

## 🔒 Error Handling

### Global Error Handler

```javascript
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

---

## 📝 Environment Variables

Create `.env` file:
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME="Mental Health Support Platform"
VITE_APP_VERSION=1.0.0
```

---

## 🧪 Testing API Integration

### Manual Testing Steps
1. Update API endpoints
2. Test each endpoint with Postman/Insomnia
3. Verify response formats
4. Handle error cases
5. Test edge cases

---

## 📚 References

- [REST API Best Practices](https://restfulapi.net/)
- [Axios Documentation](https://axios-http.com/)
- [JWT Authentication](https://jwt.io/)

---

**Last Updated**: February 2024
