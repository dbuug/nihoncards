<script setup>
import { localStorageConfig } from '@/stores/LocalStorageDealer/UserConfig'
import PrePraticeComponent from '@/components/Card/PrePraticeComponent.vue'
import CardComponent from '@/components/Card/CardComponent.vue'
const user = localStorageConfig()
user.getLocalStorageConfig

const props = defineProps(['praticeMode', 'praticeSection'])
</script>

<template>
  <div v-if="props.praticeSection === undefined">正 Sequencia de dias</div>
  <div v-if="props.praticeSection === 'hiragana'" class="pratice-box">
    <PrePraticeComponent v-if="props.praticeMode === false" />
    <Button
      v-if="props.praticeMode === false"
      @click="$emit('updatePratice', true)"
      label="Praticar HIRAGANA"
    />
    <CardComponent v-if="props.praticeMode === true" />
    <Button
      v-if="props.praticeMode === true"
      @click="$emit('updatePratice', false)"
      label="Cancelar Sessão"
    />
    <!-- {{ props.praticeMode }}
    {{ props.praticeSection }}
    {{ user.getHiraganaToPratice }} -->
  </div>
  <div v-if="props.praticeSection === 'katakana'" class="pratice-box">
    <PrePraticeComponent v-if="props.praticeMode === false" />
    <Button
      v-if="props.praticeMode === false"
      @click="$emit('updatePratice', true)"
      label="Praticar KATAKANA"
    />
    <CardComponent v-if="props.praticeMode === true" />
    <Button
      v-if="props.praticeMode === true"
      @click="$emit('updatePratice', false)"
      label="Cancelar Sessão"
    />
  </div>
  <div v-if="props.praticeSection === 'n5'" class="pratice-box">
    <PrePraticeComponent v-if="props.praticeMode === false" />
    <Button
      v-if="props.praticeMode === false"
      @click="$emit('updatePratice', true)"
      label="Praticar KANJI N5"
    />
    <CardComponent v-if="props.praticeMode === true" />
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
