import { mapActions } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  components: {
    ArrowLeftIcon
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
            alert(`ONG Cadastrada com sucesso! ID: ${response.id}`)

            this.$router.push({ name: 'Login' })
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
