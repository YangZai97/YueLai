<template>
    <div>
        <!-- end page-header -->
        <div class="row">
            <div class="col-xl-12">
                <panel title="库存管理（如需添加库存，请联系管理员）">
                    <el-table :data="tableData"
                              v-loading="loading"
                              stripe
                              row-key="id"
                              :tree-props="{children: 'sub_cat'}"
                              border
                    >
                        <el-table-column prop="name"
                                         label="商品类型"
                                         width="400"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="total_count"
                                         label="库存量"
                                         align="center">
                        </el-table-column>
                        <el-table-column prop="sold_total_count"
                                         label="已卖出"
                                         align="center">
                        </el-table-column>
                        <el-table-column align="center" label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" v-if="scope.row.category_type==2" size="mini" @click="details(scope.row)">查看库存</el-button>
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
                tableData: [],
                loading: true
            };
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                let data = {
                    size: 300,
                    page: 1,
                    // eslint-disable-next-line camelcase
                    category_type: 1
                };
                this.$product.productList(data).then(res => {
                    console.log(res);
                    this.loading = false;
                    this.tableData = res.data.results;
                });
            },
            details(row) {
                console.log(row);
                this.$router.push({path: '/Detail', query: {id: row.id, name: row.name}});
            }
        }
    };
</script>
