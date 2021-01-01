import { createStore } from 'vuex'

export default createStore({
  state: {
    currentFlag: 0,

  },
  mutations: {
  FlagIncrement: state => state.currentFlag++,
  setFlagZero: state => state.currentFlag = 0
  },
  actions: {
  },
  modules: {
  }
})
