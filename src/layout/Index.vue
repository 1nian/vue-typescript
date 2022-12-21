<template>
    <div class="layout">
        <Menu></Menu>
        <div class="right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue' 

import Header from "./header/Index.vue"
import Menu from "./menu/Index.vue"
import Content from "./content/Index.vue"

</script>

<style scoped lang="scss">
.layout{
  display: flex;
  height: 100%;
  overflow: hidden;
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    border-left:1px solid #ff6700 ;
  }
}
</style>