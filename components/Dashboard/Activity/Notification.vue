<template>
    <div class="card" v-for="({ icon, comment }, index) in Notification" :key="index">
        <div class="flex justify-content-start gap-3 align-items-center">
            <i class="pi font-semibold text-xl border-circle p-3" :class="icon"></i>
            <span class="font-italic line-height-3 text-base text-700">{{ comment }}</span>
        </div>
    </div>
</template>

<script setup>
const Notification = NotificationRecords()
</script>

<style lang="scss" scoped>
.card {
    margin: 2px 0 0 0 !important;
    padding: 0.7em !important;
    background-color: var(--surface-c);
    border: 1px solid var(--surface-c);
    border-radius: 3px;

    &:hover {
        background-color: var(--surface-d);
        cursor: pointer;
    }
}
</style>