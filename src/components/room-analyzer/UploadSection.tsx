
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface UploadSectionProps {
  image: string | null;
  setImage: (image: string | null) => void;
  handleUpload: (e: React.FormEvent) => void;
  uploading: boolean;
  analyzing: boolean;
}

const UploadSection = ({ 
  image, 
  setImage, 
  handleUpload, 
  uploading, 
  analyzing 
}: UploadSectionProps) => {
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

  return (
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
  );
};

export default UploadSection;
