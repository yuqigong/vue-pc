/**
 * Created by gongyuqi on 2017/6/11.
 */
import Mock from 'mockjs'

const count = 10;
const [customers, loans, loanstates, refunds, repayments, interests] = [[], [], [], [], [], []];

for (let i = 0; i < count; i++) {
    customers.push(Mock.mock({
        "beginYear": "",
        "birthDt": "1990/6/6",
        "busiBrchId": "1001",
        "cellPhoneNo": "",
        "cityVillageFlg": "1",
        "corpAddress": "",
        "corpNam": "上海某科技公司",
        "corpPhoneNo": "021-1234567",
        "corpPostNo": "",
        "corpTyp": "J",
        "countryName": "",
        "creator": "SYSTEM",
        "custId": "105736841467637",
        "custManUser": "",
        "custNam": "cust_2017/06/08",
        "custPayrightTyp": "10",
        "custSts": "活动客户",
        "custStsMsg": "",
        "dataDt": "2017/06/08",
        "degreeTyp": "4",
        "educationCd": "20",
        "email": "1234567@163.com",
        "gmtCreated": 1498467475000,
        "gmtModified": 1498467475000,
        "homePhoneNo": "",
        "id": 224710,
        "idNo": "231458199001014366",
        "idType": "护照",
        "idTypeMsg": "",
        "incomeYear": 500000,
        "inhabitancyAddress": "上海浦东新区",
        "inhabitancyPostNo": "200100",
        "inhabitancyTyp": "5",
        "inlandorrshoreFlg": "Y",
        "isDeleted": "N",
        "marriageTyp": "未婚",
        "marriageTypMsg": "",
        "mateCorp": "上海咸鱼公司",
        "mateIdNo": "231458199001019037",
        "mateIdType": "0",
        "mateName": "谭某某",
        "matePhoneNo": "15505918888",
        "modifier": "SYSTEM",
        "nationCd": "CHN",
        "nationality": "",
        "orgNum": "1002",
        "political": "",
        "postNo": "200101",
        "postTitles": "0",
        "postTyp": "3",
        "postalAddress": "上海浦东",
        "registerAddress": "上海浦东",
        "salaryAcctNo": "88888",
        "salaryBankNo": "上海工商银行",
        "sexTyp": "男性",
        "sexTypMsg": "",
        "srcsysCd": "众安保险",
        "srcsysCdMsg": "",
        "vocationTyp": "1"
    }));

    loans.push(Mock.mock({
        "acctBrchId": "1002",
        "acctType": "2",
        "accuIntAmt": 0,
        "accuIntFlg": "",
        "agricultureFlg": "N",
        "agricultureLoanFlg": "N",
        "baseIntRat": 0.025,
        "busiBrchId": "1001",
        "businessDt": "20170607",
        "businesstype": "3001",
        "compenFlag": "",
        "creator": "SYSTEM",
        "ctrNo": "21340152504979",
        "currCd": "RMB",
        "custId": "21340152503195",
        "custManagerCo": "1004",
        "custManagerMain": "1003",
        "dataDt": "20170626",
        "drawdownAmt": 2377,
        "drawdownDt": "20170608",
        "earlyPenalRate": 0.001,
        "entrustPayAmt": 0,
        "extendtermFlg": "N",
        "facilityNo": "credit001",
        "fourclassCd": "10",
        "fstOdDate": "",
        "gmtCreated": 1498461469000,
        "gmtModified": 1498461469000,
        "iOdDt": "",
        "id": 106726,
        "independencePayAmt": 1050,
        "insuranceAmt": 1000,
        "insuranceFee": 500,
        "insuranceNo": "21340152506764",
        "intMult": 0,
        "intRateTyp": "F",
        "intRepayFreq": "3",
        "intTeamCal": "2",
        "isDeleted": "N",
        "itemCdInt": "lx001",
        "itemCdOdint": "fx001",
        "itemCdPrin": "bj001",
        "lnAcctBankcd": "上海晨晖支行",
        "lnAcctCity": "上海",
        "lnAcctCode": "2001",
        "lnAcctName": "谭某某",
        "lnAcctNo": "2341567891018421",
        "lnAcctProvince": "上海",
        "lnAcctType": "11",
        "lnNo": "21340152505872",
        "lnTenor": "6M",
        "loanBal": 1050,
        "loanBusinessTyp": "1",
        "loanGradeCd": "1",
        "loanPurposeCd": "",
        "loanStatus": "1",
        "maturityDt": "20171207",
        "modifier": "SYSTEM",
        "nextIntPayDt": "",
        "nextRepricingDt": "",
        "odDays": 0,
        "odFlg": "N",
        "odGraceDays": 30,
        "odInt": 0,
        "odIntObs": 0,
        "odLoanAcctBal": 0,
        "odLoanRate": 0.001,
        "odRate": 0.001,
        "otherFee1": 1,
        "otherFee2": 2,
        "otherFee3": 3,
        "pOdDt": "",
        "pplRepayFreq": "3",
        "realIntRat": 0.025,
        "repaymentType": "1",
        "reschedFlg": "N",
        "reservesTyp": "",
        "secType": "C",
        "securityAmt": 1000,
        "spProvAmt": 1000,
        "specialProvAmt": 500,
        "srcsysCd": "众安保险",
        "srcsysCdMsg": "",
        "supportLoanFlg": "N"
    }));

    refunds.push(Mock.mock({
        "ctrNo": "181090350014302",
        "dataDt": "20170622",
        "lnNo": "181090350015194",
        "payAcctType": "200",
        "payAmt": 900,
        "payIntAmt": 100,
        "payOdAmt": 0,
        "payProperty": "1",
        "payType": "1",
        "repayNo": "181090350016087",
        "repaySeq": 1,
        "repayType": "1",
        "srcsysCd": "未知"
    }));

    repayments.push(Mock.mock({
        "accuInt": 0,
        "ctrNo": "181092586239472",
        "dataDt": "20170622",
        "dueDateInt": "20170707",
        "inIntTaken": 100,
        "intPaid": 0,
        "intRate": 0.025,
        "interest": 0.5,
        "lnNo": "181092586239918",
        "origPrin": 6000,
        "osPpl": 1000,
        "osPplPaid": 0,
        "osPrin": 6000,
        "pintAmt": 0,
        "rateType": "M",
        "repaySeq": 1,
        "setlPint": 0,
        "srcsysCd": "未知"
    }));

    loanstates.push(Mock.mock({
        "chgOffPrin": 0,
        "cpInt": 0,
        "cpPrin": 0,
        "ctrNo": "181092851314439",
        "curOsInt": 0,
        "curOsOdInt": 0,
        "curOsPrin": 0,
        "dataDt": "20170622",
        "lnNo": "181092851314885",
        "loanStatus": "贷款中",
        "origPrin": 1000,
        "osPrin": 1000,
        "payTnr": "0",
        "recvInt": 100,
        "recvNormPrin": 1000,
        "setlInt": 0,
        "setlOdInt": 0,
        "setlPrin": 0,
        "srcsysCd": "未知",
        "unpayTnr": "0"
    }));

    interests.push(Mock.mock({
        "baseDay": 1,
        "businessDt": "20170622",
        "creator": "SYSTEM",
        "dataDt": "20170622",
        "drawdownDt": "20170621",
        "gmtCreated": 1498129674000,
        "gmtModified": 1498129674000,
        "id": 224687,
        "intCount": 0.1,
        "intRate": 0.0005,
        "isDeleted": "N",
        "lnNo": "201706220934303affb",
        "maturityDt": "20170710",
        "modifier": "SYSTEM",
        "origPrin": 200,
        "osPrin": 200,
        "rateType": "D",
        "repayMatyDt": "20170710",
        "repaySeq": 1,
        "repayStartDt": "20170621",
        "repaymentType": "03",
        "srcsysCd": "众安保险",
        "srcsysCdMsg": ""
    }));
}

const customerList = {
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "dataDt": "数据处理日期"
            },
            {
                "custId": "客户ID"
            },
            {
                "custNam": "客户名称"
            },
            {
                "busiBrchId": "管理机构号"
            },
            {
                "orgNum": "机构号"
            },
            {
                "custManUser": "管理客户经理"
            },
            {
                "sexTyp": "性别"
            },
            {
                "birthDt": "出生日期"
            },
            {
                "marriageTyp": "婚姻状况"
            },
            {
                "educationCd": "最高学历"
            },
            {
                "degreeTyp": "最高学位"
            },
            {
                "custSts": "客户状态"
            },
            {
                "nationality": "民族"
            },
            {
                "political": "政治面貌"
            },
            {
                "countryName": "国别名称"
            },
            {
                "cityVillageFlg": "农户标志"
            },
            {
                "inlandorrshoreFlg": "境内境外标志"
            },
            {
                "custPayrightTyp": "客户电子支付权限"
            },
            {
                "idType": "证件类型"
            },
            {
                "idNo": "证件号码"
            },
            {
                "nationCd": "国籍"
            },
            {
                "homePhoneNo": "住宅电话"
            },
            {
                "cellPhoneNo": "手机号码"
            },
            {
                "vocationTyp": "职业"
            },
            {
                "corpNam": "单位名称"
            },
            {
                "corpTyp": "单位所属行业"
            },
            {
                "corpAddress": "单位地址"
            },
            {
                "corpPostNo": "单位地址邮政编码"
            },
            {
                "beginYear": "本单位工作起始年份"
            },
            {
                "postTyp": "职务"
            },
            {
                "postTitles": "职称"
            },
            {
                "incomeYear": "年收入"
            },
            {
                "salaryAcctNo": "工资账号"
            },
            {
                "salaryBankNo": "工资账户开户银行"
            },
            {
                "inhabitancyAddress": "居住地址"
            },
            {
                "inhabitancyPostNo": "居住地址邮政编码"
            },
            {
                "inhabitancyTyp": "居住状况"
            },
            {
                "corpPhoneNo": "单位电话"
            },
            {
                "email": "电子邮箱"
            },
            {
                "postalAddress": "通讯地址"
            },
            {
                "postNo": "通讯地址邮政编码"
            },
            {
                "registerAddress": "户籍地址"
            },
            {
                "mateName": "配偶姓名"
            },
            {
                "mateIdType": "配偶证件类型"
            },
            {
                "mateIdNo": "配偶证件号码"
            },
            {
                "mateCorp": "配偶工作单位"
            },
            {
                "matePhoneNo": "配偶联系电话"
            },
            {
                "srcsysCd": "源系统代码"
            }
        ],
        "page": {
            "totalRecord": 12,
            "totalPage": 2
        },
        "currentPageList": customers
    },
    "message": "成功"
};

const loanList = {
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "dataDt": "数据处理日期"
            },
            {
                "custId": "客户id"
            },
            {
                "ctrNo": "合同号"
            },
            {
                "lnNo": "贷款编号"
            },
            {
                "drawdownAmt": "放款金额"
            },
            {
                "drawdownDt": "放款日期"
            },
            {
                "maturityDt": "到期日期"
            },
            {
                "lnTenor": "贷款期限"
            },
            {
                "loanStatus": "贷款状态"
            },
            {
                "loanBusinessTyp": "贷款类型"
            },
            {
                "repaymentType": "还款方式"
            },
            {
                "lnAcctType": "放款账户类型"
            },
            {
                "srcsysCd": "源系统代码"
            }
        ],
        "page": {
            "totalRecord": 7,
            "totalPage": 1
        },
        "totalAmount": {
            "drawdownAmtTxt": "放款总额",
            "drawdownAmt": 20794
        },
        "currentPageList": loans
    },
    "message": "成功"
};

const refundList = {
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "dataDt": "数据处理日期"
            },
            {
                "ctrNo": "合同号"
            },
            {
                "lnNo": "贷款编号"
            },
            {
                "repayNo": "还款流水号或理赔流水号"
            },
            {
                "repayType": "还款类型"
            },
            {
                "repaySeq": "还款期数"
            },
            {
                "payType": "还款方式"
            },
            {
                "payProperty": "还款性质"
            },
            {
                "payAmt": "本金金额"
            },
            {
                "payIntAmt": "利息金额"
            },
            {
                "payOdAmt": "罚息金额"
            },
            {
                "payAcctType": "还款账户类型"
            },
            {
                "srcsysCd": "源系统代码"
            }
        ],
        "page": {
            "totalRecord": 319,
            "totalPage": 32
        },
        "totalAmount": {
            "totalAmountNum": 305646.41,
            "totalAmountTxt": "实偿本金+实偿利息+实偿罚息总额"
        },
        "currentPageList": refunds
    },
    "message": "成功"
};

const repaymentList = {
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "dataDt": "数据处理日期"
            },
            {
                "ctrNo": "合同号"
            },
            {
                "lnNo": "贷款编号"
            },
            {
                "rateType": "利率类型"
            },
            {
                "intRate": "执行利率"
            },
            {
                "repaySeq": "还款期数"
            },
            {
                "osPpl": "本金"
            },
            {
                "osPplPaid": "归还本金"
            },
            {
                "dueDateInt": "利息到期日"
            },
            {
                "interest": "利息"
            },
            {
                "intPaid": "归还利息"
            },
            {
                "pintAmt": "累计罚息"
            },
            {
                "setlPint": "已还罚息"
            },
            {
                "accuInt": "应计利息"
            },
            {
                "inIntTaken": "利息收入"
            },
            {
                "origPrin": "贷款原始本金"
            },
            {
                "osPrin": "贷款剩余本金"
            },
            {
                "srcsysCd": "源系统代码"
            }
        ],
        "page": {
            "totalRecord": 233,
            "totalPage": 24
        },
        "currentPageList": repayments
    },
    "message": "成功"
};

const loanstatusList = {
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "dataDt": "数据处理日期"
            },
            {
                "ctrNo": "合同号"
            },
            {
                "lnNo": "贷款编号"
            },
            {
                "payTnr": "已还期数"
            },
            {
                "unpayTnr": "拖欠期数"
            },
            {
                "origPrin": "贷款本金"
            },
            {
                "osPrin": "贷款剩余本金"
            },
            {
                "recvNormPrin": "应收正常本金"
            },
            {
                "setlPrin": "实收本金"
            },
            {
                "recvInt": "应收利息"
            },
            {
                "setlInt": "实收利息"
            },
            {
                "curOsPrin": "累计欠本"
            },
            {
                "curOsInt": "累计欠息"
            },
            {
                "curOsodInt": "应收罚息"
            },
            {
                "setlOdInt": "实收罚息"
            },
            {
                "loanStatus": "贷款状态"
            },
            {
                "cpPrin": "代偿本金"
            },
            {
                "cpInt": "代偿利息"
            },
            {
                "chgOffPrin": "核销金额"
            },
            {
                "srcsysCd": "源系统代码"
            }
        ],
        "page": {
            "totalRecord": 118,
            "totalPage": 12
        },
        "currentPageList": loanstates
    },
    "message": "成功"
};

const interestList = {
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "dataDt": "数据处理日期"
            },
            {
                "lnNo": "贷款编号"
            },
            {
                "drawdownDt": "放款日期"
            },
            {
                "maturityDt": "到期日期"
            },
            {
                "repaySeq": "还款期数"
            },
            {
                "repayStartDt": "本期起始日期"
            },
            {
                "repayMatyDt": "本期到期日期"
            },
            {
                "origPrin": "贷款本金"
            },
            {
                "osPrin": "贷款剩余本金"
            },
            {
                "intRate": "执行利率"
            },
            {
                "rateType": "利率类型"
            },
            {
                "baseDay": "基准天数"
            },
            {
                "intCount": "计提利息"
            },
            {
                "repaymentType": "还款方式"
            },
            {
                "srcsysCd": "源系统代码"
            }
        ],
        "page": {
            "totalRecord": 15,
            "totalPage": 2
        },
        "totalAmount": {
            "intCountTxt": "计提利息总额",
            "intCount": 1.5
        },
        "currentPageList": interests
    },
    "message": "成功"
};

const success = {
    "message": "成功",
    "code": "0000",
    "data": {}
};

const failure = {
    "message": "失败",
    "code": "9999",
    "data": ""
};

export default {
    getCustomerList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getCustomerList##' + confs);

        if (confs) {
            return customerList;
        }
        return failure;
    },
    getCustomerInfo: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getCustomerInfo##' + confs);

        if (confs) {
            return success;
        }
        return failure;
    },
    getLoanList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getLoanList##' + confs);

        if (confs) {
            return loanList;
        }
        return failure;
    },
    getLoanStatusList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getLoanStatusList##' + confs);

        if (confs) {
            return loanstatusList;
        }
        return failure;
    },
    getRefundList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getRefundList##' + confs);

        if (confs) {
            return refundList;
        }
        return failure;
    },
    getRepaymentList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getRepaymentList##' + confs);

        if (confs) {
            return repaymentList;
        }
        return failure;
    },
    getInterestList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getInterestList##' + confs);

        if (confs) {
            return interestList;
        }
        return failure;
    }
}
