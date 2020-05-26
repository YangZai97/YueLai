<template>
    <div>
        <!-- end page-header -->
        <div class="row">
            <div class="col-xl-12">
                <panel title="库存管理（如需添加库存，请联系管理员）">
                    <el-table :data="tableData"
                              v-loading="loading"
                              stripe
                              border
                    >
                        <el-table-column prop="title"
                                         label="商品类型"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="number"
                                         label="总库存"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="cout"
                                         label="已售库存"
                                         align="center">
                        </el-table-column>
                        <el-table-column align="center" label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="mini" @click="goDetalis(scope.row)">查看库存</el-button>
                            </template>
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
                    {title: '手镯', number: 14, cout: 2},
                    {title: '戒指', number: 42, cout: 7},
                    {title: '头冠', number: '暂无库存', cout: 1},
                    {title: '项链', number: 8, cout: 3},
                    {title: '耳环', number: 92, cout: 11}
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
