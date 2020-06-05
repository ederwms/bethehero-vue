<template>
  <div class="login-wrapper">
    <section class="login-form">
      <img
        class="logo-img"
        src="../../../assets/logo.svg"
        alt="Logo"
      >

      <div class="form">
        <span
          class="form-title"
        >
          Faça seu Logon
        </span>

        <input
          v-model="ongId"
          class="form-input"
          type="text"
          placeholder="Sua ID"
        >

        <button
          class="form-button"
          :disabled="!ongId"
          @click="signIn"
        >
          Entrar
        </button>
      </div>
    </section>

    <img
      class="heroes-img"
      src="../../../assets/heroes.png"
      alt="Background image"
    >
  </div>
</template>

<script src='./scripts.js'></script>

<style lang='scss'>
  @import './style.scss';
</style>
