import { mapGetters, mapActions, mapMutations } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

import HeroLoading from '@/components/loading'

import { ArrowLeftIcon, Trash2Icon } from 'vue-feather-icons'

export default {
  components: {
    HeroLoading,
    ArrowLeftIcon,
    Trash2Icon
  },
  data () {
    return {
      title: '',
      description: '',
      value: null,
      fileError: false,
      errorMessage: '',
      isLoading: false
    }
  },
  mounted () {
    this.CLEAR_FILE()
  },
  computed: {
    ...mapGetters([
      'getterAccount',
      'getterFile'
    ])
  },
  methods: {
    ...mapActions([
      'actionCreateIncident',
      'actionCreateFile',
      'actionDeleteFile'
    ]),
    ...mapMutations([
      'CLEAR_FILE'
    ]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    handleFileUpload (e) {
      alert('Entrou na função')
      this.fileError = false
      const uploadedFile = e.target.files[0]

      if (uploadedFile.type !== 'image/jpeg' && uploadedFile.type !== 'image/png') {
        this.fileError = true

        this.errorMessage = 'Tipo de arquivo inválido.'
      } else if (uploadedFile.size >= 2107637.76) {
        this.fileError = true

        this.errorMessage = 'O tamanho máximo permitido para upload de imagens é 2MB.'
      } else {
        this.isLoading = true
        const data = new FormData()
        data.append('image', uploadedFile)

        this.actionCreateFile(data)
          .then((response) => {
            this.addToast({
              text: response.message,
              type: 'success'
            })
          })
          .catch((e) => {
            this.addToast({
              text: e.message,
              type: 'danger'
            })
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },
    resetFile (e) {
      e.preventDefault()
      this.isLoading = true

      const inputElement = document.getElementById('inputUpload')

      this.fileError = false
      this.actionDeleteFile(this.getterFile.id)
        .then((response) => {
          inputElement.value = ''

          this.addToast({
            text: response.message,
            type: 'success'
          })
        })
        .catch((e) => {
          this.addToast({
            text: e.message,
            type: 'danger'
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    createIncident (e) {
      e.preventDefault()

      this.isLoading = true

      const incident = {
        title: this.title,
        description: this.description,
        value: parseFloat(parseFloat(this.value).toFixed(2)),
        idong: this.getterAccount.idong,
        idfile: this.getterFile.id ? this.getterFile.id : null
      }

      this.actionCreateIncident(incident)
        .then((response) => {
          this.addToast({
            text: response.message,
            type: 'success'
          })

          this.clearFields()
          this.$router.push({ name: 'Home' })
        })
        .catch((e) => {
          this.addToast({
            text: e.message,
            type: 'danger'
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    clearFields () {
      this.title = ''
      this.description = ''
      this.value = null
    }
  }
}
