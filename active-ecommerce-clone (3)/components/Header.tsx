
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate('/products');
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-500 border-b lg:flex hidden">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> Call (0)</span>
        </div>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-blue-600">Login</Link>
          <Link to="#" className="hover:text-blue-600">Registration</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold block">THE CORE</span>
            <span className="text-lg font-black text-blue-600 tracking-tighter">Active eCommerce</span>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-2xl relative lg:block hidden">
          <input
            type="text"
            placeholder="I am shopping for..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-full py-2.5 px-6 outline-none focus:border-blue-500 transition-all text-sm bg-gray-50"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
            <Search size={20} />
          </button>
        </form>

        <div className="flex items-center gap-6">
          <button className="lg:hidden text-gray-600"><Search size={24} /></button>
          <div className="flex flex-col items-center cursor-pointer group">
            <User size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            <span className="text-[10px] uppercase font-bold text-gray-400">Account</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <div className="relative">
              <ShoppingCart size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
            <div className="lg:flex flex-col hidden">
              <span className="text-[10px] uppercase font-bold text-gray-400">Cart</span>
              <span className="text-[10px] font-bold">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-t lg:block hidden">
        <div className="container mx-auto px-4 flex items-center h-12">
          <button className="flex items-center gap-2 bg-gray-100 h-full px-4 text-sm font-bold border-r hover:bg-gray-200 transition-colors">
            <Menu size={18} />
          </button>
          <div className="flex items-center gap-8 ml-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Flash Sale</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Blogs</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Brands</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors text-blue-600">Categories</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Sellers</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Contact us</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Preorder</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
