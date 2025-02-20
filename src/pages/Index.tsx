
import React from 'react';
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';

const beautyProducts = [
  {
    id: 1,
    title: "Natural Face Cream",
    price: 999,
    image: "https://images.unsplash.com/photo-1620917669809-1af0497965de?w=500&auto=format",
    category: "Skincare",
    rating: 4.5
  },
  {
    id: 2,
    title: "Organic Lipstick",
    price: 599,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format",
    category: "Makeup",
    rating: 4.3
  },
  {
    id: 3,
    title: "Vitamin C Serum",
    price: 1299,
    image: "https://images.unsplash.com/photo-1573575155376-b5010099301b?w=500&auto=format",
    category: "Skincare",
    rating: 4.7
  },
  {
    id: 4,
    title: "Hair Care Bundle",
    price: 1999,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format",
    category: "Hair Care",
    rating: 4.4
  }
];

const toysProducts = [
  {
    id: 5,
    title: "Educational Building Blocks",
    price: 799,
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?w=500&auto=format",
    category: "Educational Toys",
    rating: 4.6
  },
  {
    id: 6,
    title: "Remote Control Car",
    price: 1499,
    image: "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?w=500&auto=format",
    category: "Remote Control Toys",
    rating: 4.2
  },
  {
    id: 7,
    title: "Plush Teddy Bear",
    price: 499,
    image: "https://images.unsplash.com/photo-1581557991964-125469da3b36?w=500&auto=format",
    category: "Soft Toys",
    rating: 4.8
  },
  {
    id: 8,
    title: "Art & Craft Kit",
    price: 899,
    image: "https://images.unsplash.com/photo-1595696966465-bccd94f26897?w=500&auto=format",
    category: "Creative Toys",
    rating: 4.5
  }
];

const trendingProducts = [
  {
    id: 9,
    title: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format",
    category: "Electronics",
    rating: 4.7
  },
  {
    id: 10,
    title: "Wireless Earbuds",
    price: 1999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format",
    category: "Electronics",
    rating: 4.4
  },
  {
    id: 11,
    title: "Fitness Band",
    price: 1499,
    image: "https://images.unsplash.com/photo-1557408674-2c5a8f339d2f?w=500&auto=format",
    category: "Electronics",
    rating: 4.3
  },
  {
    id: 12,
    title: "Bluetooth Speaker",
    price: 2499,
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc8?w=500&auto=format",
    category: "Electronics",
    rating: 4.6
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-4 pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to ShopSmart</h1>
            <p className="text-muted-foreground">Discover amazing products at great prices</p>
          </div>
          
          <CategorySection title="Beauty & Personal Care" products={beautyProducts} />
          <CategorySection title="Toys & Games" products={toysProducts} />
          <CategorySection title="Trending Products" products={trendingProducts} />
        </div>
      </main>
    </div>
  );
};

export default Index;
