// components/Navbar.jsx
import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="flex items-center p-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search on UShop"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <ShoppingCart className="ml-4 h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
}
