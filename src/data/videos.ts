import type { Video } from '../types/video';

// Helper function to extract YouTube video ID from URL
const getYouTubeId = (url: string): string => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/);
    return match?.[1] ?? '';
};

export const videos: Video[] = [
    {
        id: 'wireshark-basics',
        title: 'Getting Started with Wireshark',
        description: 'Learn the basics of network analysis with Wireshark.',
        source: {
            type: 'youtube',
            url: 'https://youtube.com/watch?v=example1',
            thumbnailUrl: '/images/wireshark-thumb.jpg'
        },
        category: 'Network Analysis',
        publishedAt: '2024-01-15',
        author: 'Admin'
    },
    // Add more videos here following the same structure
];

// TODO: Future enhancements
// - Add video series/playlists
// - Add difficulty levels
// - Add prerequisites
// - Add related tools
// - Add transcripts