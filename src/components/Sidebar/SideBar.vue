<template>
  <div class="mobile-menu" :style="{ position: 'relative', width: '100%' }">
    <div class="top-bar">
      <span class="title">NIHONGO CARDS</span>
      <span class="subtitle">日本語カード</span>
      <span class="btns">
        <Button label="Sobre" size="small" @click="$emit('updateSection', 'about')" />
        <Button label="Hiragana" size="small" @click="$emit('updateSection', 'hiragana')" />
        <Button label="Katakana" size="small" @click="$emit('updateSection', 'katakana')" />
        <Button label="Kanji" size="small" @click="$emit('updateSection', 'n5')" />
        <Button label="Quiz" size="small" @click="$emit('updateSection', 'quiz')" />
      </span>
    </div>
  </div>
  <div class="sidebar">
    <Menu
      :model="items"
      class="w-full md:w-60"
      style="
        height: 100%;
        background-color: #e59ab6;
        color: white;
        border: none;
        border-radius: 10px;
      "
    >
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
          :toEmit="item.toEmit"
          @update-section="(s) => $emit('updateSection', s)"
        />
      </template>
    </Menu>
  </div>
</template>
<style scoped>
.mobile-menu {
  display: none;
}
@media only screen and (max-width: 600px) {
  .sidebar {
    display: none;
  }
  .mobile-menu {
    display: block;
    width: 100%;
    z-index: 999999;
  }
  .top-bar {
    width: 100%;
    text-align: center;
    height: 120px;
    background-color: #e59ab6;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 25px;
  }
  .subtitle {
    font-size: 20px;
  }
  .btns {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
  }
}
</style>
<script setup>
import { ref } from 'vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarItems from './SidebarItems.vue'

const items = ref([
  {
    items: [
      {
        text: 'Sobre Nihoncards',
        character: '自',
        toEmit: 'about'
      },
      {
        text: 'Hiragana',
        character: 'あ',
        toEmit: 'hiragana'
      },
      {
        text: 'Katakana',
        character: 'ァ',
        toEmit: 'katakana'
      },
      {
        text: 'Kanji N5',
        character: '日',
        toEmit: 'n5'
      },
      {
        text: 'Modo Quiz',
        character: '問',
        toEmit: 'quiz'
      }
      // {
      //   text: 'Exportar',
      //   icon: 'pi pi-file-export'
      // },
      // {
      //   text: 'Importar',
      //   icon: 'pi pi-file-import'
      // },
      // {
      //   text: 'Contato',
      //   icon: 'pi pi-discord'
      // },
      // {
      //   text: 'Informações',
      //   icon: 'pi pi-info-circle'
      // }
    ]
  }
])
</script>
