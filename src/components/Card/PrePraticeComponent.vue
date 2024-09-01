<script setup></script>
<template>
  <div class="p-pratice-box">
    <div>
      <div>Deseja praticar de qual maneira?</div>
      <Slider :step="20" class="w-56" />
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
}
</style>
