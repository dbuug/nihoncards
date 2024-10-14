<script setup>
import { ref, defineEmits } from 'vue'

const props = defineProps(['cards', 'hiragana', 'katakana', 'n5'])
const emit = defineEmits(['updatePratice'])

const lenCards = ref(0)
lenCards.value = 0
const showCardValue = ref(0)
showCardValue.value = false
const showFinal = ref(0)
showFinal.value = false
const responses = ref(0)
responses.value = []
const score = ref(0)
score.value = 0

function shuffleArray(array) {
  const copy = array.slice()
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function randomizeFake(array, current) {
  let fake = current
  while (current === fake) {
    const randInt = Math.floor(Math.random() * array.length)
    fake = array[randInt]
  }
  return fake
}

function quiz(cards, number) {
  const quiz = []
  const allCards = shuffleArray(cards)
  const clength = allCards.length
  for (let i = 1; i <= number; i++) {
    const randInt = Math.floor(Math.random() * clength)
    const original = allCards[randInt]
    const fakeOne = randomizeFake(allCards, original)
    const fakeTwo = randomizeFake(allCards, original)
    const options = [
      {
        kana: original.letter ? original.letter : original.kanji,
        translate: original.translation,
        original: true
      },
      {
        kana: fakeOne.letter ? fakeOne.letter : fakeOne.kanji,
        translate: fakeOne.translation,
        original: false
      },
      {
        kana: fakeTwo.letter ? fakeTwo.letter : fakeTwo.kanji,
        translate: fakeTwo.translation,
        original: false
      }
    ]
    quiz.push({
      kana: original.letter ? original.letter : original.kanji,
      options: shuffleArray(options)
    })
  }
  return quiz
}

function buildQuiz() {
  const quizCards = []
  quizCards.push(quiz(props.cards, 10))
  return quizCards[0]
}

const kanas = ref(0)
kanas.value = buildQuiz()

const nextCard = (kana) => {
  showCardValue.value = true
  setTimeout(() => {
    showCardValue.value = false
    lenCards.value += 1
  }, '500')
  responses.value.push(kana.translate)
  if (lenCards.value + 1 === kanas.value.length) {
    showFinal.value = true
  }
}
const finish = () => {
  emit('updatePratice', false)
}
</script>
<template>
  <div :class="{ card: true }">
    <div v-if="!showFinal">
      <div class="top-bar">{{ lenCards }}/{{ kanas.length }}</div>
      <div class="kana">{{ kanas[lenCards].kana }}</div>
      <div class="hints" @click="hint = !hint">
        <div>Selecione a resposta correta:</div>
        <div class="btn-options">
          <Button
            :label="kanas[lenCards].options[0].translate.toUpperCase()"
            @click="nextCard(kanas[lenCards].options[0])"
            :style="{
              'background-color':
                showCardValue && kanas[lenCards].options[0].original ? 'green' : 'gray'
            }"
          />
          <Button
            :label="kanas[lenCards].options[1].translate.toUpperCase()"
            @click="nextCard(kanas[lenCards].options[1])"
            :style="{
              'background-color':
                showCardValue && kanas[lenCards].options[1].original ? 'green' : 'gray'
            }"
          />
          <Button
            :label="kanas[lenCards].options[2].translate.toUpperCase()"
            @click="nextCard(kanas[lenCards].options[2])"
            :style="{
              'background-color':
                showCardValue && kanas[lenCards].options[2].original ? 'green' : 'gray'
            }"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="responses">
        <div class="response-table">
          <div>Caracter</div>
          <div>Significado</div>
          <div>Resposta</div>
        </div>
        <div v-for="(i, k) in kanas" :key="k" class="response-table">
          <div style="display: none">
            {{
              i.options.filter((op) => op.original === true)[0].translate === responses[k] ??
              (score += 1)
            }}
          </div>
          <div>{{ i.kana }}</div>
          <div>{{ i.options.filter((op) => op.original === true)[0].translate }}</div>
          <div
            :style="{
              color:
                i.options.filter((op) => op.original === true)[0].translate === responses[k]
                  ? 'green'
                  : 'red'
            }"
          >
            {{ responses[k] }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="margin-bottom: 20px">
    <div><Button label="Finalizar Sessão" @click="finish()" /></div>
  </div>
</template>
<style scoped>
.card {
  width: 40%;
  background-color: #e59ab6;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
  --p-skeleton-animation-background: #e59ab6;
}
.hints:hover {
  cursor: pointer;
}
.response {
  letter-spacing: 2px;
  font-size: 25px;
}
.btn-options {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}
.response-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 600px) {
  .card {
    width: 80%;
    background-color: #e59ab6;
    border-radius: 8px;
    color: white;
    padding: 20px;
    margin: 20px;
    text-align: center;
    height: 330px;
  }
  .options {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5%;
    margin: 20px;
  }
}
</style>
