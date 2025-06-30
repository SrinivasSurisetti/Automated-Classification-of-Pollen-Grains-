
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Project</h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Pollen Grain Classification System
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our advanced web application utilizes cutting-edge deep learning technology 
                  to accurately identify and classify pollen grains from microscopic images. 
                  This tool is specifically designed to assist researchers, botanists, and 
                  plant scientists in their botanical studies and research.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• High-accuracy pollen grain identification using deep learning models</li>
                  <li>• Support for multiple pollen types and botanical families</li>
                  <li>• User-friendly web interface for easy image upload</li>
                  <li>• Instant analysis and classification results</li>
                  <li>• Designed for scientific research and botanical studies</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Supported Pollen Types
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800">Arecaceae</h4>
                    <p className="text-sm text-green-600">Palm family pollen</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800">Anadendanthera</h4>
                    <p className="text-sm text-blue-600">Legume family pollen</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800">Urochola</h4>
                    <p className="text-sm text-purple-600">Grass family pollen</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800">Combretum</h4>
                    <p className="text-sm text-orange-600">Bushwillow pollen</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800">Cecropia</h4>
                    <p className="text-sm text-red-600">Trumpet tree pollen</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">And More</h4>
                    <p className="text-sm text-gray-600">Expanding database</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Upload Image</h3>
                    <p className="text-gray-600 text-sm">
                      Upload a clear microscopic image of a pollen grain
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">AI Analysis</h3>
                    <p className="text-gray-600 text-sm">
                      Our deep learning model analyzes the image features
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Get Results</h3>
                    <p className="text-gray-600 text-sm">
                      Receive accurate classification and identification
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
