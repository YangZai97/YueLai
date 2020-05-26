<script>
    import Home from '../pages/Home';
    import Login from '../pages/Login';
    import Register from '../pages/Register';
    import VueRouter from "vue-router";
    import Bill from '../pages/Bill';
    import Forecast from '../pages/Forecast';

    const routes = [
        {path: '/', component: Login},
        {path: '/Home', component: Home},
        {path: '/Register', component: Register},
        {path: '/Bill', component: Bill},
        {path: '/Forecast', component: Forecast},
    ];

    const router = new VueRouter({
        routes
    });

    export default router;
</script>
