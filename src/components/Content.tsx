import React from 'react'
import { youtubeData } from '@/contants/contant'
import VideoCard from './VideoCard'

const Content = () => {
  return (
    <div className="">
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-2 pb-4 sm:pb-0'>
        {youtubeData.map((video) => (
          <VideoCard 
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}            
            author={video.author}
            views={video.views}
            description={video.description}
            uploadTime={video.uploadTime}
            duration={video.duration}
            videoUrl={video.videoUrl}
            authorAvatar={video.authorAvatar}
          />
        ))}
      </div>
    </div>
  )
}

export default Content