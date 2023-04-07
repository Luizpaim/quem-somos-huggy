<template>
  <div class="smoke">
    <span class="s0"></span> <span class="s1"></span> <span class="s2"></span>
    <span class="s3"></span> <span class="s4"></span> <span class="s5"></span>
    <span class="s6"></span> <span class="s7"></span> <span class="s8"></span>
    <span class="s9"></span>
  </div>
</template>
<style scoped lang="scss">
.smoke span {
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -20px;
  height: 0;
  width: 0;
  border: 35px solid var(--cc-border-smoke);
  border-radius: 35px;
  left: -14px;
  opacity: 0;
  -webkit-transform: scale(0.2);
  transform: scale(0.2);
}

.smoke .s0 {
  -webkit-animation: smokeL 10s 0s infinite;
  animation: smokeL 10s 0s infinite;
}

.smoke .s1 {
  -webkit-animation: smokeR 10s 0.8s infinite;
  animation: smokeR 10s 0.8s infinite;
}

.smoke .s2 {
  -webkit-animation: smokeL 10s 1.6s infinite;
  animation: smokeL 10s 1.6s infinite;
}

.smoke .s3 {
  -webkit-animation: smokeR 10s 2.5s infinite;
  animation: smokeR 10s 2.5s infinite;
}

.smoke .s4 {
  -webkit-animation: smokeL 10s 3.3s infinite;
  animation: smokeL 10s 3.3s infinite;
}

.smoke .s5 {
  -webkit-animation: smokeR 10s 4.1s infinite;
  animation: smokeR 10s 4.1s infinite;
}

.smoke .s6 {
  -webkit-animation: smokeL 10s 4.9s infinite;
  animation: smokeL 10s 4.9s infinite;
}

.smoke .s7 {
  -webkit-animation: smokeR 10s 5.8s infinite;
  animation: smokeR 10s 5.8s infinite;
}

.smoke .s9 {
  -webkit-animation: smokeR 10s 6.5s infinite;
  animation: smokeR 10s 6.5s infinite;
}

.smoke .s8 {
  -webkit-animation: smokeL 10s 7.5s infinite;
  animation: smokeL 10s 7.5s infinite;
}
@-webkit-keyframes smokeL {
  0% {
    -webkit-transform: scale(0.2) translate(0);
    transform: scale(0.2) translate(0);
  }

  10% {
    opacity: 1;
    -webkit-transform: scale(0.2) translate(-10px, 15px);
    transform: scale(0.2) translate(-10px, 15px);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(1) translate(-20px, 140px);
    transform: scale(1) translate(-20px, 140px);
  }
}

@keyframes smokeL {
  0% {
    -webkit-transform: scale(0.2) translate(0);
    transform: scale(0.2) translate(0);
  }

  10% {
    opacity: 1;
    -webkit-transform: scale(0.2) translate(-10px, 15px);
    transform: scale(0.2) translate(-10px, 15px);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(1) translate(-20px, 140px);
    transform: scale(1) translate(-20px, 140px);
  }
}

@-webkit-keyframes smokeR {
  0% {
    -webkit-transform: scale(0.2) translate(0);
    transform: scale(0.2) translate(0);
  }

  10% {
    opacity: 1;
    -webkit-transform: scale(0.2) translate(10px, 15px);
    transform: scale(0.2) translate(10px, 15px);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(1) translate(20px, 140px);
    transform: scale(1) translate(20px, 140px);
  }
}

@keyframes smokeR {
  0% {
    -webkit-transform: scale(0.2) translate(0);
    transform: scale(0.2) translate(0);
  }

  10% {
    opacity: 1;
    -webkit-transform: scale(0.2) translate(10px, 15px);
    transform: scale(0.2) translate(10px, 15px);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(1) translate(20px, 140px);
    transform: scale(1) translate(20px, 140px);
  }
}
</style>
