<script setup>
import { ref } from 'vue'
const props = defineProps(['hiragana', 'katakana', 'n5', 'section'])
const hiraganaCheck = ref()
const katakanaCheck = ref()
const n5Check = ref()
</script>
<template>
  <div class="title">Modo Quiz - クイズモード</div>
  <div class="p-pratice-box">
    <div class="p-inside-box">
      <div class="title">Responda 10 perguntas sobre o tema que desejar</div>
      <div class="subtitle">Escolha quais tópicos deseja testar seu conhecimento:</div>
      <div class="selections">
        <div>
          <Checkbox v-model="hiraganaCheck" :binary="true" />
          <label for="ingredient1" class="ml-2"> Hiragana </label>
        </div>
        <div>
          <Checkbox v-model="katakanaCheck" :binary="true" />
          <label for="ingredient1" class="ml-2"> Katakana </label>
        </div>
        <div>
          <Checkbox v-model="n5Check" :binary="true" />
          <label for="ingredient1" class="ml-2"> Kanjis N5 </label>
        </div>
      </div>
      <Button
        label="Iniciar Quiz"
        class="margin-top: auto"
        :disabled="!hiraganaCheck && !katakanaCheck && !n5Check"
        @click="$emit('startQuiz', hiraganaCheck, katakanaCheck, n5Check)"
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
  text-align: center;
}
.title {
  font-size: 30px;
}
.selections {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}
</style>
