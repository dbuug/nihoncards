<script setup>
const props = defineProps(['praticeMode', 'praticeSection'])
</script>

<template>
  <div>
    <Button @click="$emit('updatePratice', true)" label="Update pratice" />
    {{ props.praticeMode }}
    {{ props.praticeSection }}
  </div>
</template>
