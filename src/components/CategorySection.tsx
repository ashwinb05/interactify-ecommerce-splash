
import React from 'react';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  products: Array<{
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    subcategory: string;
    rating: number;
  }>;
}

const CategorySection = ({ title, products }: CategorySectionProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 relative group bg-gradient-to-r from-muted to-white">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            {title}
          </h2>
          <div className="flex gap-2 animate-fade-in">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg p-1">
          <div className="flex space-x-4 p-4" ref={scrollRef}>
            {products.map((product) => (
              <div key={product.id} className="w-[250px] flex-none transform transition-transform hover:translate-y-[-5px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="bg-primary/20" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategorySection;
