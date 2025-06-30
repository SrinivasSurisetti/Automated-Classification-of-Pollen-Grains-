
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Prediction = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setPrediction(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select an image file first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call for demo purposes
    setTimeout(() => {
      const pollenTypes = ['arecaceae', 'anadendanthera', 'urochola', 'combretum', 'cecropia'];
      const randomPrediction = pollenTypes[Math.floor(Math.random() * pollenTypes.length)];
      setPrediction(randomPrediction);
      setIsLoading(false);
      
      toast({
        title: "Prediction Complete",
        description: `The pollen grain type is: ${randomPrediction}`,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-12">
            Pollen Grain Classification
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Pollen Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Pollen grain microscopy"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                
                {/* Upload Icon */}
                <div className="absolute top-4 left-4 bg-green-500 rounded-full p-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right side - Upload Form */}
            <div className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Choose Pollen Image File
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                    
                    {selectedFile && (
                      <div className="text-sm text-gray-600">
                        Selected: {selectedFile.name}
                      </div>
                    )}
                    
                    <Button 
                      onClick={handleSubmit}
                      disabled={!selectedFile || isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    >
                      {isLoading ? "Analyzing..." : "Submit"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Prediction Result */}
              {prediction && (
                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Classification Result
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      The pollen grain type is: {prediction}
                    </p>
                  </CardContent>
                </Card>
              )}
              
              {/* Image Preview */}
              {previewUrl && (
                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Uploaded Image
                    </h3>
                    <img
                      src={previewUrl}
                      alt="Uploaded pollen sample"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
