<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
  type: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: false,
    default: 'w-12'
  },
  height: {
    type: String,
    required: false,
    default: 'h-6'
  },

  round: {
    type: String,
    required: false,
    default: 'w-5 h-5'
  }
},

  data() {
    return {
      isActive: false,
      isMobile: false,
    }
  },

  mounted() {
    if (this.type === 'all' && this.subscription.morning && this.subscription.evening && this.subscription.sale && this.subscription.free) {this.setSubscription({[this.type]: true})};
  },

  computed: {
    ...mapGetters(['subscription']),

    switchStyle() {
      return this.subscription[this.type] ? ['bg-active', 'justify-end'] : ['bg-inactive', 'justify-start'];
    },
    roundStyle() {
      return this.subscription[this.type] ? ['translate-x-[0.05rem]'] : ['translate-x-0'];
    }
  },

  methods: {
    ...mapActions(['setSubscription']),

	  toggle() {
      // console.log(this.$store.getters.subscription);

      if (this.type === 'all') {
        this.setSubscription({
          all: !this.subscription[this.type],
          morning: !this.subscription[this.type],
          evening: !this.subscription[this.type],
          sale: !this.subscription[this.type],
          free: !this.subscription[this.type]
        })} else {
        this.setSubscription({[this.type]: !this.subscription[this.type]});
        (this.subscription.morning && this.subscription.evening && this.subscription.sale && this.subscription.free) ? this.setSubscription({['all']: true}) : this.setSubscription({['all']: false}) ;
        }
      }
  	}
	}
</script>

<template>
  <label :class="['flex', this.width, this.height, 'p-px', ' rounded-xl', 'cursor-pointer', 'items-center', 'hover:shadow-2lg', 'transition', 'ease-in-out', 'duration-500', switchStyle]" @change="toggle">
    <input class="hidden" type="checkbox">
    <span :class="['inline-block', 'bg-white', 'rounded-full', this.round, 'transition', 'ease-in-out', 'duration-900', roundStyle]"></span>
  </label>
</template>