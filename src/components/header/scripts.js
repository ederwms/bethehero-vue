import { mapGetters, mapMutations } from 'vuex'

import { PowerIcon, PlusIcon } from 'vue-feather-icons'

export default {
  components: {
    PowerIcon,
    PlusIcon
  },
  data () {
    return {
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
