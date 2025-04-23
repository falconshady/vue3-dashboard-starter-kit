import {defineStore} from 'pinia'
import {ref} from "vue";

import type {LoginPayload} from "@/types/login.d.ts";
import UserService from "@/services/UserService.ts";

export const useUserStore = defineStore('user', () => {
    const $isLoading = ref<boolean>(false)
    const $userData = ref<object>({})
    const $isLogged = ref<boolean>(false)

    async function $performLogin(payload: LoginPayload) {
        try {
            const response = await UserService().$performLogin(payload)
            $userData.value = response.userData
            $isLogged.value = response.isLogged
            return response
        } catch (error) {
            throw error
        }
    }

    return {
        $performLogin,
        $isLoading, $isLogged, $userData
    }
})