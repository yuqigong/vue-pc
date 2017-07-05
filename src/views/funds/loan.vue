<template>
    <div>
        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="110px">
                <el-form-item
                    label="交易流水号:"
                    prop="msg_id"
                >
                    <el-input :maxlength="50" v-model="searchDate.msg_id" placeholder="请输入内容" auto-complete="off"
                              icon="search"/>
                </el-form-item>
                <el-form-item
                    label="收款人账号:"
                    prop="cdtr_acct_id"
                >
                    <el-input :maxlength="50" v-model="searchDate.cdtr_acct_id" placeholder="请输入内容" auto-complete="off"
                              icon="search"/>
                </el-form-item>
                <el-form-item
                    label="收款人户名:"
                    prop="cdtr_nm"
                >
                    <el-input :maxlength="50" v-model="searchDate.cdtr_nm" placeholder="请输入内容" auto-complete="off"
                              icon="search"/>
                </el-form-item>
                <!--<el-form-item-->
                <!--label="执行状态:"-->
                <!--prop="execute_finish"-->
                <!--&gt;-->
                <!--<el-input :maxlength="50" v-model="searchDate.execute_finish" placeholder="请输入内容" auto-complete="off"-->
                <!--icon="search"/>-->
                <!--</el-form-item>-->
                <el-form-item label="处理状态:">
                    <el-select @change="change" v-model="stateValue" placeholder="请选择">
                        <el-option
                            v-for="item in eventStates"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    label="交易时间:"
                    prop="selectDate"
                >
                    <el-date-picker
                        v-model="selectDate"
                        type="daterange"
                        range-separator="/"
                        placeholder="选择日期范围">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label=" ">
                    <el-button @click="search('searchDate')">查询</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row>
            <el-table
                :data="tableData"
                v-loading="loading"
                element-loading-text="拼命加载中"
                fi
                border
                stripe
                style="width: 100%">
                <el-table-column
                    type="index"
                    align="center"
                    width="60">
                </el-table-column>
                <el-table-column :key='index' v-for='(head,index) in tableHead' :label="head.name" :prop="head.key"
                                 :width="head.width">
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
                    :total="paging.totalPage">
                </el-pagination>
            </div>
        </el-row>
    </div>
</template>
<script lang="babel">
    import {getFundsLoanList} from '../../api/funds'
    import {parseTime} from '../../utils'
    import _ from 'lodash'

    export default {
        data () {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },

                eventStates: [{
                    value: '',
                    label: '全部级别'
                }, {
                    value: 'PR03',
                    label: '成功'
                }, {
                    value: 'PR08',
                    label: '失败'
                }, {
                    value: 'PR99',
                    label: '其他'
                }],
                stateValue: '',

                isSearch: false,

                searchDate: {
                    msg_id: '',
                    cdtr_acct_id: '',
                    cdtr_nm: '',
                },

                selectDate: null,

                tableData: null,
                tableHead: null,
                loading: true,

                paging: {
                    currentPage: 1,
                    pageSize: 10
                }
            }
        },
        created () {
            this.queryFundsLoanList({
                page_no: this.paging.currentPage,
                page_size: this.paging.pageSize
            });
        },
        methods: {
            queryFundsLoanList (params) {

                params = params ? params : {};

                getFundsLoanList(params).then(response => {

                    if (response.status === 200 && response.data.code === '0000') {

                        if (this.isSearch) {
                            this.isSearch = false;

                            this.$message({
                                type: 'info',
                                message: '查询成功'
                            });
                        }

                        this.tableHead = response.data.data.tableHead.map((item) => {
                            for (let key in item) {
                                return {
                                    'name': item[key],
                                    'key': key,
                                    'width': item[key].length !== 4
                                        ? (item[key].length !== 5
                                            ? (item[key].length !== 6
                                                ? (item[key].length !== 7
                                                    ? (item[key].length > 7 ? '240' : '') : '150') : '150') : '130') : '110'
                                };
                            }
                        });

                        this.tableHead = _.remove(this.tableHead, (head) => {
                        	return head['key'] !== 'id'
                        });

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
            change () {
                console.log(this.stateValue)
            },
            search () {
                this.isSearch = true;
                this.tableData = null;
                this.loading = true;
                this.queryFundsLoanList({
                    msg_id: this.searchDate.msg_id,
                    cdtr_acct_id: this.searchDate.cdtr_acct_id,
                    cdtr_nm: this.searchDate.cdtr_nm,
                    deal_sts: this.stateValue,
                    gmt_created_start: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                    gmt_created_end: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);
                this.paging.pageSize = val;
                this.queryFundsLoanList({
                    msg_id: this.searchDate.msg_id,
                    cdtr_acct_id: this.searchDate.cdtr_acct_id,
                    cdtr_nm: this.searchDate.cdtr_nm,
                    deal_sts: this.stateValue,
                    gmt_created_start: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                    gmt_created_end: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);
                this.paging.currentPage = val;
                this.queryFundsLoanList({
                    msg_id: this.searchDate.msg_id,
                    cdtr_acct_id: this.searchDate.cdtr_acct_id,
                    cdtr_nm: this.searchDate.cdtr_nm,
                    deal_sts: this.stateValue,
                    gmt_created_start: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                    gmt_created_end: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
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
