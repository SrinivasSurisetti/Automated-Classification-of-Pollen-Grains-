
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Pollen Grain Prediction",
      description: "We assist researchers and scientists in the field of botany and plant sciences by providing interface for users to upload images of pollen grains and give predictions on the type of pollen present in the image",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      overlay: "bg-gradient-to-r from-yellow-400/90 via-orange-400/90 to-red-400/90"
    },
    {
      title: "Pollen Grain Prediction", 
      description: "We assist researchers and scientists in the field of botany and plant sciences by providing interface for users to upload images of pollen grains and give predictions on the type of pollen present in the image",
      backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      overlay: "bg-gradient-to-r from-green-600/90 via-teal-600/90 to-blue-600/90"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Carousel */}
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={`absolute inset-0 ${slide.overlay}`} />
            
            <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-300">
                  {slide.description}
                </p>
                
                <div className="flex justify-center space-x-4 animate-fade-in animation-delay-600">
                  <div className="h-2 w-8 bg-white rounded-full"></div>
                  <div className="h-2 w-16 bg-orange-400 rounded-full"></div>
                  <div className="h-2 w-8 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-20"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-20"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Advanced Pollen Classification Technology
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our cutting-edge web application leverages deep learning and computer vision 
                to accurately identify and classify pollen grains from microscopic images. 
                Built for researchers, botanists, and plant scientists worldwide.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With state-of-the-art machine learning models, we can distinguish between 
                various pollen types including Arecaceae, Anadendanthera, and many other 
                botanical families with high precision.
              </p>
              <Link to="/prediction">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors">
                  Try Classification
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-8 text-white">
                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    High accuracy pollen identification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Support for multiple pollen types
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Easy-to-use web interface
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                    Instant results and analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
