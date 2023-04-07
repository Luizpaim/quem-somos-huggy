<script setup lang="ts">
import { ref, computed } from 'vue'
import { useToast } from 'primevue/usetoast'

import type { IPostCampaign } from '@/api/campaign'
import InputGlobal from '@/components/InputGlobal.vue'
import ButtonSecodary from '@/components/ButtonSecodary.vue'
import { Campaign } from '@/stores/campaign'

const campaign = Campaign()

const toast = ref(useToast())

const payload = ref<IPostCampaign>({
  id_da_campanha: '7016Q000001LuN5QAK',
  nome: '',
  email: ''
})

const activeButton = ref(true)

const validateFileds = computed(() => {
  return (
    payload.value.nome.trim() === '' ||
    payload.value.email.trim() === '' ||
    activeButton.value === false
  )
})

const updateValueName = (val: string): void => {
  payload.value.nome = val
}

const updateValueEmail = (val: string): void => {
  payload.value.email = val
}

const submit = async (): Promise<void> => {
  activeButton.value = false
  await campaign
    .PostCampaign(payload.value)
    .then(() => {
      toast.value.add({
        severity: 'success',
        summary: 'Recebemos o seu contato!',
        detail: 'Você vai ficar por dentro de todas as novidades.',
        life: 4000
      })
      payload.value.nome = ''
      payload.value.email = ''
      activeButton.value = true
    })
    .catch(() => {
      toast.value.add({
        severity: 'error',
        summary: 'Erro!',
        detail: 'Não foi possível enviar os seus dados, tente novamente',
        life: 4000
      })
      activeButton.value = true
    })
}
</script>
<template>
  <footer class="container">
    <img class="rectangle" src="@/assets/image/rectangle.svg" alt="rectangle" />
    <div class="block">
      <div class="content">
        <h1>Assine nossos conteúdos</h1>
        <span
          >Fique por dentro das novidades e receba dicas de especialistas em atendimento
          digital.</span
        >
      </div>
      <div class="form">
        <form @submit.prevent="submit">
          <div class="field">
            <InputGlobal
              v-tooltip="'Por favor digite seu nome'"
              :value="payload.nome"
              type="text"
              placeholder="Nome"
              @input="updateValueName"
            />
          </div>
          <div class="field">
            <InputGlobal
              v-tooltip="'Por favor digite seu email'"
              :value="payload.email"
              type="email"
              placeholder="Email"
              @input="updateValueEmail"
            />
          </div>
          <div class="btn">
            <ButtonSecodary
              :disabled="validateFileds"
              colorText="#FFF"
              colorBorder="#FF0068"
              background="#FF0068"
              label="Inscrever-se"
              :cursor="validateFileds"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="footerLogo">
      <img src="@/assets/image/minLogo.svg" alt="minLogo" />
    </div>
  </footer>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rectangle {
  position: absolute;
  top: 0;
}

.block {
  width: 100%;
  background-color: var(--cc-primary-bg);
  height: 305px;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 59px;
}

.content {
  width: 427px;
  z-index: 1;
  margin-right: 144px;

  h1 {
    width: 427px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    color: var(--cc-bg);
    margin-bottom: 16px;
  }

  span {
    width: 427px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.4286px;
    line-height: 160%;
    color: var(--cc-bg);
  }
}

.form {
  z-index: 1;
}

.field {
  margin-bottom: 16px;
}
.footerLogo {
  padding: 30px 0px 30px 0px;
}

@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .block {
    padding: 59px 27px 59px 27px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .content {
    width: 100%;
    text-align: center;
    margin: 0;

    h1 {
      width: 100%;
    }
  }
  .form {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .rectangle {
    width: 100%;
  }
  .footerLogo {
    padding: 20px 0px 15px 0px;
    img {
      width: 50px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .block {
    padding: 59px 27px 59px 27px;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .content {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 1.5rem;
      line-height: 32px;
      width: 100%;
      text-align: center;
    }
    span {
      font-size: 1rem;
      line-height: 32px;
      width: 100%;
      text-align: center;
    }
  }
  .rectangle {
    width: 100%;
  }
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footerLogo {
    padding: 15px 0px 15px 0px;
    img {
      width: 50px;
    }
  }
}
</style>
