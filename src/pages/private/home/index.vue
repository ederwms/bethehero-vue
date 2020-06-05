<template>
  <div class="home-container">
    <heroHeader />

    <div
      class="home-body"
    >
      <h1 class="body-title">
        Casos Cadastrados
      </h1>

      <div class="body-incidents">
        <div
          v-for="(incident, index) in [1,2,3,4,5,6,7,8,9,10]"
          :key="index"
          class="ong-profile-incident"
        >
          <div class="incident-title">
            <div class="incident-title-text">
              <strong> Caso </strong>
              <p> Título </p>
            </div>

            <button
              class="button-delete"
              type="button"
            >
              <trash-2-icon
                size="20"
                color="#e02041"
              />
            </button>
          </div>

          <strong> Descrição </strong>
          <p> Descrição </p>

          <strong> Valor </strong>
          <p>
            R$ 100,00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./scripts.js'></script>

<style lang='scss'>
  @import './style.scss';
</style>
