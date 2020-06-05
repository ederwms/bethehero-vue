import { mapGetters, mapMutations } from 'vuex'

import { PowerIcon } from 'vue-feather-icons'

export default {
  components: {
    PowerIcon
  },
  data () {
    return {
      dado: ''
    }
  },
  computed: {
    ...mapGetters([
      'getterAccount'
    ])
  },
  methods: {
    ...mapMutations([
      'CLEAR_ACCOUNT'
    ]),
    logout () {
      this.CLEAR_ACCOUNT()

      this.$router.push({ name: 'Public' })
    }
  }
}
