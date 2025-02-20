
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
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-semibold text-lg mb-2 truncate">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">₹{price.toLocaleString()}</p>
          <div className="flex items-center">
            <span className="text-sm bg-green-500 text-white px-2 py-0.5 rounded">
              {rating} ★
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
