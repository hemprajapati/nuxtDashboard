
<template>
    <div class="flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-12 md:col-6 py-4 px-3"
            style="background-color: var(--surface-overlay); border: 1px solid var(--surface-d);">
            <h4 style="color: var(--surface-700);">Sign In</h4>
            <div class="btn p-3 inline-block cursor" style="background-color: var(--surface-d);"
                @click.prevent="handleLogin()">
                Login With AUth0
            </div>
            {{  }}
        </div>
    </div>
</template>

<script setup>
// import authOclient from "@/Auth";
definePageMeta({
    layout: 'blank',
})
// onMounted(() => {
//     console.log("auth",this.$auth)
// })
const handleLogin = async () => {
    // const authClient = await authOclient();
    // const { loginWithRedirect } = authClient

    // console.log("hello", loginWithRedirect())

    // await loginWithRedirect()
    // console.log("await", authClient.loginWithRedirect())
}
</script>

<style lang="scss" scoped></style>