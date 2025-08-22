import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Image, Calendar, MapPin, Smile, BarChart3, Camera } from 'lucide-react';

export const TweetComposer: React.FC = () => {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex space-x-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="mb-4">
            <textarea
              className="w-full text-xl placeholder-gray-500 resize-none border-none outline-none"
              placeholder="What's happening?"
              rows={3}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-blue-500">
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <Image className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <Smile className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <MapPin className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <BarChart3 className="w-5 h-5" />
              </button>
              <button className="hover:bg-blue-50 p-2 rounded-full">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <Button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-full font-bold">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};