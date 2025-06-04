export const ROUTES = {
    HOME: '/',
    WATCH: {
        BASE: (videoId: string) => `/watch?v=${videoId}`,
        WITH_TIME: (videoId: string, startSeconds: number) => 
        `/watch?v=${videoId}&t=${startSeconds}s`,
    },
} as const;