<template>
  <div class="refclass">
      <div>
      {{info}}
      </div>
      <div>
        {{msg2}}
      </div>
      <button @click="add">gaibian</button>
      <br>
  </div>

  <div class="reactiveclass">
    <form >
      <input v-model="form.name" type="text" name="" id="">
      <br>
      <input v-model="form.money" type="text" name="" id="">
      <br>
      <button @click.prevent="submit">提交</button>
    </form>
    <br>

    <ul>
      <li v-for="item in list">{{item+'list'}}</li>
    </ul>
    <button @click="getList">获取</button>
    <hr>
    <ul>
      <li v-for="item in lists.arr">{{item+'lists'}}</li>
    </ul>
    <button @click="getLists">获取</button>
  </div>

</template>

<script setup lang='ts'>
import { ref, isRef,reactive, customRef } from 'vue' 
// isRef 判断是否为ref对象
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


const form = reactive({
name:"1nian",
money:"0000"
})

const submit = () =>{
console.log(form);
}

const list = reactive<string[]>([])

const getList = () =>{
setTimeout(() => {
  const res = ["冰","水","火","风","雷","岩","草"]

  list.push(...res)
}, 2000)
}

const lists = reactive<{
arr:string[]
}>({
arr:[]
})

const getLists = () =>{
setTimeout(() => {
  const res = ["冰","水","火","风","雷","岩","草"]

  lists.arr = res
}, 2000)
}
</script>

<style scoped>

</style>