
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";

// Mock data for design styles
const designStyles = [
  { 
    id: 'scandinavian', 
    name: 'Scandinavian',
    description: 'Clean lines, minimalism, and functionality with a focus on light colors and natural materials.',
    confidence: 85,
    colors: ['#F9F9F9', '#E0E0E0', '#CABD9A', '#545454', '#7797A0']
  },
  { 
    id: 'minimalist', 
    name: 'Minimalist',
    description: 'Simplicity in form and function, with open spaces, clean lines, and monochromatic color palette.',
    confidence: 65,
    colors: ['#FFFFFF', '#F5F5F5', '#E4E4E4', '#333333', '#000000']
  },
  { 
    id: 'industrial', 
    name: 'Industrial',
    description: 'Raw and unfinished aesthetic with exposed brick, ductwork, wood, and metal surfaces.',
    confidence: 45,
    colors: ['#D7D0C8', '#AF9F8C', '#725E4A', '#4B4239', '#333333']
  }
];

// Mock data for furniture suggestions
const furnitureSuggestions = [
  {
    id: 1,
    name: 'Eames-Inspired Lounge Chair',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80',
    price: '$399'
  },
  {
    id: 2,
    name: 'Minimalist Coffee Table',
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?w=500&q=80',
    price: '$249'
  },
  {
    id: 3,
    name: 'Scandinavian Floor Lamp',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=500&q=80',
    price: '$129'
  },
  {
    id: 4,
    name: 'Modern Area Rug',
    image: 'https://images.unsplash.com/photo-1575414003880-7a77b5cd7459?w=500&q=80',
    price: '$199'
  }
];

const RoomAnalyzer = () => {
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<boolean>(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!image) {
      toast({
        title: "No image selected",
        description: "Please select an image of your room to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setAnalyzing(true);
      
      // Simulate analysis process
      setTimeout(() => {
        setAnalyzing(false);
        setResults(true);
        toast({
          title: "Analysis complete!",
          description: "We've analyzed your room and found some great recommendations.",
        });
      }, 2500);
    }, 1500);
  };

  const resetAnalysis = () => {
    setImage(null);
    setResults(false);
  };

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Room Analyzer</h1>
              <p className="text-lg text-gray-600">
                Upload a photo of your room to get AI-powered design suggestions.
              </p>
            </div>

            {!results ? (
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <form onSubmit={handleUpload} className="space-y-8">
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Room Photo
                      </label>
                      
                      {image ? (
                        <div className="relative">
                          <img 
                            src={image} 
                            alt="Room preview" 
                            className="w-full h-80 object-cover rounded-md"
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm" 
                            className="absolute top-2 right-2"
                            onClick={() => setImage(null)}
                          >
                            Change Photo
                          </Button>
                        </div>
                      ) : (
                        <div 
                          className="border-2 border-dashed border-gray-300 rounded-md p-12 text-center cursor-pointer hover:border-design-terracotta transition-colors"
                          onClick={() => document.getElementById('room-photo')?.click()}
                        >
                          <input
                            id="room-photo"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                          <div className="space-y-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 mx-auto text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-sm text-gray-600">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              JPG, PNG, or GIF (max. 10MB)
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-design-terracotta hover:bg-design-terracotta/90 text-white"
                        disabled={!image || uploading || analyzing}
                      >
                        {uploading ? 'Uploading...' : analyzing ? 'Analyzing...' : 'Analyze My Room'}
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        By uploading, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-10 animate-fade-in">
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-serif font-bold">Analysis Results</h2>
                  <Button variant="outline" size="sm" onClick={resetAnalysis}>
                    Analyze Another Room
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-2">
                    <div className="sticky top-6">
                      <img 
                        src={image!} 
                        alt="Analyzed room" 
                        className="w-full rounded-lg shadow-md mb-4"
                      />
                      
                      <Card>
                        <CardContent className="pt-6">
                          <h3 className="font-serif text-lg font-semibold mb-3">Room Analysis</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Room Type</span>
                                <span className="font-medium">Living Room</span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Size Estimate</span>
                                <span className="font-medium">Medium (12' x 14')</span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Natural Light</span>
                                <span className="font-medium">Moderate</span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Current Style</span>
                                <span className="font-medium">Transitional</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <Tabs defaultValue="styles">
                      <TabsList className="w-full mb-6">
                        <TabsTrigger value="styles" className="flex-1">Styles</TabsTrigger>
                        <TabsTrigger value="colors" className="flex-1">Color Palette</TabsTrigger>
                        <TabsTrigger value="furniture" className="flex-1">Furniture</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="styles" className="space-y-6">
                        <h3 className="font-serif text-xl font-semibold">Recommended Design Styles</h3>
                        <p className="text-gray-600">
                          Based on your room's architecture, current furniture, and lighting, 
                          we recommend the following design styles:
                        </p>
                        
                        <div className="space-y-6">
                          {designStyles.map((style) => (
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
                      </TabsContent>
                      
                      <TabsContent value="colors" className="space-y-6">
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
                                  <div className="w-full h-16 bg-[#F7F3EB] rounded-l-md"></div>
                                  <div className="w-full h-16 bg-[#D4CDBD]"></div>
                                  <div className="w-full h-16 bg-[#94A3B8]"></div>
                                  <div className="w-full h-16 bg-[#3D405B]"></div>
                                  <div className="w-full h-16 bg-[#81B29A] rounded-r-md"></div>
                                </div>
                                <div className="flex justify-between text-xs px-1 mt-1">
                                  <span>#F7F3EB</span>
                                  <span>#D4CDBD</span>
                                  <span>#94A3B8</span>
                                  <span>#3D405B</span>
                                  <span>#81B29A</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mt-2">
                                A harmonious blend of neutral tones with accents of blue and sage green.
                                This palette creates a calming atmosphere while maintaining visual interest.
                              </p>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-5">
                            <h4 className="font-serif text-lg font-semibold mb-4">Accent Colors</h4>
                            <div className="space-y-4">
                              <div className="flex space-x-3">
                                <div className="flex flex-col items-center">
                                  <div className="w-12 h-12 rounded-full bg-[#E07A5F]"></div>
                                  <span className="text-xs mt-1">#E07A5F</span>
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="w-12 h-12 rounded-full bg-[#F2CC8F]"></div>
                                  <span className="text-xs mt-1">#F2CC8F</span>
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="w-12 h-12 rounded-full bg-[#5E6472]"></div>
                                  <span className="text-xs mt-1">#5E6472</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mt-2">
                                Use these accent colors for decorative elements like pillows, artwork, 
                                or small furniture pieces to add personality.
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="furniture" className="space-y-6">
                        <h3 className="font-serif text-xl font-semibold">Furniture Recommendations</h3>
                        <p className="text-gray-600">
                          Based on your room's style and dimensions, here are some furniture pieces that would complement your space:
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {furnitureSuggestions.map((item) => (
                            <div key={item.id} className="border rounded-lg overflow-hidden">
                              <div className="h-48">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-4">
                                <h4 className="font-medium mb-1">{item.name}</h4>
                                <p className="text-sm text-gray-600">{item.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-center">
                          <Button variant="outline">
                            View More Suggestions
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RoomAnalyzer;
