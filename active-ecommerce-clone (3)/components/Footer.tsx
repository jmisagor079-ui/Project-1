
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1c23] text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Shopify_logo.2.svg" className="w-6 h-6 invert" alt="logo" />
              </div>
              <div className="leading-tight">
                <span className="text-[10px] font-bold block text-white/50">THE CORE</span>
                <span className="text-lg font-black text-white tracking-tighter">Active eCommerce</span>
              </div>
            </div>
            <p className="text-sm mb-6">Complete system for your eCommerce business</p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div>
              <h4 className="text-white text-xs font-bold uppercase mb-4 tracking-widest">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-[#3b5998] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Facebook size={18} /></a>
                <a href="#" className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Twitter size={18} /></a>
                <a href="#" className="w-9 h-9 bg-[#c13584] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Instagram size={18} /></a>
                <a href="#" className="w-9 h-9 bg-[#ff0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Youtube size={18} /></a>
                <a href="#" className="w-9 h-9 bg-[#0077b5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-white text-xs font-bold uppercase mb-4 tracking-widest">Mobile Apps</h4>
              <div className="flex gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-10 cursor-pointer" alt="play store" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-10 cursor-pointer" alt="app store" />
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-gray-800 pt-12 mb-12">
          <div>
            <h4 className="text-white text-xs font-bold uppercase mb-6 tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Support Policy Page</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Return Policy Page</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy Page</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Seller Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Term Conditions Page</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase mb-6 tracking-widest">Contacts</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-gray-500 mb-1">Address</span>
                <span className="text-white">Demo</span>
              </li>
              <li>
                <span className="block text-gray-500 mb-1">Phone</span>
                <span className="text-white">+01 234 567 890</span>
              </li>
              <li>
                <span className="block text-gray-500 mb-1">Email</span>
                <span className="text-blue-500">yourmail@email.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase mb-6 tracking-widest">My Account</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Login</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Order History</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">My Wishlist</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Be an affiliate partner</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase mb-6 tracking-widest">Seller Zone</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Become A Seller <span className="text-[#ff5c00] ml-1">Apply Now</span></a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Login to Seller Panel</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Download Seller App</a></li>
            </ul>
            <div className="mt-8">
              <h4 className="text-white text-xs font-bold uppercase mb-6 tracking-widest">Delivery Boy</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Login to Delivery Boy Panel</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Download Delivery Boy App</a></li>
              </ul>
            </div>
          </div>
          <div>
            {/* Empty for spacing or secondary info */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">Active eCommerce CMS 2021</p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 opacity-70" alt="paypal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 opacity-70" alt="visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 opacity-70" alt="mastercard" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
