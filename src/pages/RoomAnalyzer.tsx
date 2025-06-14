
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UploadSection from '@/components/room-analyzer/UploadSection';
import AnalysisResults from '@/components/room-analyzer/AnalysisResults';
import { designStyles } from '@/components/room-analyzer/data';

const RoomAnalyzer = () => {
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<boolean>(false);
  const { toast } = useToast();
  
  // Add state to track if images fail to load
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setFailedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  // Generate varied furniture suggestions with much better variation
  const generateFurnitureSuggestions = (imageData: string) => {
    const furnitureCollections = [
      // Modern Bedroom Collection
      [
        { id: 1, name: "Platform Bed Frame", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", price: "$899", category: "Bedroom" },
        { id: 2, name: "Floating Nightstands", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$299", category: "Bedroom" },
        { id: 3, name: "Memory Foam Mattress", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80", price: "$699", category: "Bedroom" },
        { id: 4, name: "Accent Armchair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$449", category: "Seating" },
        { id: 5, name: "Full-Length Mirror", image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=400&q=80", price: "$179", category: "Decor" },
        { id: 6, name: "Modern Dresser", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$549", category: "Storage" }
      ],
      // Contemporary Living Room Collection
      [
        { id: 7, name: "Sectional Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", price: "$1299", category: "Seating" },
        { id: 8, name: "Glass Coffee Table", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", price: "$399", category: "Tables" },
        { id: 9, name: "Arc Floor Lamp", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", price: "$189", category: "Lighting" },
        { id: 10, name: "Entertainment Center", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$649", category: "Storage" },
        { id: 11, name: "Velvet Accent Chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$329", category: "Seating" },
        { id: 12, name: "Geometric Area Rug", image: "https://images.unsplash.com/photo-1584627904197-cd79cfbc6ccf?w=400&q=80", price: "$249", category: "Decor" }
      ],
      // Kitchen & Dining Collection
      [
        { id: 13, name: "Marble Dining Table", image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&q=80", price: "$799", category: "Tables" },
        { id: 14, name: "Counter Height Stools", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$149", category: "Seating" },
        { id: 15, name: "Kitchen Island", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", price: "$459", category: "Storage" },
        { id: 16, name: "Pendant Light Set", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", price: "$89", category: "Lighting" },
        { id: 17, name: "Pantry Cabinet", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$349", category: "Storage" },
        { id: 18, name: "Ceramic Vase Set", image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=400&q=80", price: "$79", category: "Decor" }
      ],
      // Home Office Collection
      [
        { id: 19, name: "Standing Desk", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$699", category: "Tables" },
        { id: 20, name: "Ergonomic Task Chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$399", category: "Seating" },
        { id: 21, name: "Modular Bookshelf", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$249", category: "Storage" },
        { id: 22, name: "Adjustable Desk Lamp", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", price: "$129", category: "Lighting" },
        { id: 23, name: "Mobile Filing Unit", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$199", category: "Storage" },
        { id: 24, name: "Desk Organizer Set", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80", price: "$49", category: "Decor" }
      ],
      // Traditional Bedroom Collection
      [
        { id: 25, name: "Four-Poster Bed", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", price: "$1199", category: "Bedroom" },
        { id: 26, name: "Vintage Nightstands", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$399", category: "Bedroom" },
        { id: 27, name: "Quilted Bedding Set", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80", price: "$299", category: "Bedroom" },
        { id: 28, name: "Upholstered Bench", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$249", category: "Seating" },
        { id: 29, name: "Antique Mirror", image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=400&q=80", price: "$299", category: "Decor" },
        { id: 30, name: "Wooden Armoire", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$799", category: "Storage" }
      ],
      // Minimalist Living Collection
      [
        { id: 31, name: "Low Profile Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", price: "$999", category: "Seating" },
        { id: 32, name: "Simple Wood Coffee Table", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", price: "$299", category: "Tables" },
        { id: 33, name: "Minimalist Floor Lamp", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", price: "$149", category: "Lighting" },
        { id: 34, name: "Hidden Storage Ottoman", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$199", category: "Storage" },
        { id: 35, name: "Single Accent Chair", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$399", category: "Seating" },
        { id: 36, name: "Neutral Throw Blanket", image: "https://images.unsplash.com/photo-1584627904197-cd79cfbc6ccf?w=400&q=80", price: "$89", category: "Decor" }
      ],
      // Rustic Collection
      [
        { id: 37, name: "Reclaimed Wood Bed", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", price: "$1099", category: "Bedroom" },
        { id: 38, name: "Barn Door Wardrobe", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$899", category: "Storage" },
        { id: 39, name: "Farmhouse Dining Set", image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&q=80", price: "$1299", category: "Tables" },
        { id: 40, name: "Mason Jar Chandelier", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", price: "$259", category: "Lighting" },
        { id: 41, name: "Leather Recliner", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$799", category: "Seating" },
        { id: 42, name: "Woven Basket Set", image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=400&q=80", price: "$129", category: "Decor" }
      ],
      // Industrial Collection
      [
        { id: 43, name: "Metal Frame Bed", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", price: "$799", category: "Bedroom" },
        { id: 44, name: "Pipe Clothing Rack", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$199", category: "Storage" },
        { id: 45, name: "Industrial Bar Stools", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80", price: "$299", category: "Seating" },
        { id: 46, name: "Edison Bulb Pendant", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", price: "$149", category: "Lighting" },
        { id: 47, name: "Metal Bookcase", image: "https://images.unsplash.com/photo-1586772002681-b8b3c80755a5?w=400&q=80", price: "$399", category: "Storage" },
        { id: 48, name: "Concrete Planters", image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=400&q=80", price: "$89", category: "Decor" }
      ]
    ];
    
    // Create a hash from the image string
    let hash = 0;
    for (let i = 0; i < imageData.length; i++) {
      const char = imageData.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    // Use current timestamp for additional randomness
    const timestamp = Date.now();
    const combinedSeed = Math.abs(hash + timestamp);
    
    return furnitureCollections[combinedSeed % furnitureCollections.length];
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
    setFailedImages({});
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
              <UploadSection 
                image={image}
                setImage={setImage}
                handleUpload={handleUpload}
                uploading={uploading}
                analyzing={analyzing}
              />
            ) : (
              <AnalysisResults 
                image={image!}
                resetAnalysis={resetAnalysis}
                designStyles={designStyles}
                furnitureSuggestions={generateFurnitureSuggestions(image!)}
                failedImages={failedImages}
                handleImageError={handleImageError}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RoomAnalyzer;
