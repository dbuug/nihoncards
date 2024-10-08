<script setup>
const props = defineProps(['cards', 'section'])
</script>
<template>
  <div v-if="props.section === 'hiragana'" class="title">Hiragana - ひらがな</div>
  <div v-if="props.section === 'katakana'" class="title">Katakana - カタカナ</div>
  <div v-if="props.section === 'n5'" class="title">Kanji - 漢字</div>
  <div class="p-pratice-box">
    <div class="p-inside-box">
      <div class="title">Prática aleatória</div>
      <div class="subtitle">
        Você poderá praticar todos os cards de forma aleatória por tempo indeterminado.
      </div>
      <Button
        label="Prática Aleatória"
        class="margin-top: auto"
        @click="$emit('startPratice', true, 0, 'full')"
      />
    </div>
    <div class="p-inside-box">
      <div class="title">Repetição espaçada</div>
      <div class="subtitle">Voce possui {{ props.cards.length }} cards ao total para praticar</div>
      <Button
        :disabled="props.cards.length === 0"
        label="Prática Espaçada"
        class="margin-top: auto"
        @click="$emit('startPratice', true, 1, 'spaced')"
      />
    </div>
  </div>
</template>
<style scoped>
.p-pratice-box {
  width: 80%;
  background-color: #e59ab6;
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
  color: white;
}

@media only screen and (max-width: 600px) {
  .p-pratice-box {
    width: 80%;
    background-color: #e59ab6;
    border-radius: 8px;
    color: white;
    padding: 20px;
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
