/**
 * Created by gongyuqi on 2017/6/9.
 */
import Mock from 'mockjs'

const count = 10;
const event = [];

for (let i = 0; i < count; i++) {
    event.push(Mock.mock({
        eventDesc: '@csentence',
        'eventLevel|1': ['ERROR', 'INFO', 'WARN'],
        eventTime: +Mock.Random.date('T'),
        eventType: "loan_fund_allocation",
        eventTypeDesc: '@csentence',
        id: '@natural(20, 500)',
        'isProcessed|1': ['N', 'Y'],
        'processStatus|1': ['N', 'Y'],
        processTime: +Mock.Random.date('T'),
        processor: '@cname',
        remarks: '@cword(5)',
        resvFld1: null,
        resvFld2: null,
        tradeNo: '@natural(20, 500)'
    }));
}

const eventList = {
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
                "eventType": "事件类型"
            },
            {
                "eventTypeDesc": "事件类型描述"
            },
            {
                "eventDesc": "事件描述"
            },
            {
                "eventLevel": "事件级别"
            },
            {
                "eventTime": "事件插入时间"
            },
            {
                "isProcessed": "是否已处理"
            },
            {
                "processStatus": "处理状态"
            },
            {
                "processor": "处理人"
            },
            {
                "processTime": "处理时间"
            },
            {
                "remarks": "备注"
            }
        ],
        "page": {
            "totalRecord": event.length,
            "totalPage": 10
        },
        "currentPageList": event
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
    getSysOperationEvents: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getSysOperationEvents##' + confs);

        if (confs) {
            return eventList;
        }
        return failure;
    },
    updateSysOperationEvent: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##updateSysOperationEvent##' + confs);

        if (confs.id_list instanceof Array) {
            return success;
        }
        return failure;
    }
}
