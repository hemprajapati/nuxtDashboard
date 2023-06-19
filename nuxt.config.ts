const baseURL = 'primevue/resources/'
import { NuxtConfig } from '@nuxt/types'
export default defineNuxtConfig({
    imports: {
        dirs: [
            'composables',
            'composables/**',
        ]
    },
    css: [
        "primeflex/primeflex.scss",
        "primeicons/primeicons.css",
        "primevue/resources/primevue.min.css",
        '@/assets/styles.scss'
    ],
    build: {
        transpile: ["primevue"]
    },
    modules: ['@pinia/nuxt',
        "@auth0/auth0-vue"
        // '@nuxtjs/axios',
    ],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // auth: {
    //     strategies: {
    //         local: false,
    //         auth0: {
    //             domain: "dev-t0kqdfabolg2siaa.us.auth0.com",
    //             client_id: "GKyvSYb2SsbIEv8WWrfIOBHtWtDGxwGa",
    //         },
    //     },
    //     redirect: {
    //         login: '/login',
    //         logout: '/logout',
    //         callback: '/callback',
    //         home: '/',
    //     },
    // },
})
