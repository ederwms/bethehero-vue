<template>
  <div class="home-container">
    <heroHeader />

    <loadingOverlay :is-loading-on="isLoading" />

    <vue-easy-lightbox
      :visible="isImagePreview"
      :imgs="imageToPreview"
      :index="0"
      @hide="closeImagePreview()"
    />

    <div class="home-body">
      <h1
        v-if="getterIncidents.length > 0"
        class="body-title"
      >
        Casos Cadastrados
      </h1>

      <div
        v-if="getterIncidents.length === 0"
        class="no-items-found"
      >
        <img
          class="not-found-image"
          src="../../../assets/empty.svg"
          alt="No items found"
        >

        <p class="not-found-title">
          Nenhum caso encontrado
        </p>

        <p class="not-found-text">
          Desculpe, ainda não existe nenhum caso cadastrado. Vamos cadastrar o primeiro?
        </p>
      </div>

      <div
        v-else
        class="body-incidents"
      >
        <div
          v-for="(incident, index) in getterIncidents"
          :key="index"
          class="ong-profile-incident"
        >
          <div class="incident-image">
            <div
              v-if="incident.file !== null"
              class="image-wrapper"
            >
              <img
                :src="incident.file.fileurl"
                alt="Incident attached image"
                @click="previewImage(incident.file.fileurl)"
              >
            </div>

            <div
              v-else
              class="no-image"
            >
              <x-circle-icon
                size="40"
                color="#777"
              />

              <span class="no-image-text">
                Nenhuma imagem anexada.
              </span>
            </div>
          </div>

          <div class="incident-info-wrapper">
            <div class="title-wrapper">
              <div class="incident-title-text">
                <strong> Caso </strong>
                <p> {{ incident.title }} </p>
              </div>

              <button
                class="button-delete"
                type="button"
                @click="deleteIncident(incident.idincident)"
              >
                <trash-2-icon
                  size="20"
                  color="#e02041"
                />
              </button>
            </div>

            <div class="description-wrapper">
              <strong> Descrição </strong>
              <p> {{ incident.description }} </p>
            </div>

            <div class="value-wrapper">
              <strong> Valor </strong>
              <p>
                {{ incident.value.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' }) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./scripts.js'></script>

<style lang='scss'>
  @import './style.scss';
</style>
