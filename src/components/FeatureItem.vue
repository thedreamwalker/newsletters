<script>
import IconCheck from './icons/IconCheck.vue';

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    params: {
      type: String,
      required: false
    },
  },

  components: {
    IconCheck,
  }
}

</script>

<template>
  <div class="flex items-center gap-x-2">
    <IconCheck :fill="'#00CC33'"></IconCheck> 
    <p :class="['text-sm', params]">{{ text }}</p></div>
</template>