<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <panel title="价格走势">
                    <line-chart :data="lineChart.data" :options="lineChart.options" class="height-sm"></line-chart>
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
                lineChart: {
                    data: {
                        labels: ['一月', '二月', '三月', '四月', '五月'],
                        datasets: [{
                            label: '黄金',
                            backgroundColor: 'rgba(52, 143, 226, 0.2)',
                            borderColor: '#348fe2',
                            pointBackgroundColor: '#348fe2',
                            pointRadius: 2,
                            borderWidth: 2,
                            data: [345, 260, 248, 300, 349, 358, 350, 45, 52, 39, 43, 67]
                        }, {
                            label: '银',
                            backgroundColor: 'rgba(52, 143, 226, 0.2)',
                            borderColor: '#1c955f',
                            pointBackgroundColor: '#348fe2',
                            pointRadius: 2,
                            borderWidth: 2,
                            data: [150, 200, 148, 80, 149, 258, 350, 45, 52, 39, 43, 67]
                        }, {
                            label: '青铜',
                            backgroundColor: 'rgba(52, 143, 226, 0.2)',
                            borderColor: '#397ffa',
                            pointBackgroundColor: '#348fe2',
                            pointRadius: 2,
                            borderWidth: 2,
                            data: [100, 200, 348, 280, 149, 258, 350, 45, 52, 39, 43, 67]
                        }, {
                            label: '铂金',
                            backgroundColor: 'rgba(45, 53, 60, 0.2)',
                            borderColor: '#2d353c',
                            pointBackgroundColor: '#2d353c',
                            pointRadius: 2,
                            borderWidth: 2,
                            data: [800, 618, 720, 818, 820, 823, 820, 18, 22, 18, 20, 23]
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
                                    max: 1000
                                }
                            }]
                        }
                    }
                }
            };
        },
        methods: {}
    };
</script>

<style scoped>

</style>
