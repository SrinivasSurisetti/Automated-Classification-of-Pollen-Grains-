
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Pollen Grain Classification
        </Link>
        
        <div className="flex space-x-6">
          <Link
            to="/about"
            className={`text-lg font-medium transition-colors ${
              isActive("/about") 
                ? "text-red-600 font-bold" 
                : "text-red-500 hover:text-red-600"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-lg font-medium transition-colors ${
              isActive("/contact") 
                ? "text-red-600 font-bold" 
                : "text-red-500 hover:text-red-600"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/prediction"
            className={`text-lg font-medium transition-colors ${
              isActive("/prediction") 
                ? "text-red-600 font-bold" 
                : "text-red-500 hover:text-red-600"
            }`}
          >
            Prediction
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
