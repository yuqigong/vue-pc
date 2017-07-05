<template>
    <el-row :gutter="20" class="error-404">
        <el-col :span="8" :offset="8">
            <div class="grid-content bg-purple">
                <h1>{{msg}}</h1>
            </div>
        </el-col>
    </el-row>
</template>
<script lang="babel">

    export default{
        data(){
            return {
                msg: '404 页面不存在'
            }
        },
        props: {},
        methods: {}
    }
</script>
<style lang="scss" scoped>
</style>
