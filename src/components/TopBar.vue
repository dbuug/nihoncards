<template>
  <MegaMenu :model="items">
    <template #item="{ item }">
      <a v-ripple :href="item.url" :target="item.target">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </MegaMenu>
</template>

<script setup>
import { ref } from 'vue'
import app from '@/main'
import MegaMenu from 'primevue/megamenu'
app.component('MegaMenu', MegaMenu)

const items = ref([
  {
    label: 'Sequencia de dias',
    icon: 'pi pi-language',
    root: true
  },
  {
    label: 'あ Hiragana',
    root: true
  },
  {
    label: 'ァ Katakana',
    root: true
  },
  {
    label: 'Kanji N5',
    root: true
  }
])
</script>
