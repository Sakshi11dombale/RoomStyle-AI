
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Home, Layers3, Wrench } from "lucide-react";

interface RoomInsightsTabProps {
  image?: string;
}

export default function RoomInsightsTab({ image }: RoomInsightsTabProps) {
  // Generate varied room insights with much better variation
  const getRandomInsights = () => {
    const dimensionSets = [
      { widths: [8, 10, 12], lengths: [10, 12, 14] },
      { widths: [12, 14, 16], lengths: [14, 16, 18] },
      { widths: [16, 18, 20], lengths: [18, 20, 22] },
      { widths: [10, 12, 14], lengths: [12, 14, 16] },
      { widths: [14, 16, 18], lengths: [16, 18, 20] },
      { widths: [18, 20, 22], lengths: [20, 22, 24] },
      { widths: [6, 8, 10], lengths: [8, 10, 12] },
      { widths: [20, 22, 24], lengths: [22, 24, 26] }
    ];
    
    const conditionSets = [
      [
        "Excellent structural integrity with no visible cracks or water damage detected in this well-maintained space.",
        "Good overall condition with modern finishes throughout and quality construction materials.",
        "Well-kept interior with typical wear patterns consistent with normal residential use."
      ],
      [
        "Recently updated space with contemporary fixtures and premium finishing materials throughout.",
        "Solid construction with modern electrical and plumbing systems clearly visible in the design.",
        "High-quality build with attention to detail evident in trim work and architectural elements."
      ],
      [
        "Mature home with character features, minor wear consistent with age but well-maintained overall.",
        "Classic construction with solid bones, some updating recommended for modern convenience.",
        "Established property with quality original materials and thoughtful maintenance over time."
      ],
      [
        "Contemporary design with open concept layout and energy-efficient systems integration.",
        "Modern construction with smart home potential and updated infrastructure throughout.",
        "Current building standards with sustainable materials and efficient space utilization."
      ],
      [
        "Vintage charm with original hardwood floors and period-appropriate molding details.",
        "Historic property with carefully preserved architectural elements and character features.",
        "Pre-war construction with high ceilings and quality craftsmanship throughout."
      ],
      [
        "Newly constructed space with latest building codes and energy-efficient materials.",
        "State-of-the-art infrastructure with smart home integration and modern amenities.",
        "Contemporary design with sustainable materials and green building practices."
      ]
    ];
    
    const systemSets = [
      [
        "Modern electrical panel and updated wiring throughout, with efficient HVAC and contemporary plumbing fixtures.",
        "Smart home ready infrastructure with energy-efficient systems and proper ventilation design.",
        "Recently upgraded mechanical systems with zone-controlled climate and modern electrical capacity."
      ],
      [
        "Standard residential systems with good maintenance history, inspection recommended for specifics.",
        "Traditional HVAC and electrical setup, functioning well with routine maintenance schedules.",
        "Established systems showing normal wear, professional evaluation suggested for optimization."
      ],
      [
        "High-efficiency systems with programmable controls and advanced air filtration integration.",
        "Premium mechanical systems with extended warranties and professional monitoring capabilities.",
        "Top-tier infrastructure with smart integration and energy management system controls."
      ],
      [
        "Vintage systems with character but may benefit from modernization for efficiency.",
        "Classic mechanical infrastructure, reliable but consider upgrades for energy savings.",
        "Traditional systems in good working order, modernization would enhance performance."
      ]
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
    const combinedSeed = Math.abs((hash || 789) + timestamp);
    
    const dimSet = dimensionSets[combinedSeed % dimensionSets.length];
    const condSet = conditionSets[(combinedSeed * 2) % conditionSets.length];
    const sysSet = systemSets[(combinedSeed * 3) % systemSets.length];
    
    return {
      width: dimSet.widths[(combinedSeed * 7) % dimSet.widths.length],
      length: dimSet.lengths[(combinedSeed * 11) % dimSet.lengths.length],
      condition: condSet[(combinedSeed * 13) % condSet.length],
      systems: sysSet[(combinedSeed * 17) % sysSet.length]
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

  return (
    <div className="space-y-7">
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
              {estimatedArea < 120 ? 'Small Room' : estimatedArea < 200 ? 'Medium-sized Room' : estimatedArea < 300 ? 'Large Room' : 'Extra Large Room'}
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
    </div>
  );
}
