
import React from "react";
import {
  Bed,
  Bath,
  Car,
  Flower,
  Balcony,
  Smartphone,
  Kitchen,
  Thermometer,
  Wifi,
  Shield,
} from "lucide-react";

const AMENITIES = [
  { icon: Bed, label: "Bedrooms", value: "3" },
  { icon: Bath, label: "Bathrooms", value: "2" },
  { icon: Car, label: "Parking", value: "1 Covered Spot" },
  { icon: Flower, label: "Garden", value: "Yes" },
  { icon: Balcony, label: "Balcony", value: "1 Large" },
  { icon: Smartphone, label: "Smart Devices", value: "Smart Thermostat, Assistant" },
  { icon: Kitchen, label: "Modular Kitchen", value: "Yes" },
  { icon: Thermometer, label: "Heating/Cooling", value: "Central AC & Heater" },
  { icon: Wifi, label: "Internet", value: "High-speed Fiber" },
  { icon: Shield, label: "Security Features", value: "Smart Lock & CCTV" },
];

export default function AmenitiesSummary() {
  return (
    <div className="mb-7">
      <div className="font-serif font-semibold text-lg mb-3">Amenities Summary</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {AMENITIES.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 bg-design-cream/70 rounded-lg px-4 py-3">
            <Icon className="text-design-terracotta" size={22} aria-hidden="true" />
            <span className="font-medium w-36">{label}:</span>
            <span className="text-design-charcoal">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
