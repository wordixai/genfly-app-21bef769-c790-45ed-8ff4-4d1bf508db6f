import React from 'react';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';
import { RightPanel } from './RightPanel';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <MainContent />
      <RightPanel />
    </div>
  );
};