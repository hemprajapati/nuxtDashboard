<script setup>

import { useThemeStore } from '../stores/Themes'
const themeStore = useThemeStore()

console.log(themeStore)
</script>

<template>
    <link id="theme-link" rel="stylesheet"
        :href="themeStore.link || 'https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/vela-blue/theme.css'" />
    <div :class="containerClass">
                <slot />
            </div>
            <AppFooter />
</template>

<style lang="scss">
.layout-main {
    position: relative;
}
</style>
