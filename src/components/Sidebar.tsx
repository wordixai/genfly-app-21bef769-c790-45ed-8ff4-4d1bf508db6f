import React from 'react';
import { Home, Search, Bell, Mail, Bookmark, Users, Zap, User, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Search, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: Bookmark, label: 'Bookmarks' },
  { icon: Users, label: 'Communities' },
  { icon: Zap, label: 'Premium' },
  { icon: User, label: 'Profile' },
  { icon: MoreHorizontal, label: 'More' },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen p-4 border-r border-gray-200 flex flex-col">
      {/* X Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">X</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-4 px-3 py-3 rounded-full text-xl transition-colors hover:bg-gray-100 ${
                item.active ? 'font-bold' : 'font-normal'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Post Button */}
      <div className="mt-6">
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full text-lg">
          Post
        </Button>
      </div>
    </div>
  );
};