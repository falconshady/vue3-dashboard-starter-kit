<script setup lang="ts">
import Notifications from "@/views/Common/Notifications.vue";
import Logo from "@/views/Common/Logo.vue";
import UserMenu from "@/views/Common/UserMenu.vue";
</script>

<template>
    <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="w-full flex items-start justify-between mx-auto p-4">
                <Logo></Logo>
                <div class="flex items-center md:order-2 space-x-3 md:space-x-0 ">
                    <Notifications></Notifications>
                    <UserMenu></UserMenu>
                </div>
            </div>
        </nav>

    </div>
</template>

<style scoped>

</style>