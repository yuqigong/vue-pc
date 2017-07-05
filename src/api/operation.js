/**
 * Created by gongyuqi on 2017/6/8.
 */
import fetch from '../utils/fetch';

export const getSysOperationEvents = (data) => {
    return fetch({
        url: '/trade-app/ops/opsRunningEventController/queryOpsRunningEventDOList',
        method: 'post',
        data
    });
};

export const updateSysOperationEventList = (id_list) => {
    const data = {
        id_list
    };
    return fetch({
        url: '/trade-app/ops/opsRunningEventController/updateOpsRunningEventList',
        method: 'post',
        data
    });
};
