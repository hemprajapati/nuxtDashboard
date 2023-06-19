<template>
    <div class="card h-full">
        <Chart type="radar" :data="lineData" :options="{ ...legendOption, ...lineOptions }" />
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
defineProps({
    legendOption: {
        type: Object,
        required: true,
    },
})
const lineOptions = ref({
    scales: {
        r: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        }
    },
    elements: {
        line: {
            borderWidth: 3
        },
        point: {
            pointStyle: 'round'
        }
    }
})
const lineData = reactive({
    labels: ['Planning', 'Organizing', 'Command', 'Coordination', 'Control'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 27, 65, 51],
            fill: true,
            backgroundColor: '#2f4860ed',
            pointBackgroundColor: '#2f4860',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#2f4860',
        },
        {
            label: 'Second Dataset',
            data: [54, 32, 48, 39, 65],
            fill: true,
            backgroundColor: '#00bb7df1',
            pointBackgroundColor: '#00bb7e',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
    ]
});
</script>

<style lang="scss" scoped>
.v {
    background: #00bb7df1;
}
</style>