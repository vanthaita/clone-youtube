export interface youtubeVideoProps {
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

export const youtubeData: youtubeVideoProps[] = [
    {
        "id": "1",
        "title": "Big Buck Bunny",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Vlc Media Player",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "subscriber": "25,254,545 Subscribers", // Corrected comma for readability
        "isLive": true
    },
    {
        "id": "2",
        "title": "The first Blender Open Movie from 2006", // Shortened title
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        "duration": "12:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Blender Inc.",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "The first Blender Open Movie from 2006, Elephants Dream, tells the story of two strange characters exploring a surreal mechanical world. It was the first open movie project by the Blender Foundation.", // Updated description
        "subscriber": "10,500,000 Subscribers",
        "isLive": true
    },
    {
        "id": "3",
        "title": "For Bigger Blazes",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
        "duration": "0:15", // Corrected duration
        "uploadTime": "Apr 21, 2014", // Corrected upload time
        "views": "1,088,574",
        "author": "Google Chromecast",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.", // Updated description
        "subscriber": "5,340,000 Subscribers",
        "isLive": true
    },
    {
        "id": "4",
        "title": "For Bigger Escape",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "0:15", // Corrected duration
        "uploadTime": "Apr 21, 2014", // Corrected upload time
        "views": "987,654",
        "author": "Google Chromecast",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "subscriber": "5,340,000 Subscribers",
        "isLive": false
    },
    {
        "id": "5",
        "title": "Big Buck Bunny (Duplicate Entry Example)", // Differentiating title
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 10, 2011", // Slightly different upload time
        "views": "15,000,000",
        "author": "Vlc Media Player",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "A re-upload of the classic Big Buck Bunny. Enjoy the adventures of the giant rabbit once more!",
        "subscriber": "25,254,545 Subscribers",
        "isLive": true
    },
    {
        "id": "6",
        "title": "For Bigger Joyrides", // Changed title
        "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg", // Can be a different thumbnail
        "duration": "0:15", // Corrected duration
        "uploadTime": "Apr 21, 2014",
        "views": "850,320",
        "author": "Google Chromecast",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "description": "Chromecast: For bigger joyrides. The easiest way to enjoy online video and music on your TV. For $35.",
        "subscriber": "5,340,000 Subscribers",
        "isLive": false
    },
    {
        "id": "7",
        "title": "For Bigger Meltdowns", // Changed title
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg", // Can be different
        "duration": "0:15", // Corrected duration
        "uploadTime": "Apr 21, 2014",
        "views": "730,110",
        "author": "Google Chromecast",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "description": "Chromecast: For bigger meltdowns. The easiest way to enjoy online video and music on your TV. For $35.",
        "subscriber": "5,340,000 Subscribers",
        "isLive": true
    },
    {
        "id": "8",
        "title": "Sintel - Third Blender Open Movie", // More specific title
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp", // This is Elephants Dream thumbnail, Sintel's would be different. Using for consistency.
        "duration": "14:48", // Sintel's actual duration
        "uploadTime": "Sep 27, 2010", // Sintel's actual upload
        "views": "12,345,678",
        "author": "Blender Foundation",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender.",
        "subscriber": "10,500,000 Subscribers",
        "isLive": false
    },
    {
        "id": "9",
        "title": "Subaru Outback On Street And Dirt",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp", 
        "duration": "2:41",
        "uploadTime": "Feb 13, 2013",
        "views": "450,789",
        "author": "Subaru",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        "description": "The Subaru Outback. Is it a car? Is it an SUV? Or is it something altogether different? It’s the Best of Both. Or is it? Test it out on the street, or take it for a spin on the dirt. ",
        "subscriber": "1,200,000 Subscribers",
        "isLive": false
    },
    {
        "id": "10",
        "title": "Tears of Steel - Fourth Blender Open Movie",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp", 
        "duration": "12:14",
        "uploadTime": "Sep 26, 2012",
        "views": "9,876,543",
        "author": "Blender Foundation",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling Sci-Fi film in Amsterdam, the Netherlands.",
        "subscriber": "10,500,000 Subscribers",
        "isLive": false
    },
    {
        "id": "11",
        "title": "Volkswagen GTI Review",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp", 
        "duration": "2:40",
        "uploadTime": "Feb 13, 2013",
        "views": "2,345,678",
        "author": "Volkswagen",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        "description": "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test out the all-new Volkswagen GTI. In German, GTI stands for “Gran Tourismo Injection.”",
        "subscriber": "3,000,000 Subscribers",
        "isLive": false
    },
    {
        "id": "12",
        "title": "We Are Going On Bullrun",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp", 
        "duration": "2:03",
        "uploadTime": "Feb 13, 2013",
        "views": "999,999",
        "author": "The Smoking Tire",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        "description": "The Smoking Tire is going on the 2010 Bullrun Rally in a 2011 Shelby GT500, and posting a video from the road every single day! Follow along with us July 10th-16th.",
        "subscriber": "1,500,000 Subscribers",
        "isLive": false
    },

    {
        "id": "13",
        "title": "Learn TypeScript in 1 Hour",
        "thumbnailUrl": "https://i.ytimg.com/vi/gWw23EYM9VM/maxresdefault.webp",
        "duration": "58:30",
        "uploadTime": "Jan 15, 2024",
        "views": "1,250,870",
        "author": "CodeMasterPro",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
        "description": "A comprehensive tutorial to learn TypeScript from scratch. Covers all the basics and advanced concepts to get you started.",
        "subscriber": "750K Subscribers",
        "isLive": false
    },
    {
        "id": "14",
        "title": "Tropical Chill - Relaxing Music Mix",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png", 
        "duration": "2:30:45",
        "uploadTime": "Jul 2, 2023",
        "views": "10,500,321",
        "author": "ChillVibesOnly",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "The perfect background music for studying, relaxing, or just chilling. Enjoy these tropical beats!",
        "subscriber": "1.2M Subscribers",
        "isLive": false
    },
    {
        "id": "15",
        "title": "🔴 LIVE: Pro Gamer Finals - Epic Showdown!",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
        "duration": "LIVE",
        "uploadTime": "Streaming now", 
        "views": "25,670 watching",
        "author": "eSports Central",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", 
        "description": "Join us live for the grand finals! Who will take home the trophy? Chat with other fans and enjoy the action!",
        "subscriber": "2.5M Subscribers",
        "isLive": true
    },
    {
        "id": "16",
        "title": "The Wonders of the Cosmos: A Space Documentary",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg", // Reusing thumbnail
        "duration": "45:10",
        "uploadTime": "Mar 10, 2022",
        "views": "5,678,901",
        "author": "CosmicVoyager",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", 
        "description": "Explore the vastness of space, from distant galaxies to mysterious black holes. A journey through the wonders of our universe.",
        "subscriber": "3M Subscribers",
        "isLive": false
    },
    {
        "id": "17",
        "title": "Funny Pet Moments Compilation #23",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png", // Reusing thumbnail
        "duration": "10:05",
        "uploadTime": "Sep 5, 2023",
        "views": "750,123",
        "author": "PetLife",
        "authorAvatar": "https://yt3.ggpht.com/j4winp9JW48bX0r_7zbcZKEG-LQ2vg2aTqp2QPQxL7E2am5Iyqw3CR1cAmdjHWdiJms2b1AS=s68-c-k-c0x00ffffff-no-rj",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
        "description": "Get ready to laugh! Here are some of the funniest pet moments caught on camera. You won't be able to stop smiling.",
        "subscriber": "900K Subscribers",
        "isLive": false
    }
];


export const asideItem = {
  default: [
    {
      label: "Home",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z" fillRule="evenodd"></path></svg>,
      path: "/",
    },
    {
      label: "Shorts",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fillRule="evenodd"></path></svg>,
      path: "/shorts",
    },
    {
      label: "Subscriptions",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" fillRule="evenodd"></path></svg>,
      path: "/subscriptions",
    }
  ],
  you: [
    {
      label: "You",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z" fillRule="evenodd"></path></svg>,
      path: "/you",
    },
    {
      label: "History",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z" fillRule="evenodd"></path></svg>,
      path: "/history",
    },
    {
      label: "Playlists",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M3.75 5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 5 20.25 5H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 9 20.25 9H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5Zm8.5 4c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5Zm3.498-3.572c-.333-.191-.748.05-.748.434v6.276c0 .384.415.625.748.434L22 17l-6.252-3.572Z" fillRule="evenodd"></path></svg>,
      path: "/playlists",
    },
    {
      label: "Your videos",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z" fillRule="evenodd"></path></svg>,
      path: "/your-videos",
    },
    {
      label: "Watch later",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z" fillRule="evenodd"></path></svg>,
      path: "/watch-later",
    },
    {
      label: "Liked videos",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M14.813 5.018 14.41 6.5 14 8h5.192c.826 0 1.609.376 2.125 1.022.711.888.794 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H5c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h2v.282c0-.834.26-1.647.745-2.325L12 1l1.1.472c1.376.59 2.107 2.103 1.713 3.546ZM7 10.5H5c-.276 0-.5.224-.5.5v8c0 .276.224.5.5.5h2v-9Zm10.5 9h-9V9.282c0-.521.163-1.03.466-1.453l3.553-4.975c.682.298 1.043 1.051.847 1.77l-.813 2.981c-.123.451-.029.934.255 1.305.284.372.725.59 1.192.59h5.192c.37 0 .722.169.954.459.32.399.357.954.094 1.393l-.526.876c-.241.402-.28.894-.107 1.33l.165.412c.324.81.203 1.73-.32 2.428l-.152.202c-.195.26-.3.575-.3.9v.5c0 .828-.672 1.5-1.5 1.5Z" fillRule="evenodd"></path></svg>,
      path: "/liked-videos",
    }
  ],
  subscriptions: [
    {
      label: "HIMA HIMA CHANNEL",
      icon: 'https://yt3.ggpht.com/0rTuzyWSb8xePqRAMlsO8EKVdVFSRePifN5ktzIiR6YVpD6bAU2AozUcETfvFexM8YOEnyHiQSk=s88-c-k-c0x00ffffff-no-rj',
      path: "/channel/hima-hima",
    },
    {
      label: "aiktp - AI Blog Writer Tool",
      icon: 'https://yt3.ggpht.com/SshisI8SUxFsOQ5vSDXGkdttBo-TjCCuWU7BiAkUW5FmpMuwo4IQ6t2Auq6VmkZmw4-HutHI7A=s88-c-k-c0x00ffffff-no-rj',
      path: "/channel/aiktp",
    },
    {
      label: "All subscriptions",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M5 8.5c.828 0 1.5-.672 1.5-1.5S5.828 5.5 5 5.5 3.5 6.172 3.5 7 4.172 8.5 5 8.5ZM8 7c0-.414.336-.75.75-.75h11.5c.414 0 .75.336.75.75s-.336.75-.75.75H8.75C8.336 7.75 8 7.414 8 7Zm.75 4.25c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H8.75Zm0 5c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H8.75ZM6.5 12c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5ZM5 18.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5Z" fillRule="evenodd"></path></svg>,
      path: "/subscriptions/all",
    }
  ],
  explore: [
    {
      label: "Trending",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="m14 2-1.5.886-5.195 3.07C4.637 7.533 3 10.401 3 13.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5V1l-1.5 1-3 2L14 5V2ZM8.068 7.248l4.432-2.62v3.175l2.332-1.555L18.5 3.803V13.5c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-2.568 1.357-4.946 3.568-6.252ZM9 15c0-1.226.693-2.346 1.789-2.894L15 10v5c0 1.657-1.343 3-3 3s-3-1.343-3-3Z" fillRule="evenodd"></path></svg>,
      path: "/trending",
    },
    {
      label: "Music",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M19 3c0-.271-.146-.521-.383-.654-.237-.133-.527-.127-.758.014l-9 5.5c-.223.136-.359.379-.359.64v7.901C8.059 16.146 7.546 16 7 16c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3v-7.08l7.5-4.583v6.064c-.441-.255-.954-.401-1.5-.401-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3Zm-1.5 13c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm-9 3c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5Zm9-13.42L10 10.162V8.92l7.5-4.584V5.58Z" fillRule="evenodd"></path></svg>,
      path: "/music",
    },
    {
      label: "Gaming",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="m12 7.75-.772-.464-4.186-2.511L2.5 7.803v6.307L12 19.29l9.5-5.181V7.803l-4.542-3.028-4.186 2.511L12 7.75ZM12 6 7.814 3.488c-.497-.298-1.122-.283-1.604.039L1.668 6.555C1.251 6.833 1 7.3 1 7.803v6.307c0 .548.3 1.054.782 1.316l9.5 5.182c.447.244.989.244 1.436 0l9.5-5.182c.482-.262.782-.768.782-1.316V7.803c0-.502-.25-.97-.668-1.248L17.79 3.527c-.482-.322-1.107-.337-1.604-.039L12 6Zm3.5 6.25c0 .69-.56 1.25-1.25 1.25S13 12.94 13 12.25 13.56 11 14.25 11s1.25.56 1.25 1.25ZM7 8c-.414 0-.75.336-.75.75v1.5h-1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.5v1.5c0 .414.336.75.75.75s.75-.336.75-.75v-1.5h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.5v-1.5C7.75 8.336 7.414 8 7 8Zm10.75 3c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z" fillRule="evenodd"></path></svg>,
      path: "/gaming",
    },
    {
      label: "News",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M2 5.121V3l.94.94.56.56.5.5.94-.94.12-.12L6 3l.94.94.12.12L8 5l.94-.94.12-.12L10 3l.94.94.12.12L12 5l.94-.94.12-.12L14 3l.94.94.12.12L16 5l.94-.94.12-.12L18 3l.94.94.12.12L20 5l.5-.5.56-.56L22 3v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5.121ZM10.75 19.5h-4.5v-5.25h4.5v5.25Zm1.25 0V13H5v6.5H4c-.276 0-.5-.224-.5-.5V7.65l2.514-2.514.925.925L8 7.12l1.06-1.06.94-.94.94.94L12 7.12l1.06-1.06.94-.94.94.94L16 7.12l1.06-1.06.926-.925L20.5 7.65V19c0 .276-.224.5-.5.5h-8ZM19 9v2H5V9h14Zm-5 4h5v1.5h-5V13Zm5 3h-5v1.5h5V16Z" fillRule="evenodd"></path></svg>,
      path: "/news",
    },
    {
      label: "Sports",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M6.5 3.5h11V9c0 3.038-2.462 5.5-5.5 5.5S6.5 12.038 6.5 9V3.5ZM5 3.5C5 2.672 5.672 2 6.5 2h11c.828 0 1.5.672 1.5 1.5V4h2c.552 0 1 .448 1 1v3c0 2.493-1.825 4.56-4.212 4.938-1.082 1.588-2.8 2.707-4.788 2.991V17.5h1.5c.828 0 1.5.672 1.5 1.5v3H8v-3c0-.828.672-1.5 1.5-1.5H11v-1.57c-1.987-.285-3.706-1.404-4.788-2.992C3.825 12.56 2 10.493 2 8V5c0-.552.448-1 1-1h2v-.5Zm0 1.75H3.25V8c0 1.508.89 2.808 2.174 3.403C5.15 10.654 5 9.845 5 9V5.25Zm13.576 6.153C19.86 10.808 20.75 9.508 20.75 8V5.25H19V9c0 .844-.15 1.654-.424 2.403ZM9.5 20.5V19h5v1.5h-5Z" fillRule="evenodd"></path></svg>,
      path: "/sports",
    }
  ],
  more: [
    {
      label: "YouTube Premium",
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;">
  <g>
    <path fill="#FF0033" d="M21.58,7.19c-0.23-0.86-0.91-1.54-1.77-1.77C18.25,5,12,5,12,5S5.75,5,4.19,5.42   C3.33,5.65,2.65,6.33,2.42,7.19C2,8.75,2,12,2,12s0,3.25,0.42,4.81c0.23,0.86,0.91,1.54,1.77,1.77C5.75,19,12,19,12,19   s6.25,0,7.81-0.42c0.86-0.23,1.54-0.91,1.77-1.77C22,15.25,22,12,22,12S22,8.75,21.58,7.19z"></path>
    <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
  </g>
</svg>,
      path: "/premium",
    },
    {
      label: "YouTube Studio",
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;">
  <g>
    <path fill="#FF0033" d="M11.13,1.21c0.48-0.28,1.26-0.28,1.74,0l8.01,4.64c0.48,0.28,0.87,0.97,0.87,1.53v9.24   c0,0.56-0.39,1.25-0.87,1.53l-8.01,4.64c-0.48,0.28-1.26,0.28-1.74,0l-8.01-4.64c-0.48-0.28-0.87-0.97-0.87-1.53V7.38   c0-0.56,0.39-1.25,0.87-1.53L11.13,1.21z"></path>
    <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
    <path fill="#FFFFFF" d="M12,6c0.11,0,0.19,0.03,0.21,0.04l4.89,2.82c0.05,0.03,0.14,0.2,0.14,0.37v5.67c0,0.17-0.09,0.34-0.14,0.37   l-4.9,2.83c-0.03,0.01-0.1,0.04-0.21,0.04c-0.11,0-0.19-0.03-0.21-0.04l-4.9-2.83c-0.05-0.03-0.15-0.2-0.15-0.37V9.24   c0-0.17,0.1-0.34,0.14-0.37l4.9-2.83C11.82,6.03,11.89,6,12,6 M12,5c-0.25,0-0.51,0.06-0.71,0.18L6.39,8   C5.99,8.23,5.75,8.77,5.75,9.24v5.67c0,0.47,0.24,1,0.64,1.24l4.9,2.83c0.2,0.12,0.46,0.18,0.71,0.18c0.25,0,0.51-0.06,0.71-0.18   l4.9-2.83c0.41-0.24,0.64-0.77,0.64-1.24V9.24c0-0.47-0.23-1-0.64-1.24l-4.9-2.82C12.51,5.06,12.26,5,12,5L12,5z"></path>
  </g>
</svg>,
      path: "/studio",
    },
    {
      label: "YouTube Music",
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;">
  <g>
    <circle id="XMLID_4814__yt100" fill="#FF0033" cx="12" cy="12" r="11"></circle>
    <path fill="#FFFFFF" d="M12,6.25c3.17,0,5.75,2.58,5.75,5.75s-2.58,5.75-5.75,5.75S6.25,15.17,6.25,12S8.83,6.25,12,6.25 M12,5.25   c-3.73,0-6.75,3.02-6.75,6.75s3.02,6.75,6.75,6.75s6.75-3.02,6.75-6.75S15.73,5.25,12,5.25L12,5.25z"></path>
    <polygon fill="#FFFFFF" points="10,15 15,12 10,9  "></polygon>
  </g>
</svg>,
      path: "/music",
    },
    {
      label: "YouTube Kids",
      icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;">
  <g>
    <g>
      <path fill="#FF0033" d="M22.64,13.2c-0.01-1.04-0.62-5.98-0.9-6.74c-0.19-0.5-0.58-1.4-1.31-1.95c-0.94-0.7-1.7-0.83-2.68-0.85    C17.06,3.64,6.12,5.03,4.79,5.51C3.8,5.88,3.03,6.35,2.42,6.95c-0.99,0.98-1.18,1.93-1.02,3.6c0.14,1.52,0.85,6.55,1.21,7.59    c0.39,1.15,1.11,2.03,2.3,2.16c3.62,0.39,4.48-1.6,12.9-1.58c2.55,0.01,3.82-1.11,4.35-2.08C22.77,15.49,22.65,13.99,22.64,13.2z"></path>
      <path fill="#212121" d="M17.47,4.04C17.47,4.04,17.48,4.04,17.47,4.04c0.94,0.02,1.67,0.14,2.56,0.81    c0.7,0.53,1.08,1.39,1.25,1.86c0.28,0.73,0.85,5.44,0.86,6.43c0.01,0.76,0.12,2.19-0.47,3.28c-0.5,0.92-1.71,1.98-4.13,1.98    c-0.01,0-0.01,0-0.02,0c-0.04,0-0.07,0-0.11,0c-7.23,0-8.55,1.56-11.33,1.56c-0.27,0-0.56-0.02-0.87-0.05    c-1.13-0.12-1.82-0.96-2.19-2.06c-0.34-0.99-1.01-5.79-1.15-7.24c-0.15-1.6,0.03-2.51,0.98-3.44c0.58-0.57,1.32-1.02,2.27-1.37    C6.38,5.35,16.73,4.04,17.47,4.04 M17.47,3.2c-0.47,0-3.53,0.37-6.09,0.72C8.82,4.27,5.6,4.75,4.84,5.03    c-1.06,0.39-1.9,0.9-2.56,1.56C1.05,7.8,0.9,9.06,1.05,10.7c0.12,1.27,0.8,6.28,1.19,7.43c0.53,1.55,1.55,2.48,2.89,2.62    c0.33,0.04,0.64,0.05,0.96,0.05c1.17,0,2.1-0.25,3.18-0.54c1.69-0.45,3.8-1.02,8.15-1.02l0.11,0l0.02,0    c1.07,0,3.68-0.24,4.86-2.42c0.63-1.17,0.6-2.59,0.58-3.43c0-0.09,0-0.18-0.01-0.26c-0.01-1.01-0.59-5.85-0.92-6.72    c-0.38-1-0.89-1.75-1.53-2.23c-1.05-0.79-1.94-0.96-3.04-0.98l-0.01,0L17.47,3.2L17.47,3.2z"></path>
    </g>
    <g>
      <path fill="#FFFFFF" d="M15.28,11.85c-0.03,0.02-0.05,0.03-0.08,0.05c-0.21,0.14-0.42,0.28-0.63,0.43    c-0.49,0.33-3.33,2.26-3.33,2.26c-0.24,0.18-0.7,0.47-0.87,0.38c-0.17-0.09-0.23-0.72-0.27-1.02l-0.01-0.07    c-0.05-0.36-0.46-3.83-0.51-4.21C9.56,9.56,9.5,9.17,9.62,9.08c0.13-0.1,0.47,0.01,0.58,0.05c0.66,0.21,3.93,1.35,4.95,1.86    c0.03,0.02,0.06,0.03,0.1,0.04c0.15,0.06,0.35,0.15,0.35,0.39C15.6,11.65,15.42,11.76,15.28,11.85z"></path>
      <path fill="#212121" d="M10.04,9.59c1.14,0.38,3.77,1.32,5.01,1.87c-0.15,0.1-0.3,0.2-0.45,0.3c-0.58,0.39-3.94,2.68-3.94,2.68    l-0.02,0.01l-0.02,0.01c0,0,0,0,0,0c0-0.03-0.01-0.05-0.01-0.07l-0.02-0.13l-0.01-0.08c-0.04-0.31-0.31-2.58-0.48-3.94    C10.08,9.98,10.06,9.76,10.04,9.59 M9.4,8.56c-0.07,0-0.14,0.01-0.18,0.05c-0.15,0.11-0.07,0.58-0.05,0.7    c0.05,0.45,0.54,4.56,0.6,4.99l0.01,0.08c0.05,0.36,0.12,1.1,0.33,1.21c0.03,0.01,0.06,0.02,0.1,0.02c0.25,0,0.68-0.28,0.93-0.47    c0,0,3.36-2.29,3.94-2.68c0.25-0.17,0.5-0.34,0.75-0.51c0.03-0.02,0.06-0.04,0.1-0.06c0.17-0.1,0.38-0.23,0.38-0.5    c-0.01-0.29-0.24-0.39-0.41-0.46c-0.04-0.02-0.08-0.03-0.11-0.05c-1.21-0.61-5.09-1.96-5.87-2.21C9.8,8.63,9.58,8.56,9.4,8.56    L9.4,8.56z"></path>
    </g>
  </g>
</svg>,
      path: "/kids",
    }
  ],
  settings: [
    {
      label: "Settings",
      icon: <div className="width: 100%; height: 100%; display: block; fill: currentcolor;"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="m14.302 6.457-.668-.278L12.87 3.5h-1.737l-.766 2.68-.668.277c-.482.2-.934.463-1.344.778l-.575.44-2.706-.677-.868 1.504 1.938 2.003-.093.716c-.033.255-.05.514-.05.779 0 .264.017.524.05.779l.093.716-1.938 2.003.868 1.504 2.706-.677.575.44c.41.315.862.577 1.344.778l.668.278.766 2.679h1.737l.765-2.68.668-.277c.483-.2.934-.463 1.345-.778l.574-.44 2.706.677.869-1.504-1.938-2.003.092-.716c.033-.255.05-.514.05-.779 0-.264-.017-.524-.05-.779l-.092-.716 1.938-2.003-.869-1.504-2.706.677-.574-.44c-.41-.315-.862-.577-1.345-.778Zm4.436.214Zm-3.86-1.6-.67-2.346c-.123-.429-.516-.725-.962-.725h-2.492c-.446 0-.838.296-.961.725l-.67 2.347c-.605.251-1.17.58-1.682.972l-2.37-.593c-.433-.108-.885.084-1.108.47L2.717 8.08c-.223.386-.163.874.147 1.195l1.698 1.755c-.04.318-.062.642-.062.971 0 .329.021.653.062.97l-1.698 1.756c-.31.32-.37.809-.147 1.195l1.246 2.158c.223.386.675.578 1.109.47l2.369-.593c.512.393 1.077.72 1.681.972l.67 2.347c.124.429.516.725.962.725h2.492c.446 0 .839-.296.961-.725l.67-2.347c.605-.251 1.17-.58 1.682-.972l2.37.593c.433.108.885-.084 1.109-.47l1.245-2.158c.223-.386.163-.874-.147-1.195l-1.698-1.755c.04-.318.062-.642.062-.971 0-.329-.021-.653-.062-.97l1.698-1.756c.31-.32.37-.809.147-1.195L20.038 5.92c-.224-.386-.676-.578-1.11-.47l-2.369.593c-.512-.393-1.077-.72-1.681-.972ZM15.5 12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM14 12c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" fillRule="evenodd"></path></svg></div>,
      path: "/settings",
    },
    {
      label: "Report history",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M4.75 3H4v18.25c0 .414.336.75.75.75s.75-.336.75-.75V14H11l.585 1.17c.254.509.774.83 1.342.83H18.5c.828 0 1.5-.672 1.5-1.5v-8c0-.828-.672-1.5-1.5-1.5H13l-.585-1.17C12.16 3.32 11.64 3 11.073 3H4.75Zm.75 9.5h6.427l.415.83.585 1.17H18.5v-8h-6.427l-.415-.83-.585-1.17H5.5v8Z" fillRule="evenodd"></path></svg>,
      path: "/report-history",
    },
    {
      label: "Help",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M3.5 12c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5S3.5 7.306 3.5 12ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm2.245 7.505v-.003l-.003-.045c-.004-.044-.012-.114-.03-.2-.034-.174-.103-.4-.234-.619-.234-.39-.734-.883-1.978-.883s-1.744.494-1.978.883c-.131.22-.2.445-.235.62-.017.085-.025.155-.029.2l-.003.044v.004c-.004.415-.34.749-.755.749-.417 0-.755-.338-.755-.755H9h-.755v-.022l.001-.036.008-.114c.008-.092.023-.218.053-.367.058-.294.177-.694.42-1.1.517-.86 1.517-1.616 3.273-1.616 1.756 0 2.756.756 3.272 1.617.244.405.363.805.421 1.1.03.148.046.274.053.366l.008.114v.036l.001.013v.008L15 9.5h.755c0 .799-.249 1.397-.676 1.847-.374.395-.853.634-1.202.808l-.04.02c-.398.2-.646.333-.82.516-.136.143-.262.358-.262.809 0 .417-.338.755-.755.755s-.755-.338-.755-.755c0-.799.249-1.397.676-1.847.374-.395.853-.634 1.202-.808l.04-.02c.398-.2.646-.333.82-.516.135-.143.261-.356.262-.804ZM12 18.25c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z" fillRule="evenodd"></path></svg>,
      path: "/help",
    },
    {
      label: "Send feedback",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" className="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path clipRule="evenodd" d="M6.379 17.5H19c.276 0 .5-.224.5-.5V5c0-.276-.224-.5-.5-.5H5c-.276 0-.5.224-.5.5v14.379l1.44-1.44.439-.439Zm-1.879 4-.033.033-.26.26-.353.353c-.315.315-.854.092-.854-.353V5c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H7l-2.5 2.5ZM12 6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1Zm0 9.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z" fillRule="evenodd"></path></svg>,
      path: "/feedback",
    }
  ]
};


export const Chipitem = [
  { name: 'All' },
  { name: 'Music' },
  { name: 'Games' },
  { name: 'News' },
  { name: 'Live' },
  { name: 'Sports' },
  { name: 'Fashion' },
  { name: 'Learning' },
  { name: 'Technology' },
  { name: 'Movies' },
  { name: 'Comedy' },
  { name: 'Education' },
  { name: 'Vlogs' },
  { name: 'DIY' },
  { name: 'Fitness' },
  { name: 'Travel' },
  { name: 'Science' },
  { name: 'Motivation' },
  { name: 'Anime' },
  { name: 'Podcasts' },
  { name: 'History' },
  { name: 'Cooking' },
  { name: 'Art' },
  { name: 'Books' },
  { name: 'Programming' },
  { name: 'Startups' },
  { name: 'Design' },
  { name: 'Finance' },
  { name: 'Investing' },
  { name: 'Marketing' },
  { name: 'Photography' },
  { name: 'Languages' },
]