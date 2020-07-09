import { mapActions, mapGetters } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

import HeroHeader from '@/components/heroHeader'

import { MoreVerticalIcon, Trash2Icon } from 'vue-feather-icons'

export default {
  components: {
    HeroHeader,
    Trash2Icon,
    MoreVerticalIcon
  },
  data () {
    return {
    }
  },
  mounted () {
    this.actionGetAllIncidents()
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
    }
  }
}
