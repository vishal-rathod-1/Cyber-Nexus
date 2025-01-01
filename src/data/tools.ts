export interface Tool {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    features: string[];
    tutorial: string;
    publishedAt: string;
    author: string;
}

export const tools: Tool[] = [
    {
        id: 'wireshark',
        title: 'Wireshark',
        description: 'Network protocol analyzer for real-time packet capture and analysis.',
        category: 'Network Analysis',
        image: '/images/wireshark.jpg',
        publishedAt: '2024-01-15',
        author: 'Admin',
        features: [
            'Real-time packet capture',
            'Deep packet inspection',
            'Protocol analysis',
            'Network troubleshooting'
        ],
        tutorial: `
            1. Download and install Wireshark
            2. Select network interface to capture
            3. Start packet capture
            4. Apply filters to analyze specific traffic
            5. Export results for documentation
        `
    },
    {
        id: 'nmap',
        title: 'Nmap',
        description: 'Powerful network discovery and security auditing tool.',
        category: 'Network Analysis',
        image: '/images/nmap.jpg',
        publishedAt: '2024-01-20',
        author: 'Admin',
        features: [
            'Host discovery',
            'Port scanning',
            'Service detection',
            'OS fingerprinting'
        ],
        tutorial: `
            1. Basic network scan: nmap [target]
            2. Scan specific ports: nmap -p [ports] [target]
            3. Service version detection: nmap -sV [target]
            4. OS detection: nmap -O [target]
            5. Save output: nmap -oN [file] [target]
        `
    },
    {
        id: 'metasploit',
        title: 'Metasploit',
        description: 'Penetration testing framework for security testing.',
        category: 'System Security',
        image: '/images/metasploit.jpg',
        publishedAt: '2024-01-25',
        author: 'Admin',
        features: [
            'Exploit development',
            'Vulnerability verification',
            'Post-exploitation tools',
            'Payload generation'
        ],
        tutorial: `
            1. Start Metasploit Console: msfconsole
            2. Search for exploits: search [keyword]
            3. Select exploit: use [exploit path]
            4. Set options: set [option] [value]
            5. Run exploit: exploit
        `
    }
];