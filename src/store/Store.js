import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => state.counter * 2
  }
})
