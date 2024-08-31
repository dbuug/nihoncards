<script setup>
import { ref } from 'vue'
import SideBar from '@/components/Sidebar/SideBar.vue'
import PraticeView from './PraticeView.vue'

let praticeMode = ref(0)
let praticeSection = ref(0)
praticeMode.value = false
praticeSection.value = 'hiragana'
</script>

<template>
  <SideBar v-if="praticeMode === false" @update-section="(b) => (praticeSection = b)" />
  <PraticeView
    :praticeMode="praticeMode"
    :praticeSection="praticeSection"
    @update-pratice="(b) => (praticeMode = b)"
  />
</template>
