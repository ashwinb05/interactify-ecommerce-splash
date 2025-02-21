
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const moreProducts = {
  laptops: [
    {
      id: 13,
      title: "ASUS ROG Zephyrus",
      price: 149999,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format",
      category: "Laptops",
      subcategory: "Gaming Laptops",
      rating: 4.7
    },
    {
      id: 14,
      title: "Acer Predator",
      price: 134999,
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format",
      category: "Laptops",
      subcategory: "Gaming Laptops",
      rating: 4.5
    },
    {
      id: 15,
      title: "Microsoft Surface",
      price: 89999,
      image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?w=500&auto=format",
      category: "Laptops",
      subcategory: "2-in-1 Laptops",
      rating: 4.3
    },
    {
      id: 16,
      title: "LG Gram",
      price: 94999,
      image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500&auto=format",
      category: "Laptops",
      subcategory: "Ultrabooks",
      rating: 4.4
    }
  ],
  phones: [
    {
      id: 17,
      title: "Xiaomi 14 Pro",
      price: 59999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format",
      category: "Smartphones",
      subcategory: "Android Flagship",
      rating: 4.3
    },
    {
      id: 18,
      title: "Nothing Phone 2",
      price: 44999,
      image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format",
      category: "Smartphones",
      subcategory: "Android Mid-range",
      rating: 4.2
    },
    {
      id: 19,
      title: "Vivo X100 Pro",
      price: 79999,
      image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=500&auto=format",
      category: "Smartphones",
      subcategory: "Camera Phones",
      rating: 4.4
    },
    {
      id: 20,
      title: "OPPO Find X7",
      price: 69999,
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format",
      category: "Smartphones",
      subcategory: "Android Flagship",
      rating: 4.3
    }
  ],
  accessories: [
    {
      id: 21,
      title: "Samsung Buds Pro",
      price: 18999,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format",
      category: "Accessories",
      subcategory: "Audio",
      rating: 4.4
    },
    {
      id: 22,
      title: "Apple Watch Ultra",
      price: 89999,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&auto=format",
      category: "Accessories",
      subcategory: "Wearables",
      rating: 4.7
    },
    {
      id: 23,
      title: "Bose QuietComfort",
      price: 29999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
      category: "Accessories",
      subcategory: "Audio",
      rating: 4.6
    },
    {
      id: 24,
      title: "Samsung Tab S9",
      price: 74999,
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format",
      category: "Accessories",
      subcategory: "Tablets",
      rating: 4.5
    }
  ]
};

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="pt-4 pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">More Products</h1>
                <p className="text-muted-foreground">Discover our extended collection of premium electronics</p>
              </div>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="group flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Return to Home
              </Button>
            </div>
          </div>
          
          <CategorySection title="Gaming & Professional Laptops" products={moreProducts.laptops} />
          <CategorySection title="Featured Smartphones" products={moreProducts.phones} />
          <CategorySection title="Premium Accessories" products={moreProducts.accessories} />
        </div>
      </main>
    </div>
  );
};

export default Products;
