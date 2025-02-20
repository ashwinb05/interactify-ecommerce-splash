
import React from 'react';
import { Card } from './ui/card';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard = ({ title, price, image, category, rating }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg animate-scale-up bg-gradient-to-br from-white to-muted/30">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-sm text-muted-foreground mb-1 animate-fade-in">{category}</p>
        <h3 className="font-semibold text-lg mb-2 truncate group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex items-center justify-between animate-fade-in">
          <p className="text-lg font-bold text-secondary animate-float">₹{price.toLocaleString()}</p>
          <div className="flex items-center">
            <span className="text-sm bg-green-500 text-white px-2 py-0.5 rounded-full transform transition-transform group-hover:scale-105">
              {rating} ★
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
