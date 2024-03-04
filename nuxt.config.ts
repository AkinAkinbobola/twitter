// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/image',
        'nuxt-icon',
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    colorMode: {
        classSuffix: ''
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})