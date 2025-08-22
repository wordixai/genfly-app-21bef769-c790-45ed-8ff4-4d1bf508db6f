import React from 'react';
import { TweetCard } from './TweetCard';

const tweets = [
  {
    id: 1,
    user: {
      name: 'Asia Finance',
      username: 'AsiaFinance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: true,
    },
    content: '绝对。2008年，许多印着不上川，只派给我海约，出版合作意向签字仪式。拟在中国一线城市、如广州、北京、上海、深圳，开发高端豪宅。如今许多银行宣布，重点招聘海归留学生，前川若千万尺美国总统。但大数据团队中常见的名字：白珊瑚(团长)、林丹丹(前团长)、钱香香、牟程程、吴郁伽...',
    time: '2h',
    media: {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop',
      duration: '2:12'
    },
    stats: {
      comments: 6,
      retweets: 3,
      likes: 28,
      views: 12000
    }
  },
  {
    id: 2,
    user: {
      name: 'Eric Jing',
      username: 'ericjing_ai',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      verified: false,
    },
    content: 'Game changer: What used to cost $10K+ and take weeks now takes ONE PROMPT!',
    time: '3h',
    isAd: true,
    stats: {
      comments: 12,
      retweets: 8,
      likes: 45,
      views: 8500
    }
  }
];

export const TweetList: React.FC = () => {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};