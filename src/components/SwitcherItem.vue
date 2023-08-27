<script setup>
defineProps({
  count: {
    type: Number,
    required: true
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
})
</script>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    switchStyle() {
      return this.isActive ? ['bg-active', 'justify-end'] : ['bg-inactive', 'justify-start'];
    },
    roundSize() {
      const num = Number(this.height.split('-')[1]) - 1;
      console.log(typeof(`w-${num.toString()}`))
      return `w-${num.toString()} h-${num.toString()}`;
    }
  },

  methods: {
	  toggle() {
      console.log('сколько')
    	this.isActive ? this.isActive = false : this.isActive = true;
  	}
	}
}
</script>

<template>
  <label :class="['flex', this.width, this.height, 'p-px', ' rounded-xl', 'cursor-pointer', 'items-center', switchStyle]" @change="toggle">
    <input class="hidden" type="checkbox">
    <span :class="['inline-block', 'bg-white', 'rounded-full', roundSize]"></span>
  </label>
</template>