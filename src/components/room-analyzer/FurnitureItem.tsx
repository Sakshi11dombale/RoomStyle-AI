
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FurnitureItemProps {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
  failedImages: Record<number, boolean>;
  handleImageError: (id: number) => void;
  isMobile?: boolean;
}

const FurnitureItem = ({
  id,
  name,
  image,
  price,
  category,
  failedImages,
  handleImageError,
  isMobile = false
}: FurnitureItemProps) => {
  return (
    <div className="border rounded-lg overflow-hidden h-full shadow-sm transition-all hover:shadow-md">
      <AspectRatio ratio={4/3}>
        {failedImages[id] ? (
          <div className="bg-gray-100 h-full w-full flex items-center justify-center">
            <p className="text-gray-500 text-sm">Image unavailable</p>
          </div>
        ) : (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={() => handleImageError(id)}
            loading="lazy"
          />
        )}
      </AspectRatio>
      <div className="p-4">
        <h4 className="font-medium mb-1 truncate">{name}</h4>
        <p className="text-sm text-gray-600">{price}</p>
        {!isMobile && <p className="text-xs text-gray-500 mt-1">{category}</p>}
      </div>
    </div>
  );
};

export default FurnitureItem;
