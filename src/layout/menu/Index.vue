<template>
    <div class="menu">
        <div class="menu-item" v-for="item in routes" :key="item.path" @click="changePath(item.path)">
             <div :class="isActive(item.path)">{{item.meta.title}}</div>
             <template v-if="item?.children && item.children?.length">
                <layout-menu :treeList="item?.children"></layout-menu>
            </template>
        </div>
    </div>
</template>



<script setup lang='ts'>
// 递归组件

import { ref, reactive ,computed} from 'vue' 
import {routes} from '../../router/routes'
import { useRouter,useRoute } from 'vue-router';

const router = useRouter()

const route = useRoute()

const isActive = computed(() => {
    
    return function(path:string) {
        if(path !== route.path) {
            return ''
        } else {
            return 'active'
        }
    }
})

const changePath = (path:string) => {
    
    router.push(path)
}

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
        .active{
            color:#ff6700 ;
        }
        div{
            cursor: pointer;
        }
    }
}
</style>