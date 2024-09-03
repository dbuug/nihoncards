<script setup>
import { ref } from 'vue'
const props = defineProps(['cards'])
const qtdCardsToPratice = ref(0)
</script>
<template>
  <div class="p-pratice-box">
    <div class="p-inside-box">
      <div class="title">Prática aleatória</div>
      <div class="subtitle">
        Você poderá praticar todos os cards de forma aleatória por tempo indeterminado.
      </div>
      <Button
        label="Prática Aleatória"
        class="margin-top: auto"
        @click="$emit('startPratice', true, 0)"
      />
    </div>
    <div class="p-inside-box">
      <div class="title">Repetição espaçada</div>
      <div class="subtitle">Voce possui {{ props.cards.length }} cards ao total para praticar</div>
      <div>Selecione quantos deseja praticar: {{ qtdCardsToPratice }}</div>
      <Slider
        v-model="qtdCardsToPratice"
        :min="0"
        :max="props.cards.length"
        style="width: 40%; margin: 20px 20px 40px 10px"
      />
      <Button
        label="Prática Espaçada"
        class="margin-top: auto"
        @click="$emit('startPratice', true, qtdCardsToPratice)"
      />
    </div>
  </div>
</template>
<style scoped>
.p-pratice-box {
  width: 80%;
  background-color: var(--custom-background-2);
  border-radius: 8px;
  color: white;
  padding: 20px;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}
.p-inside-box {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 30px;
}
</style>
