
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../constants';
import { Star, Heart, Share2, ShoppingCart, ShieldCheck } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = FEATURED_PRODUCTS.find(p => p.id === id) || FEATURED_PRODUCTS[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex text-xs text-gray-400 gap-2 mb-8 uppercase font-bold tracking-wider">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-blue-600">Products</Link>
        <span>/</span>
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="bg-white rounded-3xl shadow-sm border p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border group">
              <img 
                src={product.image} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                alt={product.name} 
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border cursor-pointer hover:border-blue-600 transition-colors">
                  <img src={`https://picsum.photos/seed/sub${i}/200/200`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                {product.category}
              </span>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="p-2 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <h1 className="text-3xl font-black text-gray-800 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-bold">({product.reviews} Customer Reviews)</span>
              <span className="text-sm text-green-500 font-bold">• In Stock</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
               <div className="flex items-baseline gap-4 mb-2">
                 <span className="text-4xl font-black text-blue-600">${product.price.toFixed(2)}</span>
                 <span className="text-lg text-gray-400 line-through">$120.00</span>
                 <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">-45% OFF</span>
               </div>
               <p className="text-xs text-gray-500 italic">Inclusive of all taxes</p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-black text-gray-800 mb-4 uppercase">Quantity</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 font-bold"
                  >-</button>
                  <input type="text" readOnly value={quantity} className="w-12 text-center font-bold outline-none" />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 font-bold"
                  >+</button>
                </div>
                <p className="text-xs text-gray-400 font-bold">(Only 10 units left!)</p>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <button className="flex-1 bg-blue-600 text-white font-black py-4 rounded-xl shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                <ShoppingCart size={20} /> ADD TO CART
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 font-black py-4 rounded-xl hover:bg-blue-50 transition-all">
                BUY NOW
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-gray-500 border-t pt-8">
              <ShieldCheck className="text-green-500" size={16} />
              <span className="font-bold">Safe and Secure Payment. Easy Returns within 30 days.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
