
import React from 'react';
import { Search, ShoppingCart, Menu, Laptop, Smartphone, Headphones } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary w-full shadow-md animate-fade-in">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary-foreground">TechMart</h1>
            <div className="hidden md:flex items-center bg-white rounded-md">
              <input
                type="text"
                placeholder="Search for laptops, phones, and more..."
                className="w-[400px] px-4 py-2 rounded-l-md focus:outline-none"
              />
              <Button variant="ghost" size="icon" className="text-primary">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-primary-foreground flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                Laptops
              </Button>
              <Button variant="ghost" className="text-primary-foreground flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Phones
              </Button>
              <Button variant="ghost" className="text-primary-foreground flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                Accessories
              </Button>
            </div>
            <Button variant="ghost" className="text-primary-foreground">Login</Button>
            <Button variant="ghost" className="text-primary-foreground flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
