// Simple auth utility - Replace with your actual auth implementation
export function isAdmin(): boolean {
    // During build time, allow access to generate static pages
    if (import.meta.env.SSR) {
        return true;
    }
    // Implement your admin check logic here for runtime
    return false;
}

export function requireAdmin() {
    if (!isAdmin()) {
        throw new Error('Unauthorized: Admin access required');
    }
}