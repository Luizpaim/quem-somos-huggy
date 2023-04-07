<template>
  <section class="container">
    <div class="block">
      <div class="rocket">
        <img src="@/assets/image/rocketFlying.svg" alt="rocket-flying" />
      </div>
      <div class="summary">
        <div class="title">
          <h1>Hoje somos uma das empresas que mais crescem no Brasil.</h1>
        </div>
        <div class="summaryOne">
          <div class="content">
            <img src="@/assets/image/iconLove.svg" alt="love" />
            <strong>+ 3000</strong>
            <span>negócios impactador</span>
          </div>
          <div class="content">
            <img src="@/assets/image/iconComment.svg" alt="comment" />
            <strong>+2 bilhões</strong>
            <span>mensagens processadas</span>
          </div>
        </div>
        <div class="summaryTwo">
          <div class="content">
            <img src="@/assets/image/iconUsers.svg" alt="users" />
            <strong>+ 100 Huggers</strong>
            <span>apaixonados pelo que fazem</span>
          </div>
        </div>
      </div>
    </div>
    <div class="global"></div>
  </section>
</template>
<style scoped lang="scss">
.container {
  background: linear-gradient(
    22.23deg,
    var(--cc-primary-bg) -1.37%,
    var(--cc-text-animationOne) 143.46%
  );
  height: 868px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.global {
  background-image: url('@/assets/image/globo.png');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto;
  width: 1100px;
  height: 500px;
  position: absolute;
  bottom: 0;
  z-index: 0;
}

.block {
  display: flex;
  align-items: start;
  justify-content: center;
}

.summary {
  color: var(--cc-bg);
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 100px;
}

.title {
  margin-bottom: 43px;

  h1 {
    width: 453px;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
  }
}

.summaryOne {
  display: flex;
  align-items: center;
  justify-content: start;
}

.content {
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 100px;
  margin-bottom: 30px;

  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 141.62%;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 141.62%;
    color: var(--cc-bg-summary);
  }
}

.rocket {
  position: relative;
  padding: 0px 0px 100px 100px;
  margin-right: 74px;
  z-index: 2;
}
@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .content {
    margin-bottom: 30px;
  }
  .summary {
    margin-top: 30px;
  }
  .block {
    margin-bottom: 150px;
  }
  .container {
    height: 1000px;
  }
  .summaryOne {
    flex-direction: column;
    align-items: start;
  }
  .summaryTwo {
    z-index: 1;
  }
  .rocket {
    margin-right: 30px;
    padding: 0px 30px 100px 60px;
  }
  .global {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .rocket {
    display: none;
  }
  .container {
    width: 100%;
    padding: 60px 0px 0px 0px;
    margin-top: 50px;
    justify-content: flex-start;
    height: 1000px;
  }
  .global {
    width: 100%;
    height: 400px;
    z-index: 0;
    position: absolute;
  }
  .summaryOne {
    flex-direction: column;
    width: 100%;
  }
  .title {
    padding: 0px 27px 0px 27px;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
      width: 100%;
      font-size: 1.5rem;
      line-height: 45px;
    }
  }
  .summary {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .content {
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    z-index: 2;
    text-align: center;
    margin-bottom: 50px;
    strong {
      font-size: 2rem;
      font-weight: 600;
      margin: 5px 0px 5px 0px;
    }
    span {
      font-size: 1rem;
      text-align: center;
      padding: 0px 50px 0px 50px;
    }
  }
  .summaryTwo {
    padding: 0px 10px 0px 10px;
    z-index: 1;
  }
}
</style>
