import React from "react";

const SkeletonLoader = ({ className = "" }) => {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${className}`}>
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-gray-400">
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full"></div>
          <div className="h-2 bg-gray-300 rounded w-20 mx-auto mb-1"></div>
          <div className="h-2 bg-gray-300 rounded w-16 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;