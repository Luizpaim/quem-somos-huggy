<script setup lang="ts">
import { ref, onMounted } from 'vue'

const position = ref(0)
const cursor = ref(0)

const timePosition = () => {
  if (position.value == 0 || position.value < 8) {
    position.value = (position.value + 1) % 101
    cursor.value = position.value
  } else {
    position.value = 0
    cursor.value = position.value
  }
}

const setHistory = (index: number) => {
  position.value = index
  cursor.value = index
}
onMounted(() => {
  setInterval(() => {
    timePosition()
  }, 6000)
})
</script>
<template>
  <div class="container">
    <div class="rangeSlider">
      <input
        class="inputRange"
        :value="position"
        orient="vertical"
        type="range"
        step="1"
        min="0"
        max="8"
      />
    </div>

    <div class="timeline">
      <div class="anos ano-2015">2015</div>
      <div class="anos ano-2016">2016</div>
      <div class="anos ano-2017">2017</div>
      <div class="anos ano-2018">2018</div>
      <div
        class="cursorTime"
        :class="{
          cursorTime: cursor == 0,
          step1: cursor == 1,
          step2: cursor == 2,
          step3: cursor == 3,
          step4: cursor == 4,
          step5: cursor == 5,
          step6: cursor == 6,
          step7: cursor == 7,
          step8: cursor == 8
        }"
      >
        <img src="@/assets/image/cursor.svg" />
      </div>
      <div class="historyDot item1" :class="{ active: cursor == 0 }" @click="setHistory(0)">
        <div class="history">
          Surgimos da necessidade de criar uma solução para a gestão de
          <strong>conversas via chat online.</strong>
        </div>
      </div>
      <div class="historyDot item2" :class="{ active: cursor == 1 }" @click="setHistory(1)">
        <div class="history">
          Criamos a <strong>PowerZap</strong>, que além de ajudar os clientes na automação de suas
          conversas, nos permitiu encontrar nosso real propósito.
        </div>
      </div>
      <div class="historyDot item3" :class="{ active: cursor == 2 }" @click="setHistory(2)">
        <div class="history">
          Juntamos tecnologia, aplicativos de mensagem e especialistas para promover a
          <strong>multicanalidade</strong>, sem perder o controle do atendimento.
        </div>
      </div>
      <div class="historyDot item4" :class="{ active: cursor == 3 }" @click="setHistory(3)">
        <div class="history">
          Depois de muitos testes, validações e estudos,
          <strong>criamos soluções ainda mais completas.</strong>
        </div>
      </div>
      <div class="historyDot item5" :class="{ active: cursor == 4 }" @click="setHistory(4)">
        <div class="history">
          Renascemos, agora com um nome que traduz nosso propósito de aproximar organizações e
          pessoas: <strong>Huggy.</strong>
        </div>
      </div>
      <div class="historyDot item6" :class="{ active: cursor == 5 }" @click="setHistory(5)">
        <div class="history">
          Nos lançamos oficialmente em um dos maiores eventos de Marketing Digital da América
          Latina: o <strong>RD Summit 2017.</strong>
        </div>
      </div>
      <div class="historyDot item7" :class="{ active: cursor == 6 }" @click="setHistory(6)">
        <div class="history">
          Fomos consideradas uma das <strong>8 melhores startups</strong> que expuseram no evento
          pelo Estadão.
        </div>
      </div>
      <div class="historyDot item8" :class="{ active: cursor == 7 }" @click="setHistory(7)">
        <div class="history">
          Lançamos novos produtos e nos posicionamos como líder em plataforma de
          <strong>Atendimento Digital.</strong>
        </div>
      </div>
      <div class="historyDot item9" :class="{ active: cursor == 8 }" @click="setHistory(8)">
        <div class="history">
          Dobramos a nossa base em número de clientes
          <strong>e faturamento e continuamos avançando.</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.rangeSlider {
  display: none;
}

.timeline .anos {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: var(--cc-text);
  position: absolute;
}

.timeline .anos.ano-2015 {
  left: 46px;
  top: 40px;
}

.timeline .anos.ano-2016 {
  left: 124px;
  top: 183px;
}

.timeline .anos.ano-2017 {
  left: 136px;
  top: 290px;
}

.timeline .anos.ano-2018 {
  left: 117px;
  top: 429px;
}

.timeline {
  margin-left: 50px;
  width: 300px;
  min-height: 648px;
  background: url('@/assets/image/linesHistory.svg') 0 no-repeat;
  position: relative;
  z-index: 2;
}

.timeline .cursorTime {
  position: absolute;
  top: 76px;
  left: -9px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.timeline .cursorTime.step1 {
  top: 113px;
  left: 16px;
}

.timeline .cursorTime.step2 {
  top: 148px;
  left: 34px;
}

.timeline .cursorTime.step3 {
  top: 221px;
  left: 59px;
}

.timeline .cursorTime.step4 {
  top: 254px;
  left: 65px;
}

.timeline .cursorTime.step5 {
  top: 322px;
  left: 67px;
}

.timeline .cursorTime.step6 {
  top: 356px;
  left: 65px;
}

.timeline .cursorTime.step7 {
  top: 391px;
  left: 59px;
}

.timeline .cursorTime.step8 {
  top: 465px;
  left: 33px;
}

.timeline .historyDot {
  position: absolute;
}

.timeline .historyDot.active .history {
  display: block;
}

.timeline .historyDot:hover:after {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

.timeline .historyDot:after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: var(--cc-bg-history);
  display: block;
  cursor: pointer;
  z-index: 2;
}

.timeline .historyDot.item1 {
  display: block;
  top: 89px;
  left: 87px;
}

.timeline .historyDot.item2 {
  top: 124px;
  left: 108px;
}

.timeline .historyDot.item3 {
  top: 160px;
  left: 124px;
}

.timeline .historyDot.item4 {
  top: 234px;
  left: 147px;
}

.timeline .historyDot.item5 {
  top: 268px;
  left: 153px;
}

.timeline .historyDot.item6 {
  top: 337px;
  left: 155px;
}

.timeline .historyDot.item7 {
  top: 371px;
  left: 152px;
}

.timeline .historyDot.item8 {
  top: 405px;
  left: 146px;
}

.timeline .historyDot.item9 {
  top: 480px;
  left: 123px;
}

.timeline .historyDot.item9 .history {
  left: 51px;
  bottom: 0;
}

.timeline .historyDot .history {
  display: none;
  position: absolute;
  left: 50px;
  bottom: 4px;
  z-index: 1;
  width: 360px;
  background: var(--cc-bg-timeline);
  border-radius: 12px 12px 12px 0;
  padding: 14px 14px 14px 22px;
  font-size: 18px;
  line-height: 27px;
  color: var(--cc-color-history);
}

.timeline .historyDot .history:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background: url('@/assets/image/detalheHistoria.svg') 0 0 no-repeat;
  position: absolute;
  left: -19px;
  bottom: 0;
}
</style>
