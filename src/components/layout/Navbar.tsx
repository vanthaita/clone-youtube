/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef, useState } from 'react'
import YoutubeLogo from '../common/YoutubeLogo'
import { Bell, Mic, Plus, Menu, Search, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { NavbarProps } from '@/types';

const Navbar = ({
  isSidebarExpanded,     
  setIsSidebarExpanded 
}: NavbarProps) => {
  const isMobile = useIsMobile();
  const [showSearchHistory, setShowSearchHistory] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  const handleFocus = () => {
    setShowSearchHistory(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSearchHistory(false), 200);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    if (!showSearchBox && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <nav className='sticky top-0 h-14 w-full bg-white z-50'>
      {!showSearchBox ? (
        <div className='flex justify-between items-center px-2 sm:px-4 py-2 h-full'>
          <div className='flex items-center gap-x-2 sm:gap-x-4'>
            <button 
              className='p-2 hover:bg-gray-200 rounded-full cursor-pointer group relative' 
              onClick={() => setIsSidebarExpanded && setIsSidebarExpanded(!isSidebarExpanded)}
            >
              <Menu size={24} className='text-gray-400'/>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                Menu
              </span>
            </button>
            <div className='flex gap-x-1 relative'>
              <YoutubeLogo />
              <span className='text-[#606060] absolute text-[9.5px] -top-1.5 -right-4 font-bold'>
                VN
              </span>
            </div>
          </div>

          {!isMobile && (
            <div className='flex flex-1 max-w-2xl ml-20 relative'>
              <div className='flex w-full'>
                <div className='relative flex w-full'>
                  <input
                    className='px-3 py-1 rounded-l-full w-full border border-gray-400 focus:border-blue-500 focus:outline-none'
                    placeholder='Search'
                    onChange={handleOnChange}
                    ref={inputRef}
                    value={search}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {showSearchHistory && (
                    <div className='absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-lg py-2 z-50'>
                      <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Recent search 1</div>
                      <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Recent search 2</div>
                    </div>
                  )}
                </div>
                <button
                  type='submit'
                  className='flex border border-l-0 border-gray-300 rounded-r-full px-5 mr-4 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer group relative'
                >
                  <Search className='text-gray-600' />
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Search
                  </span>
                </button>
              </div>
              <button 
                className='p-2.5 hover:bg-gray-300 bg-gray-200 rounded-full cursor-pointer group relative'
              >
                <Mic size={18} />
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Search with your voice
                </span>
              </button>
            </div>
          )}
          <div className='flex items-center gap-x-1 sm:gap-x-3'>
            {isMobile && (
              <>
                <button 
                  className='p-2 hover:bg-gray-200 rounded-full cursor-pointer group relative'
                  onClick={toggleSearchBox}
                >
                  <Search size={20} />
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Search
                  </span>
                </button>

                <button 
                    className='hidden sm:flex items-center gap-x-1 px-3 py-2 hover:bg-gray-300 bg-gray-200 rounded-full cursor-pointer group relative'
                  >
                    <Plus size={18} />
                    <span className='text-sm'>Create</span>
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Create
                    </span>
                  </button>
                  <button 
                    className='p-2 hover:bg-gray-200 rounded-full cursor-pointer group relative'
                  >
                    <Bell size={18} />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Notifications
                    </span>
                  </button>
                </>
            )}
            {!isMobile && (
              <>
                <button 
                  className='hidden sm:flex items-center gap-x-1 px-3 py-2 hover:bg-gray-300 bg-gray-200 rounded-full cursor-pointer group relative'
                >
                  <Plus size={18} />
                  <span className='text-sm'>Create</span>
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Create
                  </span>
                </button>
                <button 
                  className='p-2 hover:bg-gray-200 rounded-full cursor-pointer group relative'
                >
                  <Bell size={18} />
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Notifications
                  </span>
                </button>
              </>
            )}
            
            <div className='ml-1 mr-4 group relative'>
              <img
                alt='User profile'
                src='https://yt3.ggpht.com/ytc/AIdro_mW4g9V_JTYX0kdxxt_TWU3AN2qWWXpx_sgphiPV1rkb_2TufMV9jLS2rP_kM58V6ChgsPv=s88-c-k-c0x00ffffff-no-rj'
                className='size-8 rounded-full'
                width={32}
                height={32}
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Your channel
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex items-center px-2 py-2 h-full'>
          <button 
            className='p-2 hover:bg-gray-200 rounded-full cursor-pointer mr-2 group relative'
            onClick={toggleSearchBox}
          >
            <ArrowLeft size={24} />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Back
            </span>
          </button>
          <div className='flex flex-1 relative'>
            <input
              className='px-3 py-1 rounded-l-full w-full border border-gray-400 focus:border-blue-500 focus:outline-none'
              placeholder='Search'
              onChange={handleOnChange}
              ref={inputRef}
              value={search}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {showSearchHistory && (
              <div className='absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-lg py-2 z-50'>
                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Recent search 1</div>
                <div className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Recent search 2</div>
              </div>
            )}
            <button
              type='submit'
              className='flex border border-l-0 border-gray-300 rounded-r-full px-5 items-center bg-gray-100 hover:bg-gray-200 cursor-pointer group relative'
            >
              <Search className='text-gray-600' />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Search
              </span>
            </button>
          </div>
          <button 
            className='p-2.5 hover:bg-gray-300 bg-gray-200 rounded-full cursor-pointer ml-2 group relative'
          >
            <Mic size={18} />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Search with your voice
            </span>
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar;