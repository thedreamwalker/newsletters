<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav class="mb-6">
      <ul class="flex gap-2 text-sub justify-center">
        <li :class="item.liClass" v-for="item in breadcrumbs">
          <a :class="item.class" :href="item.url">
            {{item.name}}
          </a>
        </li>
      </ul>
  </nav>
</template>