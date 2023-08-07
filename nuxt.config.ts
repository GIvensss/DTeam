// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, '/')
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        'dayjs-nuxt',
        '@vueuse/nuxt',
        '@element-plus/nuxt',
    ],
    runtimeConfig: {
        public: {
            apiBaseURL: 'https://api.opendota.com/api/',
            imagesStorageBaseURL: 'https://cdn.cloudflare.steamstatic.com',
        },
    },
    css: [
        "~/assets/main.scss"
    ],
    dayjs: {
        locales: ['en'],
        plugins: ['duration', 'utc', 'timezone'],
        defaultLocale: 'en',
        defaultTimezone: 'America/New_York',
    }
})
