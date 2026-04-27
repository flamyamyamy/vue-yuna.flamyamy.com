export const commandData = [
    {
        title: 'Anime & Manga',
        emoji: '⛩️',
        description: 'Access detailed info from the world of Japanese media.',
        commands: [
            { name: '/anime <title>', text: 'Shows a complete overview of an anime, including status, episodes, and a synopsis.' },
            { name: '/character <name>', text: 'Find information and high-quality images of your favorite anime characters.' },
            { name: '/manga <title>', text: 'Displays details about manga volumes, chapters, and the publishing story.' }
        ]
    },
    {
        title: 'User Utilities',
        emoji: '👤',
        description: 'Get insights into server members.',
        commands: [
            { name: '/userinfo [user]', text: 'View join dates, roles, permissions, and unique Discord IDs.' },
            { name: '/avatar [user]', text: 'Fetch the full resolution profile picture of a specific user.' },
            { name: '/banner [user]', text: 'Extract and display a user’s profile banner in its original size.' }
        ]
    }
    // Du kannst hier weitere Kategorien wie "Leveling" etc. einfach hinzufügen
];