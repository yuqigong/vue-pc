<template>
    <div class="layout" :class="{hideSidebar:!sidebar.opened}">
        <div class="layout-menu">
            <c-sidebar/>
        </div>
        <div class="layout-main">
            <c-navbar/>
            <c-main/>
        </div>
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex'
    import {cSidebar, cNavbar, cMain} from '../../components/index'

    export default{
        name: 'c-layout',
        data () {
            return {}
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'token'
            ])
        },
        components: {
            cSidebar,
            cNavbar,
            cMain
        }
    }
</script>
<style lang="scss" scoped>
</style>
