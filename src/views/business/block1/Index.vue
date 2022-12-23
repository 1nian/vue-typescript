<template>
    <common-content title="营收态势">
        <template #content>
          <div class="block1-content">
            <pieChart1 class="chart" :rate="rate1" title="本年营收进度"></pieChart1>
            <text-content :list="list1"></text-content>
          </div>
          <div class="block1-content">
            <pieChart1 class="chart" :rate="rate2" title="本年营收进度"></pieChart1>
            <text-content :list="list1"></text-content>
          </div>
        </template>
    </common-content>
</template>

<script setup lang="ts">
import { ref, reactive,onMounted } from 'vue' 
import pieChart1 from '../../../components/chart/pieChart1.vue'

const rate1 = ref(32.7)

const list1 = reactive([
  {
    name:"本年计划营收",
    num:'500.00',
    unit:"亿元"
  },
  {
    name:"本年实际营收",
    num:'300.00',
    unit:"亿元"
  }
])

const rate2 = ref(32.7)


</script>

<style scoped lang="scss">
.block1-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .chart{
    width: 2.74rem;
    height: 2.74rem;
  }
}
</style>