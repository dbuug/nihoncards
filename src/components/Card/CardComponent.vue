<script setup>
import { ref, defineEmits } from 'vue'
import Skeleton from 'primevue/skeleton'
import { localStorageConfig } from '@/stores/LocalStorageDealer/UserConfig'

const props = defineProps(['cards', 'praticeType', 'isKanji', 'section'])
const user = localStorageConfig()
const emit = defineEmits(['updatePratice'])

const hint = ref(0)
hint.value = false
const fliped = ref(0)
fliped.value = false
const cardsLength = ref(0)
cardsLength.value = props.cards.length

const lenCards = ref(0)
lenCards.value = 0

function shuffleArray(array) {
  const copy = array.slice()
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const kanas = ref(0)
kanas.value = shuffleArray(props.cards)

const easy = (kana) => {
  lenCards.value += 1
  user.setNextDay(props.section, kana, 1, 5)
  hint.value = false
  fliped.value = false
}
const medium = (kana) => {
  lenCards.value += 1
  user.setNextDay(props.section, kana, 2, 3)
  hint.value = false
  fliped.value = false
}
const hard = (kana) => {
  lenCards.value += 1
  user.setNextDay(props.section, kana, 3, 1)
  hint.value = false
  fliped.value = false
}
const nextCard = () => {
  lenCards.value += 1
  fliped.value = false
  hint.value = false
}

const finish = () => {
  emit('updatePratice', false)
}
</script>
<template>
  <div :class="{ card: true }">
    <div v-if="cardsLength !== lenCards">
      <div class="top-bar">{{ lenCards }}/{{ cardsLength }}</div>
      <div class="kana">{{ kanas[lenCards].letter }}</div>
      <div class="hints" @click="hint = !hint" v-if="isKanji">
        <div>Clique para ver a dica:</div>
        <Skeleton
          v-if="!hint"
          class="mb-2"
          style="background: var(--custom-background-1)"
        ></Skeleton>
        <div v-if="hint">{{ kanas[lenCards].hiragana }}</div>
      </div>
      <div class="hints" @click="fliped = !fliped">
        <div>Clique para ver a resposta:</div>
        <Skeleton
          v-if="!fliped"
          class="mb-2"
          style="background: var(--custom-background-1); height: 1.8rem"
        ></Skeleton>
        <div v-if="fliped" class="response">
          {{ String(kanas[lenCards].translation).toUpperCase() }}
        </div>
      </div>
    </div>
    <div v-else class="fn-box">
      <div class="fn-title">Parabéns!</div>
      <div class="fn-body">Você concluiu com sucesso a prática de hoje!</div>
      <div><Button label="Finalizar Sessão" style="margin-top: 20px" @click="finish()" /></div>
    </div>
  </div>
  <div class="options" v-if="praticeType === 'spaced' && cardsLength !== lenCards">
    <Button label="Fácil" @click="easy(kanas[lenCards])" />
    <Button label="Médio" @click="medium(kanas[lenCards])" />
    <Button label="Difícil" @click="hard(kanas[lenCards])" />
  </div>
  <div style="margin-bottom: 20px" v-if="praticeType === 'full'">
    <Button label="Próximo" @click="nextCard()" />
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
  height: 330px;
}
.options {
  width: 30%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5%;
  margin: 20px;
}
.kana {
  font-size: 100px;
}
.top-bar {
  text-align: center;
  color: white;
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
.response {
  letter-spacing: 2px;
  font-size: 25px;
}
.fn-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.fn-title {
  font-size: 40px;
}
.fn-body {
  font-size: 25px;
}
</style>
