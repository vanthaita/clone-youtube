'use client'
import { ChipCategoryItems } from '@/contants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

const ChipWrapper = () => {
  const [selectedChip, setSelectedChip] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const [showArrowLeft, setShowArrowLeft] = useState<boolean>(false);
  const [showArrowRight, setShowArrowRight] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkPositionArrow = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowArrowLeft(scrollLeft > 0);
      setShowArrowRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.removeProperty('user-select');
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
  };

  useEffect(() => {
    const container = containerRef.current;
    checkPositionArrow();

    const handleScroll = () => {
      checkPositionArrow();
    };

    container?.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    if (container) {
      container.style.cursor = 'grab';
    }

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="relative p-2">
      {showArrowLeft && (
        <div className="absolute left-0 top-0 h-full w-24 z-10 flex items-center">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
          <button 
            onClick={handleScrollLeft}
            className="relative z-20 rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-200 bg-white cursor-pointer ml-2"
          >
            <ArrowLeft size={18} />
          </button>
        </div>
      )}

      <div 
        ref={containerRef}
        className="flex overflow-x-hidden scrollbar-hide space-x-3 px-4 py-2 select-none"
        onScroll={checkPositionArrow}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {ChipCategoryItems.map((chip) => (
          <button
            key={chip.name}
            onClick={() => setSelectedChip(chip.name)}
            className={`py-1 px-3 rounded-lg whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
              selectedChip === chip.name
                ? 'bg-black text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            {chip.name}
          </button>
        ))}
      </div>
      
      {showArrowRight && (
        <div className="absolute right-0 top-0 h-full w-24 z-10 flex items-center justify-end">
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
          <button 
            onClick={handleScrollRight}
            className="relative z-20 rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-200 bg-white cursor-pointer mr-2"
          >
            <ArrowRight size={18}/>
          </button>
        </div>
      )}
    </div>
  );
}

export default ChipWrapper;