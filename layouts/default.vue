<template>
    <link id="theme-link" rel="stylesheet"
        :href="themeStore.link || 'https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/vela-blue/theme.css'">
     <div class="layout-wrapper" :class="containerClass">
        <AppBar />
        <div class="layout-sidebar">
            <SideBar />
        </div>
        <div class="layout-main-container">
            <div class="layout-main">
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup>
import { useThemeStore } from '../stores/Themes'
const themeStore = useThemeStore();

const containerClass = computed(() => {
    return {
        // 'layout-theme-light': layoutConfig.darkTheme.value === 'light',
        // 'layout-theme-dark': layoutConfig.darkTheme.value === 'dark',
        'layout-overlay': themeStore.cuurentMode === 'overlay',
        'layout-static': themeStore.cuurentMode === 'static',
        // 'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
        // 'layout-overlay-active': layoutState.overlayMenuActive.value,
        // 'layout-mobile-active': layoutState.staticMenuMobileActive.value,
        // 'p-input-filled': layoutConfig.inputStyle.value === 'filled',
        // 'p-ripple-disabled': !layoutConfig.ripple.value
    };
});
</script>

<style scoped>
.layout-container {
    height: 100vh !important;
}
</style>