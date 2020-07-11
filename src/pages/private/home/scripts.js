import { mapActions, mapGetters } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

import HeroHeader from '@/components/header'
import HeroLoading from '@/components/loading'

import { MoreVerticalIcon, Trash2Icon } from 'vue-feather-icons'

export default {
  components: {
    HeroHeader,
    HeroLoading,
    Trash2Icon,
    MoreVerticalIcon
  },
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
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
    }
  }
}
