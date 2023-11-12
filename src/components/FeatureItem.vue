<script>
import IconCheck from '@/assets/img/check.svg?component'

export default {
  components: {
    IconCheck
  },
  props: {
    text: {
      type: String,
      required: true
    },
    params: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <div class="flex items-center gap-x-2">
    <IconCheck :fill="'#00CC33'" />
    <p :class="['text-sm', params]">{{ text }}</p>
  </div>
</template>
