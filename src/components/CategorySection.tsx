
import React from 'react';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  title: string;
  products: Array<{
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    rating: number;
  }>;
}

const CategorySection = ({ title, products }: CategorySectionProps) => {
  return (
    <section className="py-8 animate-fade-in">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex space-x-4 p-4">
            {products.map((product) => (
              <div key={product.id} className="w-[250px] flex-none">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategorySection;
