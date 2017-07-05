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
    import store from '../../store'

    export default{
        data(){
            return {
                msg: '500 网络不稳定'
            }
        },
        beforeRouteEnter (to, from, next) {
            debugger
            if (store.getters.serverError) {
            	debugger
                store.dispatch('CLogout').then(() => {
//                    location.reload();
                }).catch(err => {
                    console.log(err);
                });

                return false;
            }

            next(vm => {
                let addr = decodeURIComponent(to.fullPath).split('=')[1];
                debugger
                next(addr);
            });
        }
    }
</script>
<style lang="scss" scoped>
</style>
