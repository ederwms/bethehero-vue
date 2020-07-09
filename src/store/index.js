import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { createModule } from 'vuex-toast'
import 'vuex-toast/dist/vuex-toast.css'

import Account from '@/store/modules/account'
import Incidents from '@/store/modules/incident'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Account,
    Incidents,
    toast: createModule({
      dismissInterval: 5000
    })
  },
  plugins: [
    createPersistedState({
      key: 'vuex-hero'
    })
  ],
  strict: false
})
