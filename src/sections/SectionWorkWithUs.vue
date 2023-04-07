<script setup lang="ts">
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import { seAvailablePositionsGoogle } from '@/hooks/google/googleAnalytics'
import { seAvailablePositionsFacebook } from '@/hooks/facebook/pixelFacebook'

const eventsClick = () => {
  try {
    seAvailablePositionsGoogle()
    seAvailablePositionsFacebook()
    console.log('Evento registrado com sucesso.')
  } catch (error) {
    console.log('não foi possível registrar evento.')
  }
}
</script>
<template>
  <section class="container">
    <div class="block">
      <div class="content">
        <h1>Isso é resultado de um time de Huggers especialistas que torna tudo possível.</h1>
        <span
          >Todo mundo se comunica de onde quiser, como quiser, a hora que quiser. E diferente do que
          muita gente poderia pensar, nós acreditamos no poder dessa dinâmica justamente para
          aproximar as pessoas.</span
        >
        <img class="img1" src="@/assets/image/imgEquipe2.png" alt="equipe" />
      </div>
      <div class="contentTwo">
        <img class="img2" src="@/assets/image/imgEquipe.png" alt="equipe" />
        <div class="textContent">
          <h1>
            Um time que não espera por novos conceitos, resoluções ou oportunidades. A gente faz.
          </h1>
          <span
            >Integramos pessoas com diferentes expertises em nosso time para que possamos criar as
            melhores tecnologias e oferecer experiências inesquecíveis.
          </span>
        </div>
      </div>
    </div>
    <div class="work">
      <h1>Venha fazer parte do nosso time!</h1>
      <div class="btn">
        <ButtonPrimary
          colorBorder="var(--cc-text-animationOne)"
          background="var(--cc-bg-timeline)"
          label="Ver as vagas disponíveis"
          @click="eventsClick"
        />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  background-color: var(--cc-bg-timeline);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.block {
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 116px;
  margin-bottom: 37px;
}
.contentTwo {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 600px;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
    color: var(--cc-text);
    width: 550px;
    margin-bottom: 20px;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 190%;
    color: var(--cc-color-history);
    width: 510px;
  }
  .img2 {
    margin-bottom: 51px;
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 600px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
    color: var(--cc-text);
    width: 550px;
    margin-bottom: 20px;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 190%;
    color: var(--cc-color-history);
    width: 510px;
  }

  .img1 {
    margin-top: 51px;
  }
}

.work {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
    color: var(--cc-text);
    margin-bottom: 40px;
  }
}

.btn {
  margin-bottom: 83px;
}
@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .block {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .content {
    text-align: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
  }
  .contentTwo {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    justify-content: center;
    h1 {
      width: 100%;
    }
  }
  .img1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .img2 {
    margin-top: 30px;
  }
  .btn {
    margin-top: 30px;
    margin-bottom: 150px;
  }
}
@media only screen and (max-width: 767px) {
  .block {
    flex-direction: column;
    width: 100%;
  }
  .content {
    width: 100%;
    padding: 0px 27px 0px 27px;
    h1 {
      width: 100%;
      font-size: 1.4rem;
      text-align: center;
      line-height: 40px;
      padding: 0px 12px 0px 12px;
    }
    span {
      width: 100%;
      font-size: 1rem;
      text-align: center;
      line-height: 30px;
      padding: 0px 12px 0px 12px;
    }
  }
  .contentTwo {
    width: 100%;
    padding: 0px 27px 0px 27px;
    flex-direction: column-reverse;
    h1 {
      width: 100%;
      font-size: 1.4rem;
      text-align: center;
      line-height: 40px;
      padding: 0px 12px 0px 12px;
    }
    span {
      width: 100%;
      font-size: 1rem;
      text-align: center;
      line-height: 30px;
      padding: 0px 12px 0px 12px;
    }
  }
  .img1 {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .img2 {
    margin-top: 30px;
    width: 100%;
  }
  .textContent {
    text-align: center;
  }
  .work {
    h1 {
      font-size: 1.5rem;
      line-height: 31px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>
