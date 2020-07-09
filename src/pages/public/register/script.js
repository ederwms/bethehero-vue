import { mapActions } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'
import { mask } from 'vue-the-mask'

import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon
  },
  directives: {
    mask
  },
  data () {
    return {
      dado: 'Register',
      ong: {
        name: '',
        email: '',
        whatsapp: '',
        city: '',
        uf: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'actionRegister'
    ]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    registerOng (e) {
      e.preventDefault()

      this.actionRegister(this.ong)
        .then((response) => {
          if (!response.id) {
            this.addToast({
              text: response.message,
              type: 'danger'
            })
          } else {
            this.addToast({
              text: response.message,
              type: 'success'
            })

            alert(`IMPORTANTE: Anote seu ID de acesso: ${response.id}`)

            this.$router.push({ name: 'Login' })
          }
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
