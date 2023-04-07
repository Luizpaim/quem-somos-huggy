<script setup lang="ts">
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import { openHuggyChat } from '@/hooks/huggy/functionsHuggyChat'
</script>
<template>
  <section class="container">
    <div class="block">
      <div class="contentImg"><img src="@/assets/image/imgSolutions.svg" alt="solutions" /></div>
      <div class="content">
        <h1>Somos incansáveis na busca pelo aperfeiçoamento de nossas soluções</h1>
        <span>
          A plataforma Huggy cria camadas de comunicação (automatizada, inteligente e humana) que
          possibilitam um fluxo natural e autêntico. Fique tranquilo, as pessoas terão (e sentirão)
          a atenção que elas merecem!
        </span>
        <div class="btn">
          <ButtonPrimary
            colorBorder=" #FF0068"
            background="#FFFF"
            label="Falar com um especialista"
            @click="openHuggyChat"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.block {
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 94px;
  margin-bottom: 89px;
}

.contentImg {
  margin-right: 87px;
}

.content {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
    color: var(--cc-text);
    margin-bottom: 20px;
    width: 500px;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 190%;
    color: var(--cc-color-history);
    margin-bottom: 46px;
    width: 470px;
  }

  .btn {
    margin-bottom: 89px;
  }
}

@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .block {
    flex-direction: column;
    width: 100%;
    padding: 90px 27px 0px 27px;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .content {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .contentImg {
    img {
      width: 100%;
    }
    margin: 0;
  }
}

@media only screen and (max-width: 767px) {
  .block {
    flex-direction: column;
    width: 100%;
    padding: 90px 27px 0px 27px;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .contentImg {
    img {
      width: 100%;
    }
    margin: 0;
  }
  .content {
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 1.5rem;
      line-height: 35px;
      width: 100%;
      text-align: center;
    }
    span {
      font-size: 1rem;
      line-height: 30px;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
