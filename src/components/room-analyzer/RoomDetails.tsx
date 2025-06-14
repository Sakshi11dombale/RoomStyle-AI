
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface RoomDetailsProps {
  image: string;
}

const RoomDetails = ({ image }: RoomDetailsProps) => {
  // Generate varied analysis results with much better seeding
  const getRandomAnalysis = () => {
    const roomTypes = ['Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Office', 'Bathroom', 'Study Room', 'Family Room', 'Guest Room', 'Master Bedroom'];
    const sizes = ['Small (8\' x 10\')', 'Medium (12\' x 14\')', 'Large (16\' x 20\')', 'Extra Large (20\' x 24\')', 'Compact (6\' x 8\')', 'Spacious (18\' x 22\')', 'Cozy (10\' x 12\')', 'Grand (24\' x 28\')'];
    const lightLevels = ['Low', 'Moderate', 'Bright', 'Very Bright', 'Dim', 'Well-lit', 'Natural Light Rich', 'Ambient'];
    const styles = ['Modern', 'Traditional', 'Transitional', 'Contemporary', 'Minimalist', 'Rustic', 'Industrial', 'Bohemian', 'Scandinavian', 'Mediterranean'];
    
    // Create a hash-like seed from the image string
    let hash = 0;
    for (let i = 0; i < image.length; i++) {
      const char = image.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Use current timestamp to add more randomness
    const timestamp = Date.now();
    const combinedSeed = Math.abs(hash + timestamp);
    
    // Generate different indices using the combined seed
    const roomIndex = combinedSeed % roomTypes.length;
    const sizeIndex = (combinedSeed * 7 + timestamp) % sizes.length;
    const lightIndex = (combinedSeed * 13 + timestamp * 3) % lightLevels.length;
    const styleIndex = (combinedSeed * 19 + timestamp * 7) % styles.length;
    
    return {
      roomType: roomTypes[roomIndex],
      size: sizes[sizeIndex],
      lightLevel: lightLevels[lightIndex],
      style: styles[styleIndex]
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
