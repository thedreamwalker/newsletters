<script setup>
import CardItem from '@/components/CardItem.vue'
import BreadcrumbsItem from '@/components/BreadcrumbsItem.vue'
import SwitcherItem from '@/components/SwitcherItem.vue'
import cards from './cards'
import IconArrow from '@/assets/img/arrow.svg?component'

import { useFetch } from '@/api/api.js'
import { isMobile } from '@/utils/index.js'

import { mapState, mapGetters, mapActions } from 'vuex'
</script>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },

  computed: {
    ...mapState(['subscription']),
    ...mapGetters(['allSubscription'])
  },

  methods: {
    ...mapActions(['setSubscription']),

    sendForm() {
      const obj = {
        email: this.email,
        subscriptions: this.$store.getters.subscription
      }
      console.log('отправлен объект')
      console.log(obj)
      useFetch('POST', obj)
    },

    changeAllSubscription(value) {
      for (let typeSubscription in this.subscription) {
        this.setSubscription({ [typeSubscription]: value })
      }
    }
  }
}

const breadcrumbsAfter = [
  `after:content-['→']`,
  'after:ml-2',
  'after:text-textGrayLight'
]
const breadcrumbsDefault = [
  'text-textGrayLight',
  'hover:text-textGrayDark',
  'transition',
  'ease-in-out',
  'duration-300'
]
const breadcrumbsActive = ['text-accentLight', 'cursor-default']

const breadcrumbs = [
  {
    name: 'Главная',
    url: '/',
    class: breadcrumbsDefault,
    liClass: breadcrumbsAfter
  },
  {
    name: 'Рассылки',
    url: '#',
    class: breadcrumbsDefault,
    liClass: breadcrumbsAfter
  },
  { name: 'Подписки «Клерка»', url: '#', class: breadcrumbsActive }
]

const tabsDefault = `relative active:text-accentLight pb-4 active:font-medium
      active:after:absolute active:after:block active:after:content-[''] active:after:bg-accentLight active:after:w-full active:after:h-0.5 active:after:bottom-0
      hover:after:absolute hover:after:block hover:after:content-[''] hover:after:bg-accentLight hover:after:w-full hover:after:h-0.5 hover:after:bottom-0`
const tabsActive = `relative text-accentLight pb-4 font-medium
      after:absolute after:block after:content-[''] after:bg-accentLight after:w-full after:h-0.5 after:bottom-0
      hover:after:absolute hover:after:block hover:after:content-[''] hover:after:bg-accentLight hover:after:w-full hover:after:h-0.5 hover:after:bottom-0`

const tabs = [
  { name: 'Рассылки', class: tabsActive },
  { name: 'Соцсети', class: tabsDefault },
  { name: 'Мессенджеры', class: tabsDefault }
]
</script>

<template>
  <main>
    <BreadcrumbsItem :breadcrumbs="breadcrumbs" />
    <h1 class="mb-6 text-center text-mainTitle font-medium sm:text-3xl">
      Подписки «Клерка»
    </h1>
    <ul class="flex justify-center gap-6 text-textGrayDark">
      <li v-for="tab in tabs" :key="tab.name" :class="tab.class">
        <button type="button">{{ tab.name }}</button>
      </li>
    </ul>
    <div
      class="flex flex-col rounded-b-2xl rounded-l-2xl bg-backgroundSecond py-12"
    >
      <div class="px-12">
        <p class="mb-6 text-center text-2xl font-medium tracking-[-0.24px]">
          Выберите рассылки, которые подходят именно вам
        </p>
        <form class="mb-4 flex" @submit.prevent="sendForm">
          <input
            v-model="email"
            class="w-full rounded-l-xl p-4"
            type="email"
            placeholder="Электронная почта"
            required
          />
          <div
            v-if="isMobile"
            class="flex rounded-r-full bg-white align-middle"
          >
            <button
              class="right-0 flex h-14 w-14 items-center justify-center rounded-full bg-active text-white hover:brightness-125"
            >
              <IconArrow />
            </button>
          </div>
          <div v-else class="rounded-r-[100px] bg-white">
            <button
              class="right-0 inline-block rounded-[100px] bg-active px-8 py-4 text-white hover:brightness-125"
            >
              Подписаться
            </button>
          </div>
        </form>
        <div class="flex items-center gap-2">
          <SwitcherItem
            width="'w-8'"
            height="'h-4'"
            round="'w-3 h-3'"
            :is-active="allSubscription"
            @click.prevent="changeAllSubscription(!allSubscription)"
          />
          <p class="text-sm">Подписаться на все рассылки</p>
        </div>
      </div>
      <ul class="flex flex-wrap justify-center gap-6 px-6 pt-8">
        <li v-for="card in cards" :key="card.title">
          <CardItem
            :sup-title="card.supTitle"
            :title="card.title"
            :description="card.description"
            :image="card.image"
            :feature-list="card.featureList"
            :count="card.count"
            :subscribed="subscription[card.type]"
            @changed="value => setSubscription({ [card.type]: value })"
          />
        </li>
      </ul>
    </div>
  </main>
</template>
