<template>
  <div
    class="sidebar-items"
    @click="$emit('updateSection', props.toEmit)"
    :style="{
      'background-color': props.praticeSection === props.toEmit ? '#7d9b9f' : '#e59ab6'
    }"
  >
    <div>
      <p v-if="props.icon">
        <span class="sidebar-item-size" :class="props.icon" />
      </p>
      <p v-else>
        <span class="sidebar-item-size">{{ props.character }}</span>
      </p>
    </div>
    <p>{{ props.text }}</p>
    <Badge v-if="props.badge" :value="props.badge" />
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['icon', 'character', 'text', 'badge', 'toEmit', 'praticeSection'])
</script>
<style scoped>
.sidebar-items {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
}

.sidebar-items:hover {
  cursor: pointer;
  background-color: #7d9b9f;
  border-radius: 4px;
}
.sidebar-item-size {
  font-size: 20px;
}
</style>
