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
          id="inputUpload"
          type="file"
          accept="image/jpeg, image/png"
          @change="handleFileUpload"
        >

        <label
          for="inputUpload"
          class="upload-label"
        >
          <div class="labeldiv">
            <div class="placeholder-wrapper">
              <div class="ellipsis-wrapper">
                <span
                  class="file-div-placeholder"
                  :class="{ 'have-file': getterFile.name }"
                >
                  {{ getterFile.name || 'Anexe uma imagem' }}
                </span>
              </div>
            </div>

            <button
              v-if="getterFile.name"
              class="delete-file-btn"
              @click="resetFile"
            >
              <trash-2-icon
                class="delete-icon"
                size="20"
                color="#e02041"
              />
            </button>
          </div>
        </label>

        <div
          v-if="fileError"
          class="input-error"
        >
          {{ errorMessage }}
        </div>

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
