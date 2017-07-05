/**
 * Created by gongyuqi on 2017/6/11.
 */
import Mock from 'mockjs'

const count = 10;
const merchants = [];

for (let i = 0; i < count; i++) {
    merchants.push(Mock.mock({
        "creator": "SYSTEM",
        "dbtrAcctId": "dbAcctId",
        "dbtrAcctTp": "tp",
        "dbtrBrnchId": "branchid",
        "dbtrCtrySubDvsn": "sub",
        "dbtrIssr": "issr",
        "dbtrMmbId": "mmbid",
        "dbtrNm": "name",
        "gmtCreated": 1496932362324,
        "gmtModified": 1496932878612,
        "id": 1064,
        "innerFtpHost": "192.168.14.3",
        "innerFtpPort": 21,
        "innerFtpPwd": "password",
        "innerFtpUser": "innerFtpUser",
        "modifier": "admin",
        "outterFtpHost": "192.168.14.2",
        "outterFtpPort": 22,
        "outterFtpPwd": "root",
        "outterFtpUser": "root",
        "rate": 0.07,
        "remarks": "我可以测试一下吗",
        "resvFld1": "不行",
        "resvFld2": "算了，你还是测试一下吧112",
        "rsaPublickKey": "MbF7",
        "srcsysCd": "1121",
        "srcsysCdName": "小众，不一样的",
        "srcsysCdTotalAmount": 9999
    }));
}

const merchantsList = {
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "id": "主键"
            },
            {
                "srcsysCd": "商户号"
            },
            {
                "srcsysCdName": "商户名称"
            },
            {
                "srcsysCdTotalAmount": "商户总额度"
            },
            {
                "rate": "年化利率"
            },
            {
                "rsaPublickKey": "商户RSA公钥"
            },
            {
                "innerFtpHost": "内网FTP服务器地址"
            },
            {
                "innerFtpPort": "内网FTP服务器端口"
            },
            {
                "innerFtpUser": "内网FTP服务器用户名"
            },
            {
                "innerFtpPwd": "内网FTP服务器密码"
            },
            {
                "outterFtpHost": "外网FTP服务器地址"
            },
            {
                "outterFtpPort": "外网FTP服务器端口"
            },
            {
                "outterFtpUser": "外网FTP服务器用户名"
            },
            {
                "outterFtpPwd": "外网FTP服务器密码"
            },
            {
                "dbtrAcctId": "付款人账号"
            },
            {
                "dbtrNm": "付款人户名"
            },
            {
                "dbtrAcctTp": "付款人账户类型"
            },
            {
                "dbtrIssr": "付款人开户行名称"
            },
            {
                "dbtrMmbId": "付款清算行行号"
            },
            {
                "dbtrBrnchId": "付款人开户行所属网银系统行号"
            },
            {
                "dbtrCtrySubDvsn": "付款人开户行所属城市代码"
            },
            {
                "creator": "创建人"
            },
            {
                "gmtCreated": "创建时间"
            },
            {
                "modifier": "修改人"
            },
            {
                "gmtModified": "修改时间"
            },
            {
                "remarks": "备注"
            }
        ],
        "page": {
            "totalRecord": merchants.length,
            "totalPage": 10
        },
        "currentPageList": merchants
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
    getMerchantsList : (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getMerchantsList##' + confs);

        if (confs) {
            return merchantsList;
        }
        return failure;
    }
}
