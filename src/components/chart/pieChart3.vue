<template>
    <div ref="chart" class="charts"></div>
</template>
<script>
//带线饼图
import * as echarts from "echarts";
export default {
    name: "pieChart3",
    props: {
        dataList: {
            typeof: Array,
            default: () => [],
        },
        num: {
            typeof: Number,
            default: () => 0,
        },
        title: {
            typeof: String,
            default: () => "",
        },
        color: {
            typeof: Array,
            default: () => ["#479FFE", "#90CDFD", "#8CB2FF", "#90FFAD", "#4F5AEB", "#D6D029", "#F1B267"],
        },
        showTitle: {
            typeof: Boolean,
            default: true,
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
            const widths = this.$refs.chart.clientWidth;
            const color = this.color;
            this.option = {
                title: [
                    {
                        show: this.showTitle,
                        text: "{a|" + this.num + "}{d|" + "人" + "}",
                        x: "center",
                        top: "40%",
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
                color: this.color,
                series: [
                    {
                        type: "pie",
                        silent: "ture",
                        radius: ["45%", "65%"],
                        center: ["50%", "50%"],
                        label: {
                            alignTo: "edge",
                            formatter: "{name|{b}}\n{name|{c} %}",
                            minMargin: 5,
                            edgeDistance: 10,
                            lineHeight: 25,
                            rich: {
                                name: {
                                    fontSize: this.remFontSize(0.24),
                                    color: "#333333",
                                },
                            },
                        },
                        labelLine: {
                            length: 15,
                            length2: 0,
                            maxSurfaceAngle: 80,
                        },
                        labelLayout: this.labelLayout,
                        data: this.dataList,
                    },
                ],
            };
            this.chart.setOption(this.option);
            const that = this;
            window.addEventListener("resize", function () {
                that.chart.resize();
            });
        },
        labelLayout(params) {
            console.log(params);
            const isLeft = params.labelRect.x < this.chart.getWidth() / 2;
            const points = params.labelLinePoints;
            points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
            return {
                labelLinePoints: points,
            };
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
