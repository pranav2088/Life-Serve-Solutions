import React from 'react';
import { Heart } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-2xl animate-pulse">
            <Heart className="h-12 w-12 text-white animate-bounce" />
          </div>
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-blue-600 rounded-2xl animate-ping opacity-20"></div>
          <div className="absolute inset-2 bg-blue-500 rounded-xl animate-ping opacity-30 animation-delay-200"></div>
        </div>

        {/* Company Name */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            LifeServe
          </h1>
          <p className="text-xl font-medium text-blue-600 -mt-1">Solutions</p>
          <p className="text-sm text-gray-500 mt-2">Professional Home Care Services</p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce animation-delay-400"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full animate-loading-bar"></div>
        </div>

        <p className="text-gray-600 mt-4 text-sm">Loading your care experience...</p>
      </div>
    </div>
  );
};

export default Loader;