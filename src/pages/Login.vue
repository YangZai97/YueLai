<template>
    <!-- begin login -->
    <div class="login login-with-news-feed">
        <!-- begin news-feed -->
        <div class="news-feed">
            <div class="news-image"></div>
        </div>
        <!-- end news-feed -->
        <!-- begin right-content -->
        <div class="right-content">
            <!-- begin login-header -->
            <div class="login-header">
                <div class="brand">
                    <span class="logo"></span> <b>悦莱珠宝</b>
                </div>
                <div class="icon">
                    <i class="fa fa-sign-in"></i>
                </div>
            </div>
            <!-- end login-header -->
            <!-- begin login-content -->
            <div class="login-content">
                <div class="form-group m-b-15">
                    <input type="text" class="form-control form-control-lg" v-model="username" placeholder="Username"
                           required/>
                </div>
                <div class="form-group m-b-15">
                    <input type="password" class="form-control form-control-lg" v-model="password"
                           placeholder="Password" required/>
                </div>
                <div class="login-buttons">
                    <button class="btn btn-success btn-block btn-lg" @click="login">登录</button>
                </div>
                <div class="m-t-20 m-b-40 p-b-40 text-inverse">
                    没有账号? 点击
                    <router-link to="Register" class="text-success">这里注册</router-link>

                </div>
                <hr/>
                <p class="text-center text-grey-darker">
                    &copy; YueLai All Right Reserved 2020
                </p>
            </div>
            <!-- end login-content -->
        </div>
        <!-- end right-container -->
    </div>
    <!-- end login -->
</template>

<script>
    import PageOptions from '../config/PageOptions.vue';

    export default {
        data() {
            return {
                username: null,
                password: null
            };
        },
        created() {
            PageOptions.pageEmpty = true;
            document.body.className = 'bg-white';
        },
        beforeRouteLeave(to, from, next) {
            PageOptions.pageEmpty = false;
            document.body.className = '';
            next();
        },
        methods: {
            login() {
                if (this.username == null || this.password == null) {
                    this.$message.error('请输入正确的账号和密码');
                    return;
                }
                let data = {
                    username: this.username,
                    password: this.password
                };
                this.$account.login(data).then(res => {
                    console.log(res);
                    this.$message.success('登录成功');
                    let token = 'JWT ' + res.data.access;
                    this.cookies.set('token', token);
                    this.$router.push({ path: '/Home' });
                }).catch(() => {
                    this.$message.error('账号或密码错误，请重试');
                });
            }
        }
    };
</script>
<style scoped>
    .news-image {
        background: url('../assets/register.gif');
    }
</style>
