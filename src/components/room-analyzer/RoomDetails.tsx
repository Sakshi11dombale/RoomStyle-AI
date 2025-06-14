
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface RoomDetailsProps {
  image: string;
}

const RoomDetails = ({ image }: RoomDetailsProps) => {
  // Generate varied analysis results based on image data with better seeding
  const getRandomAnalysis = () => {
    const roomTypes = ['Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Office', 'Bathroom', 'Study Room', 'Family Room'];
    const sizes = ['Small (8\' x 10\')', 'Medium (12\' x 14\')', 'Large (16\' x 20\')', 'Extra Large (20\' x 24\')', 'Compact (6\' x 8\')', 'Spacious (18\' x 22\')'];
    const lightLevels = ['Low', 'Moderate', 'Bright', 'Very Bright', 'Dim', 'Well-lit'];
    const styles = ['Modern', 'Traditional', 'Transitional', 'Contemporary', 'Minimalist', 'Rustic', 'Industrial', 'Bohemian', 'Scandinavian'];
    
    // Create a more complex seed using multiple characteristics of the image
    const seed1 = image.length;
    const seed2 = image.charCodeAt(Math.floor(image.length / 4)) || 1;
    const seed3 = image.charCodeAt(Math.floor(image.length / 2)) || 1;
    const seed4 = image.charCodeAt(Math.floor(image.length * 3 / 4)) || 1;
    
    const combinedSeed = (seed1 + seed2 + seed3 + seed4);
    
    return {
      roomType: roomTypes[combinedSeed % roomTypes.length],
      size: sizes[(combinedSeed * 7) % sizes.length],
      lightLevel: lightLevels[(combinedSeed * 13) % lightLevels.length],
      style: styles[(combinedSeed * 19) % styles.length]
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
