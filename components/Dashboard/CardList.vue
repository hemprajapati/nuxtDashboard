<template>
    <div class="grid">
        <div class="col-12 md:col-6 xl:col"
            v-for="({ title, icon, bgcolor, digit1, digit1Prefix, digit1Postfix, digit2, digit2Prefix, digit2Postfix, message }, index) in Cards"
            :key="index">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">{{ title }}</span>
                        <div class="text-900 font-medium text-xl">{{ digit1Prefix }} <span class="mr-1"> {{ digit1
                        }}</span>{{
    digit1Postfix }}</div>
                    </div>
                    <div :class="bgcolor" class="flex align-items-center justify-content-center  border-round"
                        style="width: 2.5rem; height: 2.5rem">
                        <i :class="icon" class="pi text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium mr-1">{{ digit2Prefix }}{{ digit2 }} {{ digit2Postfix }} </span>
                <span class="text-500">{{ message }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const Cards = CardList()
</script>

<style lang="scss" scoped></style>