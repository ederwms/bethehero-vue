<template>
  <header class="home-header">
    <div class="header-welcome">
      <img
        class="header-logo-img"
        src="../../assets/logo.svg"
        alt="Logo"
      >

      <span class="welcome-text">
        Bem Vindo, {{ getterAccount }}
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
        class="button-logout"
        @click="logout()"
      >
        <power-icon size="18" />
      </button>
    </div>
  </header>
</template>

<script src='./scripts.js'></script>

<style lang='scss'>
  @import './style.scss';
</style>
