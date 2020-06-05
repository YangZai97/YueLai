<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <panel title="黄金价格走势 (元/克)">
                    <line-chart :data="lineChart.data" ref="chart" :options="lineChart.options"
                                class="height-sm"></line-chart>
                </panel>
            </div>
            <div class="col-xl-12">
                <panel title="白银价格走势 (元/千克)">
                    <line-chart :data="lineChart2.data" ref="chart2" :options="lineChart2.options"
                                class="height-sm"></line-chart>
                </panel>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from '../components/vue-chartjs/LineChart';

    export default {
        components: {
            LineChart,
        },
        data() {
            return {
                loading: null,
                lineChart: {
                    data: {
                        labels: [],
                        datasets: [{
                            label: '早盘',
                            backgroundColor: 'rgba(52, 143, 226, 0.2)',
                            borderColor: '#348fe2',
                            pointBackgroundColor: '#348fe2',
                            pointRadius: 2,
                            borderWidth: 2,
                            data: []
                        },
                            {
                                label: '午盘',
                                backgroundColor: 'rgba(45, 53, 60, 0.3)',
                                borderColor: '#2d353c',
                                pointBackgroundColor: '#2d353c',
                                pointRadius: 2,
                                borderWidth: 2,
                                data: []
                            }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    max: 500
                                }
                            }]
                        }
                    }
                },
                lineChart2: {
                    data: {
                        labels: [],
                        datasets: [{
                            label: '早盘',
                            backgroundColor: 'rgba(52, 143, 226, 0.2)',
                            borderColor: '#348fe2',
                            pointBackgroundColor: '#348fe2',
                            pointRadius: 2,
                            borderWidth: 2,
                            data: []
                        },
                            {
                                label: '午盘',
                                backgroundColor: 'rgba(45, 53, 60, 0.3)',
                                borderColor: '#2d353c',
                                pointBackgroundColor: '#2d353c',
                                pointRadius: 2,
                                borderWidth: 2,
                                data: []
                            }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    max: 5000
                                }
                            }]
                        }
                    }
                }
            };
        },
        mounted() {
            this.loadingFunction();
            this.sprider();
        },
        methods: {
            sprider(){
                this.$product.spider().then(()=>{
                    this.loading.close();
                    this.getList();
                    this.getsilver();
                });
            },
            getList() {
                // 黄金
                let data = {
                    page: 1,
                    size: 15,
                    type: 'gold',
                };
                this.$product.getForecastList(data).then(res => {
                    console.log(res);
                    res.data.results.map(item => {
                        this.lineChart.data.labels.push(item.date);
                        this.lineChart.data.datasets[0].data.push(item.zp_price);
                        this.lineChart.data.datasets[1].data.push(item.wp_price);
                        this.$refs.chart.renderChart(this.lineChart.data, this.lineChart.options);
                    });
                });
            },
            getsilver() {
                // 白银
                let data = {
                    page: 1,
                    size: 15,
                    type: 'silver',
                };
                this.$product.getForecastList(data).then(res => {
                    console.log(res);
                    res.data.results.map(item => {
                        this.lineChart2.data.labels.push(item.date);
                        this.lineChart2.data.datasets[0].data.push(item.zp_price);
                        this.lineChart2.data.datasets[1].data.push(item.wp_price);
                        this.$refs.chart2.renderChart(this.lineChart2.data, this.lineChart2.options);
                    });
                });
            },
            loadingFunction() {
                this.loading = this.$loading({
                    lock: true,
                    text: '正在查询数据中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            }
        }
    };
</script>

<style scoped>

</style>
