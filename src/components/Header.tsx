
import React from 'react';
import { Search, Menu, Laptop, Smartphone, Headphones } from 'lucide-react';
import { Button } from './ui/button';
import LoginDialog from './LoginDialog';
import CartDialog from './CartDialog';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary to-secondary w-full shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary-foreground animate-float">TechMart</h1>
            <div className="hidden md:flex items-center bg-white/90 rounded-md shadow-sm transition-transform hover:scale-[1.02]">
              <input
                type="text"
                placeholder="Search for laptops, phones, and more..."
                className="w-[400px] px-4 py-2 rounded-l-md focus:outline-none bg-transparent"
              />
              <Button variant="ghost" size="icon" className="text-primary hover:text-secondary transition-colors">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-primary-foreground flex items-center gap-2 hover:bg-white/10 transition-colors animate-fade-in">
                <Laptop className="h-5 w-5" />
                Laptops
              </Button>
              <Button variant="ghost" className="text-primary-foreground flex items-center gap-2 hover:bg-white/10 transition-colors animate-fade-in">
                <Smartphone className="h-5 w-5" />
                Phones
              </Button>
              <Button variant="ghost" className="text-primary-foreground flex items-center gap-2 hover:bg-white/10 transition-colors animate-fade-in">
                <Headphones className="h-5 w-5" />
                Accessories
              </Button>
            </div>
            <LoginDialog />
            <CartDialog />
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-white/10 transition-colors">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
