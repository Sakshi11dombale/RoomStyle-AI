
import React from 'react';

interface DesignStyle {
  id: string;
  name: string;
  description: string;
  confidence: number;
  colors: string[];
}

interface StylesTabProps {
  designStyles: DesignStyle[];
}

const StylesTab = ({ designStyles }: StylesTabProps) => {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-xl font-semibold">Recommended Design Styles</h3>
      <p className="text-gray-600">
        Based on your room's architecture, current furniture, and lighting, 
        we recommend the following design styles:
      </p>
      
      <div className="space-y-6">
        {designStyles.map((style) => (
          <div key={style.id} className="border rounded-lg p-5">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-serif text-lg font-semibold">{style.name}</h4>
              <div className="bg-design-cream px-2 py-1 rounded text-sm">
                {style.confidence}% Match
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              {style.description}
            </p>
            
            <div className="flex space-x-2">
              {style.colors.map((color, index) => (
                <div 
                  key={index}
                  className="w-8 h-8 rounded-full" 
                  style={{ backgroundColor: color }}
                  title={color}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylesTab;
