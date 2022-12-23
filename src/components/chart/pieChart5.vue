<template>
    <div ref="chart" class="charts"></div>
</template>
<script>
//圆环饼图
import * as echarts from "echarts";
export default {
    name: "pieChart5",
    props: {
        dataList: {
            typeof: Array,
            default: () => [{ value: "", name: "" }],
        },
        color: {
            typeof: Array,
            default: () => ["#479FFE", "#90CDFD", "#8CB2FF", "#90FFAD", "#4F5AEB", "#D6D029", "#F1B267"],
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
                        radius: ["60%", "85%"],
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
                                            color: "#333333",
                                            fontWeight: 400,
                                        },
                                        b: {
                                            fontSize: this.remFontSize(0.28),
                                            fontFamily: "PingFang SC",
                                            color: "#333333",
                                            fontWeight: 400,
                                        },
                                        c: {
                                            fontSize: this.remFontSize(0.32),
                                            color: "#333333",
                                            fontFamily: "PingFang SC",
                                            fontWeight: 400,
                                            padding: [5, 0, 0, 0],
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
