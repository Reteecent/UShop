// pages/Account.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

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