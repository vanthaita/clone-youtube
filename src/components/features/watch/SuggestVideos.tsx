import React from 'react';
import ChipWrapper from '@/components/layout/ChipWrapper';

interface VideoItem {
  id: string;
  title: string;
  channel: string;
  views: string;
  timeAgo: string;
  duration: string;
  nowPlaying?: boolean;
}

const SuggestVideos = () => {
  const videos: VideoItem[] = [
    {
      id: '1',
      title: '도입부부터 따뜻해지는 Jpop, 애니 ost 피아노 모음 | 공부할 때 듣기 좋은 음악',
      channel: '상어오브뮤직',
      views: '83K views',
      timeAgo: '1 month ago',
      duration: '2:11:31',
      nowPlaying: true
    },
    {
      id: '2',
      title: '【洋楽playlist】恋をしている時に聴きたくなるラブソング集/エモい/chill mix/good vibes【作業用BGM】',
      channel: 'おこげ',
      views: '3.7M views',
      timeAgo: '2 years ago',
      duration: '28:02'
    },
    {
      id: '3',
      title: '【𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭】 일할 때, 집중할 때 듣는 애니ost, Jpop 피아노 플리 ✨',
      channel: '상어오브뮤직',
      views: '164K views',
      timeAgo: '1 year ago',
      duration: '1:27:59'
    },
    {
      id: '4',
      title: '夏に聴きたい青春メドレー',
      channel: 'qeen',
      views: '6.9M views',
      timeAgo: '1 year ago',
      duration: '25:36'
    },
    {
      id: '5',
      title: 'Sunrise productivity ☕ morning lofi to kickstart your day',
      channel: 'Beats for Leisure',
      views: '54 views',
      timeAgo: '1 day ago',
      duration: '31:37'
    },
    {
      id: '6',
      title: '【Study with me(1hour)】BGM 君の名は。(Your Name.)かたわれどき（Magic hour）東京スカイツリービュー',
      channel: 'luluroom(study with me)',
      views: '1.2M views',
      timeAgo: '1 year ago',
      duration: '55:53'
    },
    {
      id: '7',
      title: '【洋楽】就寝前に聴きたいエモみ極まりない洋楽『playlist』',
      channel: 'おばけん',
      views: '3.9M views',
      timeAgo: '3 years ago',
      duration: '13:55'
    },
    {
      id: '8',
      title: '🎵『君の名は』全曲',
      channel: '',
      views: '',
      timeAgo: '',
      duration: '22:48'
    }
  ];

  return (
    <div className="w-full min-w-0">
      <div className="overflow-hidden">
        <ChipWrapper />
      </div>
      <div className="mt-2 px-2">
        {videos.map((video) => (
          <div key={video.id} className={`flex gap-3 px-2 py-1 rounded-lg`}>
            <div className="relative flex-shrink-0 w-40 h-24 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                {video.duration}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
              <p className="text-gray-700 text-xs mt-1">{video.channel}</p>
              <div className="flex text-gray-700 items-center text-xs mt-1">
                <span >{video.views}</span>
                <span className="mx-1">•</span>
                <span>{video.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestVideos;