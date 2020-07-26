import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { createModule } from 'vuex-toast'
import 'vuex-toast/dist/vuex-toast.css'

import Account from '@/store/modules/account'
import Incidents from '@/store/modules/incident'
import Files from '@/store/modules/file'
import * as actions from './modules/clearStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    Account,
    Incidents,
    Files,
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
