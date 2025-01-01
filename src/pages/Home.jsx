// pages/Home.jsx
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 pt-20">
      {/* Flash Sale Banner */}
      <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Flash Sale</h2>
          <div className="text-sm">Time Left: 16h:34m:20s</div>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain mb-2"
              />
              <h3 className="text-sm font-medium truncate">{product.title}</h3>
              <p className="text-orange-500 font-bold">₦{product.price * 750}</p>
              <div className="mt-2 text-xs text-gray-500">
                {Math.floor(Math.random() * 1000)} items left
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}