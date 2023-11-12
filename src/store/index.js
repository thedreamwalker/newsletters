import { createStore } from 'vuex'

export const mutation = {
  SET_SUBSCRIPTION: 'SET_SUBSCRIPTION'
}

const store = createStore({
  state() {
    return {
      subscription: {
        morning: true,
        evening: false,
        sale: true,
        free: true
      }
    }
  },
  getters: {
    allSubscription: state => !Object.values(state.subscription).includes(false)
  },
  mutations: {
    SET_SUBSCRIPTION(state, isSubscription) {
      state.subscription = { ...state.subscription, ...isSubscription }
    }
  },
  actions: {
    setSubscription: ({ commit }, value) => {
      commit(mutation.SET_SUBSCRIPTION, value)
    }
  }
})

export { store }
