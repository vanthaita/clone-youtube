import React from 'react';
import VideoCard from './VideoCard';
import type { YouTubeVideo } from '@/types';
import { youtubeData } from '@/contants';

const VideoGrid = () => {
  return (
    <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-y-12 sm:pb-0'>
      {youtubeData.map((videoItem: YouTubeVideo) => (
        <VideoCard
          key={videoItem.id}  
          video={videoItem}    
        />
      ))}
    </div>
  );
};

export default VideoGrid;