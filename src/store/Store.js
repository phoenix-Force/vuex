import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => state.counter * 2
  },
  mutations: {
    increase: (state, payload = 1) => state.counter += payload,
    decrease: (state, payload = 1) => state.counter -= payload
  },
  actions: {
    increase: (context, payload = 1) => {
      context.commit("increase", payload)
    },
    decrease: ({
      commit,
      payload = 1
    }) => {
      commit("decrease", payload)
    },
    aysIncrease: (context) => {
      setTimeout(() => {
        context.commit("increase")
      }, 1000)
    },
    aysDecrease: (context) => {
      setTimeout(() => {
        context.commit("decrease")
      }, 1000)
    }
  }
})
