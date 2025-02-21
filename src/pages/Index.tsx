import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const laptopProducts = [
  {
    id: 1,
    title: "MacBook Pro M2",
    price: 129999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format",
    category: "Laptops",
    subcategory: "Premium Laptops",
    rating: 4.8
  },
  {
    id: 2,
    title: "Dell XPS 13",
    price: 94999,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format",
    category: "Laptops",
    subcategory: "Premium Laptops",
    rating: 4.6
  },
  {
    id: 3,
    title: "HP Spectre x360",
    price: 89999,
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&auto=format",
    category: "Laptops",
    subcategory: "2-in-1 Laptops",
    rating: 4.5
  },
  {
    id: 4,
    title: "Lenovo ThinkPad",
    price: 79999,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format",
    category: "Laptops",
    subcategory: "Business Laptops",
    rating: 4.4
  }
];

const smartphoneProducts = [
  {
    id: 5,
    title: "iPhone 15 Pro",
    price: 119999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format",
    category: "Smartphones",
    subcategory: "iOS Devices",
    rating: 4.7
  },
  {
    id: 6,
    title: "Samsung S24 Ultra",
    price: 124999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format",
    category: "Smartphones",
    subcategory: "Android Flagship",
    rating: 4.6
  },
  {
    id: 7,
    title: "Google Pixel 8",
    price: 69999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format",
    category: "Smartphones",
    subcategory: "Android Flagship",
    rating: 4.5
  },
  {
    id: 8,
    title: "OnePlus 12",
    price: 64999,
    image: "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?w=500&auto=format",
    category: "Smartphones",
    subcategory: "Android Flagship",
    rating: 4.4
  }
];

const accessoryProducts = [
  {
    id: 9,
    title: "AirPods Pro",
    price: 24999,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&auto=format",
    category: "Accessories",
    subcategory: "Audio",
    rating: 4.6
  },
  {
    id: 10,
    title: "Galaxy Watch 6",
    price: 29999,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format",
    category: "Accessories",
    subcategory: "Wearables",
    rating: 4.5
  },
  {
    id: 11,
    title: "Sony WH-1000XM5",
    price: 27999,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format",
    category: "Accessories",
    subcategory: "Audio",
    rating: 4.8
  },
  {
    id: 12,
    title: "iPad Pro M2",
    price: 79999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format",
    category: "Accessories",
    subcategory: "Tablets",
    rating: 4.7
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-4 pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome to TechMart</h1>
            <p className="text-muted-foreground">Your one-stop destination for premium electronics</p>
          </div>
          
          <CategorySection title="Latest Laptops" products={laptopProducts} />
          <CategorySection title="Trending Smartphones" products={smartphoneProducts} />
          <CategorySection title="Popular Accessories" products={accessoryProducts} />

          <div className="flex justify-center mt-8">
            <Button
              onClick={() => navigate('/products')}
              className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
            >
              View More Products
              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-sm mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About TechMart</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Press</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Shipping Info</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Policy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Return Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Use</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Facebook</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TechMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
