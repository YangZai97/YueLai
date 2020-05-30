<template>
    <div>
        <!-- begin #header -->
        <div class="header navbar-default" id="header">
            <!-- begin navbar-header -->
            <div class="navbar-header">
                <button class="navbar-toggle pull-left" type="button" v-if="pageOptions.pageWithTwoSidebar"
                        v-on:click="toggleMobileRightSidebar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/Home"><span class="navbar-logo"></span> <b>王的手作</b>
                </router-link>
                <button class="navbar-toggle pt-0 pb-0 mr-0 collapsed" type="button"
                        v-if="pageOptions.pageWithTopMenu && !pageOptions.pageWithoutSidebar"
                        v-on:click="toggleMobileTopMenu">
					<span class="fa-stack fa-lg text-inverse">
						<i class="far fa-square fa-stack-2x"></i>
						<i class="fa fa-cog fa-stack-1x"></i>
					</span>
                </button>
                <button class="navbar-toggle" type="button"
                        v-if="pageOptions.pageWithTopMenu && pageOptions.pageWithoutSidebar"
                        v-on:click="toggleMobileTopMenu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <button class="navbar-toggle p-0 m-r-0" type="button" v-if="pageOptions.pageWithMegaMenu"
                        v-on:click="toggleMobileMegaMenu">
					<span class="fa-stack fa-lg text-inverse m-t-2">
						<i class="far fa-square fa-stack-2x"></i>
						<i class="fa fa-cog fa-stack-1x"></i>
					</span>
                </button>
                <button class="navbar-toggle" type="button" v-if="!pageOptions.pageWithoutSidebar"
                        v-on:click="toggleMobileSidebar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <!-- end navbar-header -->
            <header-mega-menu v-if="pageOptions.pageWithMegaMenu"></header-mega-menu>
            <!-- begin header-nav -->
            <ul class="navbar-nav navbar-right">
                <b-nav-item-dropdown class="dropdown navbar-user" menu-class="dropdown-menu-right" no-caret
                                     v-if="username">
                    <template slot="button-content">
                        <div class="image image-icon bg-black text-grey-darker">
                            <i class="fa fa-user"></i>
                        </div>
                        <span style="font-size: 14px" class=" d-md-inline">{{username}}</span> <b class="caret"></b>
                    </template>
                    <b-dropdown-item href="javascript:;" @click="editorPasswordDialog=true">修改密码</b-dropdown-item>
                    <b-dropdown-item href="javascript:;" @click="logOut">退出登录</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown class="dropdown navbar-user" menu-class="dropdown-menu-right" no-caret v-else>
                    <template slot="button-content">
                        <span style="font-size: 14px" class=" d-md-inline" @click="$router.push({path:'/'})">登录</span>
                    </template>
                </b-nav-item-dropdown>
                <li class="divider d-none d-md-block" v-if="pageOptions.pageWithTwoSidebar"></li>
                <li class="d-none d-md-block" v-if="pageOptions.pageWithTwoSidebar">
                    <a class="f-s-14" href="javascript:;" v-on:click="toggleRightSidebarCollapsed">
                        <i class="fa fa-th"></i>
                    </a>
                </li>
            </ul>
            <!-- end header navigation right -->
        </div>
        <div>
            <el-dialog
                title="修改密码"
                :visible.sync="editorPasswordDialog"
                width="350px"
            >
                <div style="margin-bottom: 15px">
                    <div style="width: 30%; display: inline-block"><b>原密码: </b></div>
                    <el-input style="width: 60%; display: inline-block" show-password v-model="lodPassword"
                              placeholder="请输入原密码"></el-input>
                </div>
                <div style="margin-bottom: 15px">
                    <div style="width: 30%; display: inline-block"><b>新密码: </b></div>
                    <el-input style="width: 60%; display: inline-block" show-password v-model="newPassword"
                              placeholder="请输入新密码"></el-input>
                </div>
                <div style="margin-bottom: 15px">
                    <div style="width: 30%; display: inline-block"><b>确认密码: </b></div>
                    <el-input style="width: 60%; display: inline-block" show-password v-model="rePassword"
                              placeholder="请确认密码"></el-input>
                </div>
                <div style="text-align: center;margin-top: 40px">
                    <el-button type="primary" @click="submit">确认修改</el-button>
                    <el-button @click="editorPasswordDialog=false">取消</el-button>
                </div>
            </el-dialog>
        </div>
        <!-- end #header -->
    </div>
</template>

<script>
    import PageOptions from '../../config/PageOptions.vue';
    import HeaderMegaMenu from './HeaderMegaMenu.vue';

    export default {
        name: 'Header',
        components: {
            HeaderMegaMenu
        },
        data() {
            return {
                username: null,
                loginUsername:null,
                lodPassword:null,
                rePassword:null,
                newPassword:null,
                editorPasswordDialog:false,
                pageOptions: PageOptions
            };
        },
        mounted() {
            this.getUserInfo();
        },
        methods: {
            submit(){
                if(this.rePassword || this.lodPassword || this.newPassword){
                    if(this.newPassword==this.rePassword){
                        let data = {
                          username:this.loginUsername,
                          password:this.lodPassword
                        };
                        this.$account.login(data).then(res=>{
                            console.log(res);
                            let data2 = {
                              password:this.newPassword
                            };
                            this.$account.editorPassword(1, data2).then(()=>{
                               this.$message.success('修改密码成功，请重新登录');
                               this.$router.push({path:'/'});
                            }).catch(()=>{
                                this.$message.error('修改密码失败,请重试');
                            });
                        }).catch(()=>{
                           this.$message.error('原密码错误');
                        });
                    }else{
                        this.$message.error('两次密码不一致');
                    }
                }else{
                    this.$message.error('字段输入不全');
                }
            },
            getUserInfo(){
              this.$account.getUserInfo().then(res=>{
                  this.username = res.data.nickname;
                  this.loginUsername = res.data.username;
              }).catch(()=>{
                  // this.$message.error('获取个人信息失败，请重新登录');
              });
            },
            logOut() {
                this.cookies.remove('token');
                this.username = null;
                this.$router.push({path: '/'});
            },
            toggleMobileSidebar() {
                this.pageOptions.pageMobileSidebarToggled = !this.pageOptions.pageMobileSidebarToggled;
            },
            toggleMobileRightSidebar() {
                this.pageOptions.pageMobileRightSidebarToggled = !this.pageOptions.pageMobileRightSidebarToggled;
            },
            toggleMobileTopMenu() {
                this.pageOptions.pageMobileTopMenu = !this.pageOptions.pageMobileTopMenu;
            },
            toggleMobileMegaMenu() {
                this.pageOptions.pageMobileMegaMenu = !this.pageOptions.pageMobileMegaMenu;
            },
            toggleRightSidebar() {
                this.pageOptions.pageRightSidebarToggled = !this.pageOptions.pageRightSidebarToggled;
            },
            toggleRightSidebarCollapsed() {
                this.pageOptions.pageRightSidebarCollapsed = !this.pageOptions.pageRightSidebarCollapsed;
            },
            checkForm: function (e) {
                e.preventDefault();
                this.$router.push({path: '/extra/search'});
            }
        }
    };
</script>
<style scoped>
    /deep/.el-dialog__header{
        text-align: center !important;
    }
</style>
