<template>
    <div ref="chart" class="charts"></div>
</template>
<script>
//实心饼图
import * as echarts from "echarts";
export default {
    name: "pieChart2",
    props: {
        dataList: {
            typeof: Array,
            default: () => [{ value: "", name: "" }],
        },
        color: {
            typeof: Array,
            default: () => ["#479FFE", "#90CDFD"],
        },
    },
    data() {
        return {
            chart: null,
            option: null,
        };
    },
    watch: {
        dataList: {
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
            this.option = {
                color: this.color,
                series: [
                    {
                        type: "pie",
                        data: this.dataList,
                        hoverAnimation: false,
                        silent: "ture",
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    rich: {
                                        a: {
                                            fontSize: this.remFontSize(0.38),
                                            fontFamily: "PingFang SC",
                                            color: "#FFFFFF",
                                            fontWeight: 400,
                                        },
                                        b: {
                                            fontSize: this.remFontSize(0.28),
                                            fontFamily: "PingFang SC",
                                            color: "#FFFFFF",
                                            fontWeight: 400,
                                        },
                                        c: {
                                            fontSize: this.remFontSize(0.32),
                                            color: "#FFFFFF",
                                            fontFamily: "PingFang SC",
                                            fontWeight: 400,
                                            padding: [20, 0, 0, 0],
                                        },
                                    },
                                },
                                formatter: function (params) {
                                    return "{a|" + params.percent.toFixed(2) + "}{b|" + "%" + "}\n{c|" + params.name + "}";
                                },
                            },
                        },
                    },
                ],
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
