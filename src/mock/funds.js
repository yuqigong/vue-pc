/**
 * Created by gongyuqi on 2017/6/11.
 */
import Mock from 'mockjs'

const count = 10;
const funds = [];

for (let i = 0; i < count; i++) {
    funds.push(Mock.mock({
        "actualReceiptAmt": 0,
        "actualReceiptDate": "2017-11-01",
        "confirmStatus": "Y",
        "confirmer": null,
        "creator": "SYSTEM",
        "feeType": "12",
        "feeTypeDesc": "21",
        "gmtConfirmed": 1496918952913,
        "gmtCreated": null,
        "id": 2,
        "paymentAccoutNo": "12",
        "paymentSrcsysCd": "121",
        "paymentSrcsysCdName": "w",
        "receiptAccoutNo": "323",
        "receiptSrcsysCd": "12",
        "receiptSrcsysCdName": "dfd",
        "receivableAmt": 1000,
        "receivableDate": "2017-01-01",
        "remarks": "ss",
        "resvFld1": null,
        "resvFld2": null,
        "srcsysCd": "21",
        "srcsysCdAccountNo": "23",
        "srcsysCdName": "212",
        "tradeNo": "12"
    }));
}

const fundsList = {
    "message": "成功",
    "data": {
        "tableHead": [
            {
                "id": "主键"
            },
            {
                "tradeNo": "交易流水号"
            },
            {
                "feeType": "费用类型"
            },
            {
                "feeTypeDesc": "费用类型描述"
            },
            {
                "srcsysCd": "源系统代码"
            },
            {
                "srcsysCdAccountNo": "源系统账号"
            },
            {
                "srcsysCdName": "源系统名称"
            },
            {
                "receivableDate": "应收日期"
            },
            {
                "receivableAmt": "应收金额"
            },
            {
                "actualReceiptDate": "实收日期"
            },
            {
                "actualReceiptAmt": "实收金额"
            },
            {
                "paymentSrcsysCd": "付款方"
            },
            {
                "paymentAccoutNo": "付款方账号"
            },
            {
                "paymentSrcsysCdName": "付款方名称"
            },
            {
                "receiptSrcsysCd": "收款方"
            },
            {
                "receiptAccoutNo": "收款方账号"
            },
            {
                "receiptSrcsysCdName": "收款方名称"
            },
            {
                "creator": "创建人"
            },
            {
                "gmtCreated": "创建时间"
            },
            {
                "confirmStatus": "确认状态"
            },
            {
                "confirmer": "确认人"
            },
            {
                "gmtConfirmed": "确认时间"
            },
            {
                "remarks": "备注"
            }
        ],
        "page": {
            "totalRecord": funds.length,
            "totalPage": 10
        },
        "currentPageList": funds
    },
    "code": "0000"
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
    getFundsConfirmList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getFundsConfirmList##' + confs);

        if (confs) {
            return fundsList;
        }
        return failure;
    },
    updateFundsConfirmList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##updateFundsConfirmList##' + confs);

        if (confs) {
            return success;
        }
        return failure;
    },
    getFundsLoanList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##updateFundsConfirmList##' + confs);

        if (confs) {
            return fundsList;
        }
        return failure;
    },
    getFundsCheckingList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##updateFundsConfirmList##' + confs);

        if (confs) {
            return fundsList;
        }
        return failure;
    }
}
