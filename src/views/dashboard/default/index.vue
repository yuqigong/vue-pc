<template>
    <div class="dashboard">
        Hi, {{nickname}}。
        <br>
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex'

    export default{
        data(){
            return {}
        },
        computed: {
            ...mapGetters([
                'nickname'
            ])
        }
    }
</script>
<style lang="scss" scoped>
</style>
