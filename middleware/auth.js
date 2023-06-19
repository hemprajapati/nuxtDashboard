
import authOclient from "@/Auth";
export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        const authClient = await authOclient();
        const auth = await authClient.isAuthenticated();
        if (!auth) {
            return await navigateTo({ path: "/login" })
        }
    }
})