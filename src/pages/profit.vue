<template>
    <div class="row">
        <div class="col-xl-12">
            <!-- begin panel -->
            <panel title="员工业绩营收">
                <bar-chart :data="chartData" ref="chart" :options="options" class="height-sm"></bar-chart>
            </panel>
            <!-- end panel -->
        </div>
    </div>
</template>

<script>
    import BarChart from '../components/vue-chartjs/BarChart';

    export default {
        components: {
            BarChart,
        },
        data() {
            return {
                chartData: {
                    labels: [],
                    datasets: [{
                        label: '总销额',
                        borderWidth: 2,
                        borderColor: '#727cb6',
                        backgroundColor: 'rgba(114, 124, 182, 0.3)',
                        data: []
                    }, {
                        label: '利润额',
                        borderWidth: 2,
                        borderColor: '#2d353c',
                        backgroundColor: 'rgba(45, 53, 60, 0.3)',
                        data: []
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            };
        },
        mounted() {
            this.getlabel();
        },
        methods:{
            getlabel(){
                this.$account.getSoldList().then(res => {
                    res.data.map(item => {
                        this.chartData.labels.push(item.userprofile__nickname);
                        this.chartData.datasets[0].data.push(item.total_amount);
                        this.chartData.datasets[1].data.push(item.total_profit);
                        this.$refs.chart.renderChart(this.chartData, this.options);
                    });
                });
            }
        }
    };
</script>

<style scoped>

</style>
