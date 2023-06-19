<template>
    <div class="card">
        <h4 class="">Recent Activity</h4>
        <div class="flex justify-content-start align-items-center gap-2 text-sm">
            <i class="pi pi-clock"> </i>
            <span>
                Last 24 hours activity will appear here
            </span>
        </div>
        <div class="mt-3">
            <TabView :lazy="true">
                <TabPanel v-for="(tab, index) in tablist" :key="index" :header="tab.tabname" :pt="{
                    headeraction: ({ props, parent }) => ({
                        class: [
                            {
                                'btn': parent.state.d_activeIndex === index
                            },
                        ]
                    })
                }">
                    <component :is="tab.target"></component>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>
<style lang="scss" scoped>  .btn:not(:first-child) {
      border-left: none !important;
  }

  .activeTab {
      background-color: var(--surface-d) !important;
  }

  .card {
      border-radius: 0;
      position: static;
      top: 15px;
  }
</style>

<script setup>
import TabView from 'primevue/tabview'
import Sales from "../Dashboard/Activity/Sales.vue"
import Notification from "../Dashboard/Activity/Notification.vue"
import TabPanel from 'primevue/tabpanel';

const tablist = ref([{
    tabname: 'Sales',
    target: Sales
},
{
    tabname: 'Activity',
    target: Notification
},
{
    tabname: 'Notification',
    target: Notification

},])
</script> 