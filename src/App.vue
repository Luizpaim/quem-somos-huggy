<script setup lang="ts">
import MenuHeader from '@/components/menus/MenuHeader.vue'
import SectionVideoPresentation from '@/sections/SectionVideoPresentation.vue'
import SectionAboutUsAnimation from '@/sections/SectionAboutUsAnimation.vue'
import SectionHistoryAnimation from '@/sections/SectionHistoryAnimation.vue'
import SectionSummaryGrowth from '@/sections/SectionSummaryGrowth.vue'
import SectionWorkWithUs from '@/sections/SectionWorkWithUs.vue'
import SectionTalkToUs from '@/sections/SectionTalkToUs.vue'
import SectionFormFooter from '@/sections/SectionFormFooter.vue'
</script>

<template>
  <MenuHeader />
  <SectionVideoPresentation />
  <SectionAboutUsAnimation />
  <SectionHistoryAnimation />
  <SectionSummaryGrowth />
  <SectionWorkWithUs />
  <SectionTalkToUs />
  <SectionFormFooter />
  <ToastComponent :breakpoints="{ '920px': { width: '100%', right: '0', left: '0' } }" />
</template>
