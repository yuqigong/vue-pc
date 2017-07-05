<template>
    <div>
        <el-dialog title="资金确认" :visible.sync="dialogFormVisible" :modal-append-to-body="false"
                   @close="closeConfirm('confirmData')">
            <el-form :model="confirmData" ref="confirmData">
                <el-form-item label="对方金额" label-width="100px">
                    <el-input :maxlength="50" v-model="receivable_amt" auto-complete="off"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item
                    label="实际金额"
                    label-width="100px"
                    prop="actual_receipt_amt"
                    :rules="[{ required: true, message: '实际金额不能为空'}]"
                >
                    <el-input :maxlength="50" v-model="confirmData.actual_receipt_amt" auto-complete="off"/>
                </el-form-item>
                <el-form-item label="对方笔数" label-width="100px">
                    <el-input :maxlength="50" v-model="receivable_volume" auto-complete="off"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item
                    label="实收笔数"
                    label-width="100px"
                    prop="actual_receipt_volume"
                    :rules="[{ required: true, message: '实收笔数不能为空'}]"
                >
                    <el-input :maxlength="50" v-model="confirmData.actual_receipt_volume" auto-complete="off"/>
                </el-form-item>
                <el-form-item
                    label="实际日期"
                    label-width="100px"
                    prop="actual_receipt_date"
                    :rules="[{ required: true, message: '实际日期不能为空'}]"
                >
                    <el-date-picker
                        v-model="confirmData.actual_receipt_date"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0"
                    />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm('confirmData')">确 定</el-button>
            </div>
        </el-dialog>

        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="110px">
                <el-form-item
                    label="源系统代码:"
                    prop="srcsys_cd"
                >
                    <el-select v-model="searchDate.srcsys_cd" placeholder="请选择">
                        <el-option
                            v-for="item in channelNo"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    label="实收日期:"
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
                    prop="feeType"
                    width="130"
                    label="费用类型">
                </el-table-column>
                <el-table-column
                    prop="feeTypeDesc"
                    width="130"
                    label="费用类型描述">
                </el-table-column>
                <el-table-column
                    prop="srcsysCd"
                    width="130"
                    label="源系统代码">
                </el-table-column>
                <el-table-column
                    prop="srcsysCdAccountNo"
                    width="130"
                    label="源系统账号">
                </el-table-column>
                <el-table-column
                    prop="srcsysCdName"
                    width="130"
                    label="源系统名称">
                </el-table-column>
                <el-table-column
                    prop="receivableDate"
                    width="130"
                    label="应收日期">
                </el-table-column>
                <el-table-column
                    prop="receivableAmt"
                    width="130"
                    label="应收金额">
                </el-table-column>
                <el-table-column
                    prop="actualReceiptDate"
                    width="130"
                    label="实收日期">
                </el-table-column>
                <el-table-column
                    prop="actualReceiptAmt"
                    width="130"
                    label="实收金额">
                </el-table-column>
                <el-table-column
                    prop="receivableVolume"
                    width="130"
                    label="应收笔数">
                </el-table-column>
                <el-table-column
                    prop="actualReceiptVolume"
                    width="130"
                    label="实收笔数">
                </el-table-column>
                <el-table-column
                    prop="paymentSrcsysCd"
                    label="付款方">
                </el-table-column>
                <el-table-column
                    prop="paymentAccoutNo"
                    width="130"
                    label="付款方账号">
                </el-table-column>
                <el-table-column
                    prop="paymentSrcsysCdName"
                    width="130"
                    label="付款方名称">
                </el-table-column>
                <el-table-column
                    prop="receiptSrcsysCd"
                    label="收款方">
                </el-table-column>
                <el-table-column
                    prop="receiptAccoutNo"
                    width="130"
                    label="收款方账号">
                </el-table-column>
                <el-table-column
                    prop="receiptSrcsysCdName"
                    width="130"
                    label="收款方名称">
                </el-table-column>
                <el-table-column
                    prop="creator"
                    label="创建人">
                </el-table-column>
                <el-table-column
                    prop="gmtCreated"
                    width="130"
                    label="创建时间">
                </el-table-column>
                <el-table-column
                    prop="confirmStatus"
                    width="130"
                    label="确认状态">
                </el-table-column>
                <el-table-column
                    prop="confirmer"
                    label="确认人">
                </el-table-column>
                <el-table-column
                    prop="gmtConfirmed"
                    width="130"
                    label="确认时间">
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
                            确认
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
    import {getFundsConfirmList, updateFundsConfirm} from '../../api/funds'
    import {parseTime} from '../../utils'

    export default {
        data () {
            return {

                searchDate: {
                    srcsys_cd: '',
                    actual_receipt_date_start: '',
                    actual_receipt_date_end: '',
                    payment_srcsys_cd: '',
                    payment_accout_no: '',
                    confirm_status: '',
                    receipt_srcsys_cd: '',
                    receipt_accout_no: ''
                },
                selectDate: null,

                channelNo: [{
                    value: '',
                    label: '全部'
                }, {
                    value: '202',
                    label: '众安保险'
                }],

                tableData: null,
                loading: true,

                paging: {
                    currentPage: 1,
                    pageSize: 10
                },

                dialogFormVisible: false,
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },

                isSearch: false,

                receivable_amt: '',
                receivable_volume: '',

                confirmData: {
                    id: '',
                    actual_receipt_volume: '',
                    actual_receipt_amt: '',
                    actual_receipt_date: ''
                }
            }
        },
        created () {
            this.queryEventList();
        },
        methods: {
            queryEventList (params) {

                params = params ? params : {};

                getFundsConfirmList(params).then(response => {

                    if (response.status === 200 && response.data.code === '0000') {

                        this.tableData = response.data.data.currentPageList.map((row) => {
                            row.gmtConfirmed ? row.gmtConfirmed = parseTime(row.gmtConfirmed, '{y}-{m}-{d}') : '';
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
            search (formName) {
                this.isSearch = true;
                this.tableData = null;
                this.loading = true;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.queryEventList({
                            srcsysCd: this.searchDate.srcsys_cd,
                            actual_receipt_date_start: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                            actual_receipt_date_end: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
                            page_no: this.paging.currentPage,
                            page_size: this.paging.pageSize
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            closeConfirm (formName) {
                this.$refs[formName].resetFields();
            },
            confirm (formName) {

                this.$refs[formName].validate((valid) => {

                    if (valid) {

                        this.dialogFormVisible = false;
                        this.confirmData.actual_receipt_date = parseTime(this.confirmData.actual_receipt_date, '{y}-{m}-{d}');

                        updateFundsConfirm(this.confirmData).then(response => {
                            if (response.status === 200 && response.data.code === '0000') {

                                this.$message({
                                    type: 'info',
                                    message: '处理成功'
                                });

                                this.queryEventList({
                                    srcsysCd: this.searchDate.srcsys_cd,
                                    actual_receipt_date_start: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                                    actual_receipt_date_end: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
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
                    }

                });
            },
            solveTable (index, row) {
                this.dialogFormVisible = true;

                console.log(row);

                this.receivable_amt = row.receivableAmt;
                this.receivable_volume = row.receivableVolume;

                this.confirmData = {
                    id: row.id,
                    actual_receipt_volume: '',
                    actual_receipt_amt: '',
                    actual_receipt_date: ''
                };
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);

                this.paging.pageSize = val;
                this.queryEventList({
                    srcsysCd: this.searchDate.srcsys_cd,
                    actual_receipt_date_start: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                    actual_receipt_date_end: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);

                this.paging.currentPage = val;
                this.queryEventList({
                    srcsysCd: this.searchDate.srcsys_cd,
                    actual_receipt_date_start: this.selectDate ? (this.selectDate[0] ? parseTime(this.selectDate[0], '{y}-{m}-{d}') : '') : '',
                    actual_receipt_date_end: this.selectDate ? (this.selectDate[1] ? parseTime(this.selectDate[1], '{y}-{m}-{d}') : '') : '',
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
