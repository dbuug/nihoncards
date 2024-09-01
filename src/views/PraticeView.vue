<script setup>
import { initialUserSetup } from '@/stores/LocalStorageDealer/InitialUserSetup'
const props = defineProps(['praticeMode', 'praticeSection'])

const store = initialUserSetup()
</script>

<template>
  <div>
    <Button @click="$emit('updatePratice', true)" label="Update pratice" />
    {{ props.praticeMode }}
    {{ props.praticeSection }}
    {{ store.getLetters }}
    {{ store.hiragana.length }}
    {{ store.katakana.length }}
    {{ store.n5kanjis.length }}
  </div>
</template>

<style scoped></style>
