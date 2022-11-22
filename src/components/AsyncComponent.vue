<template>
  <div class="reactiveclass">
    <div>异步组件</div>
    <ul>
      <li v-for="item in list.arr">{{item+'list'}}</li>
    </ul>
    <button @click="getList">获取</button>
  </div>

</template>

<script setup lang='ts'>
import { ref, isRef,reactive, customRef } from 'vue' 
// isRef 判断是否为ref对象
import { axios } from '../api/axios';

const info = ref({name:"1nian"})

const add = () => {
msg2.value = 'nian1--'
}

function myRef<T>(value:T) {
let timer:any
return customRef((track,trigger) => {
  return {
    get(){
      track()
      return value
    },
    set(newValue){
      clearTimeout(timer)

      timer = setTimeout(()=>{
        value = newValue
        timer = null

        trigger()
      },500)
    }
  }
})
}

const msg2 = myRef<string>('---1nian')

const list = reactive<{
  arr:any
}>({
  arr:[]
})

const getList = async() =>{
  const res = await axios("/mock.json")

  console.log(res);
  list.arr = res
}

</script>

<style scoped>

</style>