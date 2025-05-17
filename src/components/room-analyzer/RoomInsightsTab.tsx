
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Home, Layers3, Wrench } from "lucide-react";
import AmenitiesSummary from "./AmenitiesSummary";

// Demo amenity recommendations (can be expanded or made dynamic)
const amenityExamples = [
  {
    title: "Air Purifier",
    description: "Improves air quality, ideal for medium-sized rooms.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80",
    ]
  },
  {
    title: "Standing Lamp",
    description: "Adds warmth and supports moderate natural lighting.",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80",
    ]
  },
  {
    title: "Indoor Plants",
    description: "Enhances air quality and aesthetics. Suits rooms with moderate light.",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80",
    ]
  }
];

export default function RoomInsightsTab() {
  // These would be dynamic with a real analyzer, here it's static per RoomDetails sample
  const estimatedWidth = 12;
  const estimatedLength = 14;
  const estimatedArea = estimatedWidth * estimatedLength;
  const infrastructureSummary = [
    {
      icon: <Home size={20} className="text-design-charcoal" />,
      label: "Structural Integrity",
      note: "No major cracks or water damage detected. Typical of a well-kept living room."
    },
    {
      icon: <Wrench size={20} className="text-design-charcoal" />,
      label: "General Systems",
      note: "Electrical, plumbing, and HVAC appear standard; further inspection recommended for exact status."
    }
  ];

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
            <strong>Width:</strong> {estimatedWidth}' <br />
            <strong>Length:</strong> {estimatedLength}' <br />
            <strong>Approx. Area:</strong> {estimatedArea} sq ft &nbsp;
            <span className="ml-2 text-xs bg-design-cream px-2 py-0.5 rounded font-semibold text-design-charcoal">
              Medium-sized Room
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
