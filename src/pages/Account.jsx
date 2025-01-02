// src/pages/Account.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useAuth } from '../components/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const menuItems = [
    { id: 1, title: 'Orders', icon: '📦' },
    { id: 2, title: 'Inbox', icon: '📧' },
    { id: 3, title: 'Ratings & Reviews', icon: '⭐' },
    { id: 4, title: 'Vouchers', icon: '🎟️' },
    { id: 5, title: 'Saved Items', icon: '❤️' },
    { id: 6, title: 'Recently Viewed', icon: '🕒' }
  ];
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout: ', error);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="bg-white rounded-lg shadow mb-4 p-4">
        <h2 className="text-xl mb-2">Welcome!</h2>
        {user ? (
          <button onClick={handleLogout} className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}




/**
// pages/Account.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useAuth } from '../components/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const menuItems = [
    { id: 1, title: 'Orders', icon: '📦' },
    { id: 2, title: 'Inbox', icon: '📧' },
    { id: 3, title: 'Ratings & Reviews', icon: '⭐' },
    { id: 4, title: 'Vouchers', icon: '🎟️' },
    { id: 5, title: 'Saved Items', icon: '❤️' },
    { id: 6, title: 'Recently Viewed', icon: '🕒' }
  ];
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout: ', error);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="bg-white rounded-lg shadow mb-4 p-4">
        <h2 className="text-xl mb-2">Welcome!</h2>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Login
        </button>
        <button onClick={handleLogout} className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
**/




/** // pages/Account.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { useAuth } from '../components/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const menuItems = [
    { id: 1, title: 'Orders', icon: '📦' },
    { id: 2, title: 'Inbox', icon: '📧' },
    { id: 3, title: 'Ratings & Reviews', icon: '⭐' },
    { id: 4, title: 'Vouchers', icon: '🎟️' },
    { id: 5, title: 'Saved Items', icon: '❤️' },
    { id: 6, title: 'Recently Viewed', icon: '🕒' }
  ];

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="bg-white rounded-lg shadow mb-4 p-4">
        <h2 className="text-xl mb-2">Welcome!</h2>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
**/



/** 
// src/pages/Account.jsx
import React from 'react';
import { useAuth } from '../components/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout: ', error);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Account</h2>
        <button
          onClick={handleLogout}
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
**/