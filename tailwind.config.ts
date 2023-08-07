module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                'darker-purple': '#4B0082',
                'dark-purple': '#8A2BE2',
                'light-purple': '#9B30FF',
                white: '#FFFFFF',

                'bright-purple': '#8B5F93',
                green: '#5A9367',
                red: '#BC525B',

                // Neutral Colors
                gray: '#CCCCCC',
                'dark-gray': '#1E1E1E',

                // Optional Additional Colors
                'light-yellow': '#FDEB93',
                'dark-yellow': '#EAB35A',
            },
        },
    },
    variants: {},
    plugins: [],
};