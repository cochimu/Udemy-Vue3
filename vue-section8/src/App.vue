<script setup lang="ts">
import { ref, computed } from 'vue'
import CardList from './components/CardList.vue';
import SecondCardList from './components/SecondCardList.vue';

const isFirstTab = ref(true)
const updateTab = (isFirst: boolean) => {
  isFirstTab.value = isFirst
}

const currentComponent = computed(() => {
  switch (isFirstTab.value) {
    case true:
      return CardList
    case false:
      return SecondCardList
    default:
      return CardList
  }
})

</script>

<template>
  <div class="tab-changer">
    <button @click="updateTab(true)">Tab 1</button>
    <button @click="updateTab(false)">Tab 2</button>
  </div>
  <div class="tab-contents">
    
    <!-- <CardList></CardList> -->
    <!-- <CardList v-if="isFirstTab"></CardList>
    <SecondCardList v-if="!isFirstTab"></SecondCardList> -->

    <!-- 動的なコンポーネントは以下のように定義する -->
    <component :is="currentComponent"></component>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tab-contents {
  margin-top: 20px;

}
</style>
