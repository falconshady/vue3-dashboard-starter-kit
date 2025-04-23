import router from "@/router";

import type {LoginPayload} from "@/types/login.d.ts";

import {$generateRandomID, $handleErrorMessage} from "@/helpers/helpers.ts";

import {useUserStore} from "@/stores/UserStore.ts";
import useToastComposable from "@/composables/useToastComposable.ts";

const $toastComposable = useToastComposable()
const $userStore = useUserStore()
const $performLogin = async (payload: LoginPayload) => {
    $userStore.$isLoading = true;
    try {
        const userInfo = await $userStore.$performLogin({
            username: payload.username,
            password: payload.password,
        })
        if (userInfo.success) {
            $toastComposable.$create({id: $generateRandomID(8), type: 'success', message: `Welcome ${payload.username}! please wait to redirect`})
            if ($userStore.$isLogged) {
                setTimeout(async () => {
                    $toastComposable.$removeAllItems()
                    await router.push('/dashboard')
                }, 2000)
            }
        }
    } catch (error) {
        const message = $handleErrorMessage(error || {})
        $toastComposable.$create({id: $generateRandomID(8), type: 'danger', message: message.error})
        throw message
    } finally {
        $userStore.$isLoading = false
        setTimeout(() => $userStore.$isLoading = false, 2000);
    }
}

export {$performLogin}