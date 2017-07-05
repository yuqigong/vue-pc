<template>
    <div class="levelbar">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item" :to="item.path">
                {{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script lang="babel">
    export default{
        data(){
            return {
                levelList: null
            }
        },
        created() {
            this.getLeveList()
        },
        watch: {
            $route() {
                this.getLeveList();
            }
        },
        methods: {
            getLeveList () {
                let matched = this.$route.matched.filter(item => item.name);

                if (matched[0] && (matched[0].name !== '首页' || matched[0].path !== '')) {
                    matched = [{name: '首页', path: '/'}].concat(matched)
                }
                this.levelList = matched;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .levelbar {
        display: inline-block;
        .el-breadcrumb {
            font-size: 14px;
            line-height: 50px;
            margin-left: 10px;
            .no-redirect {
                color: #97a8be;
                cursor: text;
            }
        }
    }
</style>
