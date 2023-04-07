<template>
  <section class="container">
    <div class="textTitle">
      <span
        >Melhoramos as relações entre pessoas e organizações para tornar o mundo mais humano</span
      >
    </div>
    <div class="box">
      <img class="higgo" src="@/assets/image/higgoQuemsomos.svg" alt="higgo-quem-somos" />
      <div class="videoBox">
        <video class="video" src="@/assets/video/videoPresentation.mp4" autoplay loop muted></video>
      </div>
      <img class="selfie" src="@/assets/image/selfieQuemsomos.svg" alt="selfie-quem-somos" />
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 650px;
  background-color: var(--cc-bg-video);
}

.textTitle {
  margin-top: 300px;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 51px;
  text-align: center;
  color: var(--cc-text);
  width: 900px;
  margin-bottom: 90px;
}

.videoBox {
  max-width: 830px;
  position: relative;
}

.box {
  display: flex;
  justify-content: center;
  position: relative;
  margin-left: 110px;
  max-width: 830px;
}

.video {
  max-width: 830px;
  min-width: 830px;
  background: var(--cc-bg-videoTwo);
  border-radius: 26px;
}

.higgo {
  position: relative;
  left: 48px;
  bottom: 240px;
  z-index: 1;
}

.selfie {
  position: relative;
  top: 40px;
  right: 110px;
  z-index: 1;
}
@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .textTitle {
    margin-top: 150px;
    margin-bottom: 50px;
    font-size: 2rem;
    width: 100%;
    line-height: 50px;
    padding: 0px 40px 0px 40px;
  }
  .video {
    width: 570px;
    min-width: 570px;
  }
  .box {
    padding-left: 50px;
    width: 730px;
    min-width: 730px;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .higgo {
    left: 37px;
    bottom: 140px;
    width: 120px;
  }

  .selfie {
    position: relative;
    top: 40px;
    right: 100px;
    z-index: 1;
    width: 180px;
  }
}
@media only screen and (max-width: 767px) {
  .textTitle {
    margin-top: -10px;
    margin-bottom: 50px;
    font-size: 1.6rem;
    width: 100%;
    line-height: 42px;
    padding: 0px 40px 0px 40px;
  }
  .higgo {
    display: none;
  }
  .selfie {
    display: none;
  }

  .video {
    width: 100%;
    min-width: 100%;
  }
  .box {
    margin: 0;
    min-width: 100%;
    padding: 0px 27px 0px 27px;
  }
}
</style>
