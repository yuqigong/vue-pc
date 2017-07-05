<template>
    <div>
        <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible"
                   :modal-append-to-body="false" @close="dialogClose">
            <el-form :model="roleDate" ref="roleDate" label-width="80px">
                <el-row :gutter="20">
                    <el-col :span="14">
                        <el-form-item
                            label="角色名称"
                            prop="role_name"
                            :rules="[{ required: true, message: '角色名称不能为空'}]"
                        >
                            <el-input :maxlength="50" type="input" v-model="roleDate.role_name" auto-complete="off"/>
                        </el-form-item>
                        <el-form-item label="描述" prop="remarks">
                            <el-input :maxlength="50"
                                      type="textarea"
                                      :autosize="{ minRows: 4, maxRows: 6}"
                                      placeholder="请输入内容"
                                      v-model="roleDate.remarks"
                            />
                        </el-form-item>
                        <el-form-item
                            label="状态"
                            prop="status"
                            :rules="[{ required: true, message: '状态不能为空'}]"
                        >
                            <el-select v-model="roleDate.status" placeholder="请选择">
                                <el-option
                                    v-for="item in stateOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <p style="margin: 0">选择菜单</p>
                        <el-tree v-if="treeData" class="cc-tree-wrapper"
                                 :data="treeData"
                                 :props="treeProps"
                                 node-key="id"
                                 ref="menuTree"
                                 highlight-current
                                 show-checkbox
                        />
                        <div v-else style="text-align: center; line-height: 12;">
                            暂无数据
                        </div>
                    </el-col>
                </el-row>
                <el-row class="cc-dialog-footer" :gutter="20">
                    <el-button type="primary" @click="submit('roleDate')">提交</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-row>
            </el-form>
        </el-dialog>

        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="90px">
                <el-form-item label="角色名称:" prop="role_name">
                    <el-input :maxlength="50" v-model="searchDate.role_name" placeholder="请输入内容" icon="search"/>
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
                    label="名称">
                </el-table-column>
                <el-table-column
                    prop="creator"
                    label="创建人">
                </el-table-column>
                <el-table-column
                    prop="gmtCreated"
                    label="创建时间">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态">
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
    import {getRoleList, getRoleInfo, addRole, delRole, updateRole} from '../../api/rights'
    import {parseTime, toMenus} from '../../utils'
    import _ from 'lodash'

    export default {
        data () {
            return {

                roleDate: {
                    role_name: '',
                    remarks: '',
                    status: ''
                },

                stateOptions: [{
                    value: '1',
                    label: '正常'
                }, {
                    value: '-1',
                    label: '停用'
                }],

                paraRole: null,

                dialogTitle: '',
                dialogTableVisible: false,
                isEdit: false,

                searchDate: {
                    role_name: ''
                },

                isSearch: false,

                tableData: null,
                loading: true,

                paging: {
                    currentPage: 1,
                    pageSize: 10
                },

                treeData: null,
                treeProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        created () {
            this.queryRoleList({
                page_no: this.paging.currentPage,
                page_size: this.paging.pageSize
            })
        },
        methods: {
            queryRoleList (params) {

                params = params ? params : {};

                getRoleList(params).then(response => {

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
                    console.log('角色列表异常');
                    console.log(err);
                    this.loading = false;
                });
            },
            submit (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        if (this.isEdit) {

                            this.paraRole.menus = this.$refs.menuTree.getCheckedNodes();

                            this.paraRole.menu_code_list = _.map(this.$refs.menuTree.getCheckedNodes(), (tree) => {
                                return tree.code;
                            });

                            Object.assign(this.paraRole, this.roleDate);

                            updateRole(this.paraRole).then(response => {
                                console.log(response);

                                if (response.status === 200 && response.data.code === '0000') {
                                    this.$message({
                                        type: 'info',
                                        message: '编辑成功'
                                    });

                                    this.queryRoleList({
                                        page_no: this.paging.currentPage,
                                        page_size: this.paging.pageSize
                                    });

                                    this.dialogTableVisible = false;
                                } else {
                                    this.$message({
                                        type: 'info',
                                        message: response.data.message
                                    });
                                }

                            }).catch(err => {
                                console.log('编辑角色异常');
                                console.log(err);
                            });

                        } else {

                            if (this.$refs.menuTree.getCheckedNodes().length === 0) {
                                this.$message({
                                    type: 'info',
                                    message: '请选择菜单'
                                });
                                return false;
                            }

                            this.roleDate.menu_code_list = _.map(this.$refs.menuTree.getCheckedNodes(), (tree) => {
                                return tree.code;
                            });

                            this.roleDate.menus = this.$refs.menuTree.getCheckedNodes();

                            addRole(this.roleDate).then(response => {
                                console.log(response);

                                if (response.status === 200 && response.data.code === '0000') {
                                    this.$message({
                                        type: 'info',
                                        message: '新增成功'
                                    });

                                    this.queryRoleList({
                                        page_no: this.paging.currentPage,
                                        page_size: this.paging.pageSize
                                    });
                                    this.dialogTableVisible = false;
                                } else {
                                    this.$message({
                                        type: 'info',
                                        message: response.data.message
                                    });
                                }
                            }).catch(err => {
                                console.log('新增角色异常');
                                console.log(err);
                            });
                        }

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            cancel (formName) {
                this.dialogTableVisible = false;
            },
            editTable (index, row) {

                this.dialogTitle = '编辑角色';
                this.dialogTableVisible = true;
                this.isEdit = true;

                console.log(row);

                if (row.menus) {
                    this.treeData = row.menus;
                    setTimeout(() => {
                        this.$refs.menuTree.setCheckedNodes(row.menus)
                    }, 0)
                } else {
                    this.treeData = null;
                }

                this.roleDate = {
                    role_name: row.roleName,
                    remarks: row.remarks,
                    status: row.status === '正常' ? '1' : '-1'
                };

                this.paraRole = {
                    id: row.id,
                    role_code: row.roleCode
                };

            },
            delTable (index, row) {

                this.$confirm('此操作将确认删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    if (row.roleCode) {
                        delRole(row.roleCode.split(',')).then(response => {
                            if (response.status === 200 && response.data.code === '0000') {
                                this.$message({
                                    type: 'info',
                                    message: '删除成功'
                                });

                                this.queryRoleList({
                                    page_no: this.paging.currentPage,
                                    page_size: this.paging.pageSize
                                });
                            } else {
                                this.$message({
                                    type: 'info',
                                    message: response.data.message
                                });
                            }
                        }).catch(err => {
                            console.log('删除角色异常');
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
                this.queryRoleList({
                    role_name: this.searchDate.role_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                });
            },
            increase () {
                this.treeData = store.getters.menus;
                this.dialogTitle = '新增角色';
                this.isEdit = false;
                this.dialogTableVisible = true;

                this.roleDate = {
                    role_name: '',
                    remarks: '',
                    status: ''
                };

            },
            dialogClose () {
                this.$refs.menuTree.setCheckedKeys([]);
                this.$refs.roleDate.resetFields();
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);

                this.paging.pageSize = val;
                this.queryRoleList({
                    role_name: this.searchDate.role_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                });
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);

                this.paging.currentPage = val;
                this.queryRoleList({
                    role_name: this.searchDate.role_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                });
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
        border: none;
    }

    .cc-paginatioin {
        margin-top: 35px;
        text-align: left;
    }
</style>
