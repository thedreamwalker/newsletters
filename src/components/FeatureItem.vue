<script setup>
import { ref } from 'vue';
import IconCheck from '@/components/icons/IconCheck.vue';
defineProps({
  text: {
    type: String,
    required: true
  },
  params: {
    type: String,
    required: false
  },
});
</script>

<template>
  <li class="flex items-center gap-x-2">
    <IconCheck :fill="'#00CC33'"></IconCheck> 
    <p :class="['text-sm', this.params]">{{ text }}</p></li>
</template>