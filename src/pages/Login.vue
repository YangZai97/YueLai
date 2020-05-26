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
                        <input type="text" class="form-control form-control-lg" placeholder="Email Address" required/>
                    </div>
                    <div class="form-group m-b-15">
                        <input type="password" class="form-control form-control-lg" placeholder="Password" required/>
                    </div>
                    <div class="login-buttons">
                        <button  class="btn btn-success btn-block btn-lg">登录</button>
                    </div>
                    <div class="m-t-20 m-b-40 p-b-40 text-inverse">
                        Not a member yet? Click
                        <router-link to="Register" class="text-success">here</router-link>
                        to register.
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
            checkForm: function (e) {
                e.preventDefault();
                this.$router.push({path: '/dashboard/v2'});
            }
        }
    };
</script>
