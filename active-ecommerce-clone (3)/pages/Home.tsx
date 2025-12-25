
import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  CATEGORIES, 
  FEATURED_PRODUCTS, 
  DIGITAL_PRODUCTS, 
  CLASSIFIED_ADS, 
  ELECTRIC_ITEMS, 
  FOOD_PRODUCTS, 
  HOME_LIFESTYLE,
  BANNERS 
} from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 341, hours: 8, minutes: 33, seconds: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const SectionHeader = ({ title, color = "blue", onViewAll }: { title: string, color?: string, onViewAll: () => void }) => (
    <div className="flex items-center justify-between mb-8 px-4">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-8 bg-${color}-600 rounded-full`}></div>
        <h2 className="text-2xl font-black text-gray-800">{title}</h2>
      </div>
      <button onClick={onViewAll} className={`text-sm font-bold text-${color}-600 hover:underline`}>View All</button>
    </div>
  );

  return (
    <main className="space-y-12 pb-24">
      {/* Hero Grid Section */}
      <section className="container mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Hero: Unleash Your Brand */}
          <div className="lg:col-span-4 relative overflow-hidden rounded-xl bg-[#e5e5e5] h-[580px] group cursor-pointer shadow-md">
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 alt="Model" 
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-12 left-8 z-10">
              <div className="relative transform -rotate-12 origin-left">
                <h1 className="text-5xl font-black text-gray-800 leading-none drop-shadow-sm uppercase">
                  UNLEASH YOUR<br/>
                  <span className="text-white mix-blend-difference">BRAND</span>
                </h1>
              </div>
              <button className="mt-8 bg-black text-white px-6 py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Explore...
              </button>
            </div>
          </div>

          {/* Right Top Nested Grid */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[280px]">
              {/* End of Season Countdown */}
              <div className="bg-[#007bff] rounded-xl relative overflow-hidden p-6 text-white flex flex-col items-center justify-center text-center shadow-lg">
                 <div className="absolute inset-0 z-0 opacity-20">
                   <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                 </div>
                 <div className="relative z-10">
                   <h2 className="text-3xl font-black mb-1 drop-shadow-md">End of Season</h2>
                   <p className="text-[10px] font-bold opacity-80 mb-6 uppercase tracking-wider">For limited time in Flash Sale</p>
                   
                   <div className="flex gap-2">
                     {[
                       { val: timeLeft.days, label: 'DAY' },
                       { val: timeLeft.hours, label: 'HRS' },
                       { val: timeLeft.minutes, label: 'MIN' },
                       { val: timeLeft.seconds, label: 'SEC' }
                     ].map((t, i) => (
                       <div key={i} className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl rounded-full w-12 h-12 border border-white/30 shadow-inner">
                         <span className="text-sm font-black">{t.val.toString().padStart(2, '0')}</span>
                         <span className="text-[7px] font-bold">{t.label}</span>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>

              {/* Enhanced Hot Categories */}
              <div className="bg-white rounded-xl border p-5 shadow-sm overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg animate-pulse">🔥</span>
                  <h3 className="font-bold text-gray-800 text-sm tracking-tight">Hot Categories</h3>
                </div>
                <div className="grid grid-cols-4 gap-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id} className="flex flex-col items-center text-center group cursor-pointer" onClick={() => navigate('/products')}>
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden mb-2 group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                        <img src={cat.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={cat.name} />
                      </div>
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors line-clamp-2">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Refined Featured Products strip */}
            <div className="bg-white rounded-xl border p-6 shadow-sm flex-1 flex flex-col relative overflow-hidden group/main">
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                  <h3 className="font-black text-gray-900 text-base uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
                    Featured Products
                  </h3>
                  <span className="text-[9px] font-bold text-gray-400 uppercase mt-0.5">Top picks of the week</span>
                </div>
                <button onClick={() => navigate('/products')} className="group flex items-center gap-3 text-[10px] font-black text-gray-400 hover:text-blue-600 transition-all uppercase px-4 py-2 bg-gray-50 rounded-full hover:bg-blue-50">
                  Shop All Products <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors transform group-hover:translate-x-1"><ChevronRight size={14} /></div>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 flex-1">
                {FEATURED_PRODUCTS.slice(0, 3).map(prod => (
                  <div key={prod.id} className="flex items-center gap-6 group cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition-all duration-500" onClick={() => navigate(`/product/${prod.id}`)}>
                    {/* Larger and Sexier Picture Container */}
                    <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white bg-white shadow-lg perspective-1000 group-hover:shadow-2xl group-hover:shadow-blue-200 transition-all duration-700 relative">
                      <img src={prod.image} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                          <ShoppingBag size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <div className="mb-2">
                        <span className="text-[8px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-widest mb-2 inline-block">Trending</span>
                        <h4 className="text-[13px] font-black text-gray-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">{prod.name}</h4>
                      </div>
                      
                      <div className="flex flex-col gap-0.5 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600 font-black text-lg tracking-tighter">${prod.price.toFixed(2)}</span>
                          <span className="text-[10px] text-gray-300 line-through font-bold">$120.00</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(star => <div key={star} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>)}
                          </div>
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Verified Choice</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Digital Products Section */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Digital & Gaming Store" color="purple" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {DIGITAL_PRODUCTS.map(prod => (
            <div 
              key={prod.id} 
              className="bg-white rounded-2xl p-4 border group cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 perspective-1000"
              onClick={() => navigate(`/product/${prod.id}`)}
            >
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative">
                <img src={prod.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-bold">DIGITAL</div>
              </div>
              <h3 className="text-xs font-bold text-gray-800 mb-2 line-clamp-2 h-8">{prod.name}</h3>
              <div className="flex justify-between items-center">
                 <p className="text-blue-600 font-black text-sm">${prod.price.toFixed(2)}</p>
                 <button className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase group-hover:bg-blue-600 group-hover:text-white transition-all">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Top Tech Picks */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Top Tech Picks" color="blue" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {FEATURED_PRODUCTS.map((prod, i) => (
            <ProductCard key={prod.id + i} product={prod} />
          ))}
        </div>
      </section>

      {/* 3. Classified Ads Row */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Classified Ads" color="orange" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {CLASSIFIED_ADS.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* Marketing Row */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {BANNERS.map(ban => (
          <div key={ban.id} className={`${ban.color} rounded-2xl p-8 relative overflow-hidden group h-64 flex flex-col justify-center cursor-pointer`} onClick={() => navigate('/products')}>
            <div className="absolute right-0 top-0 w-1/2 h-full transform transition-transform group-hover:scale-110">
              <img src={ban.image} className="w-full h-full object-cover mix-blend-multiply opacity-50" />
            </div>
            <div className="relative z-10 max-w-[60%]">
              <h2 className="text-2xl font-black text-gray-900 mb-2 leading-tight uppercase">{ban.title}</h2>
              <p className="text-xs font-bold text-gray-500 mb-6">{ban.subtitle}</p>
              <button className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-lg shadow-sm hover:shadow-lg transition-all">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Electric Item Section */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Electric Items" color="green" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {ELECTRIC_ITEMS.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 5. Food Products Section */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Food Products" color="amber" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {FOOD_PRODUCTS.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 6. Home & Lifestyle Section */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Home & Lifestyle" color="cyan" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {HOME_LIFESTYLE.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* Vendor Section */}
      <section className="container mx-auto px-4">
        <div className="bg-[#1a1c23] rounded-3xl p-12 text-white relative overflow-hidden">
           <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block">
             <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover" />
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-4">1000s of <span className="underline decoration-blue-600 underline-offset-8">Shops</span> with <span className="underline decoration-orange-500 underline-offset-8">their best</span> for <span className="italic">you</span></h2>
              <p className="text-gray-400 max-w-xl mb-8">All of our sellers are passionate to bring new trends and quality products directly to your doorstep with guaranteed authenticity.</p>
              <button 
                onClick={() => navigate('/products')}
                className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Click to visit the best... <ArrowRight size={20} />
              </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
