<template>
  <div class="new-incident-container">
    <heroLoading :is-loading-on="isLoading" />

    <div class="content">
      <section class="app-info">
        <img
          src="../../../assets/logo.svg"
          alt="App Logo"
        >

        <h1 class="info-title">
          Cadastrar Novo Caso
        </h1>

        <p class="info-text">
          Descreva o caso detalhadamente para encontrar um herói para resolver isso.
        </p>

        <a
          class="back-link"
          @click="$router.push({ name: 'Home' })"
        >
          <arrow-left-icon
            size="18"
            color="#e02041"
          />

          <span class="link-text">
            Voltar para Home
          </span>
        </a>
      </section>

      <form
        class="incident-form"
      >
        <input
          v-model="title"
          type="text"
          placeholder="Título do Caso"
        >

        <textarea
          v-model="description"
          placeholder="Descrição do Caso"
        />

        <input
          v-model="value"
          type="number"
          placeholder="Valor em R$"
        >

        <button
          class="form-confirm"
          @click="createIncident"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

<script src='./scripts.js'></script>

<style lang='scss'>
  @import './style.scss';
</style>
