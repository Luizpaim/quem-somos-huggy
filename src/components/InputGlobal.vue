<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  type: { type: String, required: true },
  placeholder: { type: String, required: true },
  onInput: {
    type: Function as any
  }
})

const inputValue = ref(props.value)

watch(
  () => props.value,
  (val) => {
    inputValue.value = val
  }
)

watch(
  () => inputValue.value,
  (val) => {
    props.onInput(val)
  }
)
</script>
<template>
  <input class="input" :type="type" v-model="inputValue" :placeholder="placeholder" />
</template>
<style scoped lang="scss">
.input {
  background: var(--cc-bg);
  border-radius: 9.14286px;
  height: 48px;
  width: 100%;
  padding: 10px;
  max-width: 300px;
}
</style>
