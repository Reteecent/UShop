// pages/Help.jsx
import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';

export default function Help() {
  const helpItems = [
    { id: 1, title: 'FAQ', icon: '❓' },
    { id: 2, title: 'Privacy Policy', icon: '🔒' },
    { id: 3, title: 'Push Notifications', icon: '🔔' },
    { id: 4, title: 'Language', icon: '🌐' }
  ];

  return (
    <div className="container mx-auto px-4 pt-20">
      <button className="w-full bg-orange-500 text-white p-4 rounded-lg mb-4 flex items-center justify-center">
        <MessageCircle className="mr-2" />
        Start Live Chat
      </button>

      <div className="bg-white rounded-lg shadow">
        {helpItems.map(item => (
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