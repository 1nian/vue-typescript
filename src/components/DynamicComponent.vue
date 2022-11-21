<template>
    <div class="tab">
      <div :class="['tab-item',current_index === index ? 'active':'']" v-for="(item,index) in tablist" :key="index" @click="changeCom(item,index)">{{item.name}}</div>
    </div>

    <component :is="com_name"></component>
</template>

<script setup lang='ts'>
// 动态组件

import { ref, reactive,markRaw,shallowRef } from 'vue' 
import BuyCarVue from './BuyCar.vue';
import HelloWorldVue from './HelloWorld.vue';

const com_name = shallowRef(BuyCarVue)

const current_index = ref(0)

const tablist = [
  {
    name:"购物车案例",
    com:markRaw(BuyCarVue)
  },
  {
    name:"Hello 案例",
    com:markRaw(HelloWorldVue)
  }
] 

const changeCom = (item:any,index:number) => {
  com_name.value = item.com
  current_index.value = index
}

</script>

<style scoped lang="scss">
.tab{
  display: flex;
  .tab-item{
    padding: 0 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .active{
    color: #ff6700;
  }
}
</style>