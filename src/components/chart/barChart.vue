<template>
    <div ref="chart" class="charts"></div>
</template>
<script>

import * as echarts from "echarts";
export default {
    name: "barChart",
    props: {
        x: {
            typeof: Array,
            default: () => [],
        },
        y: {
            typeof: Array,
            default: () => [],
        },
        unit: {
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
        x: {
            handler() {
                this.setChartOption();
            },
            deep: true,
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
            const unit = this.unit;
            this.option = {
                grid: {
                    left: "5%",
                    right: "5%",
                    bottom: "5%",
                    top: "10%",
                    containLabel: true,
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "none",
                    },
                    formatter: function (params) {
                        return params[0].name + "<br/>" + "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" + params[0].seriesName + " : " + params[0].value + unit + " <br/>";
                    },
                },
                xAxis: {
                    show: true,
                    type: "value",
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#333333",
                            fontSize: this.remFontSize(0.24),
                        },
                    },
                },
                yAxis: [
                    {
                        type: "category",
                        inverse: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#333333",
                                fontSize: this.remFontSize(0.24),
                            },
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        data: this.y,
                    },
                ],
                series: [
                    {
                        name: "金额",
                        type: "bar",
                        zlevel: 1,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 30,
                                color: "#479FFE",
                            },
                        },
                        barWidth: 8,
                        data: this.x,
                    },
                ],
            };
            this.chart.setOption(this.option);
            const that = this;
            window.addEventListener("resize", function () {
                that.chart.resize();
            });
        },
        remFontSize(rem) {
            let fontSize = document.documentElement.style.fontSize;

            let newsize = rem * 1 * fontSize.replace("px", "");

            return newsize;
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
