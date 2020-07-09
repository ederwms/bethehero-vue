import { mapGetters, mapActions } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon
  },
  data () {
    return {
      title: '',
      description: '',
      value: null
    }
  },
  computed: {
    ...mapGetters([
      'getterAccount'
    ])
  },
  methods: {
    ...mapActions([
      'actionCreateIncident'
    ]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    createIncident (e) {
      e.preventDefault()

      const incident = {
        title: this.title,
        description: this.description,
        value: parseFloat(parseFloat(this.value).toFixed(2)),
        idong: this.getterAccount.idong
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
    },
    clearFields () {
      this.title = ''
      this.description = ''
      this.value = null
    }
  }
}
