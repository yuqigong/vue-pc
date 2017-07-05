<template>
    <div class="main">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script lang="babel">
    export default {
        name: 'c-main',
        props: {},
        methods: {}
    }
</script>
<style lang="scss" scoped>
</style>
