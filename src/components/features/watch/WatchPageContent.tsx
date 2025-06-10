'use client'
import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import ChannelInfo from './ChannelInfo'
import VIdeoDescription from './VIdeoDescription'
import VideoComments from './VideoComments'
import SuggestVideos from './SuggestVideos'
import { useSearchParams } from 'next/navigation'
import { getVideoById, youtubeData } from '@/contants'
import { YouTubeVideo } from '@/types'

const WatchPageContent = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get('v');
  const [video, setVideo] = useState<YouTubeVideo | null>(null);

  useEffect(() => {
    const currentVideo = videoId ? getVideoById(videoId) : null;
    setVideo(currentVideo || null);
  }, [videoId]);

  if (!video) {
    return <div className='md:px-4 xl:px-26 px-2 py-4'>Video not found</div>;
  }

  return (
    <div className='md:px-4 xl:px-26 px-2 py-4'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-[calc(100%-384px)] xl:w-[calc(100%-480px)] 2xl:w-full'>
          <div className='aspect-video w-full'>
            <VideoPlayer video={video} key={video.id}/>
          </div>
          <h1 className='mt-4 text-xl break-words'>
            {video.title}
          </h1>

          <div className='mt-4'>
            <ChannelInfo 
              author={video.author} 
              authorAvatar={video.authorAvatar} 
              subscriber={video.subscriber}
              isLive={video.isLive}
            />
          </div>

          <div className='mt-4 p-3 bg-[#F2F2F2] rounded-2xl'>
            <VIdeoDescription 
              title={video.title}
              views={video.views} 
              uploadTime={video.uploadTime}
              description={video.description}
              author={video.author} 
              authorAvatar={video.authorAvatar} 
              subscriber={video.subscriber}
            />
          </div>

          <div className='my-6'>
            <VideoComments />
          </div>
        </div>

        <div className="lg:w-1/3 min-w-0">
          <SuggestVideos currentVideoId={video.id} videos={youtubeData} />
        </div>
      </div>
    </div>
  )
}

export default WatchPageContent