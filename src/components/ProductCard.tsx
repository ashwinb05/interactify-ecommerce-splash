
import React from 'react';
import { Card } from './ui/card';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  rating: number;
}

const ProductCard = ({ title, price, image, category, subcategory, rating }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-scale-up bg-gradient-to-br from-white to-muted/30 hover:to-primary/5">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 
                   group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent 
                   group-hover:opacity-100 transition-all duration-500"
      />
      
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 
                     group-hover:scale-110 group-hover:rotate-1"
        />
      </div>

      <div className="relative p-4 space-y-2 transition-all duration-300">
        <div className="space-y-1 transform transition-all duration-300 group-hover:translate-x-2">
          <p className="text-sm text-muted-foreground mb-1 animate-fade-in">{category}</p>
          <p className="text-xs text-muted-foreground/80 animate-fade-in">{subcategory}</p>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 truncate transition-colors duration-300 
                      group-hover:text-primary transform group-hover:translate-x-2">{title}</h3>
        
        <div className="flex items-center justify-between animate-fade-in transform transition-all duration-300 group-hover:translate-x-2">
          <p className="text-lg font-bold text-secondary animate-float 
                      transition-all duration-300 group-hover:scale-110">₹{price.toLocaleString()}</p>
          <div className="flex items-center">
            <span className="text-sm bg-green-500 text-white px-2 py-0.5 rounded-full 
                           transform transition-all duration-300 group-hover:scale-110 
                           group-hover:bg-green-600 group-hover:shadow-lg">
              {rating} ★
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
      </div>
    </Card>
  );
};

export default ProductCard;
