<script setup>
import { localStorageConfig } from '@/stores/LocalStorageDealer/UserConfig'
import PrePraticeComponent from '@/components/Card/PrePraticeComponent.vue'
import CardComponent from '@/components/Card/CardComponent.vue'
import { ref, defineEmits } from 'vue'
import QuizComponent from '@/components/Card/QuizComponent.vue'
import AboutMe from '@/components/About/AboutMe.vue'

const props = defineProps(['praticeMode', 'praticeSection'])
const emit = defineEmits(['updatePratice'])

const user = localStorageConfig()
user.getLocalStorageConfig

const qtdToPratice = ref(0)
const praticeType = ref(0)

const startPratice = (pratice, qtd, pt) => {
  praticeType.value = pt
  qtdToPratice.value = qtd
  emit('updatePratice', pratice)
}

const quizCards = ref()
const startQuiz = (hiraganaCheck, katakanaCheck, n5Check) => {
  const cards = []
  if (hiraganaCheck) cards.push(...user.hiragana)
  if (katakanaCheck) cards.push(...user.katakana)
  if (n5Check) cards.push(...user.n5)
  quizCards.value = cards
  emit('updatePratice', true)
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
  return user.getN5ToPratice
}

const toUpdatePratice = () => {
  emit('updatePratice', false)
}
</script>

<template>
  <div v-if="props.praticeSection === undefined || props.praticeSection === 'about'">
    <AboutMe />
  </div>
  <div v-if="props.praticeSection === 'hiragana'" class="pratice-box">
    <PrePraticeComponent
      v-if="props.praticeMode === false"
      :cards="user.getHiraganaToPratice"
      :section="props.praticeSection"
      @start-pratice="startPratice"
    />
    <CardComponent
      v-if="props.praticeMode === true"
      :praticeType="praticeType"
      :cards="getHiraganaCards()"
      :section="props.praticeSection"
      @update-pratice="toUpdatePratice"
    />
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
      :section="props.praticeSection"
      @start-pratice="startPratice"
    />
    <CardComponent
      v-if="props.praticeMode === true"
      :praticeType="praticeType"
      :cards="getKatakanaCards()"
      :section="props.praticeSection"
      @update-pratice="toUpdatePratice"
    />
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
      :section="props.praticeSection"
      @start-pratice="startPratice"
    />
    <CardComponent
      v-if="props.praticeMode === true"
      :praticeType="praticeType"
      :cards="getN5Cards()"
      :isKanji="true"
      :section="props.praticeSection"
      @update-pratice="toUpdatePratice"
    />
    <Button
      v-if="props.praticeMode === true"
      @click="$emit('updatePratice', false)"
      label="Cancelar Sessão"
    />
  </div>
  <div v-if="props.praticeSection === 'quiz'" class="pratice-box">
    <QuizPrePraticeComponent
      v-if="props.praticeMode === false"
      :cards="quizCards"
      :section="props.praticeSection"
      @start-quiz="startQuiz"
    />
    <QuizComponent
      v-if="props.praticeMode === true"
      :cards="quizCards"
      @update-pratice="toUpdatePratice"
    />
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
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .pratice-box {
    width: 100%;
    height: 70vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
