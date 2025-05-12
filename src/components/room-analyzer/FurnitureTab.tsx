
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
  
  // Filter furniture by category
  const filteredFurniture = furnitureCategory === 'All' 
    ? furnitureSuggestions 
    : furnitureSuggestions.filter(item => item.category === furnitureCategory);
    
  // Get unique categories for filtering
  const categories = ['All', ...Array.from(new Set(furnitureSuggestions.map(item => item.category)))];

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
            onClick={() => setFurnitureCategory(category)}
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
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      
      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        {filteredFurniture.map((item) => (
          <FurnitureItem 
            key={item.id}
            {...item}
            failedImages={failedImages}
            handleImageError={handleImageError}
          />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="outline">
          View More Suggestions
        </Button>
      </div>
    </div>
  );
};

export default FurnitureTab;
