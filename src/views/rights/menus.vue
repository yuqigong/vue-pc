<template>
    <div>
        <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible"
                   :modal-append-to-body="false">
            <el-form :model="menuDate" :rules="menusRules" ref="menuDate" label-width="80px">
                <el-form-item label="菜单名称" prop="menu_name">
                    <el-input :maxlength="50" type="input" v-model="menuDate.menu_name"/>
                </el-form-item>
                <el-form-item label="类型" prop="menu_type">
                    <el-select v-model="menuDate.menu_type" placeholder="请选择">
                        <el-option
                            v-for="item in typeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item label="链接" prop="menu_path">
                    <el-input :maxlength="50" type="input" v-model="menuDate.menu_path"/>
                </el-form-item>
                <el-form-item label="模块路径" prop="menu_url">
                    <el-input :maxlength="50" type="input" v-model="menuDate.menu_url"/>
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-select v-model="menuDate.status" placeholder="请选择">
                        <el-option
                            v-for="item in stateOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit('menuDate')">提交</el-button>
                    <el-button @click="cancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="90px">
                <el-form-item label="菜单名称:" prop="menu_name">
                    <el-input :maxlength="50" v-model="searchDate.menu_name" placeholder="请输入内容" auto-complete="off" icon="search"/>
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
                style="width: 100%">
                <el-table-column
                    type="index"
                    align="center"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="menuName"
                    label="名称">
                </el-table-column>
                <el-table-column
                    prop="menuType"
                    label="类型"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="menuUrl"
                    label="链接">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                    width="80">
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
    import {getMenuList, addMenu, delMenu, updateMenu} from '../../api/rights'
    import {parseTime} from '../../utils'

    export default {
        data () {
            return {
                menuDate: {
                    menu_name: '',
                    menu_type: '',
                    menu_path: '',
                    menu_url: '',
                    status: ''
                },

                menusRules: {
                    menu_name: [{required: true, message: '菜单名称不能为空', trigger: 'blur'}],
                    menu_type: [{required: true, message: '类型不能为空', trigger: 'change'}],
                    menu_path: [{required: true, message: '链接不能为空', trigger: 'blur'}],
                    status: [{required: true, message: '状态不能为空', trigger: 'change'}],
                    menu_url: [{required: true, message: '模块路径不能为空', trigger: 'blur'}]
                },

                stateOptions: [{
                    value: '1',
                    label: '正常'
                }, {
                    value: '-1',
                    label: '停用'
                }],

                typeOptions: [{
                    value: '1',
                    label: '页面'
                }, {
                    value: '0',
                    label: '模块'
                }],

                paraMenu: null,

                dialogTitle: '',
                dialogTableVisible: false,
                isEdit: false,

                isSearch: false,

                searchDate: {
                    menu_name: ''
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
            this.queryMenuList({
                page_no: this.paging.currentPage,
                page_size: this.paging.pageSize
            })
        },
        methods: {
            queryMenuList (params) {

                this.loading = true;

                params = params ? params : {};

                getMenuList(params).then(response => {

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
                            row.menuType === '0' ? row.menuType = '模块' : row.menuType = '页面';
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
                    console.log('菜单列表异常');
                    console.log(err);
                    this.loading = false;
                });
            },
            submit (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.isEdit) {

                            Object.assign(this.paraMenu, this.menuDate);

                            updateMenu(this.paraMenu).then(response => {
                                console.log(response);

                                if (response.status === 200 && response.data.code === '0000') {
                                    this.$message({
                                        type: 'info',
                                        message: '编辑成功'
                                    });
                                    this.queryMenuList({
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
                                console.log('编辑菜单异常');
                                console.log(err);
                            });
                        } else {
                            addMenu(this.menuDate).then(response => {
                                console.log(response);
                                if (response.status === 200 && response.data.code === '0000') {
                                    this.$message({
                                        type: 'info',
                                        message: '新增成功'
                                    });
                                    this.queryMenuList({
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
                                console.log('新增菜单异常');
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
                this.dialogTitle = '编辑菜单';
                this.dialogTableVisible = true;
                this.isEdit = true;

                console.log(row);

                this.menuDate = {
                    menu_name: row.menuName,
                    menu_type: row.menuType === '页面' ? '1' : '0',
                    menu_path: row.menuPath,
                    status: row.status === '正常' ? '1' : '-1',
                    menu_url: row.menuUrl
                };

                this.paraMenu = {
                    id: row.id
                }
            },
            delTable (index, row) {

                this.$confirm('此操作将确认删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    if (row.menuCode) {
                        delMenu(row.menuCode.split(',')).then(response => {
                            if (response.status === 200 && response.data.code === '0000') {
                                this.$message({
                                    type: 'info',
                                    message: '删除成功'
                                });
                                this.queryMenuList({
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
                this.queryMenuList({
                    menu_name: this.searchDate.menu_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                });
            },
            increase () {
                this.dialogTitle = '新增菜单';
                this.dialogTableVisible = true;
                this.isEdit = false;
                console.log(this.menuDate);
                this.menuDate = {
                    menu_name: '',
                    menu_type: '',
                    menu_path: '',
                    menu_url: '',
                    status: ''
                };
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);
                this.paging.pageSize = val;
                this.queryMenuList({
                    menu_name: this.searchDate.menu_name,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);
                this.paging.currentPage = val;
                this.queryMenuList({
                    menu_name: this.searchDate.menu_name,
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
