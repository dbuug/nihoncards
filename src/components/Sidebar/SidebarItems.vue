<template>
  <div class="sidebar-items" @click="$emit('updateSection', props.toEmit)">
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
const props = defineProps(['icon', 'character', 'text', 'badge', 'toEmit'])
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
  background-color: var(--custom-background-4);
  border-radius: 4px;
}
.sidebar-item-size {
  font-size: 20px;
}
</style>
