<script setup>
import { ref } from 'vue'
import Skeleton from 'primevue/skeleton'

const hint = ref(0)
hint.value = false
const fliped = ref(0)
fliped.value = false
const props = defineProps(['cards'])

const kana = 'あ'
</script>
<template>
  <div class="top-bar">
    <ProgressBar value="40"> {{ value }}/100 </ProgressBar>
  </div>
  <div :class="{ card: true, shake: disabled }">
    <div class="kana">{{ kana }}</div>
    <div class="hints" @click="hint = !hint">
      <div>Clique para ver a dica:</div>
      <Skeleton v-if="!hint" class="mb-2" style="background: var(--custom-background-1)"></Skeleton>
      <div v-if="hint">hiragana se kanji / romanji</div>
    </div>
    <div class="hints" @click="fliped = !fliped">
      <div>Clique para ver a resposta:</div>
      <Skeleton
        v-if="!fliped"
        class="mb-2"
        style="background: var(--custom-background-1)"
      ></Skeleton>
      <div v-if="fliped">traducao when flipped</div>
    </div>
  </div>
  <div class="options">
    <Button label="Fácil" />
    <Button label="Médio" />
    <Button label="Difícil" />
    <Button label="Esqueci" />
  </div>
</template>
<style scoped>
.card {
  width: 40%;
  background-color: var(--custom-background-2);
  border-radius: 8px;
  color: white;
  padding: 20px;
  margin: 20px;
  text-align: center;
  height: 300px;
}
.options {
  width: 30%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5%;
  margin: 20px;
}
.kana {
  font-size: 100px;
}
.top-bar {
  width: 40%;
  margin-top: 20px;
}
.hints {
  width: 50%;
  height: 50px;
  margin: 0 auto;
  --p-skeleton-animation-background: var(--custom-background-2);
}
.hints:hover {
  cursor: pointer;
}
</style>
