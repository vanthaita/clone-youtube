/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Captions, Maximize, Minimize, Pause, Play, Settings, StepForward, Volume2, VolumeOff } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
interface VideoPlayerProps {
  video: {
    id: string; 
    videoUrl: string;
    title: string;
  };
  key: string
}

const VideoPlayer = ({ video }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null); 
  const progressRef = useRef<HTMLDivElement>(null); 
  const volumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousVolume = useRef(1);
  const [showControls, setShowControls] = useState(true);
  
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isHoveringVolume, setIsHoveringVolume] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const togglePlay = () => {
    if(!videoRef.current) return;
    if(isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMuted = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.volume = previousVolume.current;
      setVolume(previousVolume.current);
    } else {
      previousVolume.current = videoRef.current.volume;
      videoRef.current.volume = 0;
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    const container = videoRef.current.parentElement;
    
    if (!container) return;

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
          console.error('Error attempting to exit fullscreen:', err);
        });
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = progressRef.current?.getBoundingClientRect();
    if (!rect || !videoRef.current) return;

    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handleVolumeMouseEnter = () => {
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
    setIsHoveringVolume(true);
  };

  const handleVolumeMouseLeave = () => {
    volumeTimeoutRef.current = setTimeout(() => {
      setIsHoveringVolume(false);
    }, 1000); 
  };

  const handleVolumeInputMouseEnter = () => {
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
  };

  const handleVolumeInputMouseLeave = () => {
    volumeTimeoutRef.current = setTimeout(() => {
      setIsHoveringVolume(false);
    }, 1000);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const updateProgress = () => {
    if(videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  useEffect(() => {
    setIsPlaying(false);
    setIsMuted(false);
    setVolume(1);
    previousVolume.current = 1;
    setProgress(0);
    setCurrentTime(0);
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.volume = 1;
      videoRef.current.muted = false;
      
      videoRef.current.load();
      
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [video.id]); 

  useEffect(() => {
    const resetControlsTimeout = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      setShowControls(true);
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
    };

    const container = videoRef.current?.parentElement;
    if (!container) return;

    const handleMouseLeave = () => {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 1000);
    };

    resetControlsTimeout();
    container.addEventListener('mousemove', resetControlsTimeout);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      container.removeEventListener('mousemove', resetControlsTimeout);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    
    if (video.readyState > 0) {
      setDuration(video.duration);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (volumeTimeoutRef.current) {
        clearTimeout(volumeTimeoutRef.current);
      }
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden mt-2 group bg-black">
      <video
        ref={videoRef}
        controls={false}
        autoPlay
        muted={isMuted}
        className="w-full aspect-video"
        playsInline
        disablePictureInPicture
        onTimeUpdate={updateProgress}
        onClick={togglePlay}
      >
        <source src={`${video.videoUrl}?t=${Date.now()}`} type="video/mp4" />
      </video>

      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 transition-opacity duration-300 ${showControls || isFullscreen ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          ref={progressRef}
          className="h-1 bg-gray-400 rounded-full mb-2 cursor-pointer"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-red-600 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center justify-between px-3">
          <div className="flex items-center space-x-6">
            <button onClick={togglePlay}>
              {isPlaying ? (
                <Pause size={24} className='text-white'/>
              ) : (
                <Play size={24} className='text-white'/>
              )}
            </button>

            <button>
              <StepForward size={24} className='text-white'/>
            </button>
            
            <div className='flex items-center gap-x-2'>
              <button 
                onClick={toggleMuted}  
                onMouseEnter={handleVolumeMouseEnter}
                onMouseLeave={handleVolumeMouseLeave}
              >
                {isMuted ? (
                  <VolumeOff size={24} className='text-white'/>
                ) : (
                  <Volume2 size={24} className='text-white'/>
                )}
              </button>
              {isHoveringVolume && 
                <input 
                  type='range'
                  max={1}
                  min={0}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                  onMouseEnter={handleVolumeInputMouseEnter}
                  onMouseLeave={handleVolumeInputMouseLeave}
                  className="
                    max-w-16
                    h-1
                    cursor-pointer
                    appearance-none
                    bg-gray-500
                    rounded-full
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                  "
                  style={{
                    backgroundImage: `linear-gradient(to right, white ${volume * 100}%, transparent 0%)`
                  }}
                />
              }

              <div className='flex gap-x-2 text-white text-sm ml-2'>
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button>
              <Captions size={24} className='text-white'/>
            </button>

            <button>
              <Settings size={24} className='text-white'/>
            </button>

            <button onClick={toggleFullscreen}>
              {isFullscreen ? (
                <Minimize size={24} className='text-white'/>
              ) : (
                <Maximize size={24} className='text-white'/>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;