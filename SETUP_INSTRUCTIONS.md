# 🚀 Setup Instructions - Mental Health Support Platform

## Quick Start Guide

This document provides step-by-step instructions to get the Mental Health Support Platform running on your machine.

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) - Check version: `npm --version`
- **Git** (optional, for version control)
- A code editor (VS Code recommended)

### Verify Installation

```bash
node --version
npm --version
```

---

## 📦 Installation Steps

### Step 1: Navigate to Project Directory

Open Command Prompt or PowerShell and navigate to your project folder:

```bash
cd "c:\Users\Bansi\Downloads\VENKAT KRISHANA"
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:
- React & React DOM
- React Router DOM
- Tailwind CSS
- Vite
- And other dependencies listed in `package.json`

**Wait Time**: This typically takes 2-5 minutes depending on your internet speed.

### Step 3: Verify Installation

Check that all dependencies were installed successfully:

```bash
npm list
```

You should see a tree of installed packages without errors.

---

## 🎯 Running the Application

### Start Development Server

Once dependencies are installed, start the development server:

```bash
npm run dev
```

You'll see output like:
```
  VITE v5.0.8  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

### Open in Browser

1. Copy the local URL (typically `http://localhost:5173`)
2. Open your web browser
3. Paste the URL in the address bar
4. Press Enter

The application should now be running!

---

## 🔑 Demo Access

You can log in with these test credentials:

### Student Account
```
Email: demo@example.com
Password: (any password works in demo mode)
Role: Student
```

### Admin Account
```
Email: admin@example.com
Password: (any password works in demo mode)
Role: Admin
```

---

## 🗂️ Project Structure Overview

```
FSAD-SDP-49-Mental-Health-Platform/
│
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── ResourceCard.jsx
│   │   ├── SupportGroupCard.jsx
│   │   ├── ForumPostCard.jsx
│   │   └── SessionBookingForm.jsx
│   │
│   ├── pages/              # Page components (full pages)
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── ResourcesPage.jsx
│   │   ├── BookSessionPage.jsx
│   │   ├── SupportGroupsPage.jsx
│   │   └── ForumPage.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx  # Authentication state management
│   │
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
│
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── README.md               # Full documentation
└── .gitignore             # Git ignore rules
```

---

## 📄 Available Commands

### Development
```bash
npm run dev
```
Start the development server with hot reload. Changes reflect instantly in browser.

### Production Build
```bash
npm run build
```
Creates optimized production build in `dist/` folder.

### Preview Build
```bash
npm run preview
```
Preview the production build locally.

---

## 🧭 Navigating the Application

### Public Pages (No Login Required)
- **Home** (`/`) - Landing page with introduction
- **Login** (`/login`) - User login page
- **Register** (`/register`) - User registration
- **Resources** (`/resources`) - Mental health resources
- **Forum** (`/forum`) - Community forum

### Student Pages (Login Required)
- **Student Dashboard** (`/dashboard/student`) - Personal dashboard
- **Book Session** (`/book-session`) - Schedule therapy sessions
- **Support Groups** (`/support-groups`) - Join support groups

### Admin Pages (Login Required + Admin Role)
- **Admin Dashboard** (`/dashboard/admin`) - Admin panel

---

## 🎨 Features Overview

### ✨ Home Page
- Modern hero section
- Feature highlights
- Mental health awareness content
- Call-to-action buttons

### 🔐 Authentication
- User registration with validation
- Role-based login (Student/Admin)
- Form validation and error messages
- Session persistence

### 📚 Resources
- Searchable resource library
- Category filtering
- Responsive grid layout
- Resource cards with details

### 📅 Therapy Sessions
- Browse available therapists
- Book sessions with form validation
- Session type selection
- Automatic confirmation

### 🤝 Support Groups
- Browse all support groups
- Join/leave functionality
- Member count display
- Category filtering

### 💬 Community Forum
- Create and view posts
- Category organization
- Reply counting
- Forum guidelines

### 👨‍💼 Admin Panel
- Resource management (Add/Edit/Delete)
- Session booking approval
- Support group monitoring
- Platform statistics

---

## 🔧 Troubleshooting

### Issue: Port 5173 Already in Use

**Solution**: Use a different port
```bash
npm run dev -- --port 3000
```

### Issue: Dependencies Not Installing

**Solution**: Clear cache and reinstall
```bash
npm cache clean --force
npm install
```

### Issue: Vite Server Won't Start

**Solution**: Check Node version
```bash
node --version  # Should be v14+
npm install -g npm@latest
```

### Issue: Pages Not Loading

**Solution**: Hard refresh browser (Ctrl+Shift+R)

### Issue: Authentication Not Working

**Solution**: Clear localStorage
```javascript
// In browser console
localStorage.clear()
// Then refresh the page
```

---

## 🚀 Deploying to Production

### Option 1: Netlify

1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your app is live!

### Option 2: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your app is live!

### Option 3: GitHub Pages

1. Build: `npm run build`
2. Push `dist` folder to GitHub
3. Enable GitHub Pages in repository settings

---

## 💡 Tips & Best Practices

### Development Tips
- Use VS Code extensions: ESLint, Prettier, Tailwind CSS IntelliSense
- Keep browser DevTools open (F12) to debug
- Use React DevTools browser extension
- Check console for errors and warnings

### Code Organization
- Keep components small and reusable
- Use meaningful component names
- Add comments for complex logic
- Follow consistent file naming

### Performance
- Use React.memo for component optimization
- Implement lazy loading for routes
- Optimize images
- Monitor bundle size

---

## 📚 Learning Resources

### React Documentation
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)

### Styling
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)

### Vite
- [Vite Docs](https://vitejs.dev)
- [Vite Configuration](https://vitejs.dev/config)

---

## 🐛 Reporting Issues

If you encounter bugs or issues:

1. Check the browser console (F12)
2. Check the terminal output
3. Try clearing cache and reinstalling
4. Review the code comments for guidance
5. Check README.md for more details

---

## 📝 Notes

- This is a **frontend-only** application
- All data is stored in browser (localStorage)
- Perfect for prototyping and learning
- Ready for backend integration

---

## 🎓 Project Info

**Project Name**: FSAD-SDP-49 Mental Health Support Platform

**Tech Stack**: 
- React.js 18
- Vite 5
- Tailwind CSS 3
- React Router v6

**Status**: ✅ Ready for Production

**Last Updated**: February 2024

---

## ✅ Verification Checklist

- [ ] Node.js and npm installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Application visible in browser
- [ ] Can log in with demo credentials
- [ ] All pages accessible
- [ ] Responsive design works on mobile
- [ ] No console errors

---

## 🎉 You're All Set!

Your Mental Health Support Platform is now ready to use. Start exploring the features and enjoy developing!

**Next Steps:**
1. Explore the application
2. Try logging in as Student and Admin
3. Test all features
4. Customize as needed
5. Build and deploy!

---

**Happy Coding! 🚀**

For detailed documentation, see **README.md**
