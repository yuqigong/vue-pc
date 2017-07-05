<template>
    <div class="navbar">
        <c-hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"/>
        <c-levelbar/>
        <el-dropdown class="avatar-container" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                {{nickname}}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <router-link class='inlineBlock' to="/">
                    <el-dropdown-item>首页</el-dropdown-item>
                </router-link>
                <router-link class='inlineBlock' to="/profile">
                    <el-dropdown-item>设置</el-dropdown-item>
                </router-link>
                <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script lang="babel">
    import {mapGetters, mapActions} from 'vuex'
    import cLevelbar from './levelbar.vue'
    import cHamburger from '../../components/hamburger/index.vue'

    export default {
        name: 'c-navbar',
        components: {
            cHamburger,
            cLevelbar
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'nickname'
            ])
        },
        methods: {
            ...mapActions({
                toggleSideBar: 'ToggleSideBar'
            }),
            handleCommand(command) {
                if (command === 'logout') {
                    this.$confirm('此操作将退出登录, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {

                        this.$store.dispatch('Logout').then(response => {
                            if (response.data.code === '0000') {
                                this.$message({
                                    type: 'success',
                                    message: '退出成功!'
                                });
                                location.reload();
                            }
                        }).catch(err => {
                            console.log(err);
                            this.$message({
                                type: 'error',
                                message: '退出失败!'
                            });
                        });

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消退出'
                        });
                    });
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        position: relative;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
        }
    }
</style>

