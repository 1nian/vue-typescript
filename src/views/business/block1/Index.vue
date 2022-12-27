<template>
    <common-content title="营收态势">
        <template #content>
          <div class="block1-content">
            <pieChart1 class="chart" :rate="rate1" title="本年营收进度"></pieChart1>
            <text-content :list="state.list1"></text-content>
          </div>
          <div class="block1-content">
            <pieChart1 class="chart" :rate="rate2" title="本年营收进度"></pieChart1>
            <text-content :list="state.list1"></text-content>
          </div>
        </template>
    </common-content>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue' 
import pieChart1 from '../../../components/chart/pieChart1.vue'
import { axios } from '../../../api/axios'

const rate1 = ref(32.7)

const state = reactive(
  {
    list1: [
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
    ]
  }
)

const rate2 = ref(32.7)

const getText = () => {
  fetch('http://localhost:3000/').then(res => res.json()).then(res => {

    state.list1 = res.data.list1
    rate1.value = res.data.rate
  })
}

getText()


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