
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
  // Generate varied styles based on image
  const getVariedStyles = () => {
    const styleVariations = [
      [
        { id: '1', name: 'Modern Minimalist', description: 'Clean lines, neutral colors, and functional furniture create a serene and uncluttered space.', confidence: 92, colors: ['#F5F5F5', '#E8E8E8', '#2C2C2C', '#4A4A4A'] },
        { id: '2', name: 'Scandinavian', description: 'Light woods, cozy textiles, and a focus on hygge create a warm and inviting atmosphere.', confidence: 85, colors: ['#FFFFFF', '#F7F3E9', '#D4B8A3', '#8B6F47'] },
        { id: '3', name: 'Contemporary', description: 'Current trends with bold accents and mixed materials for a fresh, updated look.', confidence: 78, colors: ['#2E3440', '#88C0D0', '#ECEFF4', '#BF616A'] }
      ],
      [
        { id: '1', name: 'Industrial Chic', description: 'Exposed brick, metal fixtures, and raw materials create an urban, loft-like atmosphere.', confidence: 89, colors: ['#3C3C3C', '#8B4513', '#CD853F', '#A9A9A9'] },
        { id: '2', name: 'Bohemian', description: 'Rich textures, vibrant patterns, and eclectic decor for a free-spirited, artistic vibe.', confidence: 82, colors: ['#8B4513', '#CD853F', '#DDA0DD', '#20B2AA'] },
        { id: '3', name: 'Transitional', description: 'A perfect blend of traditional and contemporary elements for timeless appeal.', confidence: 76, colors: ['#F5DEB3', '#D2B48C', '#8FBC8F', '#696969'] }
      ],
      [
        { id: '1', name: 'Mediterranean', description: 'Warm earth tones, natural textures, and coastal influences for a relaxed, vacation-like feel.', confidence: 87, colors: ['#F4A460', '#DEB887', '#5F9EA0', '#CD853F'] },
        { id: '2', name: 'Art Deco', description: 'Bold geometric patterns, metallic accents, and luxurious materials for glamorous sophistication.', confidence: 83, colors: ['#FFD700', '#2F4F4F', '#B8860B', '#000000'] },
        { id: '3', name: 'Rustic Modern', description: 'Natural wood elements combined with clean lines for a contemporary country aesthetic.', confidence: 79, colors: ['#8B4513', '#F5DEB3', '#2F4F4F', '#DDA0DD'] }
      ]
    ];
    
    const seed = image ? image.length % 100 : 50;
    return styleVariations[seed % styleVariations.length];
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
