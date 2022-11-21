<template>
    <div class="content">
        <DynamicComponentVue></DynamicComponentVue>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue' 
import DynamicComponentVue from '../../components/DynamicComponent.vue';



</script>

<style scoped>
.content{
    flex: 1;
    margin: 20px;
    border: 1px solid #ff6700;
    overflow: auto;
}
</style>