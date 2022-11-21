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
          <tr v-for="(item,index) in data" :key="item.name">
            <td>{{item.name}}</td>
            <td>{{item.num}}</td>
            <td>{{item.price}}</td>
            <td><button @click="del(index)">删除</button></td>
          </tr>
        </tbody>
      </table>
    
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

type Shop = {
  name:string,
  num:number,
  price:number
}

const data = reactive<Shop[]>([
  {
    name:"name1",
    num:1,
    price:100
  },
  {
    name:"name2",
    num:2,
    price:200
  },
  {
    name:"name3",
    num:3,
    price:300
  }
])

const del = (index:number) => {
  data.splice(index,1)
}
</script>

<style scoped>

</style>