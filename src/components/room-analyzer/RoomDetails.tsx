
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface RoomDetailsProps {
  image: string;
}

const RoomDetails = ({ image }: RoomDetailsProps) => {
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
                <span className="font-medium">Living Room</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Size Estimate</span>
                <span className="font-medium">Medium (12' x 14')</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Natural Light</span>
                <span className="font-medium">Moderate</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Current Style</span>
                <span className="font-medium">Transitional</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomDetails;
