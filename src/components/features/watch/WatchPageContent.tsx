import React from 'react'
import VideoPlayer from './VideoPlayer'
import ChannelInfo from './ChannelInfo'
import VIdeoDescription from './VIdeoDescription'
import VideoComments from './VideoComments'
import SuggestVideos from './SuggestVideos'

const WatchPageContent = () => {
  return (
    <div className='md:px-4 lg:px-26 px-2 py-4'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-[calc(100%-384px)] xl:w-[calc(100%-480px)] 2xl:w-full'>
          <div className='aspect-video w-full'>
            <VideoPlayer />
          </div>
          <h1 className='mt-4 text-xl break-words'>
           【2Hour】 공부할 때 듣는 일본 애니ost, J-pop 피아노 모음 | 플레이리스트 ⛱️
          </h1>

          <div className='mt-4'>
            <ChannelInfo />
          </div>

          <div className='mt-4 p-3 bg-[#F2F2F2] rounded-2xl'>
            <VIdeoDescription />
          </div>

          <div className='my-6'>
            <VideoComments />
          </div>
        </div>


      <div className="lg:w-1/3 min-w-0">
        <SuggestVideos />
      </div>
      </div>
    </div>
  )
}

export default WatchPageContent