<template>
    <div>
        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="110px">
                <el-form-item label="事件级别:">
                    <el-select v-model="levelValue" placeholder="请选择">
                        <el-option
                            v-for="item in eventLevels"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="事件类型:">
                    <el-select v-model="typeValue" placeholder="请选择">
                        <el-option
                            v-for="item in eventTypes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    label="是否已处理:"
                    prop="is_processed"
                >
                    <el-select v-model="searchDate.is_processed" placeholder="请选择">
                        <el-option
                            v-for="item in handleEvents"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    label="数据插入日期:"
                    prop="event_time"
                >
                    <el-date-picker
                        v-model="searchDate.event_time"
                        type="date"
                        placeholder="选择日期">
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
                    prop="tradeNo"
                    width="130"
                    label="交易流水号">
                </el-table-column>
                <el-table-column
                    prop="eventType"
                    width="130"
                    label="事件类型">
                </el-table-column>
                <el-table-column
                    prop="eventTypeDesc"
                    width="180"
                    label="事件类型描述">
                </el-table-column>
                <el-table-column
                    prop="eventDesc"
                    width="180"
                    label="事件描述">
                </el-table-column>
                <el-table-column
                    prop="eventLevels"
                    width="130"
                    label="事件级别">
                </el-table-column>
                <el-table-column
                    prop="eventTime"
                    width="130"
                    label="事件插入时间">
                </el-table-column>
                <el-table-column
                    prop="isProcessed"
                    width="130"
                    label="是否已处理">
                </el-table-column>
                <el-table-column
                    prop="processStatus"
                    width="130"
                    label="处理状态">
                </el-table-column>
                <el-table-column
                    prop="processor"
                    width="130"
                    label="处理人">
                </el-table-column>
                <el-table-column
                    prop="processTime"
                    width="130"
                    label="处理时间">
                </el-table-column>
                <el-table-column
                    prop="remarks"
                    width="200"
                    label="备注">
                </el-table-column>
                <el-table-column
                    align="center"
                    fixed="right"
                    label="操作">
                    <template scope="scope">
                        <el-button @click="solveTable(scope.$index, scope.row)" type="text" size="small">
                            处理
                        </el-button>
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
                    :total="paging.totalPage">
                </el-pagination>
            </div>
        </el-row>
    </div>
</template>
<script lang="babel">
    import {getSysOperationEvents, updateSysOperationEventList} from '../../api/operation'
    import {parseTime} from '../../utils'

    export default {
        data () {
            return {

                eventLevels: [{
                    value: '',
                    label: '全部级别'
                }, {
                    value: 'INFO',
                    label: '正常信息'
                }, {
                    value: 'WARN',
                    label: '报警信息'
                }, {
                    value: 'ERROR',
                    label: '出错信息'
                }],
                levelValue: '',

                eventTypes: [
                    {value: '', label: '全部类型'},
                    {value: 'CW_TRANSFER', label: '超网转账'},
                    {value: 'CW_TRANSFER_ANALYSIS', label: '超网转账对账解析'},
                    {value: 'CW_TRANSFER_GENERATE', label: '超网对账文件生成'},
                    {value: 'CW_TRANSFER_ACCOUNT', label: '超网对账'},
                    {value: 'FILE_USER_ANALYSIS', label: '用户文件解析'},
                    {value: 'FILE_LOAN_ANALYSIS', label: '借据文件解析'},
                    {value: 'FILE_REPAY_ANALYSIS', label: '还款文件解析'},
                    {value: 'FILE_INTEREST_ANALYSIS', label: '日息文件解析'},
                    {value: 'FILE_REPAY_PLAN_ANALYSIS', label: '还款计划文件解析'},
                    {value: 'FILE_LOAN_STATUS_ANALYSIS', label: '贷款状态文件解析'}
                ],
                typeValue: '',

                handleEvents: [{
                    value: '',
                    label: '全部'
                }, {
                    value: 'Y',
                    label: '已处理'
                }, {
                    value: 'N',
                    label: '未处理'
                }],

                searchDate: {
                    is_processed: '',
                    event_time: ''
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
            this.queryEventList({
                page_no: this.paging.currentPage,
                page_size: this.paging.pageSize
            });
        },
        methods: {
            queryEventList (params) {

                params = params ? params : {};

                getSysOperationEvents(params).then(response => {

                    if (response.status === 200 && response.data.code === '0000') {

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
            solveTable (index, row) {
                updateSysOperationEventList(('' + row.id).split(',')).then(response => {

                    if (response.status === 200 && response.data.code === '0000') {

                        this.$message({
                            type: 'info',
                            message: '处理成功'
                        });
                        this.loading = true;

                        this.queryEventList({
                            event_time: this.searchDate.event_time ? parseTime(this.searchDate.event_time, '{y}-{m}-{d}') : '',
                            event_type: this.typeValue,
                            event_level: this.levelValue,
                            is_processed: this.searchDate.is_processed,
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
                    console.log('处理系统运行列表异常');
                    console.log(err);
                });
            },
            search (formName) {
                this.isSearch = true;
                this.tableData = null;
                this.loading = true;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.queryEventList({
                            event_time: this.searchDate.event_time ? parseTime(this.searchDate.event_time, '{y}-{m}-{d}') : '',
                            event_type: this.typeValue,
                            event_level: this.levelValue,
                            is_processed: this.searchDate.is_processed,
                            page_no: this.paging.currentPage,
                            page_size: this.paging.pageSize
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);
                this.paging.pageSize = val;
                this.queryEventList({
                    event_time: this.searchDate.event_time ? parseTime(this.searchDate.event_time, '{y}-{m}-{d}') : '',
                    event_type: this.typeValue,
                    event_level: this.levelValue,
                    is_processed: this.searchDate.is_processed,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);
                this.paging.currentPage = val;
                this.queryEventList({
                    event_time: this.searchDate.event_time ? parseTime(this.searchDate.event_time, '{y}-{m}-{d}') : '',
                    event_type: this.typeValue,
                    event_level: this.levelValue,
                    is_processed: this.searchDate.is_processed,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            }
        }
    }
</script>
<style lang="scss">
    .cc-paginatioin {
        margin-top: 35px;
        text-align: left;
    }
</style>
