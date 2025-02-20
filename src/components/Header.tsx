
import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary w-full shadow-md animate-fade-in">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary-foreground">ShopSmart</h1>
            <div className="hidden md:flex items-center bg-white rounded-md">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-[400px] px-4 py-2 rounded-l-md focus:outline-none"
              />
              <Button variant="ghost" size="icon" className="text-primary">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
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
