<script>
    import Home from '../pages/Home';
    import Login from '../pages/Login';
    import Register from '../pages/Register';
    import VueRouter from "vue-router";
    import Bill from '../pages/Bill';
    import Forecast from '../pages/Forecast';
    import Detail from '../pages/detail';
    import Profit from '../pages/profit';

    const routes = [
        {path: '/', component: Login},
        {path: '/Home', component: Home},
        {path: '/Register', component: Register},
        {path: '/Bill', component: Bill},
        {path: '/Forecast', component: Forecast},
        {path: '/Detail', component: Detail},
        {path: '/Profit', component: Profit},
    ];

    const router = new VueRouter({
        routes
    });

    export default router;
</script>
