<template>
    <div ref="chart" class="charts"></div>
</template>
<script>
//仪表盘
import * as echarts from "echarts";
export default {
    name: "pieChart4",
    props: {
        value: {
            typeof: Number,
            default: () => 0,
        },
        title: {
            typeof: String,
            default: () => "",
        },
    },
    data() {
        return {
            chart: null,
            option: null,
        };
    },
    watch: {
        value: {
            handler() {
                this.setChartOption();
            },
        },
    },
    computed: {},
    mounted() {
        this.chart = echarts.init(this.$refs.chart);
        this.setChartOption();
    },
    beforeDestroy() {},
    methods: {
        // 设置option
        setChartOption() {
            const max = 100;
            const value = this.value;
            this.option = {
                title: [
                    {
                        text: "{a|" + value + "}{d|" + "%" + "}",
                        x: "center",
                        top: "30%",
                        textStyle: {
                            rich: {
                                a: {
                                    fontSize: this.remFontSize(0.38),
                                    fontFamily: "PingFang SC",
                                    color: "#333333",
                                    fontWeight: 400,
                                },
                                d: {
                                    fontSize: this.remFontSize(0.28),
                                    fontFamily: "PingFang SC",
                                    color: "#9D9D9D",
                                    fontWeight: 400,
                                },
                            },
                        },
                    },
                    {
                        text: this.title,
                        x: "center",
                        top: "50%",
                        textStyle: {
                            fontSize: this.remFontSize(0.32),
                            color: "#333333",
                            fontFamily: "PingFang SC",
                            fontWeight: 400,
                        },
                    },
                ],
                angleAxis: {
                    show: false,
                    max: (100 * 360) / 230, //-45度到225度，二者偏移值是270度除360度
                    type: "value",
                    startAngle: 205, //极坐标初始角度
                    splitLine: {
                        show: false,
                    },
                },
                barWidth: 18, //圆环宽度
                radiusAxis: {
                    show: false,
                    type: "category",
                },
                //圆环位置和大小
                polar: {
                    center: ["50%", "50%"],
                    radius: "160%",
                },
                series: [
                    {
                        type: "bar",
                        stack: "测试",
                        data: [
                            {
                                //上层圆环，显示数据
                                value: this.value,
                                name: "sdfasdf",
                                itemStyle: {
                                    color: "#4F5AEB",
                                },
                            },
                        ],
                        barGap: "-100%", //柱间距离,上下两层圆环重合
                        coordinateSystem: "polar",
                        roundCap: true, //顶端圆角从 v4.5.0 开始支持
                        z: 2, //圆环层级，同zindex
                    },
                    {
                        //下层圆环，显示最大值
                        type: "bar",
                        data: [
                            {
                                value: 100,
                                itemStyle: {
                                    color: "#E8E8E8",
                                },
                            },
                        ],
                        barGap: "-100%",
                        coordinateSystem: "polar",
                        roundCap: true,
                        z: 1,
                    },
                    {
                        stack: "测试",
                        type: "bar",
                        data: [0.01],
                        showBackground: false,
                        coordinateSystem: "polar",
                        roundCap: true,
                        barWidth: 20,
                        itemStyle: {
                            color: "#fff",
                            borderColor: "#fff",
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                            shadowBlur: 15,
                            shadowOffsetY: 2,
                        },
                        z: 3,
                    },
                ],
                tooltip: {
                    show: false,
                },
            };
            this.chart.setOption(this.option);
            this.chart.dispatchAction({
                type: "highlight",
                seriesIndex: 0,
                dataIndex: 0, //存在间隙 index*2
            });
            const that = this;
            window.addEventListener("resize", function () {
                that.chart.resize();
            });
        },
        remFontSize(rem) {
            let fontSize = document.documentElement.style.fontSize;

            let newsize = rem * 1 * fontSize.replace("px", "");

            return newsize * 1;
        },
    },
};
</script>

<style lang="scss" scoped>
.charts {
    width: 100%;
    height: 100%;
    margin: auto;
}
</style>
