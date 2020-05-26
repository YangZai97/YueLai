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
                <router-link class="navbar-brand" to="/Home"><span class="navbar-logo"></span> <b>悦莱珠宝</b>
                </router-link>
                <button class="navbar-toggle pt-0 pb-0 mr-0 collapsed" type="button" v-if="pageOptions.pageWithTopMenu && !pageOptions.pageWithoutSidebar"
                        v-on:click="toggleMobileTopMenu">
					<span class="fa-stack fa-lg text-inverse">
						<i class="far fa-square fa-stack-2x"></i>
						<i class="fa fa-cog fa-stack-1x"></i>
					</span>
                </button>
                <button class="navbar-toggle" type="button" v-if="pageOptions.pageWithTopMenu && pageOptions.pageWithoutSidebar"
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
                <b-nav-item-dropdown class="dropdown navbar-user" menu-class="dropdown-menu-right" no-caret>
                    <template slot="button-content">
                        <div class="image image-icon bg-black text-grey-darker">
                            <i class="fa fa-user"></i>
                        </div>
                        <span style="font-size: 14px" class=" d-md-inline">{{username}}</span> <b class="caret"></b>
                    </template>
                    <b-dropdown-item href="javascript:;" @click="logOut">退出登录</b-dropdown-item>
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
                username:'红豆憨憨',
                pageOptions: PageOptions
            };
        },
        methods: {
            logOut(){
                this.cookies.remove('token');
                this.username = null;
                this.$router.push({path:'/'});
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
