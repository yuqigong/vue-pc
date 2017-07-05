<template>
    <div>
        <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible"
                   :modal-append-to-body="false" @close="dialogClose">
            <el-form :model="userDate" ref="userDate" label-width="100px">
                <el-form-item
                    label="账户名称"
                    prop="login_name"
                    :rules="[{ required: true, message: '账户名称不能为空'}]"
                >
                    <el-input :maxlength="50" type="input" v-model="userDate.login_name" auto-complete="off"
                              :disabled="loginIsDisabled"/>
                </el-form-item>
                <el-form-item
                    label="角色"
                    prop="role_code_list"
                    :rules="[
                        {required: true, message: '角色不能为空'}
                    ]"
                >
                    <el-select v-model="userDate.role_code_list" @change="userChange" placeholder="请选择">
                        <el-option
                            v-for="item in roleOptions"
                            :key="item.roleCode"
                            :label="item.roleName"
                            :value="item.roleCode"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item label="昵称" prop="nick_name">
                    <el-input :maxlength="50" type="input" v-model="userDate.nick_name" auto-complete="off"/>
                </el-form-item>
                <el-form-item label="真实姓名" prop="real_name">
                    <el-input :maxlength="50" type="input" v-model="userDate.real_name"/>
                </el-form-item>
                <el-form-item label="手机" prop="phone_no">
                    <el-input :maxlength="50" type="input" v-model="userDate.phone_no"/>
                </el-form-item>
                <el-form-item label="描述" prop="remarks">
                    <el-input
                        type="textarea"
                        :maxlength="150"
                        :autosize="{ minRows: 4, maxRows: 6}"
                        placeholder="请输入内容"
                        v-model="userDate.remarks"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit('userDate')">提交</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="90px">
                <el-form-item label="账户名称:" prop="login_name">
                    <el-input :maxlength="50" v-model="searchDate.login_name" placeholder="请输入内容" auto-complete="off" icon="search"/>
                </el-form-item>
                <el-form-item>
                    <el-button @click="search">查询</el-button>
                    <el-button @click="increase">新增</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-table
                :data="tableData"
                v-loading="loading"
                element-loading-text="拼命加载中"
                fit
                border
                stripe
                style="width: 100%">
                <el-table-column
                    type="index"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="roleName"
                    label="角色">
                </el-table-column>
                <el-table-column
                    prop="loginName"
                    label="账号">
                </el-table-column>
                <el-table-column
                    prop="realName"
                    label="姓名"
                    width="85">
                </el-table-column>
                <el-table-column
                    prop="phoneNo"
                    label="手机">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                    width="85">
                </el-table-column>
                <el-table-column
                    prop="gmtCreated"
                    label="创建时间">
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template scope="scope">
                        <el-button @click="editTable(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
                        <el-button @click="delTable(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="cc-paginatioin">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="paging.currentPage"
                    :page-sizes="[10, 15, 20, 30]"
                    :page-size="paging.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="paging.totalPage"
                />
            </div>
        </el-row>
    </div>
</template>
<script lang="babel">
    import store from '../../store'
    import {getUserList, addUser, delUser, updateUser} from '../../api/rights'
    import {parseTime} from '../../utils'

    export default {
        data () {
            return {
                userDate: {
                    login_name: '',
                    role_code_list: '',
                    nick_name: '',
                    real_name: '',
                    phone_no: '',
                    remarks: ''
                },

                loginIsDisabled: true,

                roleOptions: store.getters.roleall,

                paraUser: null,

                dialogTitle: '',
                dialogTableVisible: false,
                isEdit: false,

                isSearch: false,

                searchDate: {
                    login_name: ''
                },

                tableData: null,
                loading: true,

                paging: {
                    currentPage: 1,
                    pageSize: 10
                }
            }
        },
        created () {
            this.queryUserList({
                page_no: this.paging.currentPage,
                page_size: this.paging.pageSize
            })
        },
        methods: {
            queryUserList (params) {

                params = params ? params : {};

                getUserList(params).then(response => {

                    if (response.status === 200 && response.data.code === '0000') {

                        if (this.isSearch) {
                            this.isSearch = false;

                            this.$message({
                                type: 'info',
                                message: '查询成功'
                            });
                        }
                        this.tableData = response.data.data.currentPageList.map((row) => {
                            row.status === '1' ? row.status = '正常' : row.status = '停用';
                            row.gmtCreated ? row.gmtCreated = parseTime(row.gmtCreated, '{y}-{m}-{d}') : '';
                            return row;
                        });
                        this.paging.totalPage = response.data.data.page.totalRecord;

                    } else {
                        this.$message({
                            type: 'info',
                            message: response.data.message
                        });
                    }

                    this.loading = false;

                }).catch(err => {
                    console.log('用户列表异常');
                    console.log(err);
                    this.loading = false;
                });
            },
            submit (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        let tmpUser = this.paraUser ? Object.assign(this.paraUser, this.userDate) : Object.assign({}, this.userDate);

                        tmpUser.role_code_list = [tmpUser.role_code_list];

                        if (this.isEdit) {
                            console.log(tmpUser);

                            updateUser(tmpUser).then(response => {
                                console.log(response);

                                if (response.status === 200 && response.data.code === '0000') {
                                    this.$message({
                                        type: 'info',
                                        message: '编辑成功'
                                    });
                                    this.queryUserList({
                                        page_no: this.paging.currentPage,
                                        page_size: this.paging.pageSize
                                    })
                                    this.dialogTableVisible = false;
                                } else {
                                    this.$message({
                                        type: 'info',
                                        message: response.data.message
                                    });
                                }

                            }).catch(err => {
                                console.log('编辑用户异常');
                                console.log(err);
                            });
                        } else {
                            console.log(tmpUser);

                            addUser(tmpUser).then(response => {
                                console.log(response);
                                if (response.status === 200 && response.data.code === '0000') {
                                    this.$message({
                                        type: 'info',
                                        message: '新增成功'
                                    });
                                    this.queryUserList({
                                        page_no: this.paging.currentPage,
                                        page_size: this.paging.pageSize
                                    })
                                    this.dialogTableVisible = false;
                                } else {
                                    this.$message({
                                        type: 'info',
                                        message: response.data.message
                                    });
                                }
                            }).catch(err => {
                                console.log('新增用户异常');
                                console.log(err);
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            cancel () {
                this.dialogTableVisible = false;
            },
            editTable (index, row) {
                this.dialogTitle = '编辑用户';
                this.dialogTableVisible = true;
                this.loginIsDisabled = true;
                this.isEdit = true;

                console.log(row);

                this.userDate = {
                    login_name: row.loginName,
                    role_code_list: row.roleCode,
                    nick_name: row.nickName,
                    real_name: row.realName,
                    phone_no: row.phoneNo,
                    remarks: row.remarks
                };

                this.paraUser = {
                    id: row.id,
                    user_no: row.userNo
                };
            },
            delTable (index, row) {
                this.$confirm('此操作将确认删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (row.userNo) {
                        delUser(row.userNo.split(',')).then(response => {
                            if (response.status === 200 && response.data.code === '0000') {
                                this.$message({
                                    type: 'info',
                                    message: '删除成功'
                                });
                                this.queryUserList({
                                    page_no: this.paging.currentPage,
                                    page_size: this.paging.pageSize
                                })
                            } else {
                                this.$message({
                                    type: 'info',
                                    message: response.data.message
                                });
                            }
                        }).catch(err => {
                            console.log('删除用户异常');
                            console.log(err);
                        });
                    } else {
                        this.$message({
                            type: 'info',
                            message: '删除失败'
                        });
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            search () {
                this.isSearch = true;
                this.tableData = null;
                this.loading = true;
                this.queryUserList({
                    login_name: this.searchDate.login_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            increase () {
                this.dialogTitle = '新增用户';
                this.dialogTableVisible = true;
                this.isEdit = false;
                this.loginIsDisabled = false;
            },
            dialogClose () {
                this.userDate = {
                    login_name: '',
                    role_code_list: '',
                    nick_name: '',
                    real_name: '',
                    phone_no: '',
                    remarks: ''
                };
                this.$refs['userDate'].resetFields();
            },
            userChange (val) {
                this.userDate.role_code_list = val;
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);
                this.paging.pageSize = val;
                this.queryUserList({
                    login_name: this.searchDate.login_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);
                this.paging.currentPage = val;
                this.queryUserList({
                    login_name: this.searchDate.login_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            }
        }
    }
</script>
<style lang="scss">
    .cc-dialog-footer {
        text-align: center;
    }

    .cc-tree-wrapper {
        height: 150px;
        overflow: auto;
    }

    .cc-paginatioin {
        margin-top: 35px;
        text-align: left;
    }
</style>
