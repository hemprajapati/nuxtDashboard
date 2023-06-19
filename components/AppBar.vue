<template>
    <div class="layout-topbar flex gap-4">
        <i style="font-size: 1.5rem;" class="pi pi-palette" @click="changeTheme()"></i>

        <i style="font-size: 1.5rem;" class="pi " :class="modeIcon" @click="changeMode()"></i>

        <div class="img-box">
            <img src="../images/profie.jpeg" alt="">
        </div>

    </div>
</template>

<script setup>
import { useThemeStore } from '../stores/Themes'
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();
const themeStore = useThemeStore();
// let { themeMode } = themeStore;

const modeIcon = computed(() => {
    if (themeStore.themeMode === 'dark') {
        return 'pi-moon'
    }
    return 'pi-sun'
})

const changeTheme = () => {
    themeStore.changeTheme('lara');
}
const changeMode = () => {
    themeStore.changeMode();
}
</script>

<style scoped>
.img-box {
    width: 42px;
    height: 42px;
}

.img-box img {
    overflow: hidden;
    width: 100%;
    border-radius: 50%;
    height: 100%;
    object-fit: fill;
}
</style>