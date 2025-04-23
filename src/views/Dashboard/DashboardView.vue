<script setup lang="ts">
import {onMounted} from "vue";
import {initFlowbite} from "flowbite";

import Sidebar from "@/views/Common/Sidebar.vue";
import Navbar from "@/views/Common/Navbar.vue";

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <div>
      <Navbar></Navbar>
      
      <div class="grid grid-cols-12">
          <div class="col-span-2">
              <Sidebar></Sidebar>
          </div>
          <div class="col-span-10">
              <div class="p-4">
                  <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                      <div class="grid grid-cols-3 gap-4 mb-4">
                          <div class="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                      </div>
                      <div class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
                          <p class="text-2xl text-gray-400 dark:text-gray-500">
                              <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                              </svg>
                          </p>
                      </div>
                      <div class="grid grid-cols-2 gap-4 mb-4">
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                      </div>
                      <div class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
                          <p class="text-2xl text-gray-400 dark:text-gray-500">
                              <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                              </svg>
                          </p>
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                          <div class="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                              <p class="text-2xl text-gray-400 dark:text-gray-500">
                                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
</style>