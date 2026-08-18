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
                bg: 'var(--bg)',
                surface: 'var(--surface)',
                text: {
                    DEFAULT: 'var(--text)',
                    secondary: 'var(--text-secondary)',
                },
                border: 'var(--border)',
                accent: 'var(--accent)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Poppins', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
