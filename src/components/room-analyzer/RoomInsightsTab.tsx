
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Home, Layers3, Wrench } from "lucide-react";
import AmenitiesSummary from "./AmenitiesSummary";

interface RoomInsightsTabProps {
  image?: string;
}

export default function RoomInsightsTab({ image }: RoomInsightsTabProps) {
  // Generate varied room insights based on image
  const getRandomInsights = () => {
    const widths = [10, 12, 14, 16, 18];
    const lengths = [12, 14, 16, 18, 20];
    const conditions = [
      "No major cracks or water damage detected. Typical of a well-kept living room.",
      "Excellent structural condition with modern finishes throughout.",
      "Good overall condition with minor wear consistent with normal use.",
      "Well-maintained space with quality construction materials.",
      "Recently updated with contemporary fixtures and fittings."
    ];
    const systems = [
      "Electrical, plumbing, and HVAC appear standard; further inspection recommended for exact status.",
      "Modern electrical and plumbing systems with efficient HVAC installation.",
      "Updated electrical panel and plumbing fixtures with central air conditioning.",
      "Contemporary systems with smart home integration potential.",
      "Energy-efficient systems with proper ventilation and lighting."
    ];
    
    const seed = image ? image.length % 100 : 50;
    
    return {
      width: widths[seed % widths.length],
      length: lengths[(seed * 2) % lengths.length],
      condition: conditions[(seed * 3) % conditions.length],
      systems: systems[(seed * 4) % systems.length]
    };
  };

  const insights = getRandomInsights();
  const estimatedArea = insights.width * insights.length;
  
  const infrastructureSummary = [
    {
      icon: <Home size={20} className="text-design-charcoal" />,
      label: "Structural Integrity",
      note: insights.condition
    },
    {
      icon: <Wrench size={20} className="text-design-charcoal" />,
      label: "General Systems",
      note: insights.systems
    }
  ];

  // Generate varied amenity recommendations
  const getRandomAmenities = () => {
    const amenityOptions = [
      [
        {
          title: "Air Purifier",
          description: "Improves air quality, ideal for medium-sized rooms.",
          images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80"]
        },
        {
          title: "Standing Lamp",
          description: "Adds warmth and supports moderate natural lighting.",
          images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80"]
        },
        {
          title: "Indoor Plants",
          description: "Enhances air quality and aesthetics. Suits rooms with moderate light.",
          images: ["https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80"]
        }
      ],
      [
        {
          title: "Smart Thermostat",
          description: "Optimize energy efficiency with intelligent temperature control.",
          images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80"]
        },
        {
          title: "Accent Lighting",
          description: "Create ambiance with adjustable LED lighting solutions.",
          images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80"]
        },
        {
          title: "Storage Solutions",
          description: "Maximize space with stylish organizational furniture.",
          images: ["https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80"]
        }
      ],
      [
        {
          title: "Sound System",
          description: "Enhance your space with wireless audio technology.",
          images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80"]
        },
        {
          title: "Window Treatments",
          description: "Control light and privacy with modern blinds or curtains.",
          images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80"]
        },
        {
          title: "Area Rugs",
          description: "Define spaces and add comfort with quality floor coverings.",
          images: ["https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80"]
        }
      ]
    ];
    
    const seed = image ? image.length % 100 : 50;
    return amenityOptions[seed % amenityOptions.length];
  };

  const amenityExamples = getRandomAmenities();

  return (
    <div className="space-y-7">
      <AmenitiesSummary />
      <Card>
        <CardHeader className="border-b pb-4">
          <CardTitle className="flex gap-2 items-center text-lg font-serif">
            <Ruler size={22} className="text-design-terracotta" />
            Estimated Room Dimensions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <div className="text-gray-700 text-base mb-3">
            <strong>Width:</strong> {insights.width}' <br />
            <strong>Length:</strong> {insights.length}' <br />
            <strong>Approx. Area:</strong> {estimatedArea} sq ft &nbsp;
            <span className="ml-2 text-xs bg-design-cream px-2 py-0.5 rounded font-semibold text-design-charcoal">
              {estimatedArea < 150 ? 'Small Room' : estimatedArea < 250 ? 'Medium-sized Room' : 'Large Room'}
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="border-b pb-4">
          <CardTitle className="flex gap-2 items-center text-lg font-serif">
            <Layers3 size={22} className="text-design-charcoal" />
            Infrastructure Condition (Overview)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <ul className="space-y-4">
            {infrastructureSummary.map((item, idx) => (
              <li className="flex gap-3 items-start" key={idx}>
                <span>{item.icon}</span>
                <span>
                  <span className="font-medium">{item.label}:</span>{" "}
                  <span className="text-gray-700">{item.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="border-b pb-4">
          <CardTitle className="flex gap-2 items-center text-lg font-serif">
            <Layers3 size={22} className="text-design-terracotta" />
            Suggested Amenities & Decor
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <ul className="space-y-4">
            {amenityExamples.map((amenity, idx) => (
              <li key={amenity.title} className="flex gap-4 items-start">
                <div>
                  <div className="font-semibold text-base">{amenity.title}</div>
                  <div className="text-gray-700 mb-1">{amenity.description}</div>
                  <div className="flex gap-2">
                    {amenity.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        className="w-16 h-16 object-cover rounded-lg border"
                        alt={`${amenity.title} example`}
                      />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
