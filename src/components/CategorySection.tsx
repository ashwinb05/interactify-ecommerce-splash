
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
    <section className="py-8 animate-fade-in relative group">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex space-x-4 p-4" ref={scrollRef}>
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
