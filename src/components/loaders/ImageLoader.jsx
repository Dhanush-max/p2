import React from "react";

const ImageLoader = ({ className = "", showSkeleton = false }) => {
  if (showSkeleton) {
    return (
      <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${className}`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-400">
            <div className="w-8 h-8 mx-auto mb-2 bg-gray-300 rounded-full animate-bounce"></div>
            <div className="h-1 bg-gray-300 rounded w-12 mx-auto mb-1"></div>
            <div className="h-1 bg-gray-300 rounded w-8 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center bg-gray-200 animate-pulse ${className}`}>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 text-sm">Loading image...</p>
      </div>
    </div>
  );
};

export default ImageLoader;