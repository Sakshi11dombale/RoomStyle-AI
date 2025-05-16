
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { House, Bolt, Droplet, Wrench, Fan, Thermometer, Lightbulb, AlertTriangle, Info } from "lucide-react";

const sections = [
  {
    icon: House,
    title: "Structural Integrity",
    items: [
      "Foundation: Check for cracks, settling, water damage, or signs of shifting.",
      "Framing: Walls, beams, and joists should be solid and free from rot or termite damage.",
      "Roof: Look for leaks, sagging, missing shingles, or water damage.",
    ],
  },
  {
    icon: Bolt,
    title: "Electrical System",
    items: [
      "Wiring: Should be up to code. Look out for outdated wiring (e.g., knob-and-tube, aluminum).",
      "Outlets & Fixtures: Ensure all are functional and properly grounded.",
      "Breaker Panel: Should be labeled, clean, and show no signs of overheating.",
    ],
  },
  {
    icon: Droplet,
    title: "Plumbing System",
    items: [
      "Pipes: Inspect for leaks, corrosion, or outdated materials (like lead or galvanized steel).",
      "Water Pressure: Should be consistent and adequate.",
      "Water Heater: Check its age, condition, and if capacity fits household needs.",
    ],
  },
  {
    icon: Thermometer,
    title: "HVAC (Heating, Ventilation, Air Conditioning)",
    items: [
      "Furnace & AC Units: Operational and regularly maintained.",
      "Ductwork: Look for blockages, leaks, or poor insulation.",
      "Ventilation: Ensure airflow in attics, crawlspaces, and bathrooms.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Insulation & Energy Efficiency",
    items: [
      "Wall & Attic Insulation: Helps with temperature regulation.",
      "Windows & Doors: Should be sealed to prevent drafts.",
      "Energy Rating: Consider a full audit if available.",
    ],
  },
  {
    icon: Droplet,
    title: "Moisture & Drainage",
    items: [
      "Basement/Crawlspace: Dry, with no signs of water intrusion or mold.",
      "Gutters & Downspouts: Direct water away from the foundation.",
      "Grading: Land should slope away from the house.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Safety Systems",
    items: [
      "Smoke & Carbon Monoxide Detectors: Installed and functioning.",
      "Fire Escapes/Exits: Especially for multi-story homes.",
      "Asbestos/Radon/Lead Paint: Test especially in older homes.",
    ],
  },
];

export default function InfrastructureSummary() {
  return (
    <Card className="mt-14 border shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-serif">
          <Info size={22} className="text-design-terracotta" />
          Infrastructure Condition of a House
        </CardTitle>
        <span className="text-sm text-muted-foreground">
          The following is a summary of essential systems and components that make your home safe and livable.
        </span>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {sections.map(({ icon: Icon, title, items }, i) => (
            <div className="py-5 flex items-start gap-4" key={i}>
              <div className="flex-shrink-0 mt-1">
                <Icon size={28} className="text-design-charcoal opacity-80" />
              </div>
              <div>
                <div className="font-semibold text-design-charcoal mb-1">{title}</div>
                <ul className="pl-3 space-y-1 text-gray-700 text-[0.97rem] leading-snug">
                  {items.map((item, ii) => (
                    <li key={ii} className="list-disc ml-4">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
