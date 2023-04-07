<script setup lang="ts">
import SmokeAnimation from '@/components/animations/SmokeAnimation.vue'
</script>
<template>
  <div class="container">
    <img class="rocket" src="@/assets/image/rocket.svg" alt="rocket" />
    <div class="smoke"><SmokeAnimation /></div>
  </div>
</template>
<style scoped lang="scss">
.rocket {
  z-index: 1;
  position: relative;
}
.smoke {
  z-index: 0;
  position: absolute;
  left: 450px;
  bottom: 80px;
}
@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .smoke {
    left: 80%;
    bottom: 28%;
  }
  .rocket {
    width: 400px;
  }
}
</style>
