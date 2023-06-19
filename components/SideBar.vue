<template>
    <!-- Sidebar -->
    <!-- <Sidebar class="sidebar" v-model:visible="isOpen">
        <div class="card">
            <h1>hello</h1>
        </div>
    </Sidebar> -->
    <div :class="{ open: isOpen }">
        <h1>hello</h1>
    </div>
</template>
<script setup>
const isOpen = ref(true)
</script>

<style scoped>

.open {
    left: 0;
}
</style>