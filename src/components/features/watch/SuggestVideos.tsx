/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ChipWrapper from '@/components/layout/ChipWrapper';
import { youtubeData } from '@/contants';
const SuggestVideos = () => {
  

  return (
    <div className="w-full min-w-0">
      <div className="overflow-hidden">
        <ChipWrapper />
      </div>
      <div className="mt-2 px-2">
        {youtubeData.map((video) => (
          <div key={video.id} className={`flex gap-3 px-2 py-1 rounded-lg`}>
            <div className="relative flex-shrink-0 w-40 h-24 rounded-md overflow-hidden">
              <img 
                src={video.thumbnailUrl}
                alt='Thumbnai'
                className='object-cover w-full h-full'
              />
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                {video.duration}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
              <p className="text-gray-700 text-xs mt-1">{video.author}</p>
              <div className="flex text-gray-700 items-center text-xs mt-1">
                <span >{video.views}</span>
                <span className="mx-1">•</span>
                <span>{video.uploadTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestVideos;