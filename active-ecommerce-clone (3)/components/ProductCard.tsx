
import React from 'react';
import { Product } from '../types';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-xl shadow-sm border p-4 group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
      style={{ perspective: '1000px' }}
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.tag && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">({product.reviews})</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-black text-blue-600">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-[10px] text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>

      <button className="mt-4 w-full border border-blue-600 text-blue-600 text-xs font-bold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100">
        Quick View
      </button>
    </div>
  );
};

export default ProductCard;
