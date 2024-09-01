<script setup>
import { localStorageConfig } from '@/stores/LocalStorageDealer/UserConfig'

const user = localStorageConfig()
user.getLocalStorageConfig

const props = defineProps(['praticeMode', 'praticeSection'])
</script>

<template>
  <div>
    <Button @click="$emit('updatePratice', true)" label="Update pratice" />
    {{ props.praticeMode }}
    {{ props.praticeSection }}
    {{ user.getHiraganaToPratice }}
  </div>
</template>

<style scoped></style>
