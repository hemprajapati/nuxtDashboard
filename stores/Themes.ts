import { defineStore } from 'pinia'

export const useThemeStore = defineStore('main', {
    state: () => ({
        link: 'https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/vela-blue/theme.css',
        cuurentMode: 'static',
        themeMode: 'dark',
        themeName: 'mdc',
        primaryColor: 'indigo'
    }),
    actions: {
        changeTheme(newTheme: string) {
            this.themeName = newTheme;
            this.link = `https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/${this.themeName}-${this.themeMode}-${this.primaryColor}/theme.css`
        },
        changeMode() {
            if (this.themeMode === 'dark') {
                this.themeMode = 'light'
            }
            else {
                this.themeMode = 'dark'
            }
            this.link = `https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/${this.themeName}-${this.themeMode}-${this.primaryColor}/theme.css`

        },
        changeMenuType(mode: string) {
            this.cuurentMode = mode;
        }
    },
})