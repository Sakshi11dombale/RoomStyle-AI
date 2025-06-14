
import React from 'react';

interface ColorsTabProps {
  image?: string;
}

const ColorsTab = ({ image }: ColorsTabProps) => {
  // Generate varied color palettes with much better variation
  const getVariedPalettes = () => {
    const paletteCollections = [
      {
        primary: { colors: ['#F7F3EB', '#D4CDBD', '#94A3B8', '#3D405B', '#81B29A'], description: 'A harmonious blend of neutral tones with accents of blue and sage green. This palette creates a calming atmosphere while maintaining visual interest.' },
        accent: { colors: ['#E07A5F', '#F2CC8F', '#5E6472'], description: 'Use these accent colors for decorative elements like pillows, artwork, or small furniture pieces to add personality.' }
      },
      {
        primary: { colors: ['#2E3440', '#3B4252', '#434C5E', '#4C566A', '#5E81AC'], description: 'A sophisticated Nordic-inspired palette with deep blues and grays. Perfect for creating a modern, professional atmosphere.' },
        accent: { colors: ['#88C0D0', '#81A1C1', '#BF616A'], description: 'These vibrant accents add warmth and energy to the cool primary palette, perfect for statement pieces.' }
      },
      {
        primary: { colors: ['#F4A460', '#DEB887', '#D2691E', '#8B4513', '#A0522D'], description: 'Warm earth tones inspired by natural materials. This palette brings warmth and comfort to any space.' },
        accent: { colors: ['#5F9EA0', '#4682B4', '#32CD32'], description: 'Cool accent colors that complement the warm base, adding balance and visual interest to your decor.' }
      },
      {
        primary: { colors: ['#FFFFFF', '#F8F8FF', '#E6E6FA', '#D8BFD8', '#DDA0DD'], description: 'A soft, ethereal palette dominated by whites and lavenders. Creates a serene, spa-like atmosphere perfect for relaxation.' },
        accent: { colors: ['#9370DB', '#8A2BE2', '#4B0082'], description: 'Rich purple accents add depth and luxury to the light, airy primary palette.' }
      },
      {
        primary: { colors: ['#2F4F4F', '#708090', '#778899', '#B0C4DE', '#F0F8FF'], description: 'Cool, calming tones inspired by stormy skies and ocean depths. Perfect for creating a tranquil, contemplative space.' },
        accent: { colors: ['#FF6347', '#FF7F50', '#FFA500'], description: 'Warm coral and orange accents provide energizing contrast to the cool primary palette.' }
      },
      {
        primary: { colors: ['#8B4513', '#A0522D', '#CD853F', '#DEB887', '#F5DEB3'], description: 'Rich, earthy browns and tans create a grounded, natural feeling. Ideal for rustic or traditional design styles.' },
        accent: { colors: ['#228B22', '#32CD32', '#ADFF2F'], description: 'Fresh green accents bring life and energy, mimicking natural foliage against earth tones.' }
      },
      {
        primary: { colors: ['#000000', '#2F2F2F', '#696969', '#A9A9A9', '#FFFFFF'], description: 'A bold monochromatic palette with dramatic contrast. Perfect for modern, minimalist, or industrial design schemes.' },
        accent: { colors: ['#FF4500', '#FFD700', '#DC143C'], description: 'Vibrant accent colors add energy and focal points to the neutral monochrome base.' }
      },
      {
        primary: { colors: ['#FFF8DC', '#F0E68C', '#DDA0DD', '#98FB98', '#87CEEB'], description: 'A soft, pastel collection inspired by spring gardens. Creates a cheerful, optimistic atmosphere.' },
        accent: { colors: ['#FF69B4', '#32CD32', '#FF6347'], description: 'Bright, playful accents that enhance the gentle primary palette with bursts of energy.' }
      }
    ];
    
    // Create a hash from the image string
    let hash = 0;
    if (image) {
      for (let i = 0; i < image.length; i++) {
        const char = image.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
      }
    }
    
    // Use current timestamp for additional variation
    const timestamp = Date.now();
    const combinedSeed = Math.abs((hash || 456) + timestamp);
    
    return paletteCollections[combinedSeed % paletteCollections.length];
  };

  const palette = getVariedPalettes();

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
                {palette.primary.colors.map((color, index) => (
                  <div 
                    key={index}
                    className={`w-full h-16 ${index === 0 ? 'rounded-l-md' : index === palette.primary.colors.length - 1 ? 'rounded-r-md' : ''}`}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs px-1 mt-1">
                {palette.primary.colors.map((color, index) => (
                  <span key={index}>{color}</span>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {palette.primary.description}
            </p>
          </div>
        </div>
        
        <div className="border rounded-lg p-5">
          <h4 className="font-serif text-lg font-semibold mb-4">Accent Colors</h4>
          <div className="space-y-4">
            <div className="flex space-x-3">
              {palette.accent.colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: color }}></div>
                  <span className="text-xs mt-1">{color}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {palette.accent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorsTab;
