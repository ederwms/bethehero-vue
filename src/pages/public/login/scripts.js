import { mapActions, mapMutations } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

import HeroLoading from '@/components/loading'

import { LogInIcon } from 'vue-feather-icons'

export default {
  components: {
    HeroLoading,
    LogInIcon
  },
  data () {
    return {
      ongId: '',
      isLoading: false
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
      this.isLoading = true

      this.actionSignIn(this.ongId)
        .then(() => {
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
    }
  }
}
