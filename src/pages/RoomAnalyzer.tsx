
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UploadSection from '@/components/room-analyzer/UploadSection';
import AnalysisResults from '@/components/room-analyzer/AnalysisResults';
import { designStyles, furnitureSuggestions } from '@/components/room-analyzer/data';

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
                furnitureSuggestions={furnitureSuggestions}
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
