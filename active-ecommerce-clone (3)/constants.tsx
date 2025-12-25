
import { Product, Category, Banner } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Women Clothing &...', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=200', icon: '👗' },
  { id: '2', name: 'Automobile &...', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=200', icon: '🚗' },
  { id: '3', name: 'Sports & outdoor', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bc3575?auto=format&fit=crop&q=80&w=200', icon: '⚽' },
  { id: '4', name: 'Beauty, Health & Hair', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=200', icon: '💄' },
  { id: '5', name: 'Men Clothing &...', image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=200', icon: '👕' },
  { id: '6', name: 'Kids & toy', image: 'https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&q=80&w=200', icon: '🧸' },
  { id: '7', name: 'Jewelry & Watches', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=200', icon: '⌚' },
  { id: '8', name: 'Home Improvemen...', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=200', icon: '🛠️' },
];

export const FEATURED_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Like Dreams Large Sherpa Tote Bag, Inner...', price: 72.12, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400', category: 'Accessories', rating: 4, reviews: 12 },
  { id: 'p2', name: 'Insight Cosmetics 3D Highlighter', price: 60.00, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400', category: 'Beauty', rating: 5, reviews: 45 },
  { id: 'p3', name: "Women's Plain Dress One Piece For Girls", price: 49.00, image: 'https://images.unsplash.com/photo-1618932260643-eee4a3f7d745?auto=format&fit=crop&q=80&w=400', category: 'Clothing', rating: 4, reviews: 88 },
];

export const DIGITAL_PRODUCTS: Product[] = [
  { id: 'd1', name: 'Netflix Premium 4K UHD Subscription (1 Month)', price: 15.99, image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=400', category: 'Subscription', rating: 5, reviews: 250, tag: 'DIGITAL' },
  { id: 'd2', name: 'Spotify Family Premium 12 Month Code', price: 99.00, image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400', category: 'Music', rating: 4, reviews: 180, tag: 'INSTANT' },
  { id: 'd3', name: 'Amazon Prime Gift Card $50 Value', price: 50.00, image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78a9db1?auto=format&fit=crop&q=80&w=400', category: 'Card', rating: 5, reviews: 95 },
  { id: 'd4', name: 'Steam Wallet Card Global Key', price: 20.00, image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400', category: 'Gaming', rating: 4, reviews: 320 },
];

export const CLASSIFIED_ADS: Product[] = [
  { id: 'c1', name: 'Used MacBook Pro 2021 M1 Max 32GB RAM', price: 1800.00, image: 'https://images.unsplash.com/photo-1517336712461-481bf771df4b?auto=format&fit=crop&q=80&w=400', category: 'Laptops', rating: 5, reviews: 8, tag: 'USED' },
  { id: 'c2', name: 'Vintage Leather Sofa 3 Seater', price: 450.00, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400', category: 'Furniture', rating: 4, reviews: 2, tag: 'NEGOTIABLE' },
  { id: 'c3', name: 'Canon 80D with 18-135mm Lens', price: 650.00, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400', category: 'Photography', rating: 4, reviews: 15 },
  { id: 'c4', name: 'Royal Enfield Classic 350 - 2022', price: 2100.00, image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400', category: 'Bikes', rating: 5, reviews: 5 },
];

export const ELECTRIC_ITEMS: Product[] = [
  { id: 'e1', name: 'Smart AI Refrigerator with Screen', price: 1200.00, image: 'https://images.unsplash.com/photo-1571175432244-50ad2f12a9b1?auto=format&fit=crop&q=80&w=400', category: 'Appliance', rating: 5, reviews: 42 },
  { id: 'e2', name: 'Ultra Silent Inverter Air Conditioner', price: 550.00, image: 'https://images.unsplash.com/photo-1631548177433-8c43093282b5?auto=format&fit=crop&q=80&w=400', category: 'Appliance', rating: 4, reviews: 28 },
  { id: 'e3', name: 'Pro Series Stand Mixer 5-Quart', price: 299.00, image: 'https://images.unsplash.com/photo-1594385208974-2e75f9d8a847?auto=format&fit=crop&q=80&w=400', category: 'Kitchen', rating: 5, reviews: 110 },
  { id: 'e4', name: 'Robotic Vacuum Cleaner with LiDAR', price: 350.00, image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=400', category: 'Home', rating: 4, reviews: 65 },
];

export const FOOD_PRODUCTS: Product[] = [
  { id: 'f1', name: 'Organic Cold Pressed Extra Virgin Olive Oil', price: 25.00, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400', category: 'Pantry', rating: 5, reviews: 88 },
  { id: 'f2', name: 'Premium Arabica Coffee Beans 1kg', price: 18.00, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=400', category: 'Beverage', rating: 5, reviews: 205 },
  { id: 'f3', name: 'Dark Chocolate Assortment Gift Box', price: 32.00, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=400', category: 'Snacks', rating: 4, reviews: 45 },
  { id: 'f4', name: 'Fresh Organic Wild Honey 500g', price: 15.00, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400', category: 'Pantry', rating: 5, reviews: 72 },
];

export const HOME_LIFESTYLE: Product[] = [
  { id: 'h1', name: 'Minimalist Ceramic Vase Set of 3', price: 45.00, image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=400', category: 'Decor', rating: 5, reviews: 12 },
  { id: 'h2', name: 'Smart LED RGB Strip Lights 5m', price: 22.00, image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400', category: 'Lighting', rating: 4, reviews: 56 },
  { id: 'h3', name: 'Memory Foam Orthopedic Pillow', price: 35.00, image: 'https://images.unsplash.com/photo-1520006403991-3c9f3e045bd1?auto=format&fit=crop&q=80&w=400', category: 'Bedding', rating: 5, reviews: 89 },
  { id: 'h4', name: 'Wall Mounted Floating Bookshelves', price: 60.00, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=400', category: 'Furniture', rating: 4, reviews: 34 },
];

export const BANNERS: Banner[] = [
  { id: 'b1', title: "WOMEN'S CLOTHES", subtitle: 'Elegance Redefined', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600', color: 'bg-pink-100' },
  { id: 'b2', title: 'MAKEUP ITEMS', subtitle: 'Glow Every Day', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600', color: 'bg-orange-50' },
  { id: 'b3', title: 'PREMIUM PERFUMES', subtitle: 'Signature Scents', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600', color: 'bg-blue-50' },
];
