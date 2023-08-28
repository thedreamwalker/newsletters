import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './style.css'

export const mutation = {
	SET_SUBSCRIPTION: 'SET_SUBSCRIPTION',
}

const store = createStore({
  state () {
    return {
      subscription: {
        all: false,
        morning: true,
        evening: true,
        sale: true,
        free: true
      }
    }
  },
  getters: {
		subscription: state => state.subscription,
	},
  mutations: {
    SET_SUBSCRIPTION (state, isSubscription) {
      state.subscription = {...state.subscription , ...isSubscription}
    }
  },
  actions: {
		setSubscription: ({dispatch, commit}, value) => {
      commit(mutation.SET_SUBSCRIPTION, value)
    }
	}
})

createApp(App).use(store).mount('#app')
