<script setup>
import FeatureItem from './FeatureItem.vue';
import SwitcherItem from './SwitcherItem.vue';

defineProps({
  type: {
    type: String,
    required: true
  },
  supTitle: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  featureList: {
    type: Array,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-2xl shadow-2lg p-6">
    <div class="flex justify-between gap-6">
      <div class="mb-4">
        <p class="text-textGrayLight text-sub">{{ supTitle }}</p>
        <h2 class="text-xl font-medium mb-2">{{ title }}</h2>
        <p class="w-[324px] text-textGrayDark text-sm">{{ description }}</p>
      </div>
      <img class="w-20 h-20 rounded-lg" :src="image" :alt="title">
    </div>
    <ul class="mb-4">
      <li v-for="item in featureList" class="mb-2">
        <FeatureItem :text="item.text" :params="item.params"></FeatureItem>
      </li>
    </ul>
    <div class="flex items-center gap-2">
      <SwitcherItem :type="this.type" :count="this.count"></SwitcherItem>
      <p>Уже получает {{this.count}} человек</p>
    </div>
    
  </div>
</template>