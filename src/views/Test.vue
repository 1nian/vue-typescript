<template>
    <Test2Vue ref="test2"></Test2Vue>

    <button @click="callChild" @child-change="getChildChange">我是父组件按钮</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue' 
import Test2Vue from './Test2.vue';

const test2 = ref()


const callChild = () => {
  test2.value.commonClick()
}

const getChildChange = (params:string) => {
    console.log(params);
}
</script>

<style scoped>

</style>