'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';
import ChipWrapper from './ChipWrapper';
import AsideBar from './Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
      <div className="flex flex-1 overflow-hidden">
        <AsideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
        <main className="flex-1 flex flex-col overflow-hidden overflow-y-auto">
          <div className="sticky top-0 z-10 bg-white">
            <ChipWrapper />
          </div>
          <div className="flex-1  p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout; 