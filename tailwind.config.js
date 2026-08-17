/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#0B0D10',
                    secondary: '#101318',
                },
                text: {
                    DEFAULT: '#F5F7FA',
                    secondary: '#9CA3AF',
                    muted: '#6B7280',
                },
                border: 'rgba(255,255,255,0.08)',
                accent: {
                    DEFAULT: '#7C3AED',
                    secondary: '#60A5FA',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
