/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { youtubeVideoProps } from '@/contants/contant'
import React from 'react'

const VideoCard = ({
  thumbnailUrl,
  author,
  title,
  views,
  uploadTime,
  duration,
  videoUrl,
  authorAvatar
}: youtubeVideoProps) => {
  return (
    <div className='flex flex-col w-full max-w-2xl rounded-lg overflow-hidden cursor-pointer '>
      <div className='relative'>
        <img 
          alt={title}
          src={thumbnailUrl}
          className='w-full h-auto aspect-video object-cover rounded-xl'
        />
        <span className='absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-lg'>
          {duration}
        </span>
      </div>
      
      <div className='py-2 flex gap-4'>
        <div className='flex-shrink-0'>
          <img 
            src={authorAvatar} 
            alt={author}
            className='w-8 h-8 rounded-full'
          />
        </div>
        
        <div className='flex-1'>
          <div className='flex justify-between items-center'>
            <h3 className='font-medium text-gray-900 line-clamp-2 text-lg' title={title}>
            {title}
          </h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
          </div>
          </div>
          <p className='text-gray-600 text-base mt-1'>{author}</p>
          <div className='flex items-center text-gray-500 text-sm mt-1'>
            <span>{views} views</span>
            <span className='mx-2'>•</span>
            <span>{uploadTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard