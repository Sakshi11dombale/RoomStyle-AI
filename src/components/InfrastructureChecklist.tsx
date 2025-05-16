
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const CHECKLIST_ITEMS = [
  {
    section: "Structural Integrity",
    items: [
      "Foundation is free of major cracks or water damage",
      "Framing (walls, beams, joists) shows no rot or termite issues",
      "Roof is intact with no leaks or visible damage",
    ],
  },
  {
    section: "Electrical System",
    items: [
      "Wiring is modern and up to code",
      "All outlets & fixtures are safe and functional",
      "Breaker panel is clearly labeled and shows no overheating",
    ],
  },
  {
    section: "Plumbing System",
    items: [
      "No leaky or corroded pipes",
      "Adequate and consistent water pressure",
      "Water heater is in good condition and sufficient for home size",
    ],
  },
  {
    section: "HVAC",
    items: [
      "Heating and A/C units operate normally and are maintained",
      "Ductwork is clean and not leaking",
      "Proper ventilation in attics, crawlspaces, and bathrooms",
    ],
  },
  {
    section: "Insulation & Energy Efficiency",
    items: [
      "Walls and attic are properly insulated",
      "Windows and doors are sealed, minimal drafts",
      "Energy rating/audit available (if applicable)",
    ],
  },
  {
    section: "Moisture & Drainage",
    items: [
      "Basement or crawlspace is dry, no mold or water stains",
      "Gutters & downspouts direct water away from house",
      "Ground slopes away from the foundation",
    ],
  },
  {
    section: "Safety Systems",
    items: [
      "Smoke & carbon monoxide detectors are installed and working",
      "Adequate fire escapes or exits",
      "No asbestos, lead paint, or radon (especially in older homes)",
    ],
  },
];

export default function InfrastructureChecklist() {
  // Default checklist state: all unchecked
  const [checked, setChecked] = useState(() =>
    CHECKLIST_ITEMS.flatMap(group => group.items.map(() => false))
  );

  // Update a single checklist box
  function handleCheck(idx: number, value: boolean) {
    setChecked((prev) => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  }

  // Calculate progress
  const total = checked.length;
  const completed = checked.filter(Boolean).length;

  // Compose items with absolute indices
  let runningIdx = 0;

  return (
    <Card className="max-w-2xl mx-auto mb-10 shadow-lg border">
      <CardHeader>
        <CardTitle className="text-xl font-serif mb-1">
          Infrastructure Condition Checklist
        </CardTitle>
        <p className="text-sm text-muted-foreground font-normal">
          Assess your house’s key systems. Mark each statement as you review.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="w-full flex items-center gap-2 mb-4">
          <span className="text-xs text-muted-foreground">
            {completed} of {total} items checked
          </span>
          <div className="flex-1 h-2 bg-muted rounded overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>
        <div className="space-y-7">
          {CHECKLIST_ITEMS.map((group, gIdx) => (
            <div key={group.section}>
              <div className="font-semibold text-sm mb-2">{group.section}</div>
              <ul className="space-y-2 pl-1">
                {group.items.map((item, iIdx) => {
                  const itemIdx = runningIdx;
                  runningIdx++;
                  return (
                    <li key={itemIdx} className="flex items-center gap-3">
                      <Checkbox
                        id={`icheck-${itemIdx}`}
                        checked={checked[itemIdx]}
                        onCheckedChange={(val) =>
                          handleCheck(itemIdx, Boolean(val))
                        }
                        className="border-primary"
                      />
                      <label htmlFor={`icheck-${itemIdx}`} className="text-base cursor-pointer">
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
