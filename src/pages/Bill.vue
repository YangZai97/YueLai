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
                        <el-table-column prop="created_at"
                                         label="日期"
                                         width="140"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="goods.category_name"
                                         label="商品类型"
                                         width="140"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="goods.name"
                                         label="商品名称"
                                         width="140"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="user_name"
                                         label="销售人"
                                         width="100"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="number"
                                         label="数量"
                                         width="80"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="amount"
                                         width="100"
                                         label="总金额"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="remark"
                                         label="备注"
                                         width="300"
                                         align="center">
                        </el-table-column>
                    </el-table>
                </panel>

            </div>
            <div class="block" style="margin:0 auto;margin-top:5px">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-sizes="[20, 50, 100]"
                    :page-size="size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="count">
                </el-pagination>
            </div>

        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [],
                page: 1,
                size: 20,
                count: 0,
                loading: true
            };
        },
        mounted() {
            this.getBillList();
        },
        methods: {
            getBillList() {
                let data = {
                    page: this.page,
                    size: this.size,
                };
                this.$product.getBill(data).then(res => {
                    console.log(res);
                    this.loading = false;
                    this.count = res.data.count;
                    this.tableData = res.data.results;
                });
            },
            handleSizeChange(val) {
                this.page = 1;
                this.size = val;
                this.loading = true;
                this.getBillList();
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.page = val;
                this.loading = true;
                this.getBillList();
                console.log(`当前页: ${val}`);
            }
        }
    };
</script>
