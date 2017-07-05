/**
 * Created by gongyuqi on 2017/6/11.
 */
import fetch from '../utils/fetch';

export const getFundsConfirmList = (params) => {
    const data = params;
    return fetch({
        url: '/trade-app/ops/opsFinanceConfirmController/queryOpsFinanceConfirmDOList',
        method: 'post',
        data
    });
};

export const updateFundsConfirm = (params) => {
    const data = {
        id: params.id,
        actual_receipt_volume: params.actual_receipt_volume,
        actual_receipt_amt: params.actual_receipt_amt,
        actual_receipt_date: params.actual_receipt_date
    };


    return fetch({
        url: '/trade-app/ops/opsFinanceConfirmController/updateOpsFinanceConfirm',
        method: 'post',
        data
    });
};

export const getFundsLoanList = (data) => {
    return fetch({
        url: '/trade-app/ops/opsCwTransferController/queryOpsCwTransferDOList',
        method: 'post',
        data
    });
};

export const getFundsCheckingList = (data) => {
    return fetch({
        url: '/trade-app/ops/opsCwTransferAccountController/queryOpsCwTransferAccountDOList',
        method: 'post',
        data
    });
};
