<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <panel :title="$route.query.name">
                    <el-row>
                        <el-col :span="6" v-for="(o,index) in listData" :key="index" style="margin: 0 5px;">
                            <el-popover
                                placement="right-start"
                                :title="o.name"
                                width="350"
                                trigger="hover"
                                :content="o.goods_brief">
                                <el-card slot="reference">
                                    <img
                                        :src="o.goods_front_image"
                                        height="200px"
                                        class="image"
                                    >
                                    <div style="padding: 5px;border-top: 1.5px solid #dbe0e7">
                                        <p style="font-size: 14px;margin-bottom: 8px;font-weight: 700">{{o.name}}</p>
                                        <span style="margin-top: 5px">已售：{{o.sold_num}}</span>
                                        <br>
                                        <span style="margin-top: 5px">剩余库存量：{{o.goods_num}}</span>
                                        <br>
                                        <span>本店参考价格：{{o.shop_price}}元</span>
                                        <el-button type="danger" class="button" v-if="o.goods_num!=0"
                                                   @click="dialogVisible=true,goodId=o.id,price=o.shop_price,maxNumber=o.goods_num">出售
                                        </el-button>
                                        <el-button type="info" class="button" disabled v-else>暂无库存</el-button>
                                    </div>
                                </el-card>
                            </el-popover>
                        </el-col>
                    </el-row>
                </panel>
            </div>
        </div>
        <div>
            <el-dialog
                title="出售"
                :visible.sync="dialogVisible"
                width="350px"
            >
                <div style="margin-bottom: 20px">
                    <div style="width: 40%; display: inline-block"><b>件数 : </b></div>
                    <el-input-number style="width: 50%;" v-model="num" :min="1" :max="maxNumber"
                                     label="件数"></el-input-number>
                    件
                </div>
                <div style="margin-bottom: 15px">
                    <div style="width: 40%; display: inline-block"><b>实际售价(单价) : </b></div>
                    <el-input style="width: 40%; display: inline-block" v-model="price"
                              placeholder="实际售价(单价）"></el-input>
                    元
                </div>
                <div>
                    <p>备注：</p>
                    <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入备注内容"
                        v-model="remark">
                    </el-input>
                </div>
                <div style="text-align: center;margin-top: 40px">
                    <el-button type="primary" @click="buyGood">确认出售</el-button>
                    <el-button @click="dialogVisible=false">取消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: 0,
                maxNumber:0,
                // eslint-disable-next-line camelcase
                goodId: null,
                remark: null,
                num: 1,
                dialogVisible: false,
                listData: [],
                loading:null
            };
        },
        mounted() {
            this.getDetails();

        },
        methods: {
            pageLoading() {
                this.loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            },
            buyGood() {
                let data = {
                    number: this.num,
                    price: this.price,
                    remark: this.remark
                };
                console.log(data);
                this.$product.buyProduct(this.goodId, data).then(res => {
                    console.log(res);
                    this.getDetails();
                    this.$message.success('出售成功');
                    this.dialogVisible = false;
                }).catch(()=>{
                    this.$message.error('出售失败，请重试');
                    this.getDetails();
                    this.dialogVisible = false;
                });
            },
            getDetails() {
                this.pageLoading();
                let data = {
                    page: 1,
                    size: 300,
                    // eslint-disable-next-line camelcase
                    category: this.$route.query.id
                };
                this.$product.productDetails(data).then(res => {
                    console.log(res);
                    this.listData = res.data.results;
                    this.loading.close();
                });
            },
        }
    };
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 3px;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }
    /deep/.el-dialog__header{
        text-align: center !important;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
