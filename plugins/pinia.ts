import { useThemeStore } from '../stores/Themes'
export default defineNuxtPlugin(({ $pinia }: any) => {
    return {
        provide: {
            store: useThemeStore($pinia)
        }
    }
})