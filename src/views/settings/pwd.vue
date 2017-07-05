<template>
    <el-row>
        <el-col :xs="15" :sm="12" :md="12" :lg="8">
            <el-form :model="frmPwd" :rules="rulePwd" ref="frmPwd" label-width="100px">
                <el-form-item label="原始密码" prop="old_pass_word">
                    <el-input :maxlength="50" type="password" v-model="frmPwd.old_pass_word" auto-complete="off"/>
                </el-form-item>
                <el-form-item label="新密码" prop="new_pass_word">
                    <el-input :maxlength="50" type="password" v-model="frmPwd.new_pass_word" auto-complete="off"/>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPwd">
                    <el-input :maxlength="50" type="password" v-model.number="frmPwd.confirmPwd"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit('frmPwd')">修改</el-button>
                    <el-button @click="reset('frmPwd')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script lang="babel">
    import {updatePassWord} from '../../api/rights'

    export default {
        data() {
            const checkPwd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('确认密码不能为空'));
                }
                setTimeout(() => {
                    if (('' + value).length < 6) {
                        callback(new Error('密码长度要大于6位'));
                    } else {
                        callback();
                    }
                }, 1000);
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.frmPwd.new_pass_word !== '') {
                        this.$refs.frmPwd.validateField('new_pass_word');
                    }
                    callback();
                }
            };
            const validatePass2 = (rule, value, callback) => {

                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== +this.frmPwd.new_pass_word) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                frmPwd: {
                    old_pass_word: '',
                    new_pass_word: '',
                    confirmPwd: ''
                },
                rulePwd: {
                    old_pass_word: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    new_pass_word: [
                        {validator: checkPwd, trigger: 'blur'}
                    ],
                    confirmPwd: [
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submit (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        updatePassWord(this.frmPwd).then(response => {
                            console.log(response);

                            if (response.status === 200 && response.data.code === '0000') {
                                this.$message({
                                    type: 'info',
                                    message: '修改密码成功'
                                });
                            } else {
                                this.$message({
                                    type: 'info',
                                    message: response.data.message
                                });
                            }

                            this.$refs[formName].resetFields();
                        }).catch(err => {
                            console.log('修改密码异常');
                            console.log(err);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            reset (formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
