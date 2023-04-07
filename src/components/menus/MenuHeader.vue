<script setup lang="ts">
import { ref, watch } from 'vue'

import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ButtonSecodary from '@/components/ButtonSecodary.vue'
import MenuOptionsTop from './MenuOptionsTop.vue'

const showMenu = ref(true)
const showOptionsMenu = ref(true)
const prevScrollY = ref(window.scrollY)
const background = ref(false)
const shadow = ref(false)
const opacity = ref(false)
const openMenu = ref(false)

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY
  if (scrollY > prevScrollY.value) {
    showMenu.value = false
    showOptionsMenu.value = false
    opacity.value = true
  } else {
    if (scrollY !== 0) {
      showOptionsMenu.value = false
      showMenu.value = true
      background.value = true
      shadow.value = true
      opacity.value = false
    }
  }
  prevScrollY.value = scrollY
})

watch(
  () => prevScrollY.value == 0,
  () => {
    showMenu.value = true
    background.value = false
    shadow.value = false
    opacity.value = false
    showOptionsMenu.value = true
  }
)

const actionMenu = () =>
  openMenu.value == false ? (openMenu.value = true) : (openMenu.value = false)
</script>
<template>
  <div v-if="showOptionsMenu" class="menuOptionsTop"><MenuOptionsTop /></div>
  <header
    class="containerMenu"
    :class="{ scrollMenu: showMenu, shadow: shadow, background: background, opacity: opacity }"
  >
    <div class="menuHeader">
      <img src="@/assets/image/newLogoHuggy.svg" alt="imgLogo-huggy" class="imgLogo" />
      <div class="openMenuResponsive" @click="actionMenu">
        <img v-if="!openMenu" src="@/assets/image/openMenu.svg" alt="openMenu" />
        <img v-if="openMenu" src="@/assets/image/closeMenu.svg" alt="closeMenu" />
      </div>
      <ul class="menuOptions">
        <li class="options">Soluções</li>
        <li class="options">Recursos</li>
        <li class="options">Parceiros</li>
        <li class="options">Preços</li>
        <li class="options">Blog</li>
      </ul>
      <div class="contact">
        <img src="@/assets/image/iconContact.svg" alt="contact" class="imgContact" /> Ligamos para
        você
      </div>
      <div class="btn">
        <ButtonPrimary colorBorder="var(--cc-btn-primary-bg)" label="Login" />
      </div>
      <div class="btn">
        <ButtonSecodary
          colorText="var(--cc-bg)"
          colorBorder="var(--cc-btn-primary-bg)"
          background="var(--cc-btn-primary-bg)"
          label="Get started free"
        />
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.containerMenu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.background {
  background-color: var(--cc-bg);
}
.scrollMenu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0px 25px 0px;
  position: fixed;
  z-index: 99;
  transition: all 0.3s ease;
}
.opacity {
  opacity: 0;
}
.shadow {
  -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}
.imgLogo {
  margin-right: 90px;
  cursor: pointer;
}

.menuHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 75%;
  width: 100%;
  padding: 0px 40px 0px 40px;
}

.menuOptions {
  display: flex;
  list-style: none;
  color: var(--cc-text);
  cursor: pointer;
}

.options {
  margin-right: 30px;
}

.contact {
  display: flex;
  align-items: center;
  color: var(--cc-btn-primary-bg);
  cursor: pointer;
  margin-right: 16px;
  line-height: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.btn {
  margin-left: 16px;
}
.openMenuResponsive {
  display: none;
}

@media only screen and (min-width: 768px) and (max-width: 1025px) {
  .imgLogo {
    margin-right: 50px;
  }
  .options {
    margin-right: 20px;
  }
  .contact {
    margin-right: 0px;
  }
  .menuHeader {
    padding: 0px 30px 0px 30px;
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .openMenuResponsive {
    display: block;
    cursor: pointer;
    img {
      width: 30px;
    }
  }
  .imgLogo {
    margin: 0;
  }
  .menuHeader {
    padding: 0px 30px 0px 30px;
    justify-content: space-between;
    width: 100%;
  }
  .menuOptionsTop {
    display: none;
  }
  .menuOptions {
    display: none;
  }
  .contact {
    display: none;
  }
  .btn {
    display: none;
  }
  .scrollMenu {
    padding: 15px 0px 15px 0px;
  }
}
@media screen and (orientation: landscape) and (max-width: 812px) {
  .openMenuResponsive {
    display: block;
    cursor: pointer;
    img {
      width: 30px;
    }
  }
  .imgLogo {
    margin: 0;
  }
  .menuHeader {
    padding: 0px 30px 0px 30px;
    justify-content: space-between;
    width: 100%;
  }
  .menuOptionsTop {
    display: none;
  }
  .menuOptions {
    display: none;
  }
  .contact {
    display: none;
  }
  .btn {
    display: none;
  }
  .scrollMenu {
    padding: 15px 0px 15px 0px;
  }
}
</style>
