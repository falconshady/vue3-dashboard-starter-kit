<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'

import {initFlowbite} from 'flowbite'

import useAlertComposable from "@/composables/useAlertComposable.ts";
import {useUserStore} from "@/stores/UserStore";
import {$performLogin} from "@/views/Login/functions.ts";

import ButtonWithLoader from "@/components/Buttons/ButtonWithLoader.vue";
import {$generateRandomID} from "@/helpers/helpers.ts";

const $alertComposable = useAlertComposable()
const $userStore = useUserStore()

const $username = ref<string>('')
const $password = ref<string>('')

function $handlePerformLogin() {
    $performLogin({
        username: $username.value,
        password: $password.value,
    })
}

onMounted(() => {
    $alertComposable.$itemList.value = []
    $alertComposable.$create({id: $generateRandomID(8), type: 'warning', message: `Please confirm login before`})
    $alertComposable.$create({id: $generateRandomID(8), type: 'danger', message: `Some services can be fail, please be patient`})
    initFlowbite();
})

onUnmounted(() => {
    $alertComposable.$removeAllItems()
})
</script>

<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input v-model="$username" type="text" name="email" id="email"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required=""
                                >
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="$password" type="password" name="password" id="password"
                                       placeholder="••••••••"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""
                                >
                            </div>
                            <div class="flex items-center justify-end">
                                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                            </div>
                            <ButtonWithLoader @click="$handlePerformLogin" :isDisabled="$userStore.$isLoading">
                                <i class="fa-solid fa-right-to-bracket"></i> Login
                            </ButtonWithLoader>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
