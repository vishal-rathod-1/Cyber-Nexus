// Define video-related types for better type safety and documentation
export interface VideoSource {
    type: 'youtube' | 'local';
    url: string;
    thumbnailUrl?: string;
}

export interface Video {
    id: string;
    title: string;
    description: string;
    source: VideoSource;
    category: string;
    publishedAt: string;
    author: string;
    // Future fields to consider:
    // - tags: string[]
    // - difficulty: 'beginner' | 'intermediate' | 'advanced'
    // - duration: number (in seconds)
    // - prerequisites: string[]
}