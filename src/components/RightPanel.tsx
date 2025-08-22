import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    title: 'Stray Kids Sweep Four Awards at 2025 K-World Dream Awards',
    category: 'Entertainment',
    posts: '103.6K posts',
    time: '17 hours ago'
  },
  {
    title: 'Escape from Tarkov 1.0 Launches November 15, Ending Decade-Long Beta',
    category: 'Entertainment',
    posts: '3,076 posts',
    time: '7 hours ago'
  },
  {
    title: "DFL Revokes Fateh's Minneapolis Mayoral Endorsement Amid Voting Chaos",
    category: 'News',
    posts: '51K posts',
    time: '7 hours ago'
  }
];

const trendingItems = [
  {
    name: 'ワンピカード',
    description: '"受け継がれる意志" 明日発売',
    promoted: true,
    category: 'Gaming'
  }
];

export const RightPanel: React.FC = () => {
  return (
    <div className="w-80 p-4 space-y-6">
      {/* Premium Subscribe */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-2">Subscribe to Premium</h2>
        <p className="text-sm text-gray-600 mb-4">
          Subscribe to unlock new features and if eligible, receive a share of revenue.
        </p>
        <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-bold">
          Subscribe
        </Button>
      </div>

      {/* Today's News */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Today's News</h2>
        <div className="space-y-3">
          {newsItems.map((item, index) => (
            <div key={index} className="hover:bg-gray-100 p-2 -mx-2 rounded cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                  <h3 className="font-semibold text-sm leading-tight mb-1">{item.title}</h3>
                  <span className="text-xs text-gray-500">{item.posts}</span>
                </div>
                <div className="ml-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's happening */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">What's happening</h2>
        <div className="space-y-3">
          {trendingItems.map((item, index) => (
            <div key={index} className="hover:bg-gray-100 p-2 -mx-2 rounded cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                    {item.promoted && <span className="text-blue-500">Promoted</span>}
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>Trending</span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 bg-gray-100 border-none rounded-full py-3"
        />
      </div>
    </div>
  );
};