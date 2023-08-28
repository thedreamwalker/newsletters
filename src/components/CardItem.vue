<script>
import FeatureItem from './FeatureItem.vue';
import SwitcherItem from './SwitcherItem.vue';

export default {
  props: {
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
},

components: {
    FeatureItem,
    SwitcherItem
  }
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-2lg p-6">
    <div class="flex justify-between gap-6">
      <div class="mb-4">
        <p class="text-textGrayLight text-sub">{{ supTitle }}</p>
        <h2 class="text-xl font-medium mb-2">{{ title }}</h2>
        <p class="max-w-[324px] text-textGrayDark text-sm">{{ description }}</p>
      </div>
      <img class="max-w-20 sm:max-w-10 max-h-20 sm:max-h-10 rounded-lg" :src="image" :alt="title">
    </div>
    <ul class="mb-4">
      <li v-for="item in featureList" class="mb-2">
        <FeatureItem :text="item.text" :params="item.params"></FeatureItem>
      </li>
    </ul>
    <div class="flex items-center gap-2">
      <SwitcherItem :type="this.type" :count="this.count"></SwitcherItem>
      <p>Уже получает {{`${String(this.count).slice(0, -3)} ${String(this.count).slice(-3)}`}} человек</p>
    </div>
  </div>
</template>