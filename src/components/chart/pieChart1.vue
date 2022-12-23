<template>
    <div ref="charts" class="charts"></div>
</template>


<script setup lang="ts">
import * as echarts from "echarts";
import { ref,reactive, onMounted,watch } from 'vue'

const props = defineProps({
    rate:{
        type:Number,
        default:0
    },
    title:{
        type:String,
        default:""
    }
})

const charts = ref<any>()

watch(
    () => props.rate,
    (value) => {
        console.log(value);
        setChartOption()
    },
    {
        deep:true
    }
)

const remFontSize =  (rem:number) => {
    let fontSize:any = document.documentElement.style.fontSize;

    let newsize = rem * 1 * fontSize.replace("px", "");

    return newsize * 1;
} 

const setChartOption = () => {
    charts.value.setOption({
        title: [
            {
                text: "{a|" + props.rate.toFixed(2) + "}{d|" + "%" + "}",
                x: "center",
                top: "35%",
                textStyle: {
                    rich: {
                        a: {
                            fontSize: remFontSize(0.38),
                            fontFamily: "PingFang SC",
                            color: "#333333",
                            fontWeight: 400,
                        },
                        d: {
                            fontSize: remFontSize(0.28),
                            fontFamily: "PingFang SC",
                            color: "#9D9D9D",
                            fontWeight: 400,
                        },
                    },
                },
            },
            {
                text: props.title,
                x: "center",
                top: "50%",
                textStyle: {
                    fontSize: remFontSize(0.28),
                    color: "#333333",
                    fontFamily: "PingFang SC",
                    fontWeight: 400,
                },
            },
        ],
        polar: { radius: ["65%", "80%"] },
        angleAxis: { max: 100, show: false },
        radiusAxis: { type: "category", show: true, axisLabel: { show: false }, axisLine: { show: false }, axisTick: { show: false } },
        series: [
            {
                name: "",
                type: "bar",
                roundCap: true,
                showBackground: true,
                backgroundStyle: { color: "#90CDFD" },
                data: [props.rate],
                coordinateSystem: "polar",
                itemStyle: {
                    color: "#479FFE",
                },
            },
        ],
    });
            
    window.addEventListener("resize", function () {
        charts.value.resize();
    });
};

onMounted(() => {
    charts.value = echarts.init(charts.value)
    
    setChartOption()
})

</script>
<style lang="scss" scoped>
.charts {
    width: 100%;
    height: 100%;
}
</style>
