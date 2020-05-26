<template>
    <div></div>
</template>

<script>
    import PageOptions from '../../config/PageOptions.vue';

    export default {
        name: 'SidebarNavProfile',
        data() {
            return {
                stat: '',
                pageOptions: PageOptions
            };
        },
        methods: {
            expand: function () {
                this.stat = (this.stat == 'expand') ? 'collapse' : 'expand';
            }
        }
    };
</script>
