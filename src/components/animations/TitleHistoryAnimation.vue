<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const phrases = ref([
  'respostas automáticas',
  'chatbots avançados',
  'automação',
  'atendimento um para um',
  'redução de custos',
  'brasileiros'
])
const nextPhrases = ref([
  'e conversas inesquecíveis',
  'fáceis de configurar',
  'e calor humano',
  'em larga escala',
  'e maior produtividade',
  'com presença global'
])
const currentPhrase = ref(0)
const nextPhrase = ref(0)
const currentChar = ref(0)
const currentNextChar = ref(0)
const isTyping = ref(false)
const nextIsTyping = ref(false)

const currentPhraseText = computed(() =>
  phrases.value[currentPhrase.value].substring(0, currentChar.value)
)
const nextPhraseText = computed(() =>
  nextPhrases.value[nextPhrase.value].substring(0, currentNextChar.value)
)

const type = () => {
  const phrase = phrases.value[currentPhrase.value]
  isTyping.value = true
  if (currentChar.value < phrase.length) {
    currentChar.value += 1
    setTimeout(type, 50)
  } else {
    isTyping.value = false
    setTimeout(() => {
      nextType()
    }, 1500)
  }
}

const nextType = () => {
  const phrase = nextPhrases.value[nextPhrase.value]
  nextIsTyping.value = true
  if (currentNextChar.value < phrase.length) {
    currentNextChar.value += 1
    setTimeout(nextType, 50)
  } else {
    nextIsTyping.value = false
    setTimeout(() => {
      currentChar.value = 0
      currentPhrase.value += 1
      currentNextChar.value = 0
      nextPhrase.value += 1
      if (
        nextPhrase.value >= nextPhrases.value.length ||
        currentPhrase.value >= phrases.value.length
      ) {
        currentPhrase.value = 0
        nextPhrase.value = 0
      }
      type()
    }, 1500)
  }
}

onMounted(() => {
  type()
})
</script>
<template>
  <div class="container">
    <div class="block">
      <div class="minLogo">
        <img src="@/assets/image/minLogo.svg" alt="min-logo" />
        <div class="elipse"></div>
      </div>

      <div class="blockText">
        <div class="textAnimation">
          <h1 class="textFixed">Somos</h1>
          <h1>
            <span class="text">{{ currentPhraseText }}</span>
            <span v-if="!nextPhraseText" class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
          </h1>

          <h1>
            <span class="nextText">{{ nextPhraseText }}</span>
            <span
              v-if="currentPhraseText && nextPhraseText"
              class="nextCursor"
              :class="{ typing: nextIsTyping }"
              >&nbsp;</span
            >
          </h1>
        </div>
        <div class="subText">Somos calor humano no Atendimento Digital.</div>
        <div class="footerText">E somos também história.</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 99px;
}

.block {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to bottom, #e3e4ff 0%, #ffffff 100%) border-box;
  border-radius: 28px 28px 0px 0px;
  border: 3px solid transparent;
  width: 1100px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
}

.textAnimation {
  height: 300px;
  width: 100%;
}

.blockText {
  padding: 52px 0px 0px 70px;
}

.subText {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 54px;
  color: var(--cc-text);
  margin-top: 91px;
  width: 366px;
  height: 162px;
}

.footerText {
  margin-top: 127px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 54px;
  color: var(--cc-text);
}

.minLogo {
  border-right: 3px solid #e3e4ff;
  border-radius: 28px 0px 0px 0px;
  height: 763px;
  position: relative;

  img {
    width: 52px;
    margin: 89px 24px 0px 24px;
  }
}

.elipse {
  background: #e3e4ff;
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 96px;
  border-radius: 50%;
}

.textFixed {
  color: var(--cc-text);
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 102px;

  .cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: var(--cc-text-animationOne);
    animation: cursorBlink 1s infinite;
  }

  .nextCursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: var(--cc-text);
    animation: cursorBlink 1s infinite;
  }

  .cursor.typing {
    animation: none;
  }

  .text {
    color: var(--cc-text-animationOne);
  }

  .nextText {
    color: var(--cc-text);
  }
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }

  50% {
    background-color: transparent;
  }

  99% {
    background-color: transparent;
  }
}

@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .container {
    padding: 0px 40px 0px 40px;
    margin-top: 190px;
  }
  h1 {
    font-size: 2rem;
    line-height: 50px;
    font-weight: 600;
  }
  .subText {
    font-size: 1.5rem;
    line-height: 40px;
    margin-top: 30px;
  }
  .footerText {
    margin-top: 50px;
    font-size: 1.5rem;
    line-height: 40px;
  }
  .textAnimation {
    width: 100%;
    margin: 0;
    height: 200px;
    padding: 30px 0px 0px 0px;
  }
  .blockText {
    padding: 20px 0px 0px 40px;
  }
  .minLogo {
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: start;
    img {
      width: 50px;
      margin: 60px 20px 15px 20px;
    }
  }

  .elipse {
    left: 86px;
  }
}
@media only screen and (max-width: 767px) {
  .container {
    padding: 0px 27px 0px 27px;
    margin-top: 10px;
  }
  .block {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .minLogo {
    border-bottom: 3px solid #e3e4ff;
    border-right: none;
    border-radius: 28px 28px 0px 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    img {
      width: 45px;
      margin: 20px 0px 15px 0px;
    }
  }
  .elipse {
    display: none;
  }
  h1 {
    font-size: 1rem;
    line-height: 24px;
    font-weight: 600;
  }
  .textAnimation {
    width: 100%;
    margin: 0;
    height: 40px;
    padding: 30px 0px 0px 20px;
  }
  .blockText {
    width: 100%;
    padding: 0;
  }
  .subText {
    width: 100%;
    font-size: 1rem;
    line-height: 24px;
    padding: 0px 0px 30px 20px;
    height: 100%;
  }
  .footerText {
    width: 100%;
    font-size: 1rem;
    line-height: 24px;
    margin-top: 0;
    padding: 0px 0px 0px 20px;
  }
}
</style>
