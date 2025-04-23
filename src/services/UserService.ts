import {ref} from "vue";
import type {LoginPayload} from "@/types/login";
import useAxiosComposable from "@/composables/useAxiosComposable.ts";
const $axiosComposable = useAxiosComposable();

const $userData = ref<object>({})
const $isLogged = ref<boolean>(false)
export default function userService() {
    async function $performLogin(payload: LoginPayload) {
        try {
            const response = await $axiosComposable.$post('/auth/login', {
                username: payload.username,
                password: payload.password,
            }, {credentials: 'include'})

            if (Object.entries(response.data).length) {
                $userData.value = response.data
                $isLogged.value = true
            }
            return {
                success: true,
                userData: $userData.value,
                isLogged: $isLogged.value
            }
        } catch (error) {
            throw error
        }
    }

    return {$performLogin}
}