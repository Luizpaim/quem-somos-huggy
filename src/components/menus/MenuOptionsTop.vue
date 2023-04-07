<template>
  <div class="container">
    <div class="block">
      <div class="blockElipse">
        Status
        <div class="elipse"></div>
      </div>
      <ul class="menuOptions">
        <li class="options">Empresa</li>
        <li class="options">Fale conosco</li>
        &nbsp;
        <li class="options">
          Português <img class="iconOption" src="@/assets/image/iconOption.svg" alt="options" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: var(--cc-bg-top-menu);
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--cc-text);
}

.block {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 1150px;
}

.menuOptions {
  display: flex;
  justify-content: center;
  list-style: none;
  width: 308px;
  cursor: pointer;
}

.options {
  margin: 0px 10px 0px 10px;
}

.blockElipse {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.elipse {
  width: 8px;
  height: 8px;
  background: #86d51f;
  border-radius: 50%;
  margin-left: 5px;
}

.iconOption {
  width: 12px;
  margin-left: 4px;
}
</style>
