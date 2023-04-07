<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  label: { type: String, required: true },
  disabled: { type: Boolean },
  onClick: { type: Function as any },
  background: { type: String },
  cursor: { type: Boolean },
  colorBorder: { type: String }
})
</script>
<template>
  <button
    :disabled="disabled"
    class="btnPrimary"
    @click="onClick"
    :style="{ '--border-color': colorBorder, '--background-color': background }"
    :class="{ cursor: cursor }"
  >
    {{ label }}
  </button>
</template>
<style scoped lang="scss">
.cursor {
  cursor: not-allowed;
}

.btnPrimary {
  border: 2px solid var(--border-color);
  background-color: var(--background-color);
  border-radius: 50px;
  padding: 12px 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: var(--border-color);
  transition: background 0.6s ease;

  &:hover {
    background: var(--border-color);
    color: #fff;
    transition: background 0.6s ease;
  }
}
</style>
