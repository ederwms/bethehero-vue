import { mapActions, mapGetters, mapMutations } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'
import VueEasyLightbox from 'vue-easy-lightbox'

import HeroHeader from '@/components/header'
import LoadingOverlay from '@/components/loading'

import { MoreVerticalIcon, Trash2Icon, XCircleIcon } from 'vue-feather-icons'

export default {
  components: {
    VueEasyLightbox,
    HeroHeader,
    LoadingOverlay,
    Trash2Icon,
    MoreVerticalIcon,
    XCircleIcon
  },
  data () {
    return {
      isLoading: false,
      isImagePreview: false,
      imageToPreview: ''
    }
  },
  mounted () {
    this.CLEAR_INCIDENTS()
    this.isLoading = true

    this.actionGetAllIncidents()
      .finally(() => {
        this.isLoading = false
      })
  },
  computed: {
    ...mapGetters([
      'getterIncidents'
    ])
  },
  methods: {
    ...mapActions([
      'actionGetAllIncidents',
      'actionDeleteIncident'
    ]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    ...mapMutations([
      'CLEAR_INCIDENTS'
    ]),
    deleteIncident (idincident) {
      this.isLoading = true

      this.actionDeleteIncident(idincident)
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
    },
    previewImage (image) {
      this.imageToPreview = image

      this.isImagePreview = true
    },
    closeImagePreview () {
      this.imageToPreview = ''

      this.isImagePreview = false
    }
  }
}
