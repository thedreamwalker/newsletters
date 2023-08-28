<script setup>
import CardItem from '@/components/CardItem.vue';
import BreadcrumbsItem from '@/components/BreadcrumbsItem.vue';
import SwitcherItem from '@/components/SwitcherItem.vue';
import cards from './cards';
import IconArrow from '@/components/icons/IconArrow.vue';

import { useFecth } from '@/api/api.js';

import { mapGetters } from 'vuex'


  
</script>

<script>
  export default {
  data() {
    return {
      email: '',
    }
  },

  methods: {
    sendForm: function (e) {
    e.preventDefault();
    const obj = {email: this.email, subscriptions: this.$store.getters.subscription};
    console.log('отправлен объект');
    console.log(obj);
    useFecth('POST', obj);
  }
  }
}

const breadcrumbsAfter = ["after:content-['→']", "after:ml-2", "after:text-textGrayLight"];
const breadcrumbsDefault = ['text-textGrayLight', 'hover:text-textGrayDark', 'transition', 'ease-in-out', 'duration-300'];
const breadcrumbsActive = ['text-accentLight', 'cursor-default'];

const breadcrumbs = [
  {name: 'Главная', url: '/', class: breadcrumbsDefault, liClass: breadcrumbsAfter},
  {name: 'Рассылки', url: '#', class: breadcrumbsDefault, liClass: breadcrumbsAfter},
  {name: 'Подписки «Клерка»', url: '#', class: breadcrumbsActive},
  ];

  const tabsDefault = `relative active:text-accentLight pb-4 active:font-medium
      active:after:absolute active:after:block active:after:content-[''] active:after:bg-accentLight active:after:w-full active:after:h-0.5 active:after:bottom-0
      hover:after:absolute hover:after:block hover:after:content-[''] hover:after:bg-accentLight hover:after:w-full hover:after:h-0.5 hover:after:bottom-0`;
  const tabsActive = `relative text-accentLight pb-4 font-medium
      after:absolute after:block after:content-[''] after:bg-accentLight after:w-full after:h-0.5 after:bottom-0
      hover:after:absolute hover:after:block hover:after:content-[''] hover:after:bg-accentLight hover:after:w-full hover:after:h-0.5 hover:after:bottom-0`;

  const tabs = [
  {name: 'Рассылки', class: tabsActive,},
  {name: 'Соцсети', class: tabsDefault,},
  {name: 'Мессенджеры', class: tabsDefault},
  ]

  const isMobile = window.innerWidth < 768;
</script>

<template>
  <main>
    <BreadcrumbsItem :breadcrumbs="breadcrumbs"/>
  <h1 class="mb-6 text-mainTitle sm:text-3xl font-medium text-center">Подписки «Клерка»</h1>
    <ul class="flex gap-6 justify-center text-textGrayDark">
      <li v-for="tab in tabs" :class="tab.class"><button type="button">{{ tab.name }}</button></li>
    </ul>
    <div class="flex flex-col py-12 bg-backgroundSecond rounded-l-2xl rounded-b-2xl">
      <div class="px-12">
        <p class="mb-6 text-2xl text-center font-medium tracking-[-0.24px]">Выберите рассылки, которые подходят именно вам</p>
        <form class="flex mb-4" @submit="sendForm">
          <input class="p-4 rounded-l-xl w-full" type="email" placeholder="Электронная почта" required v-model="email">
          <div v-if="isMobile" class="bg-white rounded-r-full flex align-middle"><button class="flex justify-center items-center right-0 w-14 h-14 bg-active text-white rounded-full hover:brightness-125"><IconArrow/></button></div>
          <div v-else="isMobile" class="bg-white rounded-r-[100px]"><button class="right-0 inline-block px-8 py-4 bg-active text-white rounded-[100px] hover:brightness-125">Подписаться</button></div>
        </form>
        <div class="flex items-center gap-2">
          <SwitcherItem :type="'all'" :width="'w-8'" :height="'h-4'" />
          <p class="text-sm">Подписаться на все рассылки</p>
        </div>
      </div>
      <ul class="flex justify-center flex-wrap gap-6 px-6 pt-8">
        <li v-for="card in cards">
          <CardItem :type="card.type" :supTitle="card.supTitle" :title="card.title" :description="card.description" :image="card.image" :featureList="card.featureList" :count="card.count"></CardItem>
        </li>
      </ul>
    </div>
  </main>
</template>