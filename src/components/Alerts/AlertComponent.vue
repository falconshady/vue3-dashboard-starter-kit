<script setup lang="ts">
import useAlertComposable from "@/composables/useAlertComposable.ts";

const props = defineProps({
    id: String,
    type: String,
})
</script>

<template>
    <div :id="props.id"
        :class="{
            'bg-blue-50 text-blue-800': props.type === 'primary',
            'bg-gray-50 text-gray-800': props.type === 'secondary',
            'bg-green-50 text-green-800': props.type === 'success',
            'bg-yellow-50 text-yellow-800': props.type === 'warning',
            'bg-red-50 text-red-800': props.type === 'danger',
            'bg-green-50 text-green-800 ': props.type === undefined,
        }"
        class="flex items-center p-4 rounded-lg" role="alert"
    >
        <i
            :class="{
                'fa-solid fa-circle-info fa-beat-fade': props.type === 'primary',
                'fa-solid fa-circle-info fa-beat': props.type === 'secondary',
                'fa-solid fa-circle-check fa-bounce': props.type === 'success',
                'fa-solid fa-circle-exclamation fa-beat': props.type === 'warning',
                'fa-solid fa-circle-xmark fa-fade': props.type === 'danger',
                'fa-solid fa-circle-check fa-bounce ': props.type === undefined,
            }"
        ></i>
        <span class="sr-only">Info</span>
        <div class="ms-3 text-sm font-medium">
            <slot></slot>
        </div>
        <button type="button" @click="useAlertComposable().$dismiss(props.id)"
            :class="{
                'bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200': props.type === 'primary',
                'bg-gray-50 text-gray-500 focus:ring-gray-400 hover:bg-gray-200': props.type === 'secondary',
                'bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200': props.type === 'success',
                'bg-yellow-50 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200': props.type === 'warning',
                'bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200': props.type === 'danger',
                'bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 ': props.type === undefined,
            }"
            class="cursor-pointer ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8"
            aria-label="Close">
                <span class="sr-only">Close</span>
                <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
</template>

<style scoped>
</style>