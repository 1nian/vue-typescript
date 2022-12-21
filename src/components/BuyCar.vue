<template>
    <div>
      <table border>
        <thead>
          <tr>
            <th>名称</th>
            <th>数量</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in carStore.carList" :key="item.name">
            <td>{{item.name}}</td>
            <td>{{item.num}}</td>
            <td>{{item.price}}</td>
            <td><button @click="del(index)">删除</button></td>
          </tr>
        </tbody>
      </table>
    <button @click="reset">重置</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import {useCarStore} from '../store/car'

type Shop = {
  name:string,
  num:number,
  price:number
}

const carStore = useCarStore()


const del = (index:number) => {
  carStore.carList.splice(index,1)
}

const reset = () => {
  carStore.$reset()
}
</script>

<style scoped>

</style>