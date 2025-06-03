export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber?: string;
  isLive?: boolean;
  authorAvatar?: string;
}