/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { asideItem } from '@/contants/contant';
import React, { useRef } from 'react'

interface Props {
  isExpanded: boolean,
  setIsExpanded?: (state: boolean) => void
}

const AsideBar = ({
  isExpanded,
  setIsExpanded
}: Props) => {
  const hideScrollRef = useRef<HTMLElement | null>(null);
  const asideItemShort = [
    ...asideItem.default.slice(0, 3),
    ...(isExpanded ? asideItem.you.slice(0, 1) : []),
  ];

  return (
    <>
      {!isExpanded && (
        <div 
          className="fixed inset-0 max-w-64 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsExpanded?.(true)}
        />
      )}
      
      <aside
        ref={hideScrollRef}
        className={`
          fixed md:relative z-50 p-2 h-screen overflow-y-auto bg-white aside-scroll
          ${isExpanded ? 'w-18' : 'w-58'} 
          ${isExpanded ? 'left-[-100%] md:left-0' : 'left-0'}
          transition-all duration-200 ease-in-out
        `}
      >
        <div className='flex flex-col justify-center'>
          {asideItemShort.map((item) => (
            <NavItem key={item.label} item={item} isExpanded={isExpanded} />
          ))}
        </div>
        
        {!isExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <div className='flex flex-col space-y-1'>
              {asideItem.you.map((item) => (
                <NavItem key={item.label} item={item} isExpanded={isExpanded} />
              ))}
            </div>
          </>
        )}
        
        {!isExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <h3 className="px-4 py-1 text-xs font-medium text-gray-500">SUBSCRIPTIONS</h3>
            <div className='flex flex-col space-y-1'>
              {asideItem.subscriptions.map((item) => (
                <SubscriptionItem key={item.label} item={item} />
              ))}
            </div>
          </>
        )}
        
        {!isExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <h3 className="px-4 py-1 text-xs font-medium text-gray-500">EXPLORE</h3>
            <div className='flex flex-col space-y-1'>
              {asideItem.explore.map((item) => (
                <NavItem key={item.label} item={item} isExpanded={isExpanded} />
              ))}
            </div>
          </>
        )}
        
        {!isExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <h3 className="px-4 py-1 text-xs font-medium text-gray-500">MORE FROM YOUTUBE</h3>
            <div className='flex flex-col space-y-1'>
              {asideItem.more.map((item) => (
                <NavItem key={item.label} item={item} isExpanded={isExpanded} />
              ))}
            </div>
          </>
        )}
        
        {!isExpanded && (
          <>
            <div className="border-t border-gray-200 my-2"></div>
            <div className='flex flex-col space-y-1'>
              {asideItem.settings.map((item) => (
                <NavItem key={item.label} item={item} isExpanded={isExpanded} />
              ))}
            </div>
          </>
        )}

        {!isExpanded && (
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

const NavItem = ({ item, isExpanded }: { item: any, isExpanded: boolean }) => {
  return (
    <div 
      className={`hover:bg-gray-100 rounded-lg p-2 ${isExpanded ? 'w-14 my-2' : 'w-52'} transition-all duration-200`}
    >
      <div className={`flex ${isExpanded ? 'flex-col items-center' : 'flex-row items-center'} cursor-pointer`}>
        <div className={`${isExpanded ? 'w-6 h-6' : 'w-6 h-6 mr-4.5 ml-3 font-medium'}`}>
          {item.icon}
        </div>
        {!isExpanded && (
          <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
            {item.label}
          </span>
        )}
        {isExpanded && (
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

export default AsideBar;