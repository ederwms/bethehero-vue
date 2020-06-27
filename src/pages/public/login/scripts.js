import { mapActions, mapMutations } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

import { LogInIcon } from 'vue-feather-icons'

export default {
  components: {
    LogInIcon
  },
  data () {
    return {
      ongId: ''
    }
  },
  methods: {
    ...mapMutations([
      'SET_ACCOUNT',
      'CLEAR_ACCOUNT'
    ]),
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),
    ...mapActions([
      'actionSignIn'
    ]),
    signIn () {
      this.actionSignIn(this.ongId)
        .then((response) => {
          this.SET_ACCOUNT(response.name)

          this.$router.push({ name: 'Home' })
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
