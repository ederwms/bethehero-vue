<template>
  <div class="register-container">
    <heroLoading :is-loading-on="isLoading" />

    <div class="register-content">
      <section>
        <img
          src="../../../assets/logo.svg"
          alt="Logo"
        >

        <h1> Cadastro </h1>

        <p> Faça seu cadastro, ajude pessoas a encontrarem os casos da sua ONG. </p>

        <router-link
          class="back-to-login-button"
          to="/"
        >
          <arrow-left-icon
            size="18"
            class="back-to-login-button-icon"
            color="#e02041"
          />

          Voltar para o logon
        </router-link>
      </section>

      <form>
        <input
          v-model="ong.name"
          placeholder="Nome da ONG"
        >

        <input
          v-model="ong.email"
          type="email"
          placeholder="E-mail"
        >

        <input
          v-model="ong.whatsapp"
          v-mask="'(##) # ####-####'"
          placeholder="WhatsApp"
        >

        <div class="input-group">
          <input
            v-model="ong.city"
            placeholder="Cidade"
          >

          <input
            v-model="ong.uf"
            v-mask="'AA'"
            class="uf-input"
            placeholder="UF"
          >
        </div>

        <button
          class="register-button"
          :disabled="!ong.name || !ong.email || !ong.whatsapp || !ong.city || !ong.uf"
          @click="registerOng"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

<script src='./script.js'></script>

<style lang='scss'>
  @import './style.scss';
</style>
