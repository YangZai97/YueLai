<template>
    <div>
        <!-- end page-header -->
        <div class="row">
            <div class="col-xl-12">
                <panel title="资金流水管理">
                    <el-table :data="tableData"
                              v-loading="loading"
                              stripe
                              border
                    >
                        <el-table-column prop="time"
                                         label="日期"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="title"
                                         label="商品类型"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="number"
                                         label="商品名称"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="cout"
                                         label="销售人"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="moeny"
                                         label="金额"
                                         align="center">
                        </el-table-column>
                    </el-table>
                </panel>

            </div>

        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [
                    {title: '头冠', number: '罪恶王冠全钻打造', cout: '红豆', time: '2016-02-22 00:16:07', moeny: 87972110},
                    {title: '手镯', number: '铂金手镯/20年新款', cout: '黑豆', time: '2020-05-12 11:16:17', moeny: 800},
                    {title: '手镯', number: '铂金手镯/20年新款', cout: '绿豆', time: '2020-05-12 11:16:55', moeny: 810},
                    {title: '戒指', number: '24k金戒指/圣诞节限定', cout: '青豆', time: '2020-04-22 01:06:18', moeny: 2478},
                    {title: '戒指', number: '24k金戒指/圣诞节限定', cout: '蓝豆', time: '2020-04-22 01:06:18', moeny: 2478},
                    {title: '手镯', number: '铂金手镯/20年新款', cout: '紫豆', time: '2020-05-12 11:16:17', moeny: 800},
                    {title: '头冠', number: '罪恶王冠全钻打造', cout: '黄豆', time: '2016-02-22 00:16:07', moeny: 87972110},
                    {title: '戒指', number: '24k金戒指/圣诞节限定', cout: '蓝豆', time: '2020-04-22 01:06:18', moeny: 2478},
                    {title: '手镯', number: '铂金手镯/20年新款', cout: '红豆', time: '2020-05-12 11:16:17', moeny: 800},
                    {title: '戒指', number: '24k金戒指/圣诞节限定', cout: '蓝豆', time: '2020-04-22 01:06:18', moeny: 2478},
                    {title: '手镯', number: '铂金手镯/20年新款', cout: '红豆', time: '2020-05-12 11:16:17', moeny: 800},
                ],
                loading: false
            };
        },
        methods: {
            goDetalis(row) {
                console.log(row);
            }
        }
    };
</script>
