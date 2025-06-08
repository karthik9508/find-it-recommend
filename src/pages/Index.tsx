
import { useState } from "react";
import SearchForm from "@/components/SearchForm";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";

const Index = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock product recommendations based on query
    const mockProducts = generateMockProducts(query);
    setProducts(mockProducts);
    setIsSearching(false);
  };

  const generateMockProducts = (query: string) => {
    // Simulate AI-generated product recommendations
    const productTemplates = [
      {
        id: 1,
        title: "Premium Hair Growth Serum",
        description: "Clinically tested formula with natural ingredients for stronger, healthier hair growth.",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
        platform: "Amazon",
        rating: 4.5
      },
      {
        id: 2,
        title: "Gaming Laptop RTX 4060",
        description: "High-performance gaming laptop with latest GPU, perfect for budget-conscious gamers.",
        price: "$899.99",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",
        platform: "Flipkart",
        rating: 4.3
      },
      {
        id: 3,
        title: "Wireless Noise-Canceling Headphones",
        description: "Superior sound quality with active noise cancellation for immersive audio experience.",
        price: "$199.99",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        platform: "eBay",
        rating: 4.7
      },
      {
        id: 4,
        title: "Smart Fitness Tracker",
        description: "Track your health goals with heart rate monitoring, sleep tracking, and GPS.",
        price: "$149.99",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
        platform: "Amazon",
        rating: 4.4
      },
      {
        id: 5,
        title: "Organic Protein Powder",
        description: "Plant-based protein supplement for muscle building and post-workout recovery.",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop",
        platform: "Amazon",
        rating: 4.6
      }
    ];

    // Return all products for demo (in real app, AI would filter based on query)
    return productTemplates;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!hasSearched ? (
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Find Perfect Products
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Describe your problem or need, and our AI will recommend the best products for you
              </p>
            </div>
            <SearchForm onSearch={handleSearch} isSearching={isSearching} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {isSearching ? "Finding perfect products for you..." : `Recommendations for: "${searchQuery}"`}
              </h2>
              <p className="text-muted-foreground">
                {isSearching ? "Our AI is analyzing your needs" : `Found ${products.length} great products`}
              </p>
            </div>
            
            <SearchForm onSearch={handleSearch} isSearching={isSearching} showMinimal />
            
            {isSearching ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              </div>
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
