
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface RoomDetailsProps {
  image: string;
}

const RoomDetails = ({ image }: RoomDetailsProps) => {
  // Generate varied analysis results based on image data
  const getRandomAnalysis = () => {
    const roomTypes = ['Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Office', 'Bathroom'];
    const sizes = ['Small (8\' x 10\')', 'Medium (12\' x 14\')', 'Large (16\' x 20\')', 'Extra Large (20\' x 24\')'];
    const lightLevels = ['Low', 'Moderate', 'Bright', 'Very Bright'];
    const styles = ['Modern', 'Traditional', 'Transitional', 'Contemporary', 'Minimalist', 'Rustic'];
    
    // Use image length as a simple seed for consistent results per image
    const seed = image.length % 100;
    
    return {
      roomType: roomTypes[seed % roomTypes.length],
      size: sizes[(seed * 2) % sizes.length],
      lightLevel: lightLevels[(seed * 3) % lightLevels.length],
      style: styles[(seed * 4) % styles.length]
    };
  };

  const analysis = getRandomAnalysis();

  return (
    <div className="sticky top-6">
      <img 
        src={image} 
        alt="Analyzed room" 
        className="w-full rounded-lg shadow-md mb-4"
      />
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-serif text-lg font-semibold mb-3">Room Analysis</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Room Type</span>
                <span className="font-medium">{analysis.roomType}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Size Estimate</span>
                <span className="font-medium">{analysis.size}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Natural Light</span>
                <span className="font-medium">{analysis.lightLevel}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Current Style</span>
                <span className="font-medium">{analysis.style}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomDetails;
