/**
 * Created by gongyuqi on 2017/6/12.
 */
import fetch from '../utils/fetch';

export const getMerchantsList = (params) => {
    const data = {
        cust_id: params.cust_id,
        cus_nam: params.cus_nam,
        srcsys_cd: params.srcsys_cd,
        id_type: params.id_type,
        id_no: params.id_no,
        page_no: params.page_no,
        page_size: params.page_size
    };
    return fetch({
        url: '/trade-app/ops/opsSrcsysCdController/queryOpsSrcsysCdDOList',
        method: 'post',
        data
    });
};

export const getMerchantsInfo = (id) => {
    const data = {
        id
    };
    return fetch({
        url: '/trade-app/ops/opsSrcsysCdController/queryOpsSrcsysCdDetail',
        method: 'post',
        data
    });
};

export const addMerchants = (params) => {
    const data = {
        srcsys_cd: params.cust_id,
        srcsys_cd_name: params.cus_nam,
        srcsys_cd_total_amount: params.id_type,
        rate: params.id_no,
        rsa_publick_key: params.page_no,
        inner_ftp_host: params.inner_ftp_host,
        inner_ftp_port: params.inner_ftp_port,
        inner_ftp_user: params.inner_ftp_user,
        inner_ftp_pwd: params.inner_ftp_pwd,
        outter_ftp_host: params.outter_ftp_host,
        outter_ftp_port: params.outter_ftp_port,
        outter_ftp_user: params.outter_ftp_user,
        outter_ftp_pwd: params.outter_ftp_pwd,
        dbtr_acct_id: params.dbtr_acct_id,
        dbtr_nm: params.dbtr_nm,
        dbtr_acct_tp: params.dbtr_acct_tp,
        dbtr_issr: params.dbtr_issr,
        dbtr_mmb_id: params.dbtr_mmb_id,
        dbtr_brnch_id: params.dbtr_brnch_id,
        dbtr_ctry_sub_dvsn: params.dbtr_ctry_sub_dvsn,
        remarks: params.remarks
    };
    return fetch({
        url: '/trade-app/ops/opsSrcsysCdController/insertOpsSrcsysCd',
        method: 'post',
        data
    });
};

export const updateMerchants = (params) => {
    const data = {
        id: params.id,
        srcsys_cd_name: params.cus_nam,
        srcsys_cd_total_amount: params.id_type,
        rate: params.id_no,
        rsa_publick_key: params.page_no,
        inner_ftp_host: params.inner_ftp_host,
        inner_ftp_port: params.inner_ftp_port,
        inner_ftp_user: params.inner_ftp_user,
        inner_ftp_pwd: params.inner_ftp_pwd,
        outter_ftp_host: params.outter_ftp_host,
        outter_ftp_port: params.outter_ftp_port,
        outter_ftp_user: params.outter_ftp_user,
        outter_ftp_pwd: params.outter_ftp_pwd,
        dbtr_acct_id: params.dbtr_acct_id,
        dbtr_nm: params.dbtr_nm,
        dbtr_acct_tp: params.dbtr_acct_tp,
        dbtr_issr: params.dbtr_issr,
        dbtr_mmb_id: params.dbtr_mmb_id,
        dbtr_brnch_id: params.dbtr_brnch_id,
        dbtr_ctry_sub_dvsn: params.dbtr_ctry_sub_dvsn,
        remarks: params.remarks
    };
    return fetch({
        url: '/trade-app/ops/opsSrcsysCdController/updateOpsSrcsysCd',
        method: 'post',
        data
    });
};

export const delMerchants = (id_list) => {
    const data = {
        id_list
    };
    return fetch({
        url: '/trade-app/ops/opsSrcsysCdController/deleteOpsSrcsysCdList',
        method: 'post',
        data
    });
};
