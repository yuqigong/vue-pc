<template>
    <div>
        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="110px">
                <el-form-item
                    label="交易流水号:"
                    prop="msg_id"
                >
                    <el-input :maxlength="50" v-model="searchDate.msg_id" placeholder="请输入内容" auto-complete="off" icon="search"/>
                </el-form-item>
                <el-form-item
                    label="受理时间:"
                    prop="selectDate"
                >
                    <el-date-picker
                        v-model="selectDate"
                        type="daterange"
                        range-separator="/"
                        placeholder="选择日期范围">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button @click="search('searchDate')">查询</el-button>
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
                    align="center"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="msgId"
                    label="交易流水号">
                </el-table-column>
                <el-table-column
                    prop="sysAcceptDate"
                    label="受理时间">
                </el-table-column>
                <el-table-column
                    prop="compareResult"
                    label="对账结果">
                </el-table-column>
                <el-table-column
                    prop="dataSrcsys"
                    label="数据来源系统">
                </el-table-column>
                <el-table-column
                    prop="compareDesc"
                    label="对账结果描述信息">
                </el-table-column>
                <el-table-column
                    prop="compareAmount"
                    label="对账金额">
                </el-table-column>
                <!--<el-table-column-->
                    <!--align="center"-->
                    <!--fixed="right"-->
                    <!--label="操作">-->
                    <!--<template scope="scope">-->
                        <!--<el-button @click="viewTable(scope.$index, scope.row)" type="text" size="small">详情</el-button>-->
                    <!--</template>-->
                <!--</el-table-column>-->
            </el-table>
            <div class="cc-paginatioin">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="paging.currentPage"
                    :page-sizes="[10, 15, 20, 30]"
                    :page-size="paging.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="paging.totalPage">
                </el-pagination>
            </div>
        </el-row>
    </div>
</template>
<script lang="babel">
    import {getFundsCheckingList} from '../../api/funds'
    import {parseTime} from '../../utils'

    export default {
        data () {
            return {
                isSearch: false,

                searchDate: {
                    msg_id: ''
                },
                selectDate: null,

                tableData: null,
                loading: true,

                paging: {
                    currentPage: 1,
                    pageSize: 10
                }
            }
        },
        created () {
            this.queryFundsCheckingList();
        },
        methods: {
            queryFundsCheckingList (params) {

                params = params ? params : {};

                getFundsCheckingList(params).then(response => {

                    if (response.status === 200 && response.data.code === '0000') {

                        if (this.isSearch) {
                            this.isSearch = false;

                            this.$message({
                                type: 'info',
                                message: '查询成功'
                            });
                        }

                        this.tableData = response.data.data.currentPageList;
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
            search (formName) {
                this.isSearch = true;
                this.tableData = null;
                this.loading = true;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.queryFundsCheckingList({
                            msg_id: this.searchDate.msg_id,
                            start_time: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                            end_time: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
                            page_no: this.paging.currentPage,
                            page_size: this.paging.pageSize
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
//            viewTable (index, row) {
////            	todo
//                console.log(1);
//            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);
                this.paging.pageSize = val;
                this.queryFundsCheckingList({
                    msg_id: this.searchDate.msg_id,
                    start_time: this.selectDate ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '',
                    end_time: this.selectDate ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '',
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);
                this.paging.currentPage = val;
                this.queryFundsCheckingList({
                    msg_id: this.searchDate.msg_id,
                    start_time: this.selectDate ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '',
                    end_time: this.selectDate ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '',
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
