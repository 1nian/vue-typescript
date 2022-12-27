<template>
    <div>{{ props.titles }}</div>
    <button @click="change">我是子组件按钮</button>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'

const props = defineProps({
   titles : {
      type:String,
      default:"我是test2"
   }
})

const emit =  defineEmits(['child-change'])

const change = () => {
  emit("child-change","点击了按钮")
}

const commonClick = () => {
    console.log("我是子组件暴露出去的方法");
}

defineExpose({
  commonClick
})
</script>

<style scoped>

</style>