<template>
    <div class="card ">
        <Chart type="line" :data="lineData" :options="{ ...legendOption, ...axisOption }" />
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
const lineData = reactive({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            animation: {
                onProgress: function (animation) {
                    progress.value = animation.currentStep / animation.numSteps;
                },
                duration: 1000,
                easing: 'easeOutBounce',
            },
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
});
defineProps({
    axisOption: {
        type: Object,
        required: true,
    },
    legendOption: {
        type: Object,
        required: true,
    }

})
</script>

<style lang="scss" scoped></style>