// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Account from './pages/Account';
import Help from './pages/Help';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="pb-16"> {/* Add padding bottom for bottom nav */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/account" element={<Account />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}