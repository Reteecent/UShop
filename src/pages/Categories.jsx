// pages/Categories.jsx
import React from 'react';

export default function Categories() {
  const categories = [
    { id: 1, name: 'Home & Office', icon: '🏠' },
    { id: 2, name: 'Phones & Tablets', icon: '📱' },
    { id: 3, name: 'Fashion', icon: '👔' },
    { id: 4, name: 'Health & Beauty', icon: '💄' },
    { id: 5, name: 'Electronics', icon: '🔌' },
    { id: 6, name: 'Computing', icon: '💻' },
    { id: 7, name: 'Grocery', icon: '🛒' },
    { id: 8, name: 'Gaming', icon: '🎮' }
  ];

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="grid gap-4">
        {categories.map(category => (
          <div
            key={category.id}
            className="flex items-center p-4 bg-white rounded-lg shadow"
          >
            <span className="text-2xl mr-4">{category.icon}</span>
            <span className="text-gray-800">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}