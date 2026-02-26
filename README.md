# FSAD-SDP-49 Mental Health Support Platform

A modern, responsive React.js web application designed to provide mental health support and resources for students. This frontend-only application features therapy session booking, support groups, resource browsing, and a community forum.

## 🌟 Features

### 1. **Authentication & User Roles**
- Login and registration with role-based access (Student/Admin)
- Context API for authentication state management
- Protected routes based on user roles
- Session persistence using localStorage

### 2. **Student Features**
- **Dashboard**: View upcoming therapy sessions and joined support groups
- **Therapy Sessions**: Book sessions with available therapists
- **Support Groups**: Browse and join support groups by category
- **Resources**: Access mental health articles and guides
- **Forum**: Participate in community discussions

### 3. **Admin Features**
- **Dashboard**: Manage platform content and user activities
- **Resource Management**: Add, edit, and delete mental health resources
- **Session Bookings**: Review and approve/reject session bookings
- **Support Groups**: Monitor and manage support group activity

### 4. **Additional Pages**
- **Home Page**: Mental health awareness and platform introduction
- **Resources Page**: Searchable and filterable resource library
- **Support Groups Page**: Browse available support groups
- **Forum Page**: Community discussion board with categories
- **Book Session Page**: Dedicated therapy session booking interface

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Dynamic navigation bar
│   ├── Footer.jsx              # Footer component
│   ├── ProtectedRoute.jsx       # Route protection wrapper
│   ├── ResourceCard.jsx         # Resource card component
│   ├── SupportGroupCard.jsx     # Support group card component
│   ├── ForumPostCard.jsx        # Forum post card component
│   └── SessionBookingForm.jsx   # Booking form component
├── pages/
│   ├── HomePage.jsx             # Landing page
│   ├── LoginPage.jsx            # User login
│   ├── RegisterPage.jsx         # User registration
│   ├── StudentDashboard.jsx     # Student dashboard
│   ├── AdminDashboard.jsx       # Admin dashboard
│   ├── ResourcesPage.jsx        # Resources library
│   ├── BookSessionPage.jsx      # Session booking
│   ├── SupportGroupsPage.jsx    # Support groups browser
│   └── ForumPage.jsx            # Community forum
├── context/
│   └── AuthContext.jsx          # Authentication context
├── App.jsx                      # Main app component & routing
├── main.jsx                     # React entry point
└── index.css                    # Global styles & Tailwind
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project directory**:
   ```bash
   cd "c:\Users\Bansi\Downloads\VENKAT KRISHANA"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - The application will typically run at `http://localhost:5173`
   - Check terminal output for the exact URL

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🎨 Design & Styling

### Color Scheme
- **Primary**: Light Blue (`#e0f4ff`) - Calming, peaceful
- **Secondary**: Lavender (`#f3e8ff`) - Soft, gentle
- **Accent**: Purple (`#8b7fb8`) - Professional, trustworthy
- **Dark**: Charcoal (`#1f2937`) - Text color
- **Light**: Off-white (`#f9fafb`) - Background

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexible grid layouts
- Touch-friendly buttons and navigation

## 🔐 Authentication System

### Demo Credentials
```
Email: demo@example.com
Password: demo123
(Any password works in this frontend demo)
```

### Roles
- **Student**: Access personal dashboard, book sessions, join groups
- **Admin**: Manage resources, approve bookings, oversee platform

## 🛠️ Tech Stack

- **React.js** - UI framework
- **Vite** - Build tool (fast development & production builds)
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management
- **Axios** - HTTP client (for mock API calls)

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.22.0",
  "axios": "^1.6.5"
}
```

## 🌐 Features in Detail

### 1. Home Page
- Hero section with call-to-action
- Why Choose Us section with 3 key features
- Mental health awareness content
- Platform statistics
- Responsive navigation buttons

### 2. Authentication Pages
- Email validation
- Password strength requirements (min 6 characters)
- Role selection (Student/Admin)
- Form error handling
- Terms and conditions acceptance

### 3. Student Dashboard
- Quick stats (sessions, groups, resources)
- Upcoming sessions management
- Session booking form
- Active support groups sidebar
- Cancel/leave functionality

### 4. Admin Dashboard
- Platform statistics
- Resource management (CRUD operations)
- Session booking approval/rejection
- Support group monitoring
- Data visualization cards

### 5. Resources Page
- Search functionality
- Category filtering
- Responsive grid layout
- Individual resource cards
- Sample resource data

### 6. Book Session Page
- Therapist directory with specializations
- Session type selection (individual, couple, family, group)
- Date and time selection
- Topic input
- Form validation
- Session notes support

### 7. Support Groups Page
- Browse all support groups
- Join/leave functionality
- Category filtering
- Group details (members, next meeting)
- Benefits section

### 8. Forum Page
- Create new posts (authenticated users)
- Category filtering
- View post threads
- Display post metrics (replies, date)
- Forum guidelines
- Character limits on posts

## 🔍 Key Components

### ProtectedRoute
Restricts access to authenticated users and optionally validates user roles.

```jsx
<ProtectedRoute requiredRole="student">
  <StudentDashboard />
</ProtectedRoute>
```

### AuthContext
Provides authentication state and methods throughout the app.

```jsx
const { user, isAuthenticated, login, logout, register, hasRole } = useAuth();
```

### Form Validation
All forms include client-side validation:
- Required field checking
- Email format validation
- Password strength validation
- Matching password confirmation
- Custom error messages

## 🎯 Usage Examples

### Login as Student
1. Click "Sign In" or navigate to `/login`
2. Select "Student" role
3. Enter email and password (any password works)
4. Access student dashboard and features

### Login as Admin
1. Click "Sign In" or navigate to `/login`
2. Select "Admin" role
3. Enter email and password
4. Access admin dashboard to manage resources

### Book a Session (Students)
1. Navigate to "Book Session"
2. Select therapist from available options
3. Choose date and time
4. Enter main topic
5. Add optional notes
6. Click "Book Session"

### Manage Resources (Admins)
1. Go to Admin Dashboard
2. Click "Add Resource"
3. Fill in resource details
4. Click "Save" to add to platform
5. Delete resources using the delete button

## 🚧 Notes for Production

This is a **frontend-only** application. For production deployment:

1. **API Integration**:
   - Replace mock functions with real API calls
   - Update Axios configurations for backend endpoints
   - Implement proper error handling

2. **Authentication**:
   - Integrate with real authentication provider
   - Use JWT tokens instead of localStorage
   - Implement token refresh logic

3. **Data Persistence**:
   - Connect to database (MongoDB, PostgreSQL, etc.)
   - Implement proper data validation on backend
   - Add security measures (CORS, rate limiting)

4. **Deployment**:
   - Build: `npm run build`
   - Deploy to Vercel, Netlify, or your preferred hosting
   - Set up environment variables
   - Configure HTTPS

## 📝 Form Validation Rules

### Login/Register
- **Email**: Valid email format required
- **Password**: Minimum 6 characters
- **Name**: Non-empty string
- **Terms**: Must agree to terms (Register only)

### Session Booking
- **Therapist**: Required selection
- **Date**: Valid future date
- **Time**: Required time slot
- **Topic**: Non-empty description

### Forum Post
- **Title**: 1-100 characters
- **Content**: 1-1000 characters
- **Category**: Required selection

## 🎓 Learning Resources

### Key Concepts Demonstrated
- React Hooks (useState, useEffect, useContext)
- React Router for client-side routing
- Context API for state management
- Form handling and validation
- Responsive design with Tailwind CSS
- Component composition and reusability
- Protected routes and role-based access control

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Dependencies Installation Failed
```bash
npm cache clean --force
npm install
```

### Build Fails
```bash
npm run build
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for educational purposes as part of the FSAD-SDP-49 assignment.

## 👥 Author

Created as a student project for mental health awareness and support platform development.

---

**Last Updated**: February 2024

For questions or support, please refer to the code comments throughout the project or contact the development team.
