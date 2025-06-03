/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { asideNavigationItems, asideShortNavigationItems } from '@/contants';
import { SidebarProps } from '@/types';
import React from 'react'

const Sidebar = ({
  isSidebarExpanded,     
  setIsSidebarExpanded 
}: SidebarProps) => {
  const defaultCount = isSidebarExpanded ? 4 : 3
  return (
    <>
      {!isSidebarExpanded && (
        <div 
          className="fixed inset-0 max-w-64 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarExpanded?.(true)}
        />
      )}
      
      <aside
        className={`
          fixed md:relative z-50 p-2 h-screen overflow-y-auto bg-white aside-scroll
          ${isSidebarExpanded ? 'w-18' : 'w-58'} 
          ${isSidebarExpanded ? 'left-[-100%] md:left-0' : 'left-0'}
          transition-all duration-200 ease-in-out
        `}
      >
        <div className='flex flex-col justify-center'>
          {asideShortNavigationItems.slice(0, defaultCount).map((item) => (
            <NavItem key={item.label} item={item} isSidebarExpanded={isSidebarExpanded} />
          ))}
        </div>
        
        {!isSidebarExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <div className='flex flex-col space-y-1'>
              {asideNavigationItems.you.map((item) => (
                <NavItem key={item.label} item={item} isSidebarExpanded={isSidebarExpanded} />
              ))}
            </div>
          </>
        )}
        
        {!isSidebarExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <h3 className="px-4 py-1 text-xs font-medium text-gray-500">SUBSCRIPTIONS</h3>
            <div className='flex flex-col space-y-1'>
              {asideNavigationItems.subscriptions.map((item) => (
                <SubscriptionItem key={item.label} item={item} />
              ))}
            </div>
          </>
        )}
        
        {!isSidebarExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <h3 className="px-4 py-1 text-xs font-medium text-gray-500">EXPLORE</h3>
            <div className='flex flex-col space-y-1'>
              {asideNavigationItems.explore.map((item) => (
                <NavItem key={item.label} item={item} isSidebarExpanded={isSidebarExpanded} />
              ))}
            </div>
          </>
        )}
        
        {!isSidebarExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <h3 className="px-4 py-1 text-xs font-medium text-gray-500">MORE FROM YOUTUBE</h3>
            <div className='flex flex-col space-y-1'>
              {asideNavigationItems.more.map((item) => (
                <NavItem key={item.label} item={item} isSidebarExpanded={isSidebarExpanded} />
              ))}
            </div>
          </>
        )}
        
        {!isSidebarExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <div className='flex flex-col space-y-1'>
              {asideNavigationItems.settings.map((item) => (
                <NavItem key={item.label} item={item} isSidebarExpanded={isSidebarExpanded} />
              ))}
            </div>
          </>
        )}

        {!isSidebarExpanded && (
          <footer className="px-4 py-2 text-xs text-gray-500 mb-10">
            <div className="space-y-1">
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                <span>Giới thiệu</span>
                <span>Báo chí</span>
                <span>Bản quyền</span>
                <span>Liên hệ với chúng tôi</span>
                <span>Người sáng tạo</span>
                <span>Quảng cáo</span>
                <span>Nhà phát triển</span>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                <span>Điều khoản</span>
                <span>Quyền riêng tư</span>
                <span>Chính sách và an toàn</span>
                <span>Cách YouTube hoạt động</span>
                <span>Thử các tính năng mới</span>
              </div>
              <div className='mb-5 mt-2'>© 2025 Google LLC</div>
            </div>
        </footer>
        )}
      </aside>
    </>
  )
}

const NavItem = ({ item, isSidebarExpanded }: { item: any, isSidebarExpanded: boolean }) => {
  return (
    <div 
      className={`hover:bg-gray-100 rounded-lg p-2 ${isSidebarExpanded ? 'w-14 my-2' : 'w-52'} transition-all duration-200`}
    >
      <div className={`flex ${isSidebarExpanded ? 'flex-col items-center' : 'flex-row items-center'} cursor-pointer`}>
        <div className={`${isSidebarExpanded ? 'w-6 h-6' : 'w-6 h-6 mr-4.5 ml-3 font-medium'}`}>
          {item.icon}
        </div>
        {!isSidebarExpanded && (
          <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
            {item.label}
          </span>
        )}
        {isSidebarExpanded && (
          <span className='text-[10px] mt-2 text-center'>
            {item.label}
          </span>
        )}
      </div>
    </div>
  )
}

const SubscriptionItem = ({ item }: { item: any }) => {
  return (
    <div className="hover:bg-gray-100 rounded-lg p-2 w-52 transition-all duration-200">
      <div className="flex flex-row items-center cursor-pointer">
        <div className="w-6 h-6 mr-4.5 ml-3 flex-shrink-0">
          {typeof item.icon === 'string' ? (
            <img 
              src={item.icon}
              alt={item.label}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-6 h-6">
              {item.icon}
            </div>
          )}
        </div>
        <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
          {item.label}
        </span>
      </div>
    </div>
  )
}

export default Sidebar;