/**
 * Created by gongyuqi on 2017/6/11.
 */
import fetch from '../utils/fetch';

export const getCustomerList = (data) => {
    return fetch({
        url: '/trade-app/ops/opsScmsCustController/queryOpsScmsCustDOList',
        method: 'post',
        data
    });
};

export const getCustomerInfo = (id) => {
    const data = {
        id
    };
    return fetch({
        url: '/trade-app/ops/opsScmsCustController/queryOpsScmsCustDetail',
        method: 'post',
        data
    });
};

export const getLoanList = (params) => {
    const data = {
        ln_no: params.ln_no,
        cust_id: params.cust_id,
        srcsys_cd: params.srcsys_cd,
        data_dt: params.data_dt,
        page_no: params.page_no,
        page_size: params.page_size
    };
    return fetch({
        url: '/trade-app/ops/opsScmsLnController/queryOpsScmsLnDOList',
        method: 'post',
        data
    });
};

export const getLoanStatusList = (params) => {
    const data = {
        ln_no: params.ln_no,
        loan_status: params.loan_status,
        srcsys_cd: params.srcsys_cd,
        data_dt: params.data_dt,
        page_no: params.page_no,
        page_size: params.page_size
    };
    return fetch({
        url: '/trade-app/ops/opsScmsStsController/queryOpsScmsStsDOList',
        method: 'post',
        data
    });
};

export const getRefundList = (params) => {
    const data = {
        ln_no: params.ln_no,
        cust_id: params.cust_id,
        srcsys_cd: params.srcsys_cd,
        data_dt: params.data_dt,
        page_no: params.page_no,
        page_size: params.page_size
    };
    return fetch({
        url: '/trade-app/ops/opsScmsRptmController/queryOpsScmsRptmDOListByLn',
        method: 'post',
        data
    });
};

export const getRepaymentList = (data) => {
    //const data = {
    //    ln_no: params.ln_no,
    //    cust_id: params.cust_id,
    //    srcsys_cd: params.srcsys_cd,
    //    data_dt: params.data_dt,
    //    page_no: params.page_no,
    //    page_size: params.page_size
    //};
    return fetch({
        url: '/trade-app/ops/opsScmsRpymSchedController/queryOpsScmsRpymSchedDOListByLn',
        method: 'post',
        data
    });
};

export const getInterestList = (params) => {
    const data = {
        ln_no: params.ln_no,
        cust_id: params.cust_id,
        srcsys_cd: params.srcsys_cd,
        data_dt: params.data_dt,
        page_no: params.page_no,
        page_size: params.page_size
    };
    return fetch({
        url: '/trade-app/ops/opsScmsIntCtController/queryOpsScmsIntCtDOList',
        method: 'post',
        data
    });
};
