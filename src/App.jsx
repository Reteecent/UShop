import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './components/contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/NavBar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Account from './pages/Account';
import Help from './pages/Help';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';
import './App.css';
import { auth, db } from './lib/firebase'; // Import Firebase services

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="pb-16">
            <Routes>
              <Route path="/" element={<Home db={db} auth={auth}/>} />
              <Route path="/categories" element={<Categories db={db} auth={auth}/>} />
              <Route path="/account" element={
                <ProtectedRoute>
                  <Account db={db} auth={auth}/>
                </ProtectedRoute>
              } />
              <Route path="/help" element={<Help db={db} auth={auth}/>} />
              <Route path="/login" element={<Login db={db} auth={auth}/>} />
              <Route path="/register" element={<Register db={db} auth={auth}/>} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
        <Toaster position="top-center" />
      </AuthProvider>
    </Router>
  );
}





/**
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './components/contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/NavBar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Account from './pages/Account';
import Help from './pages/Help';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import { auth, db } from './lib/firebase'; 

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/account" element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              } />
              <Route path="/help" element={<Help />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
        <Toaster position="top-center" />
      </AuthProvider>
    </Router>
  );
}

**/


/**
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
// ... other imports ...
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/account" element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              } />
              <Route path="/update-profile" element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              } />
              <Route path="/help" element={<Help />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
        <Toaster position="top-center" />
      </AuthProvider>
    </Router>
  );
}
**/