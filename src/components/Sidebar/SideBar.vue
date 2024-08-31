<template>
  <div class="card flex justify-center">
    <Menu :model="items" class="w-full md:w-60" style="height: 100%" dt="menu.color">
      <template #start>
        <SidebarHeader title="NIHONGO CARDS" subtitle="日本語カード" />
      </template>
      <template #submenulabel="{ item }">
        <span class="text-primary font-bold">{{ item.label }}</span>
      </template>
      <template #item="{ item }">
        <!-- TODO: componente pro menu -->
        <SidebarItems
          :icon="item.icon"
          :character="item.character"
          :text="item.text"
          :badge="item.badge"
        />
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarItems from './SidebarItems.vue'

const items = ref([
  {
    separator: true
  },
  {
    items: [
      {
        character: '正',
        text: 'Sequencia de dias',
        badge: 2
      },
      {
        text: 'Hiragana',
        character: 'あ'
      },
      {
        text: 'Katakana',
        character: 'ァ'
      },
      {
        text: 'Kanji N5',
        character: '日'
      },
      {
        text: 'Exportar',
        icon: 'pi pi-file-export'
      },
      {
        text: 'Importar',
        icon: 'pi pi-file-import'
      },
      {
        text: 'Contato',
        icon: 'pi pi-discord'
      },
      {
        text: 'Informações',
        icon: 'pi pi-info-circle'
      }
    ]
  }
])
</script>
