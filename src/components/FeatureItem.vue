<script>
import IconCheck from '@/assets/img/check.svg?component';

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
    <IconCheck :fill="'#00CC33'" />
    <p :class="['text-sm', params]">{{ text }}</p></div>
</template>