<template>
    <div>
        <el-row>
            <el-form :inline="true" ref="form" :model="form" label-width="60px">
                <el-form-item
                    label="日期:"
                    prop="name"
                    :rules="[
                        { required: true, message: '账号不能为空'}
                    ]"
                >
                    <el-input v-model="form.name" placeholder="请输入内容" auto-complete="off" icon="search"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="search('form')">查询</el-button>
                </el-form-item>
            </el-form>

        </el-row>
        <el-row>
            <el-table
                :data="tableData"
                fit
                border
                style="width: 100%">
                <el-table-column
                    prop="serialNo"
                    label="序号">
                </el-table-column>
                <el-table-column
                    prop="filename"
                    label="文件名称">
                </el-table-column>
                <el-table-column
                    prop="createDate"
                    label="创建时间">
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template scope="scope">
                        <el-button @click="handleClick" type="text" size="small">下载</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script lang="babel">
    export default {
        data () {
            return {

                form: {
                    name: ''
                },

                tableData: [{
                    serialNo: 1,
                    filename: '2016-05-03_001.zip',
                    createDate: '2016-05-03',
                    state: 1 ? '正常' : '锁定'
                },{
                    serialNo: 2,
                    filename: '2016-05-03_002.zip',
                    createDate: '2016-05-03',
                    state: 1 ? '正常' : '锁定'
                }]
            }
        },
        methods: {
            handleClick () {
                console.log(1);
            },
            search (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
