'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';
import ChipWrapper from './ChipWrapper';
import { usePathname } from 'next/navigation';
import Sidebar from './sidebar/Sidebar';

const MainLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);
  const isWatchPage = pathname?.startsWith('/watch');
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar  
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} />
        <main className="flex-1 flex flex-col overflow-hidden overflow-y-auto">
          {!isWatchPage && 
            <div className="sticky top-0 z-10 bg-white">
            <ChipWrapper />
          </div>
          }
          <div className="flex-1">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayoutClient; 