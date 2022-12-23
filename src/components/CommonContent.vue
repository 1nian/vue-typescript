<template>
  <div class="common-content">
    <div class="title">{{ title }}</div>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

defineProps({
  title: {
    type: String,
    default: ""
  }
})


</script>

<style scoped lang="scss">
.common-content {
    width: 100%;
    height: 100%;
    padding: 0 0.3rem;
    margin-bottom: 0.32rem;
    background-color: #ffffff;
    border-radius: 0.12rem;
    border: 1px solid #f4f4f4;
    box-sizing: border-box;
    .title {
        height: 0.96rem;
        line-height: 0.96rem;
        font-size: 0.36rem;
        color: #211815;
        font-weight: 700;
    }
}
</style>