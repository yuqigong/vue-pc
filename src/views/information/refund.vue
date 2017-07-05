<template>
    <div>
        <el-row>
            <el-form :inline="true" ref="searchDate" :model="searchDate" label-width="110px">
                <el-form-item
                    label="贷款编号:"
                    prop="ln_no"
                >
                    <el-input :maxlength="50" v-model="searchDate.ln_no" placeholder="请输入内容" auto-complete="off" icon="search"/>
                </el-form-item>
                <el-form-item
                    label="数据处理日期:"
                    prop="data_dt"
                >
                    <el-date-picker
                        v-model="searchDate.data_dt"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
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
                    width="60"
                    align="center">
                </el-table-column>
                <el-table-column :key='index' v-for='(head,index) in tableHead' :label="head.name" :prop="head.key"
                                 :width="head.width">
                </el-table-column>
                <!--<el-table-column-->
                    <!--fixed="right"-->
                    <!--label="操作">-->
                    <!--<template scope="scope">-->
                        <!--<el-button @click="viewTable(scope.$index, scope.row)" type="text" size="small">详情</el-button>-->
                    <!--</template>-->
                <!--</el-table-column>-->
            </el-table>
            <p v-if="totalAmount">{{totalAmount.totalAmountTxt}}: {{totalAmount.totalAmountNum}}</p>
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
    import {getRefundList} from '../../api/information'
    import {parseTime} from '../../utils'
    import _ from 'lodash'

    export default {
        data () {
            return {
                paraUser: null,

                isEdit: false,

                isSearch: false,

                searchDate: {
                    ln_no: '',
                    data_dt: '',
                    srcsys_cd: ''
                },

                channelNo: [{
                    value: '',
                    label: '全部'
                }, {
                    value: '202',
                    label: '众安保险'
                }],

                tableData: null,
                tableHead: null,
                loading: true,

                paging: {
                    currentPage: 1,
                    pageSize: 10
                },

                totalAmount: null
            }
        },
        created () {
            if (this.$route.query.lnNo) {
                this.queryRefundList({
                    ln_no: this.$route.query.lnNo,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                });
                this.searchDate.ln_no = this.$route.query.lnNo;
                this.$router.replace(this.$route.path);
            } else {
                this.queryRefundList({
                    data_dt: parseTime(new Date(), '{y}-{m}-{d}'),
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                });
                this.searchDate.data_dt = new Date();
            }
        },
        methods: {
            queryRefundList (params) {

                params = params ? params : {};

                getRefundList(params).then(response => {

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

                        this.totalAmount = response.data.data.totalAmount ? response.data.data.totalAmount : null;
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
                        this.queryRefundList({
                            ln_no: this.searchDate.ln_no,
                            data_dt: this.searchDate.data_dt ? parseTime(this.searchDate.data_dt, '{y}-{m}-{d}') : '',
                            srcsys_cd: this.searchDate.srcsys_cd,
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
                this.queryRefundList({
                    ln_no: this.searchDate.ln_no,
                    data_dt: this.searchDate.data_dt ? parseTime(this.searchDate.data_dt, '{y}-{m}-{d}') : '',
                    srcsys_cd: this.searchDate.srcsys_cd,
                    page_no: this.paging.currentPage,
                    page_size: this.paging.pageSize
                })
            },
            handleCurrentChange (val) {
                console.log(`当前页: ${val}`);
                this.paging.currentPage = val;
                this.queryRefundList({
                    ln_no: this.searchDate.ln_no,
                    data_dt: this.searchDate.data_dt ? parseTime(this.searchDate.data_dt, '{y}-{m}-{d}') : '',
                    srcsys_cd: this.searchDate.srcsys_cd,
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
