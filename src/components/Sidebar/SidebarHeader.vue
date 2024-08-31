<template>
  <div class="sidebar-header">
    <p class="title">{{ props.title }}</p>
    <p class="subtitle">{{ props.subtitle }}</p>
  </div>
</template>
<script setup>
const props = defineProps(['title', 'subtitle'])
</script>
<style scoped>
.sidebar-header {
  text-align: center;
  padding: 15px;
}
.title {
  font-size: 25px;
}
.subtitle {
  font-size: 12px;
}
</style>
