
import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchFormProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
  showMinimal?: boolean;
}

const SearchForm = ({ onSearch, isSearching, showMinimal = false }: SearchFormProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const suggestions = [
    "I have hair fall and need a solution",
    "Need a budget gaming laptop under $1000",
    "Looking for wireless headphones for gym",
    "Want to start learning guitar",
    "Need skincare products for acne"
  ];

  if (showMinimal) {
    return (
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Describe what you're looking for..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
              disabled={isSearching}
            />
          </div>
          <Button
            type="submit"
            disabled={!query.trim() || isSearching}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
          >
            {isSearching ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Describe your problem or what you're looking for..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-4 py-4 text-lg border-2 border-border focus:border-blue-500 transition-colors"
            disabled={isSearching}
          />
        </div>
        
        <Button
          type="submit"
          disabled={!query.trim() || isSearching}
          className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity"
        >
          {isSearching ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              <span>Finding Products...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Find Products</span>
            </div>
          )}
        </Button>
      </form>
      
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground text-center">
          Try these examples:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setQuery(suggestion)}
              className="text-xs px-3 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
              disabled={isSearching}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
