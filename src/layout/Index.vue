<template>
    <div class="layout">
        <Menu :treeList="treeList"></Menu>
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

interface Menu {
    name:string,
    id:number,
    check:boolean,
    children?:Menu[]
}
const treeList = <Menu[]>[
    {
        name:"1",
        id:1,
        check: false,
        children:[
            {
                name:"1-1",
                id:11,
                check: false,
            },
            {
                name:"1-2",
                id:12,
                check: false,
            },
        ]
    },
    {
        name:"2",
        id:2,
        check: false,
        children:[
            {
                name:"2-1",
                id:21,
                check: false,
                children:[
                    {
                        name:"2-1-1",
                        id:211,
                        check: true,
                    },
                ]
            },
        ]
    }
]

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