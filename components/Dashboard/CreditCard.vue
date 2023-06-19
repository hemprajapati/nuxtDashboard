<template>
    <div class="card">
        <div class="wrapper ">
            <div class="creditcard">

            </div>
        </div>
        <div style="margin: 1.3rem;" class="flex align-items-center justify-content-between">
            <div class="flex gap-3 align-item-start justify-content-start">
                <i class="pi pi-shopping-bag" style="color: 'var(--primary-color)'; font-size: 1.5rem;"></i>
                <div>
                    <h4 class="mb-1">1156</h4>
                    <span class="text-500">Products</span>

                </div>
            </div>
            <p>lo</p>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
    padding: 0;

    .wrapper {
        height: 14rem;
        position: relative;
        overflow: hidden;
        z-index: 10 !important;
        display: flex;
        justify-content: center;
        align-items: center;

        .creditcard {
            margin: 0.81rem !important;
            border: 1px solid var(--surface-border);
            background-color: transparent;
            margin: auto;
            height: 92%;
            width: 100%;
            backdrop-filter: blur(7px) !important;
            -webkit-backdrop-filter: blur(5px);

        }

        &::before {
            content: '';
            position: absolute;
            top: -13%;
            left: -16%;
            height: 12rem;
            width: 12rem;
            border-radius: 50%;
            background: #00bb7e;
            z-index: -1 !important;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -13%;
            right: -16%;
            height: 12rem;
            width: 12rem;
            border-radius: 50%;
            background: #2f4860;
            z-index: -1 !important;


        }
    }
}
</style>