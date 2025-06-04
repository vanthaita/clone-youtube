/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import { 
  asideNavigationItems, 
  asideShortNavigationItems 
} from '@/contants';
import { SidebarProps } from '@/types';
import { useIsMobile } from '@/hooks/useIsMobile';
import SidebarSection from './SidebarSection';
import { Footer } from './Footer';
import SidebarHeader from './Header';
import SubscriptionItem from './SubscriptionItem';
import NavItem from './NavItem';

const Sidebar = ({
  isSidebarExpanded,     
  setIsSidebarExpanded
}: SidebarProps) => {
  const pathname = usePathname();
  const isWatchPage = pathname?.startsWith('/watch');
  const isMobile = useIsMobile();
  const DEFAULT_COUNT = isSidebarExpanded ? 4 : 3;

  return (
    <>
      {!isSidebarExpanded && (isWatchPage || isMobile) && (
          <div 
            className="fixed inset-0 bg-black/60 bg-opacity-30 z-[99]"
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          />
      )}
      <aside className={`
        ${(isWatchPage || isMobile) ? 'fixed left-0 h-screen ' : 'fixed md:relative h-screen'}
        ${isWatchPage && !isSidebarExpanded && 'top-0 z-100'}
        ${isMobile && !isSidebarExpanded && 'top-0 z-100'}

        ${isWatchPage && isSidebarExpanded && isMobile && 'top-0 z-100'} 
        z-[100] py-2 pl-2 bg-white
        
        ${isSidebarExpanded ? 'w-18 ' : 'w-58 bg-black'}
        
        ${isSidebarExpanded && isMobile ? 'translate-x-[-100%]' : 'translate-x-0'}
        
        ${isSidebarExpanded && isWatchPage ? 'translate-x-[-100%]' : 'translate-x-0'}

        transition-transform duration-300 ease-in-out
        
        `}>
        {(isSidebarExpanded ) && (
          <div className={`flex flex-col justify-center ${isMobile && 'hidden'}`}>
            {asideShortNavigationItems.slice(0, DEFAULT_COUNT).map((item) => (
              <NavItem key={item.label} item={item} isSidebarExpanded={isSidebarExpanded} />
            ))}
          </div>
        )}
        {(isWatchPage || isMobile) && (
          <div className={`sticky z-10 bg-white px-2  ${isSidebarExpanded && 'hidden'}`}>
            <SidebarHeader 
              setIsSidebarExpanded={setIsSidebarExpanded} 
              isSidebarExpanded={isSidebarExpanded} 
            />
          </div>
        )}
        <div className={`overflow-y-auto h-[calc(100%-30px)] aside-scroll overflow-x-hidden mt-4.5`}>
          {!isSidebarExpanded && (
            <div>
              <SidebarSection items={asideShortNavigationItems.slice(0, DEFAULT_COUNT)} isSidebarExpanded={isSidebarExpanded} />
              <Divider />
              <SidebarSection items={asideNavigationItems.you} isSidebarExpanded={isSidebarExpanded} />
              
              <Divider />
              <h3 className="px-4 py-1 text-xs font-medium text-gray-500">SUBSCRIPTIONS</h3>
              <SidebarSection items={asideNavigationItems.subscriptions} isSidebarExpanded={isSidebarExpanded} Component={SubscriptionItem} />
              
              <Divider />
              <h3 className="px-4 py-1 text-xs font-medium text-gray-500">EXPLORE</h3>
              <SidebarSection items={asideNavigationItems.explore} isSidebarExpanded={isSidebarExpanded} />
              
              <Divider />
              <h3 className="px-4 py-1 text-xs font-medium text-gray-500">MORE FROM YOUTUBE</h3>
              <SidebarSection items={asideNavigationItems.more} isSidebarExpanded={isSidebarExpanded} />
              
              <Divider />
              <SidebarSection items={asideNavigationItems.settings} isSidebarExpanded={isSidebarExpanded} />
              
              <Divider />
              <Footer />
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
const Divider = () => <div className="border-t border-gray-200 my-2"></div>;
export default Sidebar;