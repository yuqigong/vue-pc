<template>
    <el-row>
        <el-col :xs="15" :sm="12" :md="12" :lg="8">
            <el-form :model="frmUser" ref="frmUser" label-width="100px">
                <el-form-item label="登陆账号" prop="login_name">
                    <el-input :maxlength="50" type="input" v-model="login_name" auto-complete="off" :disabled="true"/>
                </el-form-item>
                <el-form-item label="昵称" prop="nick_name">
                    <el-input :maxlength="50" type="input" v-model="frmUser.nick_name" auto-complete="off"/>
                </el-form-item>
                <el-form-item label="真实姓名" prop="real_name">
                    <el-input :maxlength="50" type="input" v-model="frmUser.real_name"/>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input :maxlength="50" type="input" v-model="frmUser.email"/>
                </el-form-item>
                <el-form-item label="电话号码" prop="phone_no">
                    <el-input :maxlength="50" type="input" v-model="frmUser.phone_no"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit('frmUser')">修改</el-button>
                    <el-button @click="reset('frmUser')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script lang="babel">
    import store from '../../store'
    import {updateUser} from  '../../api/rights'

    export default{
        data(){
            return {
                frmUser: {
                    role_code_list: store.getters.roles,
                    nick_name: store.getters.nickname,
                    real_name: store.getters.realname,
                    email: store.getters.email,
                    phone_no: store.getters.phone
                },
                login_name: store.getters.account
            }
        },
        methods: {
            submit (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        Object.assign(this.frmUser, {id: store.getters.userid, user_no: store.getters.userno});

                        updateUser(this.frmUser).then(response => {
                            console.log(response);

                            if (response.status === 200 && response.data.code === '0000') {
                                this.$alert('需重新登录才会生效', '提示', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        this.$message({
                                            type: 'info',
                                            message: '修改成功'
                                        });
                                    }
                                });

                            } else {
                                this.$message({
                                    type: 'info',
                                    message: response.data.message
                                });
                            }

                        }).catch(err => {
                            console.log('修改用户异常');
                            console.log(err);
                        });
                    }
                });
            },
            reset (formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
