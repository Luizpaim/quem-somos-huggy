<script setup lang="ts">
import TitleHistoryAnimation from '@/components/animations/TitleHistoryAnimation.vue'
import RocketAnimation from '@/components/animations/RocketAnimation.vue'
import TimeLineAnimation from '@/components/animations/TimeLineAnimation.vue'
</script>
<template>
  <section class="container">
    <TitleHistoryAnimation />
    <div class="containerHistoryAnimation">
      <div class="block">
        <div class="timeLine">
          <TimeLineAnimation />
        </div>
        <div class="rocket">
          <RocketAnimation />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.containerHistoryAnimation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 63px;
  background-image: url('@/assets/image/bgDados.svg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: bottom;
}

.block {
  padding: 30px 0px 30px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 1100px;

  img {
    position: absolute;
    top: 410px;
    bottom: 0;
    width: 100%;
    z-index: 0;
  }
}

.rocket {
  z-index: 1;
}

.timeLine {
  z-index: 2;
}

@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .block {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .containerHistoryAnimation {
    display: none;
  }
}
</style>
