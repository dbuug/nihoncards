<template>
  <div class="card flex justify-center">
    <PrimeButton
      type="button"
      icon="pi pi-align-justify"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      severity="secondary"
      raised
      style="background-color: #ef8b87"
    />
    <PrimeMenu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import app from '@/main'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
app.component('PrimeButton', Button)
app.component('PrimeMenu', Menu)

const menu = ref()
const items = ref([
  {
    items: [
      {
        label: 'Exportar sessão',
        icon: 'pi pi-file-export'
      },
      {
        label: 'Informações',
        icon: 'pi pi-info-circle'
      },
      {
        label: 'Contato',
        icon: 'pi pi-discord'
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog'
      }
    ]
  }
])

const toggle = (event) => {
  menu.value.toggle(event)
}
</script>
