
import React from 'react';
import { FEATURED_PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const AllProducts: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
          <div>
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Filter size={18} /> Categories
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.map(cat => (
                <li key={cat.id} className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition-colors flex items-center justify-between">
                  {cat.name}
                  <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">12</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t">
            <h3 className="font-bold text-gray-800 mb-4">Price Range</h3>
            <div className="space-y-4">
              <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-xs font-bold text-gray-500">
                <span>$0</span>
                <span>$5000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8 pb-4 border-b">
            <h2 className="text-2xl font-black text-gray-800">All Products</h2>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
                <SlidersHorizontal size={16} /> Sort by: Newest
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...FEATURED_PRODUCTS, ...FEATURED_PRODUCTS, ...FEATURED_PRODUCTS].map((prod, i) => (
              <ProductCard key={prod.id + i} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
