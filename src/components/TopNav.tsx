import React from 'react';

export const TopNav: React.FC = () => {
  return (
    <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-10">
      <div className="flex">
        <button className="flex-1 py-4 text-center font-semibold border-b-2 border-blue-500">
          For you
        </button>
        <button className="flex-1 py-4 text-center text-gray-600 hover:bg-gray-50">
          Following
        </button>
        <button className="flex-1 py-4 text-center text-gray-600 hover:bg-gray-50">
          Lovable
        </button>
      </div>
    </div>
  );
};