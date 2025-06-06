'use client'
import React from 'react';
import Navbar from './Navbar';
import ChipWrapper from './ChipWrapper';
import { usePathname } from 'next/navigation';
import Sidebar from './sidebar/Sidebar';


const MainLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isWatchPage = pathname?.startsWith('/watch');
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar  />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
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