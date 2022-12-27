<template>
    <div class="text-content">
      <div class="text-items" v-for="(item,index) in props.list" :key="index + item.num">
        <div class="items">
          <div class="yuan"></div>
          <div class="name">{{ item.name }}</div>
        </div>
        <div class="items">
          <div class="num">{{ item.num }}</div>
          <div class="unit">{{ item.unit }}</div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'


interface Props {
  list: any[] ,
}

const props = withDefaults(defineProps<Props>(),{
    list: () => [],
})


</script>

<style scoped lang="scss">
.text-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .text-items{
    display: flex;
    flex-direction: column;
    margin-bottom: .24rem;
    .items{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .yuan{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: .16rem;
      }
      .yuan:first-child{
        background-color: #90CDFD;
      }
      .yuan:nth-child(2){
        background-color: #479FFE;
      }
      .name{
        font-size: .34rem;
        color: #333333;
      }
      .num {
        font-size: .34rem;
        padding-left: .32rem;
  
      }
      .num:first-child{
        color: #90CDFD;
      }
      .num:nth-child(2){
        color: #479FFE;
      }
      .unit{
        color:#9D9D9D;
        font-size: .24rem;
      }
    }
  }
  .text-items:last-child{
    margin-bottom: 0;
  }
}
</style>