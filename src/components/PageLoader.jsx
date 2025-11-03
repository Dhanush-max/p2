import { usePageLoader } from '../hooks/usePageLoader';
import logo from '../assets/logo.png';

const PageLoader = () => {
  const { progress } = usePageLoader();

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Company Logo */}
        <div className="mb-8">
          <img src={logo} alt="Peridot Logo" className="h-16 w-auto mx-auto mb-4" />
          <div className="text-2xl font-bold text-black mb-1">PERIDOT</div>
          <div className="text-sm text-gray-600 uppercase tracking-widest">Advanced Materials</div>
        </div>
        
        {/* Simple Spinner */}
        <div className="mb-6">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Simple Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-black h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-sm text-gray-600">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default PageLoader;