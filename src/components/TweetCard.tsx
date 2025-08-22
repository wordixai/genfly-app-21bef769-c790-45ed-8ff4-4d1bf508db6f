import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Repeat2, Heart, BarChart3, Share, MoreHorizontal } from 'lucide-react';

interface Tweet {
  id: number;
  user: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  time: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    duration?: string;
  };
  isAd?: boolean;
  stats: {
    comments: number;
    retweets: number;
    likes: number;
    views: number;
  };
}

interface TweetCardProps {
  tweet: Tweet;
}

export const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50/50 transition-colors">
      <div className="flex space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={tweet.user.avatar} />
          <AvatarFallback>{tweet.user.name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-bold text-sm">{tweet.user.name}</h3>
            {tweet.user.verified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
            <span className="text-gray-500 text-sm">@{tweet.user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 text-sm">{tweet.time}</span>
            {tweet.isAd && (
              <span className="text-gray-500 text-sm">Ad</span>
            )}
            <button className="ml-auto text-gray-500 hover:text-gray-700">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mb-3">
            <p className="text-sm leading-relaxed">{tweet.content}</p>
            {tweet.content.includes('Show more') && (
              <button className="text-blue-500 text-sm">Show more</button>
            )}
          </div>
          
          {tweet.media && (
            <div className="relative mb-3 rounded-2xl overflow-hidden">
              <img 
                src={tweet.media.url} 
                alt="" 
                className="w-full h-64 object-cover"
              />
              {tweet.media.duration && (
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {tweet.media.duration}
                </div>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-between max-w-md text-gray-500">
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{tweet.stats.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
              <Repeat2 className="w-4 h-4" />
              <span className="text-sm">{tweet.stats.retweets}</span>
            </button>
            
            <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{tweet.stats.likes}</span>
            </button>
            
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm">{tweet.stats.views.toLocaleString()}</span>
            </button>
            
            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};