<template>
    <div class="flex gap-3 flex-column gap-4">
        <DashboardCardList />
        <div class="grid">
            <div class="col-12 xl:col-6">
                <ChartSalesView :axisOption="axisOptions" :legendOption="legendOption" />
            </div>
            <div class=" col-12 xl:col-6">
                <div class=" grid">
                    <div class="  col-6">
                        <ChartEarning :legendOption="legendOption" />
                    </div>
                    <div class="col-6">
                        <!-- <DashboardCreditCard /> -->
                        <ChartConversions :legendOption="legendOption" />
                    </div>
                </div>
            </div>
        </div>
        <div class="grid">
            <div class="col-12 xl:col-8">
                <DashboardTable />
            </div>
            <div class="col-12 xl:col-4">
                <DashboardRecentView />
            </div>
        </div>
    </div>
</template>

<script setup>

import { useThemeStore } from '../stores/Themes'
// definePageMeta({
//     middleware: ['auth'],
// })
const themeStore = useThemeStore();
const axisOptions = ref(null);
const axisROptions = ref(null)
const legendOption = ref(null)

const applyLightTheme = () => {
    legendOption.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
    }
    axisOptions.value = {
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    display: false
                }
            },
        }
    }
};
const applyDarkTheme = () => {
    legendOption.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
    }
    axisOptions.value = {
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0)',
                    display: false
                },
            },
        }
    };
};

const currentMode = computed(() => {
    if (themeStore.themeMode === 'dark') {
        return applyDarkTheme();
    }
    return applyLightTheme();
})

watch(
    currentMode,
    () => { },
    { deep: true }
);


</script>

<style scoped></style> 