<template>
    <div class="card" v-for="({ productName, productType, consumerName, amount, transcationType }, index) in salesData"
        :key="index">
        <div class="flex justify-content-between align-items-start">
            <div>
                <p class="m-0 text-lg font-semibold text-600">{{ productName }} <span class="ml-2 font-normal text-sm">{{
                    productType }}</span></p>
                <span class="font-italic text-sm text-500">By {{ consumerName }}</span>
            </div>
            <div class="flex flex-column" style="min-width: 110px;">
                <p class="m-0 font-semibold text-700 text-lg">${{ amount }}</p>
                <span class="font-italic text-sm text-500">By {{ transcationType }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const salesData = SalesRecord()
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