<script setup>
import { ref, watch } from 'vue'
import SideBar from '@/components/Sidebar/SideBar.vue'
import PraticeView from './PraticeView.vue'
import { localStorageConfig } from '@/stores/LocalStorageDealer/UserConfig'
import { initialUserSetup } from '@/stores/LocalStorageDealer/InitialUserSetup'
let praticeMode = ref(0)
let praticeSection = ref(0)
praticeMode.value = false
praticeSection.value = undefined
watch(praticeSection, (newValue, oldValue) => {
  const user = localStorageConfig()
  const hiragana = localStorage.getItem('hiragana')
  const katakana = localStorage.getItem('katakana')
  const n5 = localStorage.getItem('n5')

  if (hiragana === null || katakana === null || n5 === null) {
    const initialSetup = initialUserSetup()
    initialSetup.getLetters
    initialSetup.setLocalStorageConfig(initialSetup.$state)
  } else {
    user.hiragana = JSON.parse(hiragana)
    user.katakana = JSON.parse(katakana)
    user.n5 = JSON.parse(n5)
  }
})
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
