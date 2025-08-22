import React from 'react';
import { TopNav } from './TopNav';
import { TweetComposer } from './TweetComposer';
import { TweetList } from './TweetList';

export const MainContent: React.FC = () => {
  return (
    <div className="flex-1 max-w-2xl border-r border-gray-200">
      <TopNav />
      <TweetComposer />
      <TweetList />
    </div>
  );
};