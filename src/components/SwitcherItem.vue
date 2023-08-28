<script setup>
defineProps({
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
})
</script>

<script>
export default {
  data() {
    return {
      isActive: false,
      round: this.height.split('-')[1] - 1,
    }
  },
  computed: {
    switchStyle() {
      return this.isActive ? ['bg-active', 'justify-end'] : ['bg-inactive', 'justify-start'];
    },
    roundStyle() {
      return this.isActive ? ['translate-x-[0.05rem]'] : ['translate-x-0'];
    }
  },

  methods: {
	  toggle() {
    	this.isActive ? this.isActive = false : this.isActive = true;
  	}
	}
}
</script>

<template>
  <label :class="['flex', this.width, this.height, 'p-px', ' rounded-xl', 'cursor-pointer', 'items-center', 'hover:shadow-2lg', 'transition', 'ease-in-out', 'duration-500', switchStyle]" @change="toggle">
    <input class="hidden" type="checkbox">
    <span :class="['inline-block', 'bg-white', 'rounded-full', this.round < 5 ? 'w-3 h-3' : 'w-5 h-5', 'transition', 'ease-in-out', 'duration-900', roundStyle]"></span>
  </label>
</template>