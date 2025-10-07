let defaultSettings = {
    timeFormat: '24hr',
    latitude: 52.6806615,
    longitude: -8.5722277,
    tempUnit: 'celsius',
    speedUnit: 'kmh',
    linksPerColumn: 3,
    linkTarget: '_self',
    links: [
        { title: 'gmail', url: 'https://mail.google.com' },
        { title: 'brightspace', url:'https://learn.ul.ie/d2l/home' },
        { title: 'github', url: 'https://github.com' },
        { title: 'perplexity', url: 'https://perplexity.ai' },
        { title: 'claude', url: 'https://claude.ai' },
        { title: 'chatgpt', url: 'https://chat.openai.com' },
        { title: 'youtube', url: 'https://youtube.com' },
        { title: 'twitter', url: 'https://x.com' },

    ],
}

function loadSettings() {
    try {
        const stored = localStorage.getItem('settings')
        if (stored) {
            const parsed = JSON.parse(stored)
            return { ...defaultSettings, ...parsed }
        }
    } catch (error) {
        console.error('failed to load settings from localStorage:', error)
    }

    return defaultSettings
}

export function saveSettings(settings) {
    try {
        localStorage.setItem('settings', JSON.stringify(settings))
    } catch (error) {
        console.error('failed to save settings to localStorage:', error)
    }
}

export const settings = $state(loadSettings())
