<template>
    <div class="card py-2">
        <DataTable v-model:filters="filters" filterDisplay="row" dataKey="id" :value="customers" :rows="5"
            :rowsPerPageOptions="[5, 10, 20, 50]" paginator>
            <template #header>
                <div class="w-full flex justify-content-between align-items-start">
                    <div>
                        <h4 class="">Enterprise Clients</h4>
                        <span>
                            <i class="pi pi-check text-green-500 mr-1"> </i>
                            <span class="text-secondary-color-300">
                                15 New Acquired ths month
                            </span>
                        </span>
                    </div>
                    <Dropdown class="p-inputtext" :options="tableConfig" optionLabel="name">
                        <template #dropdownicon>
                            <div class="mr-3 my-2 p-0 flex justify-center">
                                <i class="pi pi-spin pi-cog text-3xl"></i>
                            </div>
                        </template>
                    </Dropdown>
                </div>
            </template>
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
            <Column field="name" header="Name">
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" style="min-width: 5rem
                                                                        ;" class="p-column-filter py-2"
                        placeholder="Search by name" />
                </template>
            </Column>
            <Column field="country.name" header="Country Name">
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" style="min-width: 5rem
                                                                        ; width: 100%;" class="p-column-filter py-2"
                        placeholder="Search by name" />
                </template>
            </Column>
            <Column filterField="representative" header="Agent" :showFilterMenu="false"
                :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name"
                            :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                            style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" @change="filterCallback()"
                        placeholder="Search by agent" optionLabel="name">
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" :showFilterMenu="false">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" rounded />
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses"
                        placeholder="Select One" class="p-column-filter" style="min-width: 5rem; width: 100%;"
                        :showClear="true">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="verified" header="Verify" :showFilterMenu="false">
                <template #body="{ data }">
                    <div class="w-full flex justify-content-center">
                        <i class="pi" :class="{
                            'pi-check-circle text-green-500': data.verified,
                            'pi-times-circle text-red-400': !data.verified,
                        }"></i>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <div class="w-full border-2 flex justify-content-center">
                        <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import TriStateCheckbox from 'primevue/tristatecheckbox';

import { FilterMatchMode } from 'primevue/api';
import Dropdown from 'primevue/dropdown';
const customers = TableRecords()
const tableConfig = ref([
    { name: 'showgrid', code: 'NY' },
    { name: 'isStripped', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
])
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;

    }
}
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' },
]);
const statuses = ref([
    'unqualified',
    'qualified',
    'new',
    'negotiation',
    'renewal',
    'proposal',
]);
</script>
<style lang="scss" scoped></style>