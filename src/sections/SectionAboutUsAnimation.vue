<template>
  <section class="container">
    <div class="block">
      <div class="text">
        <h1>Sobre nós</h1>
        <p>
          Nossa missão é melhorar os relacionamentos entre organizações e clientes. A gente faz isso
          através do atendimento digital, humano, escalável e em tempo real. Simples assim,
          vantajoso para quem atende e para quem é atendido.
        </p>
      </div>
      <div class="animationGif">
        <img src="@/assets/image/huggyOla.gif" alt="hello-huggy" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 830px;
}

.text {
  width: 500px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
    color: var(--cc-text);
    margin-bottom: 12px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 190%;
    color: var(--cc-color-history);
  }
}

.animationGif {
  img {
    width: 300px;
    margin-top: 30px;
  }
}
@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .text {
    width: 100%;
    padding: 0px 20px 0px 50px;
  }
  .animationGif {
    img {
      width: 200px;
      margin-top: 50px;
      margin-right: 30px;
    }
  }
  .container {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 767px) {
  .text {
    width: 100%;
    padding: 0px 27px 0px 27px;
  }
  .block {
    flex-direction: column;
  }
  .container {
    margin-top: 0px;
  }
  .animationGif {
    img {
      width: 200px;
      margin-top: 30px;
    }
  }
}
</style>
