// components/BottomNav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, User, HelpCircle } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/categories', icon: LayoutGrid, label: 'Categories' },
    { path: '/account', icon: User, label: 'Account' },
    { path: '/help', icon: HelpCircle, label: 'Help' }
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t">
      <div className="flex justify-around items-center">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center p-2 ${
              location.pathname === path ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
