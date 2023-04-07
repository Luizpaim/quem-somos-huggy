<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  label: { type: String, required: true },
  disabled: { type: Boolean },
  onClick: { type: Function as any },
  background: { type: String, required: true },
  colorBorder: { type: String, required: true },
  cursor: { type: Boolean },
  colorText: { type: String, required: true }
})
</script>
<template>
  <button
    :disabled="disabled"
    class="btnSecondary"
    @click="onClick"
    :style="{
      '--border-color': colorBorder,
      '--background-color': background,
      '--text-color': colorText
    }"
    :class="{ cursor: cursor }"
  >
    {{ label }}
  </button>
</template>
<style scoped lang="scss">
.cursor {
  cursor: not-allowed;
}

.btnSecondary {
  border: 2px solid var(--border-color);
  background-color: var(--background-color);
  border-radius: 50px;
  padding: 12px 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: var(--text-color);
  transition: opacity 0.6s ease;
  opacity: 1;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.6s ease;
  }
}
</style>
