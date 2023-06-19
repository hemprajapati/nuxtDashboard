<template>
  <div class="card">
    <p>
      <!-- {{ lineOptions }} -->
    </p>
    <Chart type="doughnut" :data="lineData" :options="legendOption" />
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
const lineData = reactive({
  labels: [
    'Red',
    'Blue',
  ],
  datasets: [
    {
      data: [20, 80],
      backgroundColor: [
        '#00bb7e',
        '#2f4860',
      ],
      borderWidth: 0,
      borderRadius: 5,
    },
  ]
});
</script>

<style lang="scss" scoped></style>