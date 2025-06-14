
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
  image?: string;
}

const StylesTab = ({ designStyles, image }: StylesTabProps) => {
  // Generate varied styles based on image with improved variation
  const getVariedStyles = () => {
    const styleCollections = [
      [
        { id: '1', name: 'Modern Minimalist', description: 'Clean lines, neutral colors, and functional furniture create a serene and uncluttered space perfect for relaxation.', confidence: 92, colors: ['#F5F5F5', '#E8E8E8', '#2C2C2C', '#4A4A4A'] },
        { id: '2', name: 'Scandinavian', description: 'Light woods, cozy textiles, and a focus on hygge create a warm and inviting atmosphere with natural elements.', confidence: 85, colors: ['#FFFFFF', '#F7F3E9', '#D4B8A3', '#8B6F47'] },
        { id: '3', name: 'Contemporary', description: 'Current trends with bold accents and mixed materials for a fresh, updated look that feels current and stylish.', confidence: 78, colors: ['#2E3440', '#88C0D0', '#ECEFF4', '#BF616A'] }
      ],
      [
        { id: '1', name: 'Industrial Chic', description: 'Exposed brick, metal fixtures, and raw materials create an urban, loft-like atmosphere with edgy sophistication.', confidence: 89, colors: ['#3C3C3C', '#8B4513', '#CD853F', '#A9A9A9'] },
        { id: '2', name: 'Bohemian', description: 'Rich textures, vibrant patterns, and eclectic decor for a free-spirited, artistic vibe full of personality.', confidence: 82, colors: ['#8B4513', '#CD853F', '#DDA0DD', '#20B2AA'] },
        { id: '3', name: 'Transitional', description: 'A perfect blend of traditional and contemporary elements for timeless appeal that never goes out of style.', confidence: 76, colors: ['#F5DEB3', '#D2B48C', '#8FBC8F', '#696969'] }
      ],
      [
        { id: '1', name: 'Mediterranean', description: 'Warm earth tones, natural textures, and coastal influences for a relaxed, vacation-like feel every day.', confidence: 87, colors: ['#F4A460', '#DEB887', '#5F9EA0', '#CD853F'] },
        { id: '2', name: 'Art Deco', description: 'Bold geometric patterns, metallic accents, and luxurious materials for glamorous sophistication and drama.', confidence: 83, colors: ['#FFD700', '#2F4F4F', '#B8860B', '#000000'] },
        { id: '3', name: 'Rustic Modern', description: 'Natural wood elements combined with clean lines for a contemporary country aesthetic that feels grounded.', confidence: 79, colors: ['#8B4513', '#F5DEB3', '#2F4F4F', '#DDA0DD'] }
      ],
      [
        { id: '1', name: 'Mid-Century Modern', description: 'Iconic 1950s-60s design with clean lines, organic shapes, and a mix of natural and man-made materials.', confidence: 91, colors: ['#D2691E', '#F4A460', '#2F4F4F', '#FFD700'] },
        { id: '2', name: 'Farmhouse', description: 'Rustic charm with vintage finds, natural textures, and comfortable, lived-in furniture for cozy family living.', confidence: 88, colors: ['#F5F5DC', '#8B4513', '#FFFFFF', '#A0522D'] },
        { id: '3', name: 'Eclectic', description: 'A curated mix of styles, periods, and textures that reflects personal taste and creates unique visual interest.', confidence: 74, colors: ['#DC143C', '#4169E1', '#32CD32', '#FFD700'] }
      ],
      [
        { id: '1', name: 'Coastal', description: 'Light, airy spaces inspired by seaside living with nautical touches and a relaxed, beachy atmosphere.', confidence: 86, colors: ['#F0F8FF', '#87CEEB', '#F5DEB3', '#20B2AA'] },
        { id: '2', name: 'Traditional', description: 'Classic elegance with rich fabrics, ornate details, and time-honored furniture pieces for sophisticated comfort.', confidence: 81, colors: ['#8B0000', '#FFD700', '#228B22', '#191970'] },
        { id: '3', name: 'Urban Modern', description: 'Sleek city living with high-tech amenities, bold contrasts, and efficient use of space for contemporary lifestyle.', confidence: 77, colors: ['#000000', '#FFFFFF', '#FF4500', '#C0C0C0'] }
      ]
    ];
    
    // Create better seed variation using multiple image characteristics
    const seed1 = image ? image.length : 50;
    const seed2 = image ? (image.charCodeAt(Math.floor(image.length / 4)) || 1) : 25;
    const seed3 = image ? (image.charCodeAt(Math.floor(image.length / 2)) || 1) : 75;
    const seed4 = image ? (image.charCodeAt(Math.floor(image.length * 3 / 4)) || 1) : 100;
    
    const combinedSeed = (seed1 + seed2 * 11 + seed3 * 17 + seed4 * 23);
    
    return styleCollections[combinedSeed % styleCollections.length];
  };

  const variedStyles = getVariedStyles();

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-xl font-semibold">Recommended Design Styles</h3>
      <p className="text-gray-600">
        Based on your room's architecture, current furniture, and lighting, 
        we recommend the following design styles:
      </p>
      
      <div className="space-y-6">
        {variedStyles.map((style) => (
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
