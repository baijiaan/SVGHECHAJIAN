<template>
  <div id="app" v-image="item.url" v-for="item in imageList">
    <img :src="item.url" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const imageList = ref([
  {
    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg",
  },
  {
    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg",
  },
  {
    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg",
  },
]);
// Vue.directive("image", {});
</script>
<style lang="scss" scoped></style>
