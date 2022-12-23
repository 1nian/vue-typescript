<template>
    <div class="menu">
        <div class="menu-item" v-for="(item,index) in routes" :key="item.path" @click="changePath(item.path)">
             <div :class="['default',isActive(item.path)]">
                <img :src="imgList[index]" alt="">
                {{item.meta.title}} 
            </div>
        </div>
    </div>
</template>



<script setup lang='ts'>
import { ref, reactive ,computed} from 'vue' 
import {routes} from '../../router/routes'
import { useRouter,useRoute } from 'vue-router';

import bottom1 from '../../assets/1.png'
import bottom2 from '../../assets/2.png'
import bottom3 from '../../assets/3.png'

const imgList = reactive([
    bottom1,bottom2,bottom3
])

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
    width: 100%;
    height: 1.65rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-item{
        width: 100%;
        font-size: .2rem;
        .default{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: .8rem;
                height: .8rem;
            }
        }
        .active{
            color:#D73D41 ;
        }
        div{
            cursor: pointer;
        }
    }
}
</style>