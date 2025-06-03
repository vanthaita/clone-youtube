'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import type { VideoCardProps } from '@/types'; 

const VideoCard = ({ video }: VideoCardProps) => {
  const {
    title,
    thumbnailUrl,
    videoUrl,
    duration,
    author,
    authorAvatar, 
    views,
    uploadTime,
  } = video;
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverColor, setHoverColor] = useState('');
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const hoverColors = [
    'hover:bg-blue-100',
    'hover:bg-green-100',
    'hover:bg-purple-100',
    'hover:bg-pink-100',
    'hover:bg-yellow-100',
    'hover:bg-indigo-100',
    'hover:bg-red-100',
    'hover:bg-teal-100',
  ];

  const handleMouseEnter = () => {
    const randomColor = hoverColors[Math.floor(Math.random() * hoverColors.length)];
    setHoverColor(randomColor);
    setIsHovered(true);
    
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    hoverTimerRef.current = setTimeout(() => {
      if (videoRef.current && isHovered) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(e => {
          if (e.name !== 'AbortError') {
            console.error("Error playing video:", e);
          }
        });
      }
    }, 300); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <div className={`flex flex-col w-full cursor-pointer group hover:rounded-2xl p-2 hover:transition-all hover:duration-300 hover:ease-linear ${hoverColor}`}>
      <div 
        className='relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && videoUrl ? (
          <video
            ref={videoRef}
            muted
            loop
            className='w-full h-auto aspect-video object-cover rounded-xl shadow-sm group-hover:shadow-md transition-shadow'
            playsInline
            disablePictureInPicture
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            alt={title} 
            src={thumbnailUrl} 
            className='w-full h-auto aspect-video object-cover rounded-xl shadow-sm group-hover:shadow-md transition-shadow'
          />
        )}
        <span className='absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded'>
          {duration} 
        </span>
      </div>

      <div className='pt-3 pb-1 flex gap-3'>
        <div className='flex-shrink-0 mt-0.5'> 
          {authorAvatar ? ( 
            <img
              src={authorAvatar} 
              alt={`${author} avatar`} 
              className='w-9 h-9 rounded-full' 
            />
          ) : (
            <div className='w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-lg'>
              {author?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className='flex-1 min-w-0'>
          <h3
            className='font-semibold text-gray-900 line-clamp-2 text-base leading-snug'
            title={title}
          >
            {title}
          </h3>
          <p
            className='text-gray-600 text-sm mt-0.5 truncate' 
            title={author}
          >
            {author}
          </p>
          <div className='flex items-center text-gray-500 text-xs mt-0.5'> 
            <span>{views} views</span>
            <span className='mx-1.5'>•</span> 
            <span>{uploadTime}</span>
          </div>
        </div>
        <div className='flex-shrink-0 self-start pt-0.5'>
            <button aria-label="More options" className="p-1 rounded-full hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="fill-current text-gray-600"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;