<template>
    <div class="login-wrapper">
        <div class="login-box">
            <el-form :model="form" ref="form" label-width="80px" class="demo-ruleForm">
                <el-form-item
                    label="账号："
                    prop="login_name"
                    :rules="[
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ]"
                >
                    <el-input :maxlength="50" v-model="form.login_name" @keyup.enter.native="login('form')" auto-complete="off"/>
                </el-form-item>
                <el-form-item
                    label="密码："
                    prop="pass_word"
                    :rules="[
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]"
                >
                    <el-input :maxlength="50" type="password" @keyup.enter.native="login('form')" v-model="form.pass_word" auto-complete="off"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')" :loading="isLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="babel">
    export default {
        data () {
            return {
                isLogin: false,
                form: {
                    login_name: '',
                    pass_word: ''
                }
            }
        },
        methods: {
            keyboard (elem, event) {
            	console.log(11);
            },
            login (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                    	this.isLogin = true;
                        this.$store.dispatch('Login', this.form).then((response) => {
                            if (response.status === 200 && response.data && response.data.code === '0000') {
                                this.$router.push('dashboard');
                            } else {
                                this.$message({
                                    showClose: true,
                                    message: response.data.message,
                                    type: 'error'
                                });
                            }
                            this.isLogin = false;
                        }).catch(err => {
                            this.isLogin = false;
                            console.log('登录异常');
                            console.log(err);
                        });
                    }
                    return false;
                });
            }
        }
    }
</script>
