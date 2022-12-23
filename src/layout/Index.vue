<template>
    <div class="layout">
      <Header></Header>
      <Content></Content>
      <Menu></Menu>
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
  height: 100%;
  overflow: hidden;
}
</style>