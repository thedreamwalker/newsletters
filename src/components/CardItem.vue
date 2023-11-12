<script>
import FeatureItem from './FeatureItem.vue'
import SwitcherItem from './SwitcherItem.vue'

export default {
  components: {
    FeatureItem,
    SwitcherItem
  },

  props: {
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
    },
    subscribed: {
      type: Boolean,
      required: true
    }
  },

  emits: ['changed'],

  computed: {
    countSubscription() {
      return `${String(this.count).slice(0, -3)} ${String(this.count).slice(
        -3
      )}`
    }
  },

  methods: {
    toggleSubscription() {
      this.$emit('changed', !this.subscribed)
    }
  }
}
</script>

<template>
  <div class="rounded-2xl bg-white p-6 shadow-2lg">
    <div class="flex justify-between gap-6">
      <div class="mb-4">
        <p class="text-sub text-textGrayLight">{{ supTitle }}</p>
        <h2 class="mb-2 text-xl font-medium">{{ title }}</h2>
        <p class="max-w-[324px] text-sm text-textGrayDark">{{ description }}</p>
      </div>
      <img
        class="max-w-20 sm:max-w-10 max-h-20 rounded-lg sm:max-h-10"
        :src="image"
        :alt="title"
      />
    </div>
    <ul class="mb-4">
      <li v-for="item in featureList" :key="item.text" class="mb-2">
        <FeatureItem :text="item.text" :params="item.params" />
      </li>
    </ul>
    <div class="flex items-center gap-2">
      <SwitcherItem
        :is-active="subscribed"
        :count="count"
        @click.prevent="toggleSubscription"
      />
      <p>Уже получает {{ countSubscription }} человек</p>
    </div>
  </div>
</template>
