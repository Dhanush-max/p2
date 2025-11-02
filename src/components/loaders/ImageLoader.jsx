import React from "react";

const ImageLoader = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center bg-gray-50/95 backdrop-blur-sm border border-gray-200 ${className}`}>
      <div className="flex flex-col items-center p-8">
        {/* Outer spinning ring */}
        <div className="relative w-16 h-16 mb-4">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-blue-400 rounded-full animate-spin"></div>
          {/* Inner dot */}
          <div className="absolute inset-4 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        {/* Loading text */}
        <p className="text-gray-600 text-sm font-medium">Loading image...</p>
      </div>
    </div>
  );
};

export default ImageLoader;