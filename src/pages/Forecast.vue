<template>
    <div>
        <div class="row">
            <div class="col-xl-8">
                <panel title="黄金价格走势 (元/克)">
                    <line-chart :data="lineChart.data" ref="chart" :options="lineChart.options"
                                class="height-sm"></line-chart>
                </panel>
            </div>
            <div class="col-xl-4">
                <!-- begin panel -->
                <panel title="黄金价格走势预测(元/克)" bodyClass="p-t-0">
                    <div class="table-responsive">
                        <table class="table table-valign-middle">
                            <thead>
                            <tr>
                                <th>类型</th>
                                <th>价格</th>
                                <th>趋势</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><label class="label label-danger">明天早盘黄金预测</label></td>
                                <td>{{yuceData.goldZpTotol}}</td>
                                <td>
                                        <span class="text-success"><div
                                            v-if="yuceData.goldZpTotolToday<yuceData.goldZpTotol" style="color: red">
                                            <i class="fa fa-arrow-up"
                                            ></i>
 {{yuceData.goldZpPercentage | abs}}%
                                        </div>
                                        <div v-if="yuceData.goldZpTotolToday>yuceData.goldZpTotol" style="color: green">
                                            <i class="fa fa-arrow-down"
                                            ></i>
                                            {{yuceData.goldZpPercentage | abs}}%
                                        </div>
                                        </span>
                                </td>
                            </tr>
                            <tr>
                                <td><label class="label label-warning">明天午盘黄金预测</label></td>
                                <td>{{yuceData.goldWpTotol}}</td>
                                <td>
                                        <span class="text-success">
                                           <div v-if="yuceData.goldWpTotolToday<yuceData.goldWpTotol"
                                                style="color: red">
                                               <i class="fa fa-arrow-up"
                                               ></i>
                                               {{yuceData.goldWpPercentage | abs}}%
                                           </div>
                                        <div v-if="yuceData.goldWpTotolToday>yuceData.goldWpTotol"
                                             style="color: green">
                                            <i class="fa fa-arrow-down"
                                            ></i>
                                               {{yuceData.goldWpPercentage | abs}}%
                                        </div>
                                        </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </panel>
            </div>
            <div class="col-xl-8">
                <panel title="白银价格走势 (元/千克)">
                    <line-chart :data="lineChart2.data" ref="chart2" :options="lineChart2.options"
                                class="height-sm"></line-chart>
                </panel>
            </div>
            <div class="col-xl-4">
                <!-- begin panel -->
                <panel title="白银价格走势预测(元/千克)" bodyClass="p-t-0">
                    <div class="table-responsive">
                        <table class="table table-valign-middle">
                            <thead>
                            <tr>
                                <th>类型</th>
                                <th>价格</th>
                                <th>趋势</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><label class="label label-danger">明天早盘白银预测</label></td>
                                <td>{{yuceData.silverZpTotol}}</td>
                                <td>
                                        <span class="text-success">
                                            <div style="color: red"
                                                 v-if="yuceData.silverZpTotolToday<yuceData.silverZpTotol">
                                                <i class="fa fa-arrow-up"
                                                ></i>
                                                {{yuceData.silverZpPercentage |abs}}%
                                            </div>
                                        <div v-if="yuceData.silverZpTotolToday>yuceData.silverZpTotol"
                                             style="color: green">
                                            <i class="fa fa-arrow-down"
                                            ></i>
                                            {{yuceData.silverZpPercentage |abs}}%
                                        </div>

                                        </span>
                                </td>
                            </tr>
                            <tr>
                                <td><label class="label label-warning">明天午盘白银预测</label></td>
                                <td>{{yuceData.silverWpTotol}}</td>
                                <td>
                                        <span class="text-success"><div style="color: red"
                                                                        v-if="yuceData.silverWpTotolToday<yuceData.silverWpTotol">
                                            <i class="fa fa-arrow-up"
                                            ></i>
                                            {{yuceData.silverWpPercentage | abs}}%
                                        </div>
                                            <div v-if="yuceData.silverWpTotolToday>yuceData.silverWpTotol"
                                                 style="color: green">
                                                <i class="fa fa-arrow-down"
                                                ></i>
                                                {{yuceData.silverWpPercentage | abs}}%
                                            </div>
                                        </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
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
        filters: {
            abs(val) {
                let price = parseFloat(val);
                if (price < 0) {
                    return -price;
                } else {
                    return price;
                }
            }
        },
        data() {
            return {
                yuceData: {
                    goldZpTotol: 0,
                    goldZpPercentage: null,
                    goldZpTotolToday: 0,

                    goldWpTotol: 0,
                    goldWpPercentage: null,
                    goldWpTotolToday: 0,

                    silverZpTotol: 0,
                    silverZpPercentage: null,
                    silverZpTotolToday: 0,

                    silverWpTotol: 0,
                    silverWpPercentage: null,
                    silverWpTotolToday: 0
                },
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
            this.yuceGoldZp();
            this.loadingFunction();
            this.yuceGoldWp();
            this.sprider();
            this.yuceSilverWp();
            this.yuceSilverZp();
        },
        methods: {
            yuceSilverZp() {
                let data = {
                    type: 'silver',
                    price: 'zp_price'
                };
                this.$product.Yuce(data).then(res => {
                    console.log(res);
                    this.yuceData.silverZpTotol = res.data.data;
                    this.yuceData.silverZpTotolToday = res.data.today_price;
                    this.yuceData.silverZpPercentage = res.data.percentum;
                });
            },
            yuceSilverWp() {
                let data = {
                    type: 'silver',
                    price: 'wp_price'
                };
                this.$product.Yuce(data).then(res => {
                    console.log(res);
                    this.yuceData.silverWpTotol = res.data.data;
                    this.yuceData.silverWpTotolToday = res.data.today_price;
                    this.yuceData.silverWpPercentage = res.data.percentum;

                });
            },
            yuceGoldZp() {
                let data = {
                    type: 'gold',
                    price: 'zp_price'
                };
                this.$product.Yuce(data).then(res => {
                    console.log(res);
                    this.yuceData.goldZpTotol = res.data.data;
                    this.yuceData.goldZpTotolToday = res.data.today_price;
                    this.yuceData.goldZpPercentage = res.data.percentum;

                });
            },
            yuceGoldWp() {
                let data = {
                    type: 'gold',
                    price: 'wp_price'
                };
                this.$product.Yuce(data).then(res => {
                    console.log(res);
                    this.yuceData.goldWpTotol = res.data.data;
                    this.yuceData.goldWpTotolToday = res.data.today_price;
                    this.yuceData.goldWpPercentage = res.data.percentum;

                });
            },
            sprider() {
                this.$product.spider().then(() => {
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
