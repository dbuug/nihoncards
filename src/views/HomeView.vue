<script setup>
import { ref } from 'vue'
import SideBar from '@/components/Sidebar/SideBar.vue'
import PraticeView from './PraticeView.vue'

let praticeMode = ref(0)
let praticeSection = ref(0)
praticeMode.value = false
praticeSection.value = undefined
</script>

<template>
  <div :class="{ 'app-non-pratice': !praticeMode, 'app-in-pratice': praticeMode }">
    <SideBar v-if="praticeMode === false" @update-section="(b) => (praticeSection = b)" />
    <PraticeView
      :praticeMode="praticeMode"
      :praticeSection="praticeSection"
      @update-pratice="(b) => (praticeMode = b)"
    />
  </div>
</template>
