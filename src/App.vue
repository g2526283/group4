<!-- vue網站視窗入口可以視為首頁 -->
<script setup>


// 用於導入 Vue Router 中的 RouterLink 和 RouterView 組件。這兩個組件用於處理路由和頁面導航
import { RouterLink, RouterView } from 'vue-router';
import Header from "./components/宇/Header.vue";






</script>


<template>
  <!-- 這是 Vue Router 中的一個組件，用於根據路由顯示不同的頁面內容。 -->
  <RouterView />
  <!-- 懸浮菜單欄先隱藏 -->
  <!-- <div class="header">
    <Header/>
  </div> -->

  
</template>

<style scoped lang="scss">


 

</style>
