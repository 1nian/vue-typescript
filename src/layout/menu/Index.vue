<template>
    <div class="menu">
        <div class="menu-item" v-for="item in treeList" :key="item.id">
            <input v-model="item.check" type="checkbox" name="" id="" /> {{item.name}}

            <layout-menu v-if="item.children?.length" :treeList="item.children"></layout-menu>
        </div>
    </div>
</template>



<script setup lang='ts'>
// 递归组件

import { ref, reactive } from 'vue' 

interface Menu {
    name:string,
    id:number,
    check:boolean,
    children?:Menu[]
}

defineProps<{
    treeList:Menu[]
}>()

</script>

<script lang='ts'>
export default {
    name:"layout-menu"
}
</script>

<style scoped lang="scss">
.menu{
    width: 18.75rem;
    height: 100%;
    .menu-item{
        width: 80%;
        padding-left: 10px;
        box-sizing: border-box;
    }
}
</style>