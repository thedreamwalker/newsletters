<script>
import { mapState, mapGetters } from 'vuex';

export default {
  props: {
  isActive: {
    type: Boolean,
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
      isMobile: false,
    }
  },

    computed: {
      ...mapState(['subscription']),
      ...mapGetters(['allSubscription']),

      switchStyle() {
        return this.isActive ? ['bg-active', 'justify-end'] : ['bg-inactive', 'justify-start'];
      },
      roundStyle() {
        return this.isActive ? ['translate-x-[0.05rem]'] : ['translate-x-0'];
      }
    },
	}
</script>

<template>
  <label :class="['flex', this.width, this.height, 'p-px', ' rounded-xl', 'cursor-pointer', 'items-center', 'hover:shadow-2lg', 'transition', 'ease-in-out', 'duration-500', switchStyle]" @change="toggle">
    <input class="hidden" type="checkbox">
    <span :class="['inline-block', 'bg-white', 'rounded-full', this.round, 'transition', 'ease-in-out', 'duration-900', roundStyle]"></span>
  </label>
</template>