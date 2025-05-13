
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FurnitureItem from './FurnitureItem';

interface FurnitureSuggestion {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

interface FurnitureTabProps {
  furnitureSuggestions: FurnitureSuggestion[];
  failedImages: Record<number, boolean>;
  handleImageError: (id: number) => void;
}

const FurnitureTab = ({ 
  furnitureSuggestions, 
  failedImages, 
  handleImageError 
}: FurnitureTabProps) => {
  const [furnitureCategory, setFurnitureCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  
  // Filter furniture by category
  const filteredFurniture = furnitureCategory === 'All' 
    ? furnitureSuggestions 
    : furnitureSuggestions.filter(item => item.category === furnitureCategory);
    
  // Limit visible furniture items
  const visibleFurniture = filteredFurniture.slice(0, visibleCount);

  // Get unique categories for filtering
  const categories = ['All', ...Array.from(new Set(furnitureSuggestions.map(item => item.category)))];

  // Handle "View More" button click
  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredFurniture.length));
  };

  const hasMoreToShow = visibleCount < filteredFurniture.length;

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-xl font-semibold">Furniture Recommendations</h3>
      <p className="text-gray-600 mb-4">
        Based on your room's style and dimensions, here are some furniture pieces that would complement your space:
      </p>
      
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={furnitureCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setFurnitureCategory(category);
              setVisibleCount(6); // Reset visible count when changing category
            }}
            className="text-xs"
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Mobile Carousel View */}
      <div className="block md:hidden mb-6">
        <Carousel className="w-full">
          <CarouselContent>
            {filteredFurniture.map((item) => (
              <CarouselItem key={item.id} className="basis-full">
                <FurnitureItem 
                  {...item}
                  failedImages={failedImages}
                  handleImageError={handleImageError}
                  isMobile={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static translate-y-0 translate-x-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
      
      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleFurniture.map((item) => (
          <FurnitureItem 
            key={item.id}
            {...item}
            failedImages={failedImages}
            handleImageError={handleImageError}
          />
        ))}
      </div>
      
      {hasMoreToShow && (
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={handleViewMore}>
            View More Suggestions
          </Button>
        </div>
      )}
    </div>
  );
};

export default FurnitureTab;
