
import React from 'react';

const ColorsTab = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-xl font-semibold">Recommended Color Palette</h3>
      <p className="text-gray-600">
        These color combinations will work beautifully in your space based on existing elements:
      </p>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="border rounded-lg p-5">
          <h4 className="font-serif text-lg font-semibold mb-4">Primary Palette</h4>
          <div className="space-y-4">
            <div>
              <div className="flex mb-2">
                <div className="w-full h-16 bg-[#F7F3EB] rounded-l-md"></div>
                <div className="w-full h-16 bg-[#D4CDBD]"></div>
                <div className="w-full h-16 bg-[#94A3B8]"></div>
                <div className="w-full h-16 bg-[#3D405B]"></div>
                <div className="w-full h-16 bg-[#81B29A] rounded-r-md"></div>
              </div>
              <div className="flex justify-between text-xs px-1 mt-1">
                <span>#F7F3EB</span>
                <span>#D4CDBD</span>
                <span>#94A3B8</span>
                <span>#3D405B</span>
                <span>#81B29A</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              A harmonious blend of neutral tones with accents of blue and sage green.
              This palette creates a calming atmosphere while maintaining visual interest.
            </p>
          </div>
        </div>
        
        <div className="border rounded-lg p-5">
          <h4 className="font-serif text-lg font-semibold mb-4">Accent Colors</h4>
          <div className="space-y-4">
            <div className="flex space-x-3">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#E07A5F]"></div>
                <span className="text-xs mt-1">#E07A5F</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#F2CC8F]"></div>
                <span className="text-xs mt-1">#F2CC8F</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#5E6472]"></div>
                <span className="text-xs mt-1">#5E6472</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Use these accent colors for decorative elements like pillows, artwork, 
              or small furniture pieces to add personality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorsTab;
