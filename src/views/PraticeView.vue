<script setup>
import { localStorageConfig } from '@/stores/LocalStorageDealer/UserConfig'
import PrePraticeComponent from '@/components/Card/PrePraticeComponent.vue'
import CardComponent from '@/components/Card/CardComponent.vue'
import { ref, defineEmits } from 'vue'

const props = defineProps(['praticeMode', 'praticeSection'])
const emit = defineEmits(['updatePratice'])

const user = localStorageConfig()
user.getLocalStorageConfig

const qtdToPratice = ref(0)

const startPratice = (pratice, qtd) => {
  qtdToPratice.value = qtd
  emit('updatePratice', pratice)
}

const getHiraganaCards = () => {
  if (qtdToPratice.value === 0) return user.hiragana
  return user.getHiraganaToPratice
}
const getKatakanaCards = () => {
  if (qtdToPratice.value === 0) return user.katakana
  return user.getKatakanaToPratice
}
const getN5Cards = () => {
  if (qtdToPratice.value === 0) return user.n5
  return user.getN5Cards
}
</script>

<template>
  <div v-if="props.praticeSection === undefined">正 Sequencia de dias</div>
  <div v-if="props.praticeSection === 'hiragana'" class="pratice-box">
    <PrePraticeComponent
      v-if="props.praticeMode === false"
      :cards="user.getHiraganaToPratice"
      @start-pratice="startPratice"
    />
    <CardComponent v-if="props.praticeMode === true" :cards="getHiraganaCards()" />
    <Button
      v-if="props.praticeMode === true"
      @click="$emit('updatePratice', false)"
      label="Cancelar Sessão"
    />
  </div>
  <div v-if="props.praticeSection === 'katakana'" class="pratice-box">
    <PrePraticeComponent
      v-if="props.praticeMode === false"
      :cards="user.getKatakanaToPratice"
      @start-pratice="startPratice"
    />
    <CardComponent v-if="props.praticeMode === true" :cards="getKatakanaCards()" />
    <Button
      v-if="props.praticeMode === true"
      @click="$emit('updatePratice', false)"
      label="Cancelar Sessão"
    />
  </div>
  <div v-if="props.praticeSection === 'n5'" class="pratice-box">
    <PrePraticeComponent
      v-if="props.praticeMode === false"
      :cards="user.getN5ToPratice"
      @start-pratice="startPratice"
    />
    <CardComponent v-if="props.praticeMode === true" :cards="getN5Cards()" />
    <Button
      v-if="props.praticeMode === true"
      @click="$emit('updatePratice', false)"
      label="Cancelar Sessão"
    />
  </div>
</template>

<style scoped>
.pratice-box {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
