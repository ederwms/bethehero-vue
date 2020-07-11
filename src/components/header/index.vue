<template>
  <header class="home-header">
    <div class="header-welcome">
      <img
        class="header-logo-img"
        src="../../assets/logo.svg"
        alt="Logo"
      >

      <span class="welcome-text">
        Bem Vindo, {{ getterAccount.name }}
      </span>
    </div>

    <div class="header-actions">
      <button
        class="button-register-incident"
        @click="$router.push({ name: 'NewIncident' })"
      >
        Cadastrar novo caso
      </button>

      <button
        class="small-btn register-incident-small-btn"
        @click="$router.push({ name: 'NewIncident' })"
      >
        <plus-icon size="20" />
      </button>

      <button
        class="small-btn logout"
        @click="logout()"
      >
        <power-icon size="20" />
      </button>
    </div>
  </header>
</template>

<script src='./scripts.js'></script>

<style lang='scss'>
  @import './style.scss';
</style>
