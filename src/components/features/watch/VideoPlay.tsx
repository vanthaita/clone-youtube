import React from 'react'

const VideoPlay = () => {
  return (
    <div className='rounded-xl overflow-hidden mt-2'>
        <video
            controls
            autoPlay
            className='w-full aspect-video'
            playsInline
            disablePictureInPicture
        >
            <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' type="video/mp4" />
        </video>
    </div>
  )
}

export default VideoPlay