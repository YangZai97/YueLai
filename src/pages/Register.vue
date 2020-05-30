<template>
    <!-- begin register -->
    <div class="register register-with-news-feed">
        <!-- begin news-feed -->
        <div class="news-feed">
            <div class="news-image"></div>
        </div>
        <!-- end news-feed -->
        <!-- begin right-content -->
        <div class="right-content">
            <!-- begin register-header -->
            <h1 class="register-header">
                注册
                <small>Create your YueLai Account. It’s free and always will be.</small>
            </h1>
            <!-- end register-header -->
            <!-- begin register-content -->
            <div class="register-content">
                <label class="control-label">账号 <span class="text-danger">*</span></label>
                <div class="row m-b-15">
                    <div class="col-md-12">
                        <input type="text" class="form-control" v-model="username" placeholder="请输入账号" required/>
                    </div>
                </div>
                <label class="control-label">员工名(昵称） <span class="text-danger">*</span></label>
                <div class="row m-b-15">
                    <div class="col-md-12">
                        <input type="text" class="form-control" v-model="nickname" placeholder="请输入您的昵称" required/>
                    </div>
                </div>
                <label class="control-label">密码 <span class="text-danger">*</span></label>
                <div class="row m-b-15">
                    <div class="col-md-12">
                        <input type="password" class="form-control" v-model="password" placeholder="请输入密码" required/>
                    </div>
                </div>
                <label class="control-label">确认密码 <span class="text-danger">*</span></label>
                <div class="row m-b-15">
                    <div class="col-md-12">
                        <input type="password" class="form-control" v-model="re_password" placeholder="确认密码" required/>
                    </div>
                </div>
                <div class="register-buttons">
                    <button class="btn btn-primary btn-block btn-lg" @click="register">注册</button>
                </div>
                <div class="m-t-20 m-b-40 p-b-40 text-inverse">
                    Already a member? Click
                    <router-link to="/">here</router-link>
                    to login.
                </div>
                <hr/>
                <p class="text-center">
                    &copy; YueLai All Right Reserved 2019
                </p>
            </div>
            <!-- end register-content -->
        </div>
        <!-- end right-content -->
    </div>
    <!-- end register -->
</template>

<script>
    import PageOptions from '../config/PageOptions.vue';

    export default {
        data() {
            return {
                username: null,
                password: null,
                nickname: null,
                // eslint-disable-next-line camelcase
                re_password: null
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
            register() {
                if (this.password != this.re_password) {
                    this.$message.error('俩次密码不一致');
                    return;
                } else {
                    let data = {
                        username: this.username,
                        password: this.password,
                        nickname: this.nickname
                    };
                    this.$account.register(data).then(res => {
                        console.log(res);
                        this.$message.success(res.data.msg);
                        this.$router.push({path: '/'});
                    }).catch(err => {
                        this.$message.error(err.data.msg);
                    });
                }
            }
        }
    };
</script>

<style scoped>
    .news-image {
        background: url('../assets/register.gif');
    }
</style>
