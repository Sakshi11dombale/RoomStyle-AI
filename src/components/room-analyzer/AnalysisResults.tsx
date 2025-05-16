import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoomDetails from './RoomDetails';
import StylesTab from './StylesTab';
import ColorsTab from './ColorsTab';
import FurnitureTab from './FurnitureTab';
import InfrastructureSummary from './InfrastructureSummary';

interface DesignStyle {
  id: string;
  name: string;
  description: string;
  confidence: number;
  colors: string[];
}

interface FurnitureSuggestion {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

interface AnalysisResultsProps {
  image: string;
  resetAnalysis: () => void;
  designStyles: DesignStyle[];
  furnitureSuggestions: FurnitureSuggestion[];
  failedImages: Record<number, boolean>;
  handleImageError: (id: number) => void;
}

const AnalysisResults = ({ 
  image, 
  resetAnalysis, 
  designStyles, 
  furnitureSuggestions, 
  failedImages, 
  handleImageError 
}: AnalysisResultsProps) => {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-serif font-bold">Analysis Results</h2>
        <Button variant="outline" size="sm" onClick={resetAnalysis}>
          Analyze Another Room
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <RoomDetails image={image} />
        </div>
        
        <div className="md:col-span-3">
          <Tabs defaultValue="styles">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="styles" className="flex-1">Styles</TabsTrigger>
              <TabsTrigger value="colors" className="flex-1">Color Palette</TabsTrigger>
              <TabsTrigger value="furniture" className="flex-1">Furniture</TabsTrigger>
            </TabsList>
            
            <TabsContent value="styles">
              <StylesTab designStyles={designStyles} />
            </TabsContent>
            
            <TabsContent value="colors">
              <ColorsTab />
            </TabsContent>
            
            <TabsContent value="furniture">
              <FurnitureTab 
                furnitureSuggestions={furnitureSuggestions} 
                failedImages={failedImages}
                handleImageError={handleImageError}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Added Infrastructure Condition Summary below analysis results */}
      <InfrastructureSummary />
    </div>
  );
};

export default AnalysisResults;
